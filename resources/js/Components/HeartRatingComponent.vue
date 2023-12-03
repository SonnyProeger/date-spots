<script>
export default {
	name: "HeartRatingComponent",
	props: {
		rating: Number,
	},
	created() {
		console.log(this.rating)
	},
}
</script>

<template>
	<!-- Review Stars svg -->
	<div class="flex items-center">
		<template v-for="i in 5">
			<svg
					class="w-4 h-4 lg:w-6 lg:h-6"
					:class="{ 'text-rose-700': i <= rating, 'text-gray-300': i > rating }"
					fill="currentColor"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					viewBox="0 0 24 24"
			>
				<path
						stroke="none"
						d="M12 21.35l-1.45-1.32C5.4 15.54 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 7.04-8.55 11.54L12 21.35z"
				></path>
				<path
						stroke="none"
						d="M12 21.35l1.45-1.32"
				></path>
			</svg>
		</template>
	</div>
</template>

<style scoped>

</style>
