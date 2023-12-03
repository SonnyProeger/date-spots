<template>
	<div>
		<Head title="Create Datespot"/>
		<h1 class="mb-8 text-3xl font-bold">
			<Link class="text-indigo-400 hover:text-indigo-600" :href="route('datespots.index')">Datespot</Link>
			<span class="text-indigo-400 font-medium">/</span> Create
		</h1>
		<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
			<form @submit.prevent="store">
				<div class="flex flex-wrap -mb-8 -mr-6 p-8">
					<text-input v-model="form.name" :error="form.errors.name" class="pb-8 pr-6 w-full lg:w-1/2" label="Name"/>
					<text-input v-model="form.email" :error="form.errors.email" class="pb-8 pr-6 w-full lg:w-1/2" label="Email"/>
					<text-input v-model="form.phone_number" :error="form.errors.phone_number" class="pb-8 pr-6 w-full lg:w-1/2"
					            label="Phone"/>
					<text-input v-model="form.website" :error="form.errors.website" class="pb-8 pr-6 w-full lg:w-1/2"
					            label="Website"/>
					<text-input v-model="form.postal_code" :error="form.errors.postal_code" class="pb-8 pr-6 w-full lg:w-1/2"
					            label="Postal code"/>
					<text-input v-model="form.house_number" :error="form.errors.house_number" class="pb-8 pr-6 w-full lg:w-1/2"
					            label="House number"/>

					<text-input v-model="form.street_name" :error="form.errors.street_name" class="pb-8 pr-6 w-full lg:w-1/2"
					            label="Street name" :disabled="true"/>
					<text-input v-model="form.city" :error="form.errors.city" class="pb-8 pr-6 w-full lg:w-1/2"
					            label="City"
					            :disabled="true"
					/>
					<text-input v-model="form.province" :error="form.errors.province" class="pb-8 pr-6 w-full lg:w-1/2"
					            label="Province" :disabled="true"/>
				</div>
				<div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">
					<loading-button :loading="form.processing" type="submit">Create Datespot</loading-button>
				</div>
			</form>
		</div>

	</div>
</template>

<script>
import {Head, Link} from '@inertiajs/vue3'
import Icon from '@/Pages/Admin/Shared/Icon.vue'
import TextInput from '@/Pages/Admin/Shared/TextInput.vue'
import SelectInput from '@/Pages/Admin/Shared/SelectInput.vue'
import LoadingButton from '@/Pages/Admin/Shared/LoadingButton.vue'
import TrashedMessage from '@/Pages/Admin/Shared/TrashedMessage.vue'
import AdminAppLayout from "@/Pages/Admin/AdminAppLayout.vue";
import _ from 'lodash';

export default {
	components: {
		Head,
		Icon,
		Link,
		LoadingButton,
		SelectInput,
		TextInput,
		TrashedMessage,
	},
	layout: AdminAppLayout,
	props: {
		types: Object,
	},
	watch: {
		'form.postal_code'(newVal) {
			if (newVal && this.form.house_number) {
				this.handleAddressDetails()
			}
		},
		'form.house_number'(newVal) {
			if (newVal && this.form.postal_code) {
				this.handleAddressDetails()
			}
		}
	},
	remember: 'form',
	data() {
		return {
			form: this.$inertia.form({
				name: '',
				email: '',
				phone_number: '',
				street_name: '',
				house_number: '',
				city: '',
				province: '',
				postal_code: '',
				website: '',
				lat: '',
				lng: '',
			}),
		}
	},
	methods: {
		store() {
			this.form.post('/admin/users')
		},
		handleAddressDetails: _.debounce(function () {
			this.fetchAddressDetails();
		}, 2000),
		fetchAddressDetails() {
			const url = '/api/getAddressDetails';
			const postalCode = this.form.postal_code;
			const houseNumber = this.form.house_number;

			axios.get(url, {
				params: {
					postal_code: postalCode,
					house_number: houseNumber
				}
			})
					.then(response => {
						if (response && response.data) {
							const addressData = response.data;

							this.form.city = addressData.city;
							this.form.province = addressData.province;
							this.form.street_name = addressData.street;
							this.form.lat = addressData.geo.lat;
							this.form.lng = addressData.geo.lon;
						}
					})
					.catch(error => {
						console.error('Error fetching address details:', error);
					});
		}
	},
}
</script>
