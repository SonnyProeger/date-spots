<template>
	<div>
		<Head title="Create Category"/>
		<h1 class="mb-8 text-3xl font-bold">
			<Link class="text-indigo-400 hover:text-indigo-600" :href="route('categories.index')">Category</Link>
			<span class="text-indigo-400 font-medium">/</span> Create
		</h1>
		<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
			<form @submit.prevent="store">
				<div class="flex flex-wrap -mb-8 -mr-6 p-8">
					<text-input v-model="form.name" :error="form.errors.name"
					            class="pb-8 pr-6 w-full lg:w-1/2"
					            label="Name"/>
					<select-input v-model="form.type_id" :error="form.errors.type_id" class="pb-8 pr-6 w-full lg:w-1/2"
					              label="Type">
						<option v-for="type in types" :key="type.id" :value="type.id">
							{{ type.name }}
						</option>
					</select-input>
				</div>
				<div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
					<loading-button :loading="form.processing" type="submit">Create Category</loading-button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import {Head, Link} from '@inertiajs/vue3'
import TextInput from '@/Pages/Admin/Shared/TextInput.vue'
import LoadingButton from '@/Pages/Admin/Shared/LoadingButton.vue'
import AdminAppLayout from "@/Pages/Admin/AdminAppLayout.vue";
import SelectInput from "@/Pages/Admin/Shared/SelectInput.vue";

export default {
	components: {
		SelectInput,
		Head,
		Link,
		LoadingButton,
		TextInput,
	},
	layout: AdminAppLayout,
	remember: 'form',
	props: {
		types: Object,
	},
	created() {
		console.log()
	},
	data() {
		return {
			form: this.$inertia.form({
				name: '',
				type_id: null,
			}),
		}
	},
	methods: {
		store() {
			this.form.post('/admin/categories')
		},
	},
}
</script>
