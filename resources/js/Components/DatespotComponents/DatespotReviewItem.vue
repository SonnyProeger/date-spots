<script>
import HeartRatingComponent from "@/Components/DatespotComponents/HeartRatingComponent.vue";

export default {
	name: "ReviewItem",
	components: {
		HeartRatingComponent
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
				<p class="italic text-xs">This review is the subjective opinion of a Datespots member and not of
					&copy;Datespots</p>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>