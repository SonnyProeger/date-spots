<script>
import AddressForm from "@/Components/AddressForm.vue";
import SearchButton from "@/Components/DatespotComponents/SearchButton.vue";
import ReviewSearchBar from "@/Components/UserReviewComponents/ReviewSearchBar.vue";

export default {
	name: "UserReviewHero",
	components: {ReviewSearchBar, SearchButton, AddressForm},
};
</script>

<template>
	<div class="min-h-screen flex grow items-center justify-center bg-cream">
		<div class="mb-40 inset-0 flex items-center justify-center">
			<div class="text-center">
				<h1 class="text-2xl font-extrabold md:text-3xl mb-8 font-serif max-w-3xl mx-auto">
					Write a Review, Make someone's date night
				</h1>
				<!-- Address Input and Search Button -->
				<div class="mb-6 mt-12">
					<div class="flex items-center justify-center flex-wrap sm:flex-row flex-col">
						<ReviewSearchBar></ReviewSearchBar>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
</style>
