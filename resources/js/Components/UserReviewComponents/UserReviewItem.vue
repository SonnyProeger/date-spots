<script>
import HeartRatingComponent from "@/Components/DatespotComponents/HeartRatingComponent.vue";
import UserReviewItemHeader from "@/Components/UserReviewComponents/UserReviewItemHeader.vue";

export default {
	name: "UserReviewItem",
	components: {
		UserReviewItemHeader,
		HeartRatingComponent,
	},
	props: {
		review: Object
	}
}
</script>

<template>
	<div class="mb-6">
		<div class="border border-gray-300 rounded-lg p-6">
			<div class="border-b pb-3 mb-3">
				<UserReviewItemHeader :review="this.review"></UserReviewItemHeader>

				<!-- rating-->
				<div class="">
					<HeartRatingComponent :rating="review.rating"></HeartRatingComponent>
				</div>

				<!-- content-->
				<div class="space-y-2">
					<h3 class="text-lg font-semibold hover:underline">{{ review.title }}</h3>

					<p>{{ review.date_visited }}</p>
					<p class="text-gray-700 mb-2">{{ review.content }}</p>
				</div>

				<div class="pt-2">
					<p class="italic text-xs">Written {{ review.created_on }}</p>
				</div>
			</div>
			<div>
				<p class="italic text-xs">This review is the subjective opinion of a Datespots member and not of
					&copy;Datespots</p>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>