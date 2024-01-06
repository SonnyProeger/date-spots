<script>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {Link} from "@inertiajs/vue3";
import HeartRatingComponent from "@/Components/DatespotComponents/HeartRatingComponent.vue";
import {DatespotMixin} from "@/mixins/DatespotMixin.js";
import ReviewItem from "@/Components/DatespotComponents/DatespotReviewItem.vue";

export default {
	name: "DatespotReviewItem",
	components: {ReviewItem, HeartRatingComponent, PrimaryButton, Link},
	props: {
		reviews: Object,
		datespot: Object,
	},
	mixins: [DatespotMixin],
}

</script>

<template>
	<div class="p-4">
		<div class="flex justify-between">
			<h2 class="text-2xl font-bold mb-4">Reviews ({{ reviews.total }})</h2>
			<Link class="btn-roseGold h-8 w-32 flex items-center justify-center"
			      :href="route('user-review.create', {
							id: this.datespot.id,
						  name: this.formattedDatespotName(this.datespot.name)
						}
					)">
				Write a
				review
			</Link>
		</div>
		<div v-if="reviews.data.length === 0" class="text-gray-600">
			<p>No reviews yet.</p>
		</div>
		<div v-else>
			<ReviewItem v-for="(review, index) in reviews.data" :key="index" :review="review"/>
		</div>
	</div>

</template>

<style scoped>

</style>