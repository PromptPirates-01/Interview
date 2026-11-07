from feature_aggregator import (
    calculate_overall_score
)

score = calculate_overall_score(

    fluency_score=85,

    correctness_score=90,

    eye_contact_score=82,

    posture_score=88,

    head_stability_score=91

)

print(
    f"Overall Interview Score: {score}"
)
