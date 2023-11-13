export const dateSpotCityFilterMixin = {
    methods: {
        selectAllCategories(type) {
            // Check if all categories within the given type are already selected
            if (this.isTypeSelected(type)) {
                // If not all are selected, select all categories by adding to the selectedCategories array
                // Filter the ones that are already added, so no duplicates

                const newCategories = type.categories
                    .map(category => `${type.id}-${category.id}`)
                    .filter(category => !this.selectedCategories.includes(category));

                this.selectedCategories = [...this.selectedCategories, ...newCategories];

            } else {
                // If all are selected, deselect them by removing from the selectedCategories array
                this.selectedCategories = this.selectedCategories.filter(value => {
                    return !value.startsWith(`${type.id}-`);
                });
            }
            type.categories.forEach(category => {
                // Trigger the selectAllSubcategories method for each category
                this.selectAllSubcategories(type, category);
            });
        },

        selectAllSubcategories(type, category) {
            const categoryId = `${type.id}-${category.id}`
            // Check if all subcategories within the given category are already selected
            if (this.isCategorySelected(categoryId)) {
                // If not all are selected, select all subcategories by adding to the selectedSubcategories array
                // Filter the ones that are already added, so no duplicates

                const newSubcategories = category.subcategories
                    .map(subcategory => `${category.id}-${subcategory.id}`)
                    .filter(subcategory => !this.selectedSubcategories.includes(subcategory));

                this.selectedSubcategories = [...this.selectedSubcategories, ...newSubcategories];
            } else {
                // If all are selected, deselect them by removing from the selectedSubcategories array
                this.selectedSubcategories = this.selectedSubcategories.filter(value => {
                    return !value.startsWith(`${category.id}-`);
                });
            }
            this.checkIfAllCategoriesSelected(type, category);
        },

        checkIfAllCategoriesSelected(type, category) {
            const typeId = type.id;

            // Check if the Category is currently selected, and the specific subcategory is being deselected
            if (
                this.selectedTypes.includes(typeId) &&
                !this.selectedCategories.includes(category)
            ) {
                // Deselect the category
                this.selectedTypes = this.selectedTypes.filter(value => value !== typeId);
            }

            // Generate identifiers for all subcategories within the category
            const categoriesForType = type.categories.map(category => `${type.id}-${category.id}`);

            // Check if all subcategories within the category are selected
            if (categoriesForType.every(category =>
                this.selectedCategories.includes(category)
            )) {
                // If all subcategories are selected and the Category is not already selected, select the Category
                if (!this.selectedTypes.includes(typeId)) {
                    this.selectedTypes = [
                        ...this.selectedTypes,
                        typeId
                    ];
                }
            }
        },

        checkIfAllSubcategoriesSelected(type, category, subcategory) {
            const categoryId = `${type.id}-${category.id}`;

            // Check if the Category is currently selected, and the specific subcategory is being deselected
            if (
                this.selectedCategories.includes(categoryId) &&
                !this.selectedSubcategories.includes(subcategory)
            ) {
                // Deselect the category
                this.selectedCategories = this.selectedCategories.filter(value => value !== categoryId);
            }

            // Generate identifiers for all subcategories within the category
            const subcategoriesForCategory = category.subcategories.map(subcategory => `${category.id}-${subcategory.id}`);

            // Check if all subcategories within the category are selected
            if (subcategoriesForCategory.every(subcategory =>
                this.selectedSubcategories.includes(subcategory)
            )) {
                // If all subcategories are selected and the Category is not already selected, select the Category
                if (!this.selectedCategories.includes(categoryId)) {
                    this.selectedCategories = [
                        ...this.selectedCategories,
                        categoryId
                    ];
                }
            }

            this.checkIfAllCategoriesSelected(type, category)
        },

        showCategoriesInFilter(typeId) {
            const index = this.showCategories.indexOf(typeId);

            if (index !== -1) {
                // If the clicked type is already visible, hide it
                this.showCategories.splice(index, 1);
            } else {
                // If a different type is clicked, show its categories
                this.showCategories.push(typeId);
            }
        },

        showSubcategoriesInFilter(CategoryId) {
            const index = this.showSubcategories.indexOf(CategoryId);

            if (index !== -1) {
                // If the clicked type is already visible, hide it
                this.showSubcategories.splice(index, 1);
            } else {
                // If a different type is clicked, show its categories
                this.showSubcategories.push(CategoryId);
            }
        },

        isCategorySelected(categoryId) {
            // Check if "Select All" is selected for a category
            return this.selectedCategories.includes(categoryId);
        },

        isTypeSelected(type) {
            // Check if "Select All" is selected for a category
            return this.selectedTypes.includes(type.id);
        },

        isShowCategorySelected(typeId) {
            return this.showCategories.includes(typeId);
        },

        isShowSubcategorySelected(categoryId) {
            return this.showSubcategories.includes(categoryId);
        },

        toggleFilter() {
            // Toggle the visibility of the filter
            this.isFilterVisible = !this.isFilterVisible;
        },
    },
};