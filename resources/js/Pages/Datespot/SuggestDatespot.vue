<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import TypeSelectButton from "@/Components/DatespotComponents/TypeSelectButton.vue";

export default {
	name: "SuggestDatespot",
	components: {TypeSelectButton, PrimaryButton, NewAppLayout},
	props: {
		types: Object,
	},
	data() {
		return {
			selectedType: null,
		}
	},
	methods: {
		selectType(typeKey) {
			this.selectedType = typeKey;
		},
	},
}
</script>

<template>
	<NewAppLayout>
		<div class="flex flex-col container mx-auto md:w-4/5 space-y-4">
			<div class="space-y-4">
				<h1 class="text-5xl font-extrabold">Suggest a Datespot to us</h1>
				<p>Thank you for telling us about a new Datespot.
					Your contributions make our community stronger.
					To get started, tell us a little bit more about the place.</p>
			</div>
			<div>
				<h1 class="text-xl font-bold py-4">What type of Datespot is it?</h1>
				<div class="flex flex-row space-x-2">
					<div v-for="(value, key) in types" :key="key">
						<TypeSelectButton
								:label="value.name"
								:value="key"
								:selected="selectedType === key"
								@selectType="selectType(key)"
						/>
					</div>
				</div>
			</div>
			x
			<div>
				<h1 class="text-xl font-bold">How should we categorize it?</h1>
				<p class="text-sm">Pick just one type for now. If you need to, you'll be able to add more types after the
					listing is
					published.</p>
			</div>
			<div v-for="(value, key) in types.categories" :key="key">
				<TypeSelectButton
						:label="value.name"
						:value="key"
						:selected="selectedType === key"
						@selectType="selectType(key)"
				/>
			</div>
		</div>
	</NewAppLayout>
</template>

<style scoped>

</style>