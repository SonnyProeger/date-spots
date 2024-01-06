// DatespotMixin.js

export const DatespotMixin = {
    data() {
        return {
            enlargedImageUrl: ''
        };
    },
    methods: {
        getStaticMapUrl() {
            const baseUrl = 'https://maps.googleapis.com/maps/api/staticmap';
            const center = `${this.datespot.lat},${this.datespot.lng}`;
            const markers = `color:red|label:A|${this.datespot.lat},${this.datespot.lng}`;
            const googleApiKey = this.$inertia.page.props.GOOGLE_API_KEY;

            return `${baseUrl}?center=${center}&zoom=15&size=370x147&maptype=roadmap&markers=${markers}&key=${googleApiKey}`;
        },
        formatProperty(items, itemName) {
            const formattedItems = items.map((item) => item.name);

            if (formattedItems.length === 0) {
                return `No ${itemName} available`;
            }

            return formattedItems.join(", ");
        },
        enlargeImage(url) {
            this.enlargedImageUrl = url;
        },
        closeEnlargeImage() {
            this.enlargedImageUrl = '';
        },
        formattedDatespotName(datespotName) {
            return datespotName.replace(/\s+/g, '-');
        },
    },
    computed: {
        formattedPosition() {
            return `<span class="font-bold">#${this.datespot.position}</span> of ${this.datespot.all_datespots} Datespots in ${this.datespot.city}`;
        },
        getDirectionsLink() {
            return `https://www.google.com/maps/dir/?api=1&destination=${this.datespot.lat},${this.datespot.lng}`;
        },
        formattedAddress() {
            return `${this.datespot.street_name} ${this.datespot.house_number} , ${this.datespot.postal_code} ${this.datespot.city}`;
        },
        formattedTypes() {
            return this.formatProperty(this.datespot.types, 'Type');
        },
        formattedCategories() {
            return this.formatProperty(this.datespot.categories, 'Category');
        },
        formattedSubcategories() {
            return this.formatProperty(this.datespot.subcategories, 'Subcategory');
        },
        filteredItems() {
            const highlightedItems = this.datespot.media.filter(item => item.is_highlighted === 1);
            const highlightedUuids = highlightedItems.map(item => item.uuid);

            const firstThreeHighlightedItems = highlightedItems.slice(0, 3);

            if (firstThreeHighlightedItems.length < 3) {
                // If there are less than 3 highlighted items,
                // get non-highlighted items to fill the gap
                const nonHighlightedItems = this.datespot.media.filter(
                    item => item.is_highlighted !== true && !highlightedUuids.includes(item.uuid)
                );

                const additionalItems = nonHighlightedItems.slice(0, 3 - firstThreeHighlightedItems.length);

                return firstThreeHighlightedItems.concat(additionalItems);
            }

            return firstThreeHighlightedItems;
        },
    },
};
