<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import DatespotCard from "@/Components/DatespotComponents/DatespotCard.vue";
import DatespotCityFilter from "@/Components/FilterComponents/DatespotCityFilter.vue";
import AddressForm from "@/Components/AddressForm.vue";
import SearchButton from "@/Components/SearchButton.vue";
import HowItWorks from "@/Components/HowItWorks.vue";
import DatespotsInCities from "@/Components/DatespotComponents/DatespotsInCities.vue";
import HeartRatingComponent from "@/Components/DatespotComponents/HeartRatingComponent.vue";
import Hero from "@/Components/Hero.vue";

export default {
	name: "Datespots",
	components: {
		Hero,
		HeartRatingComponent,
		DatespotsInCities,
		HowItWorks,
		SearchButton,
		AddressForm,
		DatespotCityFilter,
		DatespotCard,
		NewAppLayout
	},
	props: {
		datespots: Object,
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
		<DatespotsInCities>

		</DatespotsInCities>

	</NewAppLayout>
</template>

<style scoped>

</style>
