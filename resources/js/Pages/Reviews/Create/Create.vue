<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import ReviewDateSelector from "@/Components/UserReviewComponents/ReviewDateSelector.vue";
import ReviewTitleInput from "@/Components/UserReviewComponents/ReviewTitleInput.vue";
import ReviewTextAreaInput from "@/Components/UserReviewComponents/ReviewTextAreaInput.vue";
import ReviewHeartRating from "@/Components/UserReviewComponents/ReviewHeartRating.vue";
import {DatespotDetailMixin} from "@/mixins/DatespotMixin.js";
import LoadingButton from "@/Pages/Admin/Shared/LoadingButton.vue";

export default {
	name: `Create Review`,
	components: {
		LoadingButton,
		ReviewHeartRating,
		ReviewTextAreaInput,
		ReviewTitleInput,
		ReviewDateSelector,
		NewAppLayout
	},
	mixins: [DatespotDetailMixin],
	props: {
		datespot: Object,
	},
	data() {
		return {
			form: this.$inertia.form({
				datespotId: this.datespot.id,
				reviewTitle: '',
				reviewText: '',
				selectedDate: '',
				rating: 0,
			}),
		};
	},
	methods: {
		handleSelectedRating(rating) {
			this.form.rating = rating;
		},
		handleSelectedDate(date) {
			this.form.selectedDate = date;
		},
		handleReviewTitle(title) {
			this.form.reviewTitle = title;
		},
		handleReviewText(text) {
			this.form.reviewText = text;
		},
		submitReview() {
			this.form.post(route('user-review.store', {
				id: this.datespot.id,
				name: this.formattedDatespotName(this.datespot.name)
			}));
		},
	}
}
</script>

<template>
	<NewAppLayout>
		<div class="container mx-auto flex flex-col md:w-4/5">
			<div class="flex min-h-screen">
				<div class="w-2/3 border-r border-gray-300 p-4 space-y-8">
					<form @submit.prevent="submitReview">
						<div>
							<ReviewHeartRating @selected-rating="handleSelectedRating"></ReviewHeartRating>
						</div>
						<div>
							<ReviewDateSelector @selected-month="handleSelectedDate"></ReviewDateSelector>
						</div>
						<div>
							<ReviewTitleInput @selected-review-title="handleReviewTitle"></ReviewTitleInput>
						</div>
						<div>
							<ReviewTextAreaInput @selected-review-text="handleReviewText"></ReviewTextAreaInput>
						</div>
						<div class="flex items-center justify-center px-8 py-4 border-t border-gray-100">
							<loading-button :loading="form.processing" type="submit">Submit Review</loading-button>
						</div>
					</form>
				</div>

				<div class="w-1/3 p-4">
					<!-- Sticky content -->
					<div class="sticky top-0 h-screen">
						<h1 class="text-5xl font-semibold mb-8">How was your date?</h1>
						<div class="bg-white shadow-md rounded-lg overflow-hidden">
							<!-- Image -->
							<img :src="datespot.first_media_item" alt="Date spot image"
							     class="w-full h-40 object-cover object-center">
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
		</div>
	</NewAppLayout>
</template>

<style scoped>

</style>