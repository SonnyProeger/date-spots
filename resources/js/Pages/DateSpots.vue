<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import DateSpotCard from "@/Components/DateSpotCard.vue";
import DateSpotCityFilter from "@/Components/FilterComponents/DateSpotCityFilter.vue";
import AddressForm from "@/Components/AddressForm.vue";
import SearchButton from "@/Components/SearchButton.vue";
import HowItWorks from "@/Components/HowItWorks.vue";
import DateSpotsInCities from "@/Components/DateSpotsInCities.vue";
import HeartRatingComponent from "@/Components/HeartRatingComponent.vue";
import Hero from "@/Components/Hero.vue";

export default {
	name: "DateSpots",
	components: {
		Hero,
		HeartRatingComponent,
		DateSpotsInCities,
		HowItWorks,
		SearchButton,
		AddressForm,
		DateSpotCityFilter,
		DateSpotCard,
		NewAppLayout
	},
	props: {
		dateSpots: Object,
		categories: Object,
		subcategories: Object,
	},
}
</script>

<template>
	<NewAppLayout>
		<Hero>

		</Hero>
		<HowItWorks class="hidden md:block">

		</HowItWorks>
		<date-spots-in-cities>

		</date-spots-in-cities>

	</NewAppLayout>
</template>

<style scoped>

</style>
