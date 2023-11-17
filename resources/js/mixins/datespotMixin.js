// datespotMixin.js

export const DatespotDetailMixin = {
    methods: {
        getStaticMapUrl() {
            const baseUrl = 'https://maps.googleapis.com/maps/api/staticmap';
            const center = `${this.datespot.lat},${this.datespot.lng}`;
            const markers = `color:red|label:A|${this.datespot.lat},${this.datespot.lng}`;
            const googleApiKey = this.$inertia.page.props.GOOGLE_API_KEY;

            return `${baseUrl}?center=${center}&zoom=15&size=370x147&maptype=roadmap&markers=${markers}&key=${googleApiKey}`;
        },
    },
    computed: {
        formattedPosition() {
            return `<span class="font-bold">#${this.datespot.position}</span> of ${this.totalDatespots} Date Spots in ${this.datespot.city}`;
        },
        getDirectionsLink() {
            return `https://www.google.com/maps/dir/?api=1&destination=${this.datespot.lat},${this.datespot.lng}`;
        },
        formattedAddress() {
            return `${this.datespot.house_number} ${this.datespot.street_name}, ${this.datespot.postal_code} ${this.datespot.city}`;
        },
        formattedTypes() {
            const types = this.datespot.types.map((type) => type.name);

            if (types.length === 0) {
                return "No types available";
            }

            return types.join(", ");
        },
        formattedCategories() {
            const categories = this.datespot.types.reduce((acc, type) => {
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
        formattedSubcategories() {
            const subcategories = this.datespot.types.reduce((acc, type) => {
                // Check if the type has categories
                if (type.categories.length > 0) {
                    // Map the subcategory names for each category
                    const subcategoryNames = type.categories.reduce((subAcc, category) => {
                        if (category.subcategories.length > 0) {
                            subAcc.push(...category.subcategories.map((subcategory) => subcategory.name));
                        }
                        return subAcc;
                    }, []);

                    acc.push(...subcategoryNames);
                }
                return acc;
            }, []);

            if (subcategories.length === 0) {
                return "No subcategories available";
            }

            return subcategories.join(", ");
        }
    },
};
