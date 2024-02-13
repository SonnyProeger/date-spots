<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import DatespotCard from "@/Components/DatespotComponents/DatespotCard.vue";
import DatespotCityFilter from "@/Components/FilterComponents/DatespotCityFilter.vue";
import {router} from '@inertiajs/vue3'


export default {
	name: "DatespotsCity",
	components: {DatespotCityFilter, DatespotCard, NewAppLayout},
	props: {
		datespots: Object,
		city: String,
		types: Object,
	},
	methods: {
		saveAndCloseFilter(types, categories, subcategories) {
			const filterData = {
				selectedTypes: types,
				selectedCategories: categories,
				selectedSubcategories: subcategories,
			};
			router.post(route(`/datespots/${this.$route.query.city}`), filterData)
		},
	},
	computed: {
		noDatespots: function () {
			return Object.keys(this.datespots).length === 0;
		}
	}

}
</script>

<template>
	<NewAppLayout>
		<div class="md:container md:mx-auto md:flex gap-4 md:w-4/5">

			<DatespotCityFilter
					:city="city"
					:types="types"
			/>

			<div class="w-full md:w-3/4 p-4 md:pl-0">
				<div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
					<div v-if="noDatespots">
						<p>Sorry, we don't have any Datespots in {{ city }} for that.. yet!</p>
					</div>
					<DatespotCard
							v-for="datespot in datespots"
							:key="datespot.id"
							:datespot-type="datespot.types"
							:datespot-id="datespot.id"
							:datespot-name="datespot.name"
							:datespot-tagline="datespot.tagline"
							:image-src="datespot.cover_image"
							:city="datespot.city"
							:rating="datespot.rating"
							:reviews-count="datespot.reviews_count"
					></DatespotCard>
				</div>
			</div>
		</div>
	</NewAppLayout>
</template>

<style scoped>

</style>