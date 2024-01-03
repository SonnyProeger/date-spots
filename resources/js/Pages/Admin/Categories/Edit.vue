<template>
	<div>
		<Head :title="`${form.name}`"/>
		<div class="flex justify-start mb-8 max-w-3xl">
			<h1 class="text-3xl font-bold">
				<Link class="text-indigo-400 hover:text-indigo-600" :href="route('categories.index')">Categories</Link>
				<span class="text-indigo-400 font-medium">/</span>
				{{ form.name }}
			</h1>
		</div>
		<trashed-message v-if="category.deleted_at" class="mb-6" @restore="restore"> This category has been deleted.
		</trashed-message>
		<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
			<form @submit.prevent="update">
				<div class="flex flex-wrap -mb-8 -mr-6 p-8">
					<text-input v-model="form.name" :error="form.errors.name"
					            class="pb-8 pr-6 w-full lg:w-1/2"
					            label="Name"/>
					<select-input v-model="form.type" :error="form.errors.type" class="pb-8 pr-6 w-full lg:w-1/2"
					              label="Type">
						<option v-for="type in types" :key="type.id" :value="type.id"
						        :selected="type.id === category.type_id">
							{{ type.name }}
						</option>
					</select-input>
				</div>
				<div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">
					<button v-if="!category.deleted_at" class="text-red-600 hover:underline" tabindex="-1" type="button"
					        @click="destroy">Delete Category
					</button>
					<loading-button :loading="form.processing" class="btn-roseGold ml-auto" category="submit">Update Category
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
import AdminAppLayout from "@/Layouts/AdminAppLayout.vue";

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
		category: Object,
		types: Object,
	},
	remember: 'form',
	data() {
		return {
			form: this.$inertia.form({
				_method: 'put',
				name: this.category.name,
				type_id: this.category.type.id
			}),
		}
	},
	methods: {
		update() {
			this.form.post(route('categories.update', this.category.id));
		},
		destroy() {
			if (confirm('Are you sure you want to delete this category?')) {
				this.$inertia.delete(route('categories.destroy', this.category.id));
			}
		},
		restore() {
			if (confirm('Are you sure you want to restore this category?')) {
				this.$inertia.put(route('categories.restore', this.category.id));
			}
		},
	},
}
</script>
