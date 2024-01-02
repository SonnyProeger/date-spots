<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import Hero from "@/Components/Hero.vue";
import DatespotDetailHeader from "@/Components/DatespotComponents/DatespotDetailHeader.vue";
import DatespotCard from "@/Components/DatespotComponents/DatespotCard.vue";
import HeartRatingComponent from "@/Components/DatespotComponents/HeartRatingComponent.vue";
import {DatespotDetailMixin} from "@/mixins/DatespotMixin.js";
import {Link} from "@inertiajs/vue3";
import DatespotReview from "@/Components/DatespotComponents/DatespotReview.vue";
import DatespotDetailImages from "@/Components/DatespotComponents/DatespotDetailImages.vue";
import DatespotDetailMobile from "@/Components/DatespotComponents/DatespotDetailMobile.vue";
import DatespotDetailInfoCards from "@/Components/DatespotComponents/DatespotDetailInfoCards.vue";


export default {
	name: "DatespotDetail",
	components: {
		DatespotDetailInfoCards,
		DatespotDetailMobile,
		DatespotDetailImages,
		DatespotReview, HeartRatingComponent, DatespotCard, Hero, NewAppLayout, DatespotDetailHeader, Link
	},
	props: {
		datespot: Object,
		reviews: Object,
	},
	mixins: [DatespotDetailMixin],
}
</script>

<template>
	<NewAppLayout>
		<div class="flex flex-col container mx-auto space-y-4 md:w-4/5 h-full bg-cream">
			<DatespotDetailHeader
					:datespot="datespot"
			>
			</DatespotDetailHeader>
			<DatespotDetailImages
					:datespot="datespot"
			>
			</DatespotDetailImages>

			<DatespotDetailInfoCards
					:datespot="datespot"
			></DatespotDetailInfoCards>

			<!--reviews-->
			<div class="bg-white">
				<DatespotReview :reviews="reviews" :datespot="this.datespot"></DatespotReview>
			</div>
		</div>
	</NewAppLayout>
</template>

<style scoped>

</style>
