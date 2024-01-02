<script>
import {DatespotDetailMixin} from "@/mixins/DatespotMixin.js";
import ReviewHeartRating from "@/Components/UserReviewComponents/ReviewHeartRating.vue";
import ReviewDateSelector from "@/Components/UserReviewComponents/ReviewDateSelector.vue";
import ReviewTitleInput from "@/Components/UserReviewComponents/ReviewTitleInput.vue";
import ReviewTextAreaInput from "@/Components/UserReviewComponents/ReviewTextAreaInput.vue";

export default {
	name: "SpecialOccasionsReview",
	components: {ReviewTextAreaInput, ReviewTitleInput, ReviewDateSelector, ReviewHeartRating},
	props: {
		datespot: Object,
	},
	mixins: [DatespotDetailMixin],

}
</script>

<template>
	<div class="flex min-h-screen">
		<div class="w-2/3 border-r border-gray-300 p-4 space-y-8">
			<div>
				<ReviewHeartRating></ReviewHeartRating>
			</div>
			<div>
				<ReviewDateSelector></ReviewDateSelector>
			</div>
			<div>
				<ReviewTitleInput></ReviewTitleInput>
			</div>
			<div>
				<ReviewTextAreaInput></ReviewTextAreaInput>
			</div>
		</div>

		<div class="w-1/3 p-4">
			<!-- Sticky content -->
			<div class="sticky top-0 h-screen">
				<h1 class="text-5xl font-semibold mb-8">How was your date?</h1>
				<div class="bg-white shadow-md rounded-lg overflow-hidden">
					<!-- Image -->
					<img :src="datespot.first_media_item" alt="Date spot image" class="w-full h-40 object-cover object-center">
					<div class="p-4">
						<!-- Title -->
						<h1 class="text-xl font-semibold mb-2">{{ datespot.name }}</h1>
						<!-- Address -->
						<p class="text-gray-600 mb-2">{{ formattedAddress }}</p>
					</div>
				</div>
			</div>
		</div>

		<!--		questions here-->
	</div>

</template>

<style scoped>

</style>