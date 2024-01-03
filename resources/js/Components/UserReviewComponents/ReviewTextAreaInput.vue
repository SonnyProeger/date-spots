<script>
export default {
	name: "ReviewTextAreaInput",
	emits: ['selected-review-text'],
	data() {
		return {
			reviewText: '',
			minCharacters: 150
		};
	},
	computed: {
		enteredCharacters() {
			return this.reviewText.length;
		}
	},
	watch: {
		reviewText(newValue) {
			this.$emit('selected-review-text', newValue);
		}
	}
}
</script>

<template>
	<div>
		<h1 class="text-2xl font-semibold mb-4">Tell us about your experience</h1>
		<textarea name="" id="" cols="30" rows="10" class="border border-gray-300 p-2 w-full rounded-lg"
		          placeholder="This place is amazing for couples who..."
		          v-model="reviewText"
		>
		</textarea>
		<p class="text-gray-500 text-right mt-1">
			{{ enteredCharacters }} / {{ minCharacters }} min characters
		</p>
	</div>
</template>

<style scoped>

</style>