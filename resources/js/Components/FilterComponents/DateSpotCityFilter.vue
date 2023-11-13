<script>
export default {
	name: "DateSpotCityFilter",
	emits: ['saveFilter'],
	data() {
		return {
			isFilterVisible: false,
			selectedTypes: [],
			selectedCategories: [],
			selectedSubCategories: [],
			showCategories: false,
			showTypes: false,
		}
	},
	props: {
		types: Object,
		categories: Object,
		subCategories: Object,
	},
	methods: {
		selectAllSubcategories(category) {
			// Check if all subcategories within the given category are already selected
			if (this.isCategorySelected(category)) {
				// If not all are selected, select all subcategories by adding to the selectedSubCategories array
				// Filter te ones that are already added, so no duplicates

				const newSubcategories = category.subCategories
						.map(subcategory => `${category.id}-${subcategory.id}`)
						.filter(subcategory => !this.selectedSubCategories.includes(subcategory));

				this.selectedSubCategories = [...this.selectedSubCategories, ...newSubcategories];
			} else {
				// If all are selected, deselect them by removing from the selectedSubCategories array
				this.selectedSubCategories = this.selectedSubCategories.filter(value => {
					return !value.startsWith(`${category.id}-`);
				});
			}
		},

		checkIfAllSubCategoriesSelected(category, subCategory) {
			const categoryId = category.id;

			// Check if the Category is currently selected, and the specific subcategory is being deselected
			if (
					this.selectedCategories.includes(categoryId) &&
					!this.selectedSubCategories.includes(subCategory)
			) {
				// Deselect the category
				this.selectedCategories = this.selectedCategories.filter(value => value !== categoryId);
			}

			// Generate identifiers for all subcategories within the category
			const subcategoriesForCategory = category.subCategories.map(subCategory => `${category.id}-${subCategory.id}`);

			// Check if all subcategories within the category are selected
			if (subcategoriesForCategory.every(subCategory =>
					this.selectedSubCategories.includes(subCategory)
			)) {
				// If all subCategories are selected and the Category is not already selected, select the Category
				if (!this.selectedCategories.includes(categoryId)) {
					this.selectedCategories = [
						...this.selectedCategories,
						categoryId
					];
				}
			}
		},

		isCategorySelected(category) {
			// Check if "Select All" is selected for a category
			return this.selectedCategories.includes(category.id);
		},

		toggleFilter() {
			// Toggle the visibility of the filter
			this.isFilterVisible = !this.isFilterVisible;
		},

		toggleFilterDropdownMobile(dropdownType) {
			if (dropdownType === 'type') {
				this.showTypes = !this.showTypes;
			} else if (dropdownType === 'category') {
				this.showCategories = !this.showCategories;
			}
		},

		saveAndCloseFilter() {
			this.$emit('saveFilter');
			this.toggleFilter();
		},

	},

}

</script>

<template>
	<!-- Filter Desktop -->
	<div class="hidden md:block w-1/4 p-4 bg-gray-100">

		<!-- Settings options -->
		<h2 class="text-lg font-semibold mb-4">Settings</h2>

		<!-- Example settings -->
		<label for="setting-1">Setting 1</label>
		<!--				<input id="setting-1" type="checkbox" v-model="setting1">-->
		<!-- Add more settings as needed -->

	</div>

	<!--Filter Mobile-->
	<div class="block">
		<!-- Filter Button -->
		<button @click="toggleFilter"
		        class="w-full bg-roseGold text-white px-4 py-2 rounded flex items-center justify-center">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
			     stroke="currentColor" class="w-6 h-6 mr-2">
				<path stroke-linecap="round" stroke-linejoin="round"
				      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"/>
			</svg>
			Filter
		</button>
	</div>

	<!-- Filter Content (Hidden by default) -->
	<div>
		<!-- Filter overlay -->
		<div v-show="isFilterVisible" class="absolute top-0 left-0 h-full w-full bg-white flex flex-col space-y-12">
			<div class="absolute top-2 right-2 p-2" @click="toggleFilter">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
				     stroke="currentColor" class="w-6 h-6">
					<path stroke-linecap="round" stroke-linejoin="round"
					      d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
				</svg>
			</div>

			<div class="bg-white rounded">
				<p class="pl-4 text-lg font-bold">Filters</p>
				<hr class="w-full m-2">
				<div class="px-6">
					<div class="flex justify-between" @click="toggleFilterDropdownMobile('type')">
						<p class="text-md font-semibold">Types</p>
						<svg v-if="showTypes" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						     stroke-width="1.5"
						     stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
						</svg>
						<svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						     stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
						</svg>
					</div>

					<hr class="w-full m-2">

					<!-- Types filter options -->
					<div v-show="showTypes" v-for="type in types" :key="type.id">
						<input type="checkbox" v-model="selectedTypes" :value="type.id">{{ type.name }}
					</div>

					<div class="flex justify-between" @click="toggleFilterDropdownMobile('category')">
						<p class="text-md font-semibold">Categories</p>
						<svg v-if="showCategories" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
						     stroke-width="1.5"
						     stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/>
						</svg>
						<svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						     stroke="currentColor" class="w-6 h-6">
							<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"/>
						</svg>


					</div>
					<hr class="w-full m-2">

					<!-- Categories filter options -->
					<div v-show="showCategories" v-for="category in categories" :key="category.id">
						<div v-if="category.subCategories && category.subCategories.length > 0">
							<!-- If the category has subcategories, show a nested structure -->
							<div>
								<input
										type="checkbox"
										v-model="selectedCategories"
										:value="category.id"
										@change="selectAllSubcategories(category)"
								/>
								{{ category.name }}
							</div>
							<div class="pl-4">
								<!-- Subcategories filter options -->
								<div v-for="subCategory in category.subCategories" :key="subCategory.id">
									<input
											type="checkbox"
											v-model="selectedSubCategories"
											:value="`${category.id}-${subCategory.id}`"
											@change="checkIfAllSubCategoriesSelected(category, subCategory)"
									/>
									{{ subCategory.name }}
								</div>
							</div>
						</div>

						<div v-else>
							<!-- If there are no subcategories, display a regular checkbox -->
							<input
									type="checkbox"
									v-model="selectedCategories"
									:value="category.id"
							/>
							{{ category.name }}
						</div>
					</div>

					<!-- Add more filter options as needed -->

					<!-- Save and Close buttons -->
					<div class="mt-4 flex justify-center">
						<button @click="saveAndCloseFilter" class="w-full bg-roseGold text-white px-3 py-1 rounded">Filter DateSpots
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>