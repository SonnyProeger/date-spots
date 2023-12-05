<script>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {Link} from "@inertiajs/vue3";
import HeartRatingComponent from "@/Components/HeartRatingComponent.vue";

export default {
	name: "DatespotReview",
	components: {HeartRatingComponent, PrimaryButton, Link},
	props: {
		reviews: Object,
	},
	created() {
		console.log(this.reviews)
	}
}

</script>

<template>
	<div class="p-4">
		<div class="flex justify-between">
			<h2 class="text-2xl font-bold mb-4">Reviews ({{ reviews.total }})</h2>
			<Link class="btn-roseGold h-8 w-32 flex items-center justify-center" :href="route('reviews.create')">Write a
				review
			</Link>
		</div>
		<div v-if="reviews.data.length === 0" class="text-gray-600">
			<p>No reviews yet.</p>
		</div>
		<div v-else>
			<div v-for="(review, index) in reviews.data" :key="index" class="mb-6">
				<div class="border border-gray-300 rounded-lg p-6">
					<div class="border-b pb-3 mb-3">

						<!-- user info-->
						<div class="flex items-center gap-x-2">
							<div class="rounded-full w-10 h-10 bg-cover bg-center overflow-hidden">
								<img :src="review.user.profile_photo_url" alt="Profile Image" class="w-full h-full object-cover"/>
							</div>
							<p class="font-sans">
								<span class="font-extrabold">{{ review.user.name }}</span> wrote a review {{ review.created_on }}
							</p>
						</div>

						<!-- rating-->
						<div class="py-4">
							<HeartRatingComponent :rating="review.rating"></HeartRatingComponent>
						</div>

						<!-- content-->
						<div>
							<h3 class="text-lg font-semibold mb-2">{{ review.title }}</h3>
							<p class="text-gray-700 mb-2">{{ review.content }}</p>
						</div>

						<div>
							<p><span class="font-extrabold">Date of visit:</span> {{ review.date_visited }}</p>
						</div>
					</div>

					<div>
						<p class="italic text-xs">This review is the subjective opinion of a Datespots member and not of &copy;Datespots</p>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<style scoped>

</style>