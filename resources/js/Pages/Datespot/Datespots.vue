<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import DatespotCard from "@/Components/DatespotComponents/DatespotCard.vue";
import DatespotCityFilter from "@/Components/FilterComponents/DatespotCityFilter.vue";
import AddressForm from "@/Components/AddressForm.vue";
import SearchButton from "@/Components/DatespotComponents/SearchButton.vue";
import HowItWorks from "@/Components/HowItWorks.vue";
import DatespotsInCities from "@/Components/DatespotComponents/DatespotsInCities.vue";
import HeartRatingComponent from "@/Components/DatespotComponents/HeartRatingComponent.vue";
import Hero from "@/Components/DatespotHero.vue";

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
		cities: Array,
		types: Object,
	},
}
</script>

<template>
	<NewAppLayout>
		<div class="flex flex-col w-full">
			<Hero>

			</Hero>
			<HowItWorks class="hidden md:block">

			</HowItWorks>
			<DatespotsInCities>

			</DatespotsInCities>
		</div>
	</NewAppLayout>
</template>

<style scoped>

</style>
