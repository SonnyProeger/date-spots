<script>

import DatespotInCityCard from "@/Components/DatespotComponents/DatespotInCityCard.vue";

export default {
	name: "DatespotsInCities",
	components: {DatespotInCityCard},
	data() {
		return {
			cities: [
				{
					name: "Amsterdam",
					imageSrc: "https://datespotsbucket.s3.eu-central-1.amazonaws.com/media/DatespotCities/Amsterdam.png",
					altText: "Amsterdam Image",
				},
				{
					name: "Den Haag",
					imageSrc: "https://datespotsbucket.s3.eu-central-1.amazonaws.com/media/DatespotCities/Den+Haag.png",
					altText: "Den Haag Image",
				},
				{
					name: "Rotterdam",
					imageSrc: "https://datespotsbucket.s3.eu-central-1.amazonaws.com/media/DatespotCities/Rotterdam.png",
					altText: "Rotterdam Image",
				},
				{
					name: "Utrecht",
					imageSrc: "https://datespotsbucket.s3.eu-central-1.amazonaws.com/media/DatespotCities/Utrecht.png",
					altText: "Utrecht Image",
				},
				// Add other cities
			],
		};
	},
	methods: {
		goToAllCities() {
		},
	},
}
</script>

<template>
	<div class="py-6 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-0 md:container md:w-4/5">
			<div class="flex justify-between">
				<h2 class="text-lg md:text-3xl font-extrabold text-gray-900">Datespots in top destinations</h2>
				<p @click="goToAllCities" class="text-lg text-gray-900 cursor-pointer">See All</p>
			</div>
			<div class="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4">
				<DatespotInCityCard v-for="city in cities" :key="city.name" :city="city"/>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>