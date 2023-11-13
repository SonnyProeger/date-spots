<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import DateSpotCard from "@/Components/DateSpotCard.vue";
import DateSpotCityFilter from "@/Components/FilterComponents/DateSpotCityFilter.vue";

export default {
	name: "DateSpotsCity",
	components: {DateSpotCityFilter, DateSpotCard, NewAppLayout},
	created() {
		console.log(this.dateSpots)
	},
	data() {
		return {
			isFilterVisible: false,
			selectedTypes: [],
			selectedCategories: [],
			selectedSubCategories: [],
			showCategories: false,
			showTypes: false,
		}
	},
	props: {
		dateSpots: Object,
		city: String,
		types: Object,
		categories: Object,
		subCategories: Object,
	},
	methods: {
		saveAndCloseFilter() {
			console.log('Selected Types:', this.selectedTypes);
			console.log('Selected Categories:', this.selectedCategories);
			// Add logic to save filter options if needed
			// For now, just close the filter
		},
	}

}
</script>

<template>
	<NewAppLayout>
		<div class="md:container md:mx-auto md:flex gap-4">

			<DateSpotCityFilter
					:types="types"
					:categories="categories"
					:subCategories="subCategories"
					@saveFilter="saveAndCloseFilter"
			/>


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