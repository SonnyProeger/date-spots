<template>
	<div>
		<Head title="Create Type"/>
		<h1 class="mb-8 text-3xl font-bold">
			<Link class="text-indigo-400 hover:text-indigo-600" :href="route('types.index')">Types</Link>
			<span class="text-indigo-400 font-medium">/</span> Create
		</h1>
		<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
			<form @submit.prevent="store">
				<div class="flex flex-wrap -mb-8 -mr-6 p-8">
					<text-input v-model="form.name" :error="form.errors.name"
					            class="pb-8 pr-6 w-full lg:w-1/2"
					            label="Name"/>
				</div>
				<div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
					<loading-button :loading="form.processing" type="submit">Create Type</loading-button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import {Head, Link} from '@inertiajs/vue3'
import TextInput from '@/Pages/Admin/Shared/TextInput.vue'
import SelectInput from '@/Pages/Admin/Shared/SelectInput.vue'
import LoadingButton from '@/Pages/Admin/Shared/LoadingButton.vue'
import AdminAppLayout from "@/Layouts/AdminAppLayout.vue";
import {AdminUsersMixin} from "@/mixins/AdminUsersMixin.js";

export default {
	components: {
		Head,
		Link,
		LoadingButton,
		SelectInput,
		TextInput,
	},
	mixins: [AdminUsersMixin],
	layout: AdminAppLayout,
	remember: 'form',
	data() {
		return {
			form: this.$inertia.form({
				name: '',
			}),
		}
	},
	methods: {
		store() {
			this.form.post('/admin/types')
		},
	},
}
</script>
