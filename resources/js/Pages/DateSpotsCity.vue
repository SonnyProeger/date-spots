<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import DateSpotCard from "@/Components/DateSpotCard.vue";
import DateSpotCityFilter from "@/Components/FilterComponents/DateSpotCityFilter.vue";
import {router} from '@inertiajs/vue3'


export default {
	name: "DateSpotsCity",
	components: {DateSpotCityFilter, DateSpotCard, NewAppLayout},
	props: {
		dateSpots: Object,
		city: String,
		types: Object,
		categories: Object,
		subcategories: Object,
	},
	methods: {
		saveAndCloseFilter(types, categories, subcategories) {
			const filterData = {
				selectedTypes: types,
				selectedCategories: categories,
				selectedSubcategories: subcategories,
			};

			router.post(`/date-spots/${this.$route.query.city}`, filterData)
		},
	},
	updated() {
		console.log(this.dateSpots)
	},
	computed: {
		noDateSpots: function () {
			return Object.keys(this.dateSpots).length === 0;
		}
	}

}
</script>

<template>
	<NewAppLayout>
		<div class="md:container md:mx-auto md:flex gap-4">

			<DateSpotCityFilter
					:city="city"
					:types="types"
					:categories="categories"
					:subcategories="subcategories"
			/>


			<div class="w-full md:w-3/4 p-4 md:pl-0">
				<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
					<div v-if="noDateSpots">
						<p>Sorry, we don't have any Date Spots in {{ city }} for that.. yet!</p>
					</div>
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