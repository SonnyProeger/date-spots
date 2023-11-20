<template>
	<div>
		<Head :title="`${form.name}`"/>
		<div class="flex justify-start mb-8 max-w-3xl">
			<h1 class="text-3xl font-bold">
				<Link class="text-indigo-400 hover:text-indigo-600" :href="route('subcategories.index')">Subcategory</Link>
				<span class="text-indigo-400 font-medium">/</span>
				{{ form.name }}
			</h1>
		</div>
		<trashed-message v-if="subcategory.deleted_at" class="mb-6" @restore="restore"> This subcategory has been deleted.
		</trashed-message>
		<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
			<form @submit.prevent="update">
				<div class="flex flex-wrap -mb-8 -mr-6 p-8">
					<text-input v-model="form.name" :error="form.errors.name"
					            class="pb-8 pr-6 w-full lg:w-1/2"
					            label="Name"/>
					<select-input v-model="form.category_id" :error="form.errors.category_id" class="pb-8 pr-6 w-full lg:w-1/2"
					              label="Category">
						<option v-for="category in categories" :key="category.id" :value="category.id"
						        :selected="category.id === subcategory.category_id">
							{{ category.name }}
						</option>
					</select-input>
				</div>
				<div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">
					<button v-if="!subcategory.deleted_at" class="text-red-600 hover:underline" tabindex="-1" type="button"
					        @click="destroy">Delete Subcategory
					</button>
					<loading-button :loading="form.processing" class="btn-roseGold ml-auto" type="submit">Update
						Subcategory
					</loading-button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import {Head, Link} from '@inertiajs/vue3'
import TextInput from '@/Pages/Admin/Shared/TextInput.vue'
import FileInput from '@/Pages/Admin/Shared/FileInput.vue'
import SelectInput from '@/Pages/Admin/Shared/SelectInput.vue'
import LoadingButton from '@/Pages/Admin/Shared/LoadingButton.vue'
import TrashedMessage from '@/Pages/Admin/Shared/TrashedMessage.vue'
import AdminAppLayout from "@/Pages/Admin/AdminAppLayout.vue";

export default {
	components: {
		FileInput,
		Head,
		Link,
		LoadingButton,
		SelectInput,
		TextInput,
		TrashedMessage,
	},
	layout: AdminAppLayout,
	props: {
		subcategory: Object,
		categories: Object,
	},
	created() {
		console.log(this.subcategory)
	},
	remember: 'form',
	data() {
		return {
			form: this.$inertia.form({
				_method: 'put',
				name: this.subcategory.name,
			}),
		}
	},
	methods: {
		update() {
			this.form.post(`/admin/subcategories/${this.subcategory.id}`)
		},
		destroy() {
			if (confirm('Are you sure you want to delete this subcategories?')) {
				this.$inertia.delete(`/admin/subcategories/${this.subcategory.id}`)
			}
		},
		restore() {
			if (confirm('Are you sure you want to restore this subcategories?')) {
				this.$inertia.put(`/admin/subcategories/${this.subcategory.id}/restore`)
			}
		},
	},
}
</script>
