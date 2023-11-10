<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import Hero from "@/Components/Hero.vue";
import DateSpotDetailHeader from "@/Components/DateSpotDetailHeader.vue";
import DateSpotCard from "@/Components/DateSpotCard.vue";
import HeartRatingComponent from "@/Components/HeartRatingComponent.vue";

export default {
	name: "DateSpotDetail",
	components: {HeartRatingComponent, DateSpotCard, Hero, NewAppLayout, DateSpotDetailHeader},
	props: {
		dateSpot: Object,
	},
	created() {
		console.log(this.dateSpot)
	}
}
</script>

<template>
	<NewAppLayout>
		<div class="container mx-auto flex flex-col">
			<DateSpotDetailHeader
					:date-spot="dateSpot"
			></DateSpotDetailHeader>
			<div class="min-h-screen flex flex-col">
				<div class="h-1/4 pb-4 pt-4">
					<!-- Right Card - Pictures -->
					<div class="flex flex-row gap-0.5">
						<!-- Main Picture -->
						<img src="https://placehold.co/600x400" alt="Main Picture" class="w-1/3 h-64 object-cover">
						<img src="https://placehold.co/600x400" alt="Main Picture" class="w-1/3 h-64 object-cover">
						<img src="https://placehold.co/600x400" alt="Main Picture" class="w-1/3 h-64 object-cover">
					</div>
				</div>
				<div class="h-1/4">
					<div class="flex flex-row gap-3.5">
						<!-- Card 1 -->
						<div class="w-1/3 object-cover bg-white p-4">
							<!-- Content for Card 1 -->
							<p class="font-semibold">Reviews and Ratings:</p>

							<!-- Review Score -->
							<div class="text-4xl font-bold">{{ dateSpot.rating }}</div>
							<!-- Hearts and Review Count -->
							<div class="flex items-center mt-2">
								<heart-rating-component
										:rating="dateSpot.rating"
								>

								</heart-rating-component>
								<span class="ml-1">1,111 reviews</span>
							</div>
							<!-- Ranking -->
							<div class="text-gray-600 mt-2">#1 of 1,111 Date Spots</div>
							<hr class="my-4 border-gray-200">
							<!-- Review Subcategories -->
							<div>
								<p class="font-semibold">Ratings:</p>
								<ul>
									<li>Atmosphere</li>
									<li>Value</li>
									<li>Service</li>
									<!-- Add more subcategories as needed -->
								</ul>
							</div>
						</div>

						<!-- Card 2 -->
						<div class="bg-white object-cover w-1/3 p-4">
							<!-- Content for Card 2 -->
							<h2 class="text-lg font-semibold">Card 2</h2>
							<p>Content for Card 2 goes here.</p>
						</div>

						<!-- Card 3 -->
						<div class="bg-white object-cover w-1/3 p-4">
							<!-- Content for Card 3 -->
							<h2 class="text-lg font-semibold">Card 3</h2>
							<p>Content for Card 3 goes here.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</NewAppLayout>
</template>

<style scoped>

</style>
