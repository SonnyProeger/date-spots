<script>
import StepCard from "@/Components/StepCard.vue";

export default {
	name: "DateSpotsInCities",
	components: {StepCard}
}
</script>

<template>
	<div class="py-6 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-0 md:container md:w-4/5">
			<div class="flex justify-between">
				<h2 class="text-lg md:text-3xl font-extrabold text-gray-900">Date Spots in top destinations</h2>
				<p class="text-lg  text-gray-900 ">See All</p>
			</div>
			<div class="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4">
				<div class="group relative">
					<div
							class="p-4 rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:bg-white hover:bg-opacity-50 hover:scale-105 hover:cursor-pointer">
						<img src="https://placehold.co/350x250" alt="altText"/>
					</div>
				</div>

				<div class="group relative">
					<div
							class="rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:bg-white hover:bg-opacity-50 hover:scale-105 hover:cursor-pointer">
						<img src="https://placehold.co/350x250" alt="altText"/>
					</div>
				</div>

				<div class="group relative">
					<div
							class="rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:bg-white hover:bg-opacity-50 hover:scale-105 hover:cursor-pointer">
						<img src="https://placehold.co/350x250" alt="altText"/>
					</div>
				</div>

				<div class="group relative">
					<div
							class="rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:bg-white hover:bg-opacity-50 hover:scale-105 hover:cursor-pointer">
						<img src="https://placehold.co/350x250" alt="altText"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>