<script>
export default {
	name: "CardHowItWorks",
	props: {
		stepTitle: String,
		stepDescription: String,
		iconSrc: String,
		altText: String,
	},
}

</script>

<template>
	<div class="group relative">
		<div class="rounded-lg overflow-hidden bg-roseGold group-hover:bg-rose-700 p-4">

			<img :src="iconSrc" :alt="altText" class="w-16 h-16 mx-auto"/>

			<p class="mt-2 text-lg font-medium text-white">{{ stepTitle }}</p>
			<p class="mt-1 text-black">{{ stepDescription }}</p>
		</div>
	</div>
</template>

<style scoped>

</style>
