<script>
import {Head, Link} from '@inertiajs/vue3'
import Icon from '@/Pages/Admin/Shared/Icon.vue'
import SearchFilter from '@/Pages/Admin/Shared/SearchFilter.vue'
import AdminAppLayout from "@/Pages/Admin/AdminAppLayout.vue";
import Pagination from "@/Pages/Admin/Shared/Pagination.vue";
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'
import pickBy from "lodash/pickBy";
import {AdminUsersMixin} from "@/mixins/AdminUsersMixin.js";

export default {
	components: {
		Pagination,
		Head,
		Icon,
		Link,
		SearchFilter,
	},
	mixins: [AdminUsersMixin],
	layout: AdminAppLayout,
	props: {
		filters: Object,
		types: Object,
	},
	created() {
		console.log(this.types);
	},
	data() {
		return {
			form: {
				search: this.filters.search,
				role: this.filters.role,
				trashed: this.filters.trashed,
			},
		}
	},
	watch: {
		form: {
			deep: true,
			handler: throttle(function () {
				this.$inertia.get('/admin/types', pickBy(this.form),
						{
							preserveState: true,
							replace: true,
						})
			}, 150),
		},
	},
	methods: {
		reset() {
			this.form = mapValues(this.form, () => null)
		},
	},
}
</script>


<template>
	<div>
		<Head title="Types"/>
		<h1 class="mb-8 text-3xl font-bold">Types</h1>
		<div class="flex items-center justify-between mb-6">
			<search-filter v-model="form.search" class="mr-4 w-full max-w-md" @reset="reset">
				<label class="block mt-4 text-gray-700">Trashed:</label>
				<select v-model="form.trashed" class="form-select mt-1 w-full">
					<option :value="null"/>
					<option value="with">With Trashed</option>
					<option value="only">Only Trashed</option>
				</select>
			</search-filter>
			<Link class="btn-roseGold" :href="route('types.create')">
				<span>Create</span>
				<span class="hidden md:inline">&nbsp;Type</span>
			</Link>
		</div>
		<div class="bg-white rounded-md shadow overflow-x-auto">
			<table class="w-full whitespace-nowrap">
				<tr class="text-left font-bold">
					<th class="pb-4 pt-6 px-6">Name</th>
				</tr>
				<tr v-for="type in types.data" :key="type.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
					<td class="border-t">
						<Link class="flex items-center px-6 py-4 focus:text-indigo-500" :href="route('types.edit', type.id)">
							{{ type.name }}
							<icon v-if="type.deleted_at" name="trash" class="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"/>
						</Link>
					</td>
				</tr>
				<tr v-if="types.data.length === 0">
					<td class="px-6 py-4 border-t" colspan="4">No types found.</td>
				</tr>
			</table>
		</div>
		<pagination class="mt-6" :links="types.links"/>

	</div>

</template>
