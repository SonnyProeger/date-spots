<template>
	<div>
		<Head title="Create Datespot"/>
		<h1 class="mb-8 text-3xl font-bold">
			<Link class="text-indigo-400 hover:text-indigo-600" href="/datespots">Datespots</Link>
			<span class="text-indigo-400 font-medium">/</span> Create
		</h1>
		<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
			<form @submit.prevent="store">
				<div class="flex flex-wrap -mb-8 -mr-6 p-8">
					<text-input v-model="form.name" :error="form.errors.name" class="pb-8 pr-6 w-full lg:w-1/2" label="Name"/>
					<text-input v-model="form.tagLine" :error="form.errors.name" class="pb-8 pr-6 w-full lg:w-1/2"
					            label="Tag Line"/>

					<text-input v-model="form.address" :error="form.errors.address" class="pb-8 pr-6 w-full lg:w-1/2"
					            label="Email"/>
					<text-input v-model="form.phone" :error="form.errors.phone" class="pb-8 pr-6 w-full lg:w-1/2" label="Phone"/>
					<text-input v-model="form.address" :error="form.errors.address" class="pb-8 pr-6 w-full lg:w-1/2"
					            label="Address"/>
					<text-input v-model="form.city" :error="form.errors.city" class="pb-8 pr-6 w-full lg:w-1/2" label="City"/>
					<text-input v-model="form.region" :error="form.errors.region" class="pb-8 pr-6 w-full lg:w-1/2"
					            label="Province/State"/>
					<select-input v-model="form.country" :error="form.errors.country" class="pb-8 pr-6 w-full lg:w-1/2"
					              label="Country">
						<option selected="selected" value="NL">Netherlands</option>

					</select-input>
					<text-input v-model="form.postal_code" :error="form.errors.postal_code" class="pb-8 pr-6 w-full lg:w-1/2"
					            label="Postal code"/>
				</div>
				<div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
					<loading-button :loading="form.processing" class="btn-roseGold" type="submit">Create Datespot</loading-button>
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
import AdminAppLayout from "@/Pages/Admin/AdminAppLayout.vue";

export default {
	components: {
		Head,
		Link,
		LoadingButton,
		SelectInput,
		TextInput,
	},
	layout: AdminAppLayout,
	remember: 'form',
	data() {
		return {
			form: this.$inertia.form({
				name: null,
				email: null,
				address: null,
				tagline: null,
				phone: null,
				street_name: null,
				house_number: null,
				postal_code: null,
				city: null,
				region: null,
				country: null,
				website: null,
			}),
		}
	},
	methods: {
		store() {
			this.form.post('/datespots')
		},
	},
}
</script>
