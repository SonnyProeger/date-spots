<script>
export default {
	name: "SearchButton",
	props: {
		location: Object,
	},
	methods: {
		findDateSpots() {
			if (!this.location) {
				console.error("Please provide a valid location.");
				return;
			}

			this.$inertia.visit(`/date-spots/${this.location}`);
		},


	}
}
</script>

<template>
	<button
			class="px-6 py-2 text-white bg-roseGold rounded-md hover:bg-rose-700 focus:outline-none"
			@click="findDateSpots()"
	>
		Find Date Spots
	</button>
</template>

<style scoped>

</style>
