<script>
import {Head, Link} from '@inertiajs/vue3'
import Icon from '@/Pages/Admin/Shared/Icon.vue'
import SearchFilter from '@/Pages/Admin/Shared/SearchFilter.vue'
import AdminAppLayout from "@/Layouts/AdminAppLayout.vue";
import Pagination from "@/Pages/Admin/Shared/Pagination.vue";
import throttle from 'lodash/throttle'
import mapValues from 'lodash/mapValues'
import pickBy from "lodash/pickBy";

export default {
	components: {
		Pagination,
		Head,
		Icon,
		Link,
		SearchFilter,
	},
	layout: AdminAppLayout,
	props: {
		filters: Object,
		subcategories: Object,
	},
	created() {
		console.log(this.subcategories);
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
				this.$inertia.get('/admin/subcategories', pickBy(this.form),
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
		<Head title="Subcategories"/>
		<h1 class="mb-8 text-3xl font-bold">Subcategories</h1>
		<div class="flex items-center justify-between mb-6">
			<search-filter v-model="form.search" class="mr-4 w-full max-w-md" @reset="reset">
				<label class="block mt-4 text-gray-700">Trashed:</label>
				<select v-model="form.trashed" class="form-select mt-1 w-full">
					<option :value="null"/>
					<option value="with">With Trashed</option>
					<option value="only">Only Trashed</option>
				</select>
			</search-filter>
			<Link class="btn-roseGold" :href="route('subcategories.create')">
				<span>Create</span>
				<span class="hidden md:inline">&nbsp;Subcategory</span>
			</Link>
		</div>
		<div class="bg-white rounded-md shadow overflow-x-auto">
			<table class="w-full whitespace-nowrap">
				<tr class="text-left font-bold">
					<th class="pb-4 pt-6 px-6">Name</th>
					<th class="pb-4 pt-6 px-6">Category</th>
					<th class="pb-4 pt-6 px-6">Type</th>

				</tr>
				<tr v-for="subcategory in subcategories.data" :key="subcategory.id"
				    class="hover:bg-gray-100 focus-within:bg-gray-100">
					<td class="border-t">
						<Link class="flex items-center px-6 py-4 focus:text-indigo-500"
						      :href="route('subcategories.edit', subcategory.id)">
							{{ subcategory.name }}
							<icon v-if="subcategory.deleted_at" name="trash" class="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"/>
						</Link>
					</td>
					<td class="border-t">
						<Link class="flex items-center px-6 py-4" :href="route('subcategories.edit', subcategory.id)" tabindex="-1">
							{{ subcategory.category }}
						</Link>
					</td>
					<td class="border-t">
						<Link class="flex items-center px-6 py-4" :href="route('subcategories.edit', subcategory.id)" tabindex="-1">
							{{ subcategory.type }}
						</Link>
					</td>
				</tr>
				<tr v-if="subcategories.data.length === 0">
					<td class="px-6 py-4 border-t" colspan="4">No subcategories found.</td>
				</tr>
			</table>
		</div>
		<pagination class="mt-6" :links="subcategories.links"/>
	</div>

</template>
