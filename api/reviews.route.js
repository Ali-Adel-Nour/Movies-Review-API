const express = require('express');

const ReviewsCtrl = require('./reviewCtrl');

const router = express.Router();

router.route('/movies/:id').get(ReviewsCtrl.apiGetReviews)
router.route("/new").post(ReviewsCtrl.apiPostReview)
router.route("/:id").get(ReviewsCtrl.apiGetReview)
.put(ReviewsCtrl.apiUpdateReview)
.delete(ReviewsCtrl.apiDeleteReview)

module.exports = router;