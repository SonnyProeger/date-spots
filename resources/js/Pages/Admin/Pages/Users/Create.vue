<template>
	<div>
		<Head title="Create User"/>
		<h1 class="mb-8 text-3xl font-bold">
			<Link class="text-indigo-400 hover:text-indigo-600" :href="route('users.index')">Users</Link>
			<span class="text-indigo-400 font-medium">/</span> Create
		</h1>
		<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
			<form @submit.prevent="store">
				<div class="flex flex-wrap -mb-8 -mr-6 p-8">
					<text-input v-model="form.name" :error="form.errors.name"
					            class="pb-8 pr-6 w-full lg:w-1/2"
					            label="Name"/>
					<text-input v-model="form.email" :error="form.errors.email" class="pb-8 pr-6 w-full lg:w-1/2" label="Email"/>
					<text-input v-model="form.password" :error="form.errors.password" class="pb-8 pr-6 w-full lg:w-1/2"
					            type="password" autocomplete="new-password" label="Password"/>
					<select-input v-model="form.role_id" :error="form.errors.role_id" class="pb-8 pr-6 w-full lg:w-1/2"
					              label="Role">
						<option v-if="isSuperAdmin" value="1">SuperAdmin</option>
						<option v-if="isSuperAdmin" value="2">Admin</option>
						<option value="3">Company</option>
						<option value="4">User</option>
					</select-input>
				</div>
				<div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
					<loading-button :loading="form.processing" type="submit">Create User</loading-button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import {Head, Link} from '@inertiajs/vue3'
import FileInput from '@/Pages/Admin/Shared/FileInput.vue'
import TextInput from '@/Pages/Admin/Shared/TextInput.vue'
import SelectInput from '@/Pages/Admin/Shared/SelectInput.vue'
import LoadingButton from '@/Pages/Admin/Shared/LoadingButton.vue'
import AdminAppLayout from "@/Pages/Admin/AdminAppLayout.vue";
import {AdminUsersMixin} from "@/mixins/AdminUsersMixin.js";

export default {
	components: {
		FileInput,
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
				email: '',
				password: '',
				role_id: null,
			}),
		}
	},
	methods: {
		store() {
			this.form.post('/admin/users')
		},
	},
}
</script>
