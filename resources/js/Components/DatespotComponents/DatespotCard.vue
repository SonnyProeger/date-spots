<script>
import HeartRatingComponent from "@/Components/DatespotComponents/HeartRatingComponent.vue";
import {Link} from "@inertiajs/vue3";
import {DatespotDetailMixin} from "@/mixins/DatespotMixin.js";

export default {
	name: "DatespotCard",
	components: {HeartRatingComponent, Link},
	mixins: [DatespotDetailMixin],
	props: {
		datespotId: Number,
		datespotName: String,
		datespotType: Array,
		datespotTagline: String,
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
}
</script>
<template>
	<div class="bg-white rounded-lg shadow-md">
		<div class="w-full md:flex md:flex-col">
			<div>
				<!-- Spot Image-->
				<img
						:src="imageSrc ? imageSrc : imageURL"
						alt="Spot Image"
						class="w-full h-32 object-cover rounded-t-lg"
				/>
			</div>
			<div class="p-4">
				<!-- Spot name and Review SVG-->
				<div class="flex justify-between">

					<!-- Spot Name -->
					<h2 class="text-xl font-semibold">{{ datespotName }}</h2>

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
					<p class="text-gray-600 text-center md:text-left mb-2">"{{ datespotTagline }}"</p>
				</div>

				<div class="flex justify-center">
					<!-- Additional Spot Details Here -->
					<Link :href="route('user-datespots.show',{
						id: this.datespotId,
						name: this.formattedDatespotName(this.datespotName),
					})"
					      class="mt-4 bg-roseGold text-white py-2 px-4 rounded-md hover:bg-rose-700"
					>
						Explore Datespot
					</Link>
				</div>


			</div>
		</div>
	</div>
</template>


<style scoped>

</style>
