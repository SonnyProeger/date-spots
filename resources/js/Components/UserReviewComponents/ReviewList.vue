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
				<div v-for="review in this.reviews.data">
					<UserReviewItem :review="review"/>
				</div>
			</div>
		</div>
	</div>

</template>

<style scoped>

</style>