<script>
import AddressForm from "@/Components/AddressForm.vue";
import SearchButton from "@/Components/SearchButton.vue";

export default {
	name: "Hero",
	components: {SearchButton, AddressForm},
	props: {
		homescreen: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			location: null,
		}
	},
	methods: {
		handleAddressUpdated(place) {
			this.location = place;
			console.log("Address updated:", this.location);
		},
	},
};
</script>

<template>
	<div
			:class="{ 'flex grow items-center justify-center bg-cream': !homescreen, 'min-h-screen flex grow items-center justify-center bg-cream': homescreen }">
		<div
				:class="{ 'my-20 inset-0 flex items-center justify-center': !homescreen, 'mb-40 inset-0 flex items-center justify-center': homescreen }">
			<div class="text-center">
				<h1 class="text-2xl md:text-3xl mb-8 font-serif max-w-3xl mx-auto">
					Discover Memorable Date Spots Near You
				</h1>
				<div class="md:max-w-2xl mx-auto">
					<p class="text-gray-800">
						Elevate Your Date Nights with Date Spots - Your Perfect Guide to Romantic Adventures
					</p>
				</div>
				<!-- Address Input and Search Button -->
				<div class="mb-6 mt-12">
					<div class="flex items-center justify-center flex-wrap sm:flex-row flex-col">
						<AddressForm @address-updated="handleAddressUpdated"></AddressForm>
						<SearchButton
								:location=location
								class="px-6 py-2 text-white bg-roseGold rounded-md hover:bg-rose-700 focus:outline-none sm:mt-0 mt-4"
						>
							Find Date Spots
						</SearchButton>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>


<style scoped>
</style>
