namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Review;
use App\Models\Reservation;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    /**
     * Store a new review.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'service_id' => 'required|exists:services,id',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string|max:1000',
        ]);

        // Constraint: User must have a CONFIRMED reservation for this service
        // and the travel_date must be in the past.
        $reservation = Reservation::where('user_id', $request->user()->id)
            ->where('service_id', $validated['service_id'])
            ->where('status', 'confirmed')
            ->where('travel_date', '<', now()->toDateString())
            ->first();

        if (!$reservation) {
            return response()->json([
                'message' => 'You can only review services you have actually completed.'
            ], 403);
        }

        // Prevent duplicates (though unique index also handles this)
        $existingReview = Review::where('user_id', $request->user()->id)
            ->where('service_id', $validated['service_id'])
            ->first();

        if ($existingReview) {
            return response()->json([
                'message' => 'You have already reviewed this service.'
            ], 409);
        }

        $review = Review::create([
            'user_id' => $request->user()->id,
            'service_id' => $validated['service_id'],
            'rating' => $validated['rating'],
            'comment' => $validated['comment'],
            'is_approved' => false, // Needs moderation
        ]);

        return response()->json([
            'message' => 'Review submitted and pending approval.',
            'review' => $review
        ], 201);
    }
}
