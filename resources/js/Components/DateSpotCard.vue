<script>
import HeartRatingComponent from "@/Components/HeartRatingComponent.vue";
import {Link} from "@inertiajs/vue3";

export default {
	name: "DateSpotCard",
	components: {HeartRatingComponent, Link},
	props: {
		dateSpotId: Number,
		dateSpotName: String,
		dateSpotType: Array,
		dateSpotTagline: String,
		city: String,
		imageSrc: String,
		reviewsCount: Number,
		rating: Number,
	},
	data() {
		return {
			imageURL: 'https://lh3.googleusercontent.com/places/ANXAkqHMtdv-0Lgtb08rKatMMCJ97kCQnm0QlQAiOWNy90yhK7BWs7E3ATHnTs65S0Lt38ZV4hIEY0bIAW_eV9NgkDjnVWf80qvSCtc=s1600-w4032',
		};
	},
	computed: {
		dateSpotLink() {
			const formattedName = this.dateSpotName.replace(/\s+/g, '-'); // Replace spaces with dashes

			return formattedName;
		},

	},

}
</script>
<template>
	<div class="bg-white rounded-lg shadow-md">
		<div class="w-full md:flex md:flex-col">
			<div>
				<!-- Spot Image-->
				<img
						:src="imageURL"
						alt="Spot Image"
						class="w-full h-32 object-cover rounded-t-lg"
				/>
			</div>
			<div class="p-4">
				<!-- Spot name and Review SVG-->
				<div class="flex justify-between">

					<!-- Spot Name -->
					<h2 class="text-xl font-semibold">{{ dateSpotName }}</h2>

					<!-- Review Stars svg -->
					<HeartRatingComponent
							:rating="rating"
					>

					</HeartRatingComponent>
				</div>

				<!-- Review Count and City -->
				<div class="flex justify-between">
					<p class="text-gray-400">{{ city }}</p>
					<p class="text-sm text-gray-400 md:text-left">{{ reviewsCount }} reviews</p>
				</div>

				<!-- Description centered -->
				<div class="flex justify-center mt-4">
					<p class="text-gray-600 text-center md:text-left mb-2">"{{ dateSpotTagline }}"</p>
				</div>

				<div class="flex justify-center">
					<!-- Additional Spot Details Here -->
					<Link :href="route('date-spots.show',{
						id:this.dateSpotId,
						name:dateSpotLink,
					})"
					      class="mt-4 bg-roseGold text-white py-2 px-4 rounded-md hover:bg-rose-700"
					>
						Explore Date Spot
					</Link>
				</div>


			</div>
		</div>
	</div>
</template>


<style scoped>

</style>
