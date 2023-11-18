<template>
	<button :disabled="loading"
	        class="flex items-center px-6 py-3 rounded bg-roseGold text-white text-sm leading-4 font-bold whitespace-nowrap hover:bg-red-700 focus:bg-red-700">
		<div v-if="loading" class="btn-spinner mr-2"/>
		<slot/>
	</button>
</template>

<script>
export default {
	props: {
		loading: Boolean,
	},
}
</script>
