<script>
export default {
	name: "ReviewTitleInput",
	data() {
		return {
			reviewText: '',
			maxCharacters: 50
		};
	},
	computed: {
		enteredCharacters() {
			return this.reviewText.length;
		}
	}
}
</script>

<template>
	<div>
		<h1 class="text-2xl font-semibold mb-4">Give your review a title</h1>
		<input
				type="text"
				placeholder="Please summarize your experience for us."
				class="border border-gray-300 p-2 w-full rounded-lg"
				v-model="reviewText"
				:maxlength="maxCharacters"
		>
		<p class="text-gray-500 text-right mt-1">
			{{ enteredCharacters }} / {{ maxCharacters }} max characters
		</p>
	</div>
</template>

<style scoped>

</style>