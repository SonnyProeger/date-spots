<script>
export default {
	name: "SpecialOccasionsReview",
	props: {
		datespot: Object,
	},
}
</script>

<template>
	<div class="flex">
		<div class="w-2/3 border-r border-gray-300 p-4">
			<!-- Content for the left div -->
		</div>

		<div class="w-1/3 p-4">
			<!-- Content for the right div -->
			<h1>{{ this.datespot.name }}</h1>
		</div>
	</div>

</template>

<style scoped>

</style>