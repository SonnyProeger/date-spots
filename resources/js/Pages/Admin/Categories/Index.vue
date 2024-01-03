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
		categories: Object,
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
				this.$inertia.get(route('categories.index'), pickBy(this.form),
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
		<Head title="Categories"/>
		<h1 class="mb-8 text-3xl font-bold">Categories</h1>
		<div class="flex items-center justify-between mb-6">
			<search-filter v-model="form.search" class="mr-4 w-full max-w-md" @reset="reset">
				<label class="block mt-4 text-gray-700">Trashed:</label>
				<select v-model="form.trashed" class="form-select mt-1 w-full">
					<option :value="null"/>
					<option value="with">With Trashed</option>
					<option value="only">Only Trashed</option>
				</select>
			</search-filter>
			<Link class="btn-roseGold" :href="route('categories.create')">
				<span>Create</span>
				<span class="hidden md:inline">&nbsp;Category</span>
			</Link>
		</div>
		<div class="bg-white rounded-md shadow overflow-x-auto">
			<table class="w-full whitespace-nowrap">
				<tr class="text-left font-bold">
					<th class="pb-4 pt-6 px-6">Name</th>
					<th class="pb-4 pt-6 px-6">Type</th>
				</tr>
				<tr v-for="category in categories.data" :key="category.id" class="hover:bg-gray-100 focus-within:bg-gray-100">
					<td class="border-t">
						<Link class="flex items-center px-6 py-4 focus:text-indigo-500"
						      :href="route('categories.edit', category.id)">
							{{ category.name }}
							<icon v-if="category.deleted_at" name="trash" class="flex-shrink-0 ml-2 w-3 h-3 fill-gray-400"/>
						</Link>
					</td>
					<td class="border-t">
						<Link class="flex items-center px-6 py-4" :href="route('categories.edit', category.id)" tabindex="-1">
							{{ category.type }}
						</Link>
					</td>
				</tr>
				<tr v-if="categories.data.length === 0">
					<td class="px-6 py-4 border-t" colspan="4">No categories found.</td>
				</tr>
			</table>
		</div>
		<pagination class="mt-6" :links="categories.links"/>

	</div>

</template>
