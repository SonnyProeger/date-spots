<script>
export default {
	name: "SearchButton",
	props: {
		location: String,
	},
	methods: {
		finddatespots() {
			if (!this.location) {
				console.error("Please provide a valid location.");
				return;
			}

			this.$inertia.visit(`/datespots/${this.location}`);
		},


	}
}
</script>

<template>
	<button
			class="px-6 py-2 text-white bg-roseGold rounded-md hover:bg-rose-700 focus:outline-none"
			@click="finddatespots()"
	>
		Find Date Spots
	</button>
</template>

<style scoped>

</style>
