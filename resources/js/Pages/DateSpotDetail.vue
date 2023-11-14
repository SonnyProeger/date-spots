<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import Hero from "@/Components/Hero.vue";
import DateSpotDetailHeader from "@/Components/DateSpotDetailHeader.vue";
import DateSpotCard from "@/Components/DateSpotCard.vue";
import HeartRatingComponent from "@/Components/HeartRatingComponent.vue";
import {dateSpotDetailMixin} from "@/mixins/dateSpotMixin.js";
import {Link} from "@inertiajs/vue3";


export default {
	name: "DateSpotDetail",
	components: {HeartRatingComponent, DateSpotCard, Hero, NewAppLayout, DateSpotDetailHeader, Link},
	props: {
		dateSpot: Object,
		totalDateSpots: Number,
	},
	mixins: [dateSpotDetailMixin],
	created() {
		console.log(this.dateSpot)
	}
}
</script>

<template>
	<NewAppLayout>
		<div class="container mx-auto flex flex-col md:w-4/5">
			<DateSpotDetailHeader
					:date-spot="dateSpot"
					:total-date-spots="totalDateSpots"
			>
			</DateSpotDetailHeader>
			<div>
				<div class="h-1/4 md:pb-2 md:pt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-0.5">
					<!--images-->
					<img v-for="(image, index) in dateSpot.images"
					     :key="index"
					     :src="image.url"
					     :alt="'Image ' + (index + 1)"
					     :class="{'hidden md:block': index !== 0, 'w-full': true,  'h-64': true, 'object-cover': true}"
					>
				</div>

				<!--				mobile only!-->
				<div class="md:hidden grid grid-cols-4 gap-4 bg-white p-4">
					<!-- Phone -->
					<a :href="'tel:'+dateSpot.phone_number" class="flex flex-col items-center text-gray-600 text-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						     stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round"
							      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
						</svg>

						<div class="">Call</div>
					</a>

					<!-- Route -->
					<a :href="getDirectionsLink"
					   class="flex flex-col items-center text-gray-600">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						     stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round"
							      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/>
						</svg>
						<div class="">Route</div>
					</a>

					<!-- Website -->
					<a :href="dateSpot.website"
					   class="flex flex-col items-center text-gray-600 hqTWt" target="_blank">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						     stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round"
							      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/>
						</svg>
						<div class="">Website</div>
					</a>

					<!-- Review -->
					<Link href="#"
					      class="flex flex-col items-center text-gray-600 hqTWt" target="_blank"
					>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						     stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round"
							      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
						</svg>
						<div class="">Review</div>
					</Link>
				</div>

				<div class="h-1/4 grid grid-cols-1 lg:grid-cols-3 md:gap-3.5 gap-2">
					<!-- Card 1 -->
					<div class="bg-white p-4 md:my-2 mt-2 ">
						<p class="font-semibold pb-4">Reviews and Ratings:</p>
						<div class="flex flex-row">
							<div class="text-xl font-bold pr-2">{{ dateSpot.rating }}</div>
							<div class="flex items-center pr-2">
								<heart-rating-component :rating="dateSpot.rating"></heart-rating-component>
								<span class="ml-1 font-bold text-sm">{{ dateSpot.reviews_count }} reviews</span>
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
					<div class="bg-white p-4 md:my-2">
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
					<div class="bg-white p-4 md:my-2">
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
							<a :href="dateSpot.website" class="flex flex-row pr-2 hover:underline" target="_blank">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
								     stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round"
									      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/>
								</svg>
								<p class="pl-2">Website</p>
							</a>

							<a :href="'mailto:'+dateSpot.email" class="flex flex-row px-2 hover:underline">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
								     stroke="currentColor" class="w-6 h-6">
									<path stroke-linecap="round" stroke-linejoin="round"
									      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
								</svg>
								<p class="pl-2">Email</p>
							</a>
						</div>
						<a :href="'tel:'+dateSpot.phone_number" class="flex flex-row py-2 hover:underline">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
							     stroke="currentColor" class="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round"
								      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
							</svg>

							<div class="pl-2">Phone Number</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	</NewAppLayout>
</template>

<style scoped>

</style>
