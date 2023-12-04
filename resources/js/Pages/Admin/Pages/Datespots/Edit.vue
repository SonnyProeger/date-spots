<template>
	<div>
		<Head :title="form.name"/>
		<div class="flex justify-between max-w-3xl">

			<div>
				<h1 class="mb-8 text-3xl font-bold">
					<Link class="text-indigo-400 hover:text-indigo-600" :href="route('datespots.index')">Datespots</Link>
					<span class="text-indigo-400 font-medium">/</span>
					{{ form.name }}
				</h1>
			</div>
			<div>
				<Link class="btn-roseGold" :href="route('media.index', { datespot: datespot })">Media</Link>
			</div>
		</div>

		<trashed-message v-if="datespot.deleted_at" class="mb-6" @restore="restore"> This datespot has been deleted.
		</trashed-message>
		<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden">
			<form @submit.prevent="update">
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
				<div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">
					<button v-if="!datespot.deleted_at" class="text-red-600 hover:underline" tabindex="-1" type="button"
					        @click="destroy">Delete Datespot
					</button>
					<loading-button :loading="form.processing" class="btn-roseGold ml-auto" type="submit">Update Datespot
					</loading-button>
				</div>
			</form>
		</div>
		<h2 class="mt-12 text-2xl font-bold">Contact</h2>
		<div class="mt-6 bg-white rounded shadow overflow-x-auto">
			<table class="w-full whitespace-nowrap">
				<tr class="text-left font-bold">
					<th class="pb-4 pt-6 px-6">Name</th>
					<th class="pb-4 pt-6 px-6" colspan="2">Email</th>
				</tr>
				<tr v-if="datespot.user === null">
					<td class="px-6 py-4 border-t" colspan="4">No contact found.</td>
				</tr>
				<tr v-else class="hover:bg-gray-100 focus-within:bg-gray-100">
					<td class="border-t">
						<Link class="flex items-center px-6 py-4 focus:text-indigo-500"
						      :href="`admin/users/${datespot.user.id}/edit`">
							{{ datespot.user.name }}
							<icon v-if="datespot.user.deleted_at" name="trash" class="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"/>
						</Link>
					</td>
					<td class="border-t">
						<Link class="flex items-center px-6 py-4" :href="`/admin/users/${datespot.user.id}/edit`" tabindex="-1">
							{{ datespot.user.email }}
						</Link>
					</td>
					<td class="w-px border-t">
						<Link class="flex items-center px-4" :href="`/admin/user/${datespot.user.id}/edit`" tabindex="-1">
							<icon name="cheveron-right" class="block w-6 h-6 fill-gray-400"/>
						</Link>
					</td>
				</tr>

			</table>
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
		datespot: Object,
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
	created() {
		console.log(this.datespot)
	},
	remember: 'form',
	data() {
		return {
			form: this.$inertia.form({
				name: this.datespot.name,
				email: this.datespot.email,
				phone_number: this.datespot.phone_number,
				street_name: this.datespot.street_name,
				house_number: this.datespot.house_number,
				city: this.datespot.city,
				province: this.datespot.province,
				postal_code: this.datespot.postal_code,
				website: this.datespot.website,
				lat: this.datespot.lat,
				lng: this.datespot.lng,
			}),
		}
	},
	methods: {
		update() {
			this.form.put(`/admin/datespots/${this.datespot.id}`)
		},
		destroy() {
			if (confirm('Are you sure you want to delete this datespot?')) {
				this.$inertia.delete(`/admin/datespots/${this.datespot.id}`)
			}
		},
		restore() {
			if (confirm('Are you sure you want to restore this datespot?')) {
				this.$inertia.put(`/admin/datespots/${this.datespot.id}/restore`)
			}
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
