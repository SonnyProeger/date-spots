// dateSpotMixin.js

export const dateSpotDetailMixin = {
    methods: {
        getStaticMapUrl() {
            const baseUrl = 'https://maps.googleapis.com/maps/api/staticmap';
            const center = `${this.dateSpot.lat},${this.dateSpot.lng}`;
            const markers = `color:red|label:A|${this.dateSpot.lat},${this.dateSpot.lng}`;
            const googleApiKey = this.$inertia.page.props.GOOGLE_API_KEY;

            return `${baseUrl}?center=${center}&zoom=15&size=370x147&maptype=roadmap&markers=${markers}&key=${googleApiKey}`;
        },
    },
    computed: {
        formattedPosition() {
            return `<span class="font-bold">#${this.dateSpot.position}</span> of ${this.totalDateSpots} Date Spots in ${this.dateSpot.city}`;
        },
        getDirectionsLink() {
            return `https://www.google.com/maps/dir/?api=1&destination=${this.dateSpot.lat},${this.dateSpot.lng}`;
        },
        formattedAddress() {
            return `${this.dateSpot.house_number} ${this.dateSpot.street_name}, ${this.dateSpot.postal_code} ${this.dateSpot.city}`;
        },
        formattedTypes() {
            const types = this.dateSpot.types.map((type) => type.name);

            if (types.length === 0) {
                return "No types available";
            }

            return types.join(", ");
        },
        formattedCategories() {
            const categories = this.dateSpot.types.reduce((acc, type) => {
                // Check if the type has categories
                if (type.categories.length > 0) {
                    // Map the category names for this type
                    const categoryNames = type.categories.map((category) => category.name);
                    acc.push(...categoryNames);
                }
                return acc;
            }, []);

            if (categories.length === 0) {
                return "No categories available";
            }

            // Join all categories with commas
            return categories.join(", ");
        },
        formattedSubCategories() {
            const subCategories = this.dateSpot.types.reduce((acc, type) => {
                // Check if the type has categories
                if (type.categories.length > 0) {
                    // Map the subcategory names for each category
                    const subCategoryNames = type.categories.reduce((subAcc, category) => {
                        if (category.subCategories.length > 0) {
                            subAcc.push(...category.subCategories.map((subCategory) => subCategory.name));
                        }
                        return subAcc;
                    }, []);

                    acc.push(...subCategoryNames);
                }
                return acc;
            }, []);

            if (subCategories.length === 0) {
                return "No subcategories available";
            }

            return subCategories.join(", ");
        }
    },
};
