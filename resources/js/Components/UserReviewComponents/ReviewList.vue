<script>
import ReviewItem from "@/Components/DatespotComponents/DatespotReviewItem.vue";
import UserReviewItem from "@/Components/UserReviewComponents/UserReviewItem.vue";

export default {
	name: "ReviewList",
	components: {UserReviewItem, ReviewItem},
	props: {
		reviews: Object,
	},
}
</script>

<template>
	<div class="bg-white">
		<div class="container mx-auto md:w-4/5">
			<div class="w-2/3 flex flex-col space-y-6 py-6">
				<h1 class="font-extrabold text-2xl"> Your Reviews</h1>

				<div v-if="reviews.data && reviews.data.length">
					<UserReviewItem v-for="review in reviews.data" :key="review.id" :review="review"/>
				</div>
				<div v-else>
					<h1> You have no reviews yet. After you write some reviews, they will appear here.</h1>
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>

</style>