<script>
import HeartRatingComponent from "@/Components/DatespotComponents/HeartRatingComponent.vue";
import {DatespotDetailMixin} from "@/mixins/DatespotMixin.js";

export default {
	name: "DatespotDetailInfoCards",
	components: {HeartRatingComponent},
	props: {
		datespot: Object,
	},
	mixins: [DatespotDetailMixin],
}
</script>

<template>
	<div class="grid grid-cols-1 lg:grid-cols-3 md:gap-3.5 gap-2">
		<!-- Card 1 -->
		<div class="bg-white p-4">
			<p class="font-semibold pb-4">Reviews and Ratings:</p>
			<div class="flex flex-row">
				<div class="text-xl font-bold pr-2">{{ datespot.rating }}</div>
				<div class="flex items-center pr-2">
					<heart-rating-component :rating="datespot.rating"></heart-rating-component>
					<span class="ml-1 font-bold text-sm">{{ datespot.reviews_count }} reviews</span>
				</div>
			</div>
			<p v-html="formattedPosition" class="text-gray-600 mt-2"></p>
			<hr class="my-4 border-gray-200">
			<div>
				<p class="font-semibold">Ratings:</p>
				<ul>
					<li>Atmosphere</li>
					<li>Value</li>
					<li>Service</li>
				</ul>
			</div>
		</div>

		<!-- Card 2 -->
		<div class="bg-white p-4">
			<h2 class="text-lg font-semibold pb-4">Details:</h2>
			<p class="text-md font-bold">Price Range</p>
			<div class="text-gray-600 mt-2">$0 - $100</div>
			<p class="text-md font-bold mt-2">Type</p>
			<div class="text-gray-600 mt-2">{{ formattedTypes }}</div>
			<p class="text-md font-bold mt-2">Categories</p>
			<div class="text-gray-600 mt-2">{{ formattedCategories }}</div>
			<p class="text-md font-bold mt-2">Sub Categories</p>
			<div class="text-gray-600 mt-2">{{ formattedSubcategories }}</div>
		</div>

		<!-- Card 3 -->
		<div class="bg-white p-4">
			<h2 class="text-lg font-semibold pb-4">Contact and Location</h2>

			<img
					:src="getStaticMapUrl()"
					alt="Google Static Map">

			<a :href="getDirectionsLink" class="flex flex-row py-2 hover:underline" target="_blank">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
				     stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/>
					<path stroke-linecap="round" stroke-linejoin="round"
					      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/>
				</svg>

				<p class="pl-2">{{ formattedAddress }}</p>
			</a>
			<div class="flex flex-row py-2  w-3/4 justify-between">
				<a :href="datespot.website" class="flex flex-row pr-2 hover:underline" target="_blank">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
					     stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round"
						      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/>
					</svg>
					<p class="pl-2">Website</p>
				</a>

				<a :href="'mailto:'+datespot.email" class="flex flex-row px-2 hover:underline">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
					     stroke="currentColor" class="w-6 h-6">
						<path stroke-linecap="round" stroke-linejoin="round"
						      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
					</svg>
					<p class="pl-2">Email</p>
				</a>
			</div>
			<a :href="'tel:'+datespot.phone_number" class="flex flex-row py-2 hover:underline">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
				     stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round"
					      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
				</svg>

				<div class="pl-2">Phone Number</div>
			</a>
		</div>
	</div>
</template>

<style scoped>

</style>