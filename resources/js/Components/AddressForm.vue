<script>
export default {
  name: "AddressForm",
  mounted() {
    let addressField = document.getElementById("addressSearchBar");
    let autocomplete;
    let location;
    autocomplete = new google.maps.places.Autocomplete(
       addressField,
       {
         componentRestrictions: {
           country: ['nl']
         },
       }
    );
    autocomplete.addListener("place_changed", () => {
      const selectedPlace = autocomplete.getPlace();
      if (selectedPlace.geometry){
        location = [selectedPlace.geometry.location.lat(),selectedPlace.geometry.location.lng()]
        this.$emit("address-updated", location)
      }
      else {
        console.error("Invalid geometry information for the selected place:", selectedPlace);
      }
    });
  },
}
</script>

<template>
  <input
      id="addressSearchBar"
      type="text"
      class="w-1/2 px-4 py-2 border rounded-md mr-4 focus:outline-none"
      placeholder="Enter your location"
  />
</template>

<style scoped>

</style>
