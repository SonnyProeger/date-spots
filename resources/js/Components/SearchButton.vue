<script>
export default {
  name: "SearchButton",
  props: {
    location: Object,
  },
  methods: {
    findDateSpots() {
    //   if (this.location) {
    //     let placesService;
    //     const lat = this.location[0];
    //     const lng = this.location[1];
    //     const location = new google.maps.LatLng(lat, lng);
    //     const request = {
    //       location: location,
    //       // Radius in meters
    //       radius: '5000',
    //       keyword: 'romantic'
    //     };
    //
    //     placesService = new google.maps.places.PlacesService(document.createElement("div"));
    //     placesService.nearbySearch(request, (results, status) => {
    //       if (status === google.maps.places.PlacesServiceStatus.OK) {
    //         // Handle the results here
    //         console.log("Date spots found:", results);
    //       } else {
    //         console.error("Error performing nearby search:", status);
    //       }
    //     });
    //   } else {
    //     console.error("Location is not available");
    //   }

    this.$inertia.visit(`/date-spots/${this.location}`)
    },

  }
}
</script>

<template>
  <button
      class="px-6 py-2 text-white bg-roseGold rounded-md hover:bg-rose-700 focus:outline-none"
      @click="findDateSpots()"
  >
    Find Date Spots
  </button>
</template>

<style scoped>

</style>
