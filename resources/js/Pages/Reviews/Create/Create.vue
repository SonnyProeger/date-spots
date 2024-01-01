<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import SpecialOccasionsReview from "@/Pages/Reviews/Create/SpecialOccasionsReview.vue";

export default {
	name: `Create Review`,
	components: {NewAppLayout}, SpecialOccasionsReview,
	props: {
		datespot: Object,
	},
	computed: {
		SpecialOccasionsReview() {
			return SpecialOccasionsReview
		},
		selectedReviewComponent() {
			switch (this.datespot.type) {
				case 'Special Occasions':
					return 'SpecialOccasionsReview';
				case 'Activities':
					return 'ActivitiesReview';
				case 'Food':
					return 'FoodReview';
				case 'Outdoor':
					return 'OutdoorReview';
				case 'Entertainment':
					return 'EntertainmentReview';
				default:
					return 'DefaultReviewComponent';
			}
		}
	}
}
</script>

<template>
	<NewAppLayout>
		<div class="container mx-auto flex flex-col md:w-4/5">
			<component :is="SpecialOccasionsReview" :datespot="datespot"/>
		</div>
	</NewAppLayout>
</template>

<style scoped>

</style>