<script>
import {Link} from "@inertiajs/vue3";
import DropdownLink from "@/Components/DropdownLink.vue";
import Dropdown from "@/Components/Dropdown.vue";

export default {
	name: "UserReviewItemHeader",
	components: {Dropdown, DropdownLink, Link},
	props: {
		review: Object
	},
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
						<DropdownLink href="#">
							Share Review
						</DropdownLink>

						<DropdownLink href="#">
							Delete Review
						</DropdownLink>
					</template>
				</Dropdown>
			</div>
		</div>
	</div>

</template>

<style scoped>

</style>