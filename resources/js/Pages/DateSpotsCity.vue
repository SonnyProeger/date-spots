<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import DateSpotCard from "@/Components/DateSpotCard.vue";

export default {
	name: "DateSpotsCity",
	components: {DateSpotCard, NewAppLayout},
	data() {
		return {
			isFilterVisible: false,
		}
	},
	props: {
		dateSpots: Object,
		city: String,
	},
	methods: {
		toggleFilter() {
			// Toggle the visibility of the filter
			this.isFilterVisible = !this.isFilterVisible;
		},
		saveAndCloseFilter() {
			// Add logic to save filter options if needed
			// For now, just close the filter
			this.toggleFilter();
		},
	}

}
</script>

<template>
	<NewAppLayout>
		<div class="md:container md:mx-auto md:flex">
			<!-- Filter Desktop -->
			<div class="hidden md:block w-1/4 p-4 bg-gray-100">

				<!-- Settings options -->
				<h2 class="text-lg font-semibold mb-4">Settings</h2>

				<!-- Example settings -->
				<label for="setting-1">Setting 1</label>
				<input id="setting-1" type="checkbox" v-model="setting1">
				<!-- Add more settings as needed -->

			</div>

			<!--Filter Mobile-->
			<div class="block md:hidden">
				<!-- Filter Button -->
				<button @click="toggleFilter"
				        class="w-full bg-roseGold text-white px-4 py-2 rounded flex items-center justify-center">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
					     stroke="currentColor" class="w-6 h-6 mr-2">
						<path stroke-linecap="round" stroke-linejoin="round"
						      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/>
					</svg>
					Filter
				</button>
			</div>

			<!-- Filter Content (Hidden by default) -->
			<div v-show="isFilterVisible"
			     class="absolute top-0 left-0 h-full w-full bg-white flex flex-col space-y-12">
				<!--				small x on the top right-->
				<div class="absolute top-2 right-2 p-2" @click="toggleFilter">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
					     stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round"
						      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
					</svg>
				</div>

				<div class="bg-white rounded">
					<!-- Filter options and controls -->
					<p class="pl-4 text-lg font-bold">Filters</p>
					<hr class="w-full m-2">
					<div class="pl-6">
						<p class="text-md font-semibold">Categories</p>
						<hr class="w-full m-2">

						<!-- Add your filter controls and options here -->
						<!-- For example: -->
						<label>
							<input type="checkbox" v-model="filterOption1"> Option 1
						</label>
						<label>
							<input type="checkbox" v-model="filterOption2"> Option 2
						</label>
						<!-- Add more filter options as needed -->

						<!-- Save and Close buttons -->
						<div class="mt-4 flex justify-between">
							<button @click="saveAndCloseFilter" class="bg-green-500 text-white px-3 py-1 rounded">
								Save and Close
							</button>
							<button @click="toggleFilter" class="bg-red-500 text-white px-3 py-1 rounded">
								Close without Saving
							</button>
						</div>
					</div>
				</div>
			</div>

			<div class="w-full md:w-3/4 p-4 md:pl-0">
				<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
					<DateSpotCard
							v-for="dateSpot in dateSpots"
							:key="dateSpot.id"
							:date-spot-type="dateSpot.types"
							:date-spot-id="dateSpot.id"
							:date-spot-name="dateSpot.name"
							:date-spot-tagline="dateSpot.tagline"
							:image-src="dateSpot.photo_url"
							:city="dateSpot.city"
							:rating="dateSpot.rating"
							:reviews-count="dateSpot.reviews_count"
					></DateSpotCard>
				</div>
			</div>
		</div>
	</NewAppLayout>
</template>

<style scoped>

</style>