<script>
import StepCard from "@/Components/StepCard.vue";

export default {
	name: "HowItWorks",
	components: {StepCard},
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
	<div class="py-12 bg-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:container md:w-5/6">
			<h2 class="text-3xl font-extrabold text-gray-900 text-center">How It Works</h2>
			<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4">
				<StepCard
						step-title="1. Enter Location"
						step-description="Tell us where you would like to go for your date night."
						icon-src="/images/location.png"
						alt-text="Location Icon"
				>
				</StepCard>

				<StepCard
						step-title="2. Find Date Spot"
						step-description="Browse our amazing date spot recommendations!"
						icon-src="/images/answer.png"
						alt-text="Search Icon"
				>
				</StepCard>

				<StepCard
						step-title="3. Go on a Date"
						step-description="Plan your perfect date night, make lasting memories."
						icon-src="/images/dating.png"
						alt-text="D Iatecon"
				>
				</StepCard>

				<StepCard
						stepTitle="4. Leave a Review"
						stepDescription="Share your experience and help others discover date spots."
						iconSrc="/images/review.png"
						altText="Review Icon"
				></StepCard>
			</div>
		</div>
		<div class="text-center mt-8">
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
