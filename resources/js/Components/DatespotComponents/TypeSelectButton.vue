<script>
export default {
	name: "TypeSelectButton",
	props: {
		label: String,
		value: Number,
		selected: Boolean,
	},
	methods: {
		handleClick() {
			this.$emit('selectType', this.value);
		},
	},
}
</script>

<template>
	<button
			@click="handleClick"
			:class="{ 'bg-white': true, 'text-black': true, 'text-md':true, 'rounded-full': true, 'p-1': true, 'border-2': true, 'border-gray-300': !selected, 'border-rose-700': selected, 'transition': true, 'hover:border-rose-700': !selected }"
	>
		{{ label }}
	</button>
</template>

<style scoped>

</style>