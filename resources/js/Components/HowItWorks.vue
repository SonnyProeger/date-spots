<script>
import StepCard from "@/Components/StepCard.vue";

export default {
	name: "HowItWorks",
	components: {StepCard},
	data() {
		return {
			steps: [
				{
					stepTitle: "1. Enter Location",
					stepDescription: "Tell us where you would like to go for your date night.",
					iconSrc: "/images/location.png",
					altText: "Location Icon",
				},
				{
					stepTitle: "2. Find Datespot",
					stepDescription: "Browse our amazing date spot recommendations!",
					iconSrc: "/images/answer.png",
					altText: "Search Icon",
				},
				{
					stepTitle: "3. Go on a Date",
					stepDescription: "Plan your perfect date night, make lasting memories.",
					iconSrc: "/images/dating.png",
					altText: "Date Icon",
				},
				{
					stepTitle: "4. Leave a Review",
					stepDescription: "Share your experience and help others discover Datespots.",
					iconSrc: "/images/review.png",
					altText: "Review Icon",
				},
			],
		};
	},
	methods: {
		scrollToTop() {
			window.scrollTo({
				top: 0,
				behavior: "smooth", // Add smooth scrolling behavior
			});
		},
	},
}
</script>

<template>
	<div class="pt-12 pb-2 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:container md:w-5/6">
			<h2 class="text-3xl font-extrabold text-gray-900 text-center">How It Works</h2>
			<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4">
				<div v-for="step in steps" :key="step.stepTitle" class="flex flex-col">
					<StepCard
							:step-title="step.stepTitle"
							:step-description="step.stepDescription"
							:icon-src="step.iconSrc"
							:alt-text="step.altText"
							class="flex flex-grow"
					/>
				</div>
			</div>
		</div>
		<div class="text-center mt-8 mb-8">
			<!-- CTA Button -->
			<a @click="scrollToTop"
			   class="text-white bg-roseGold hover:bg-rose-700 px-6 py-3 rounded-md text-lg font-medium transition duration-300 ease-in-out cursor-pointer">
				Get Started
			</a>
		</div>
	</div>
</template>


<style scoped>

</style>
