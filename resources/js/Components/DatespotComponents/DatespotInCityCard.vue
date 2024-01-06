<script>
export default {
	name: "DatespotInCityCard",
	props: {
		city: Object,
	},
	methods: {
		navigateToCity(cityName) {
			this.$inertia.visit(route('user-datespot.filter-by-location', cityName));
		},
	},
}
</script>

<template>
	<div @click="navigateToCity(city.name)" class="group relative cursor-pointer">
		<div
				class="rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:bg-white hover:bg-opacity-50 hover:scale-105">
			<img :src="city.imageSrc" :alt="city.altText"/>
		</div>

	</div>
</template>

<style scoped>

</style>