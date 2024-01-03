<script>
import AdminAppLayout from "@/Layouts/AdminAppLayout.vue";
import FileInput from "@/Pages/Admin/Shared/FileInput.vue";
import TextInput from "@/Pages/Admin/Shared/TextInput.vue";
import SearchFilter from "@/Pages/Admin/Shared/SearchFilter.vue";
import {Head, Link} from "@inertiajs/vue3";
import Pagination from "@/Pages/Admin/Shared/Pagination.vue";
import Icon from "@/Pages/Admin/Shared/Icon.vue";
import DangerButton from "@/Components/DangerButton.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import HighlightButton from "@/Pages/Admin/Shared/HighlightButton.vue";

export default {
	name: "Index",
	components: {
		HighlightButton,
		PrimaryButton,
		DangerButton, Icon, Link, Pagination, Head, SearchFilter, TextInput, FileInput, AdminAppLayout
	},
	props: {
		datespot: Object,
		media: Object,
	},
	data() {
		return {
			form: this.$inertia.form({
				file: null,
			}),
		}
	},
	remember: 'form',
	methods: {
		store() {
			this.form.post(route('media.store', this.datespot.id), {
				onSuccess: () => {
					this.form.reset('file')
				}
			})
		},
		destroy(mediaId) {
			if (confirm('Are you sure you want to delete this Media?')) {
				this.$inertia.delete(route('media.destroy', {datespot: this.datespot.id, medium: mediaId}))
			}
		},
	}
}
</script>

<template>
	<AdminAppLayout>
		<div>
			<Head title="Media"/>
			<h1 class="mb-8 text-3xl font-bold">Media</h1>
			<div class="mb-6">
				<form @submit.prevent="store" enctype="multipart/form-data">
					<FileInput v-model="form.file" :error="form.errors.file" label="Upload Media" @upload="store"></FileInput>
				</form>
			</div>

			<div class="bg-white rounded-md shadow overflow-x-auto">
				<table class="w-full whitespace-nowrap">
					<thead>
					<tr class="text-left font-bold">
						<th class="pb-4 pt-6 px-6">Media</th>
					</tr>
					</thead>
					<tbody>
					<tr v-for="medium in media" :key="medium.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
						<td class="border-t p-4">
							<div class="flex items-center justify-start">
								<!-- Displaying the image -->
								<img :src="medium.thumb" :alt="medium.id" style="width: 200px; height: 200px;"/>
							</div>
						</td>
						<td class="border-t">
							<div class="flex flex-col">
								<span>{{ medium.mime }}</span>

								<span>{{ medium.size }}</span>
							</div>
						</td>
						<td class="w-3/4 text-right pr-4" style="position: relative;">
							<div style="position: absolute; top: 0; right: 0;" class="pr-4 pt-4">
								<HighlightButton :media-item="medium"></HighlightButton>
							</div>
							<div class="flex items-center justify-end space-x-2">
								<danger-button @click="destroy(medium.id)">Delete</danger-button>
							</div>
						</td>
					</tr>

					<tr v-if="media === null">
						<td class="px-6 py-4 border-t" colspan="4">No media found.</td>
					</tr>
					</tbody>
				</table>
			</div>
		</div>
	</AdminAppLayout>
</template>

<style scoped>

</style>