<template>
	<div>
		<Head :title="`${form.name}`"/>
		<div class="flex justify-start mb-8 max-w-3xl">
			<h1 class="text-3xl font-bold">
				<Link class="text-indigo-400 hover:text-indigo-600" :href="route('types.index')">Types</Link>
				<span class="text-indigo-400 font-medium">/</span>
				{{ form.name }}
			</h1>
		</div>
		<trashed-message v-if="type.deleted_at" class="mb-6" @restore="restore"> This type has been deleted.
		</trashed-message>
		<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
			<form @submit.prevent="update">
				<div class="flex flex-wrap -mb-8 -mr-6 p-8">
					<text-input v-model="form.name" :error="form.errors.name"
					            class="pb-8 pr-6 w-full lg:w-1/2"
					            label="Name"/>
				</div>
				<div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">
					<button v-if="!type.deleted_at" class="text-red-600 hover:underline" tabindex="-1" type="button"
					        @click="destroy">Delete Type
					</button>
					<loading-button :loading="form.processing" class="btn-roseGold ml-auto" type="submit">Update Type
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
import {AdminUsersMixin} from "@/mixins/AdminUsersMixin.js";

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
	mixins: [AdminUsersMixin],
	props: {
		type: Object,
	},
	remember: 'form',
	data() {
		return {
			form: this.$inertia.form({
				_method: 'put',
				name: this.type.name,
			}),
		}
	},
	methods: {
		update() {
			this.form.post(route('types.update', this.type.id))
		},
		destroy() {
			if (confirm('Are you sure you want to delete this type?')) {
				this.$inertia.delete(route('types.destroy', this.type.id))
			}
		},
		restore() {
			if (confirm('Are you sure you want to restore this type?')) {
				this.$inertia.put(route('types.restore', this.type.id))
			}
		},
	},
}
</script>
