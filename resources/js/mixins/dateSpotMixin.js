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
        formattedCategories() {
            if (this.dateSpot.categories.length === 0) {
                return "No categories available";
            }

            const categoryNames = this.dateSpot.categories.map((category) => category.name);
            const lastCategory = categoryNames.pop(); // Remove the last category

            // If there's only one category, return it as is
            if (categoryNames.length === 0) {
                return lastCategory;
            }

            // Join all categories with commas and add the last one
            return categoryNames.join(", ") + ", " + lastCategory;
        },
    },
};
