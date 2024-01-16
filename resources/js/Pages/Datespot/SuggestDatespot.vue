<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";

export default {
	name: "SuggestDatespot",
	components: {NewAppLayout},
	props: {
		types: Object,
	},
	data() {
		return {
			selectedType: null,
		}
	},
	methods: {
		submitForm() {
			console.log("Form submitted");
		},
	},
}
</script>

<template>
	<NewAppLayout>
		<h1>Suggest a Datespot</h1>

		<form @submit.prevent="submitForm">
			<div v-for="(value, key) in types" :key="key">
				<label>
					<input type="radio" v-model="selectedType" :value="key"/>
					{{ value.name }}
				</label>
			</div>

			<button type="submit">Submit</button>
		</form>

	</NewAppLayout>
</template>

<style scoped>

</style>