<script>
import {Link} from "@inertiajs/vue3";
import DropdownLink from "@/Components/DropdownLink.vue";
import Dropdown from "@/Components/Dropdown.vue";
import ConfirmationModal from "@/Components/ConfirmationModal.vue";
import DropdownButton from "@/Components/DropdownButton.vue";
import DangerButton from "@/Components/DangerButton.vue";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import {DatespotMixin} from "@/mixins/DatespotMixin.js";

export default {
	name: "UserReviewItemHeader",
	components: {SecondaryButton, DangerButton, DropdownButton, ConfirmationModal, Dropdown, DropdownLink, Link},
	props: {
		review: Object
	},
	mixins: [DatespotMixin],
	data() {
		return {
			isOpen: false,
		};
	},
	methods: {
		openModal() {
			this.isOpen = true;
		},
		closeModal() {
			this.isOpen = false;
		},
		deleteReview() {
			this.$inertia.delete(route('user-review.destroy', {
				id: this.review.datespot.id,
				name: this.formattedDatespotName(this.review.datespot.name),
				reviewId: this.review.id
			}));
			this.closeModal();
		}
	}

}
</script>

<template>

	<!-- user info-->
	<div class="flex gap-x-2 mb-3">
		<div class="flex justify-between w-full">
			<div class="flex flex-row">
				<div class="w-20 h-20 bg-cover bg-center overflow-hidden">
					<img :src="review.datespot.photo_url" alt="Profile Image" class="w-full h-full"/>
				</div>
				<p class="font-sans flex flex-col px-2">
					<Link
							class="hover:underline"
							:href="route('user-datespots.show', {
											id: review.datespot.id,
											name:review.datespot.formatted_name
										})"
					>
						<span class="font-extrabold text-lg">{{ review.datespot.name }}</span>
					</Link>
					<span class="text-gray-700 text-sm">{{ review.datespot.address }}</span>
				</p>
			</div>
			<div>
				<Dropdown>
					<template #trigger>
						<button type="button">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
							     stroke="currentColor" class="w-6 h-6">
								<path stroke-linecap="round" stroke-linejoin="round"
								      d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
							</svg>
						</button>
					</template>
					<template #content>
						<DropdownButton @click="openModal">
							Edit
						</DropdownButton>

						<DropdownButton @click="openModal">
							Delete
						</DropdownButton>
					</template>
				</Dropdown>
			</div>
		</div>
	</div>
	<ConfirmationModal
			:show="isOpen"
			@close="closeModal"
	>
		<template #title>
			Delete Review
		</template>
		<template #content>
			<div class="flex flex-col">
				<div>
					<p class="text-sm">Are you sure you want to delete this review?</p>
				</div>
				<div class="flex flex-row right-0">
					<p class="italic text-xs">Deleting a review is permanent and can not be recovered.</p>
				</div>
			</div>
		</template>
		<template #footer>
			<button class="bg-gray-500 text-white px-4 py-2 rounded-md" @click="closeModal">
				No
			</button>
			<button class="bg-red-500 text-white px-4 py-2 rounded-md ml-2" @click="deleteReview">
				Yes
			</button>
		</template>
	</ConfirmationModal>

</template>

<style scoped>

</style>