<script>
export default {
  name: "AddressForm",
  mounted() {
    let addressField = document.getElementById("addressSearchBar");
    let autocomplete;
       autocomplete = new google.maps.places.Autocomplete(
           addressField,
           {
             componentRestrictions: {
               country: ['nl']
             },
             // types: ['address', 'cities'],
           }
       );
  }
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
