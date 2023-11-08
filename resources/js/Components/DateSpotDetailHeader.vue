<script>
import HeartRatingComponent from "@/Components/HeartRatingComponent.vue";

export default {
name: "Header",
  components: {HeartRatingComponent},
  props:{
    dateSpot: Object,
    name: Object,
    name2: Object,
  },
  computed: {
    formattedAddress() {
      return `${this.dateSpot.house_number} ${this.dateSpot.street_name}, ${this.dateSpot.postal_code} ${this.dateSpot.city}, ${this.dateSpot.province}, The ${this.dateSpot.country}`;
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

  created() {
  console.log(this.dateSpot)
    console.log(this.name)
    console.log(this.name2)

  }
}

</script>

<template>
<!--  header-->
  <div class="h-32 flex flex-col grow items-center justify-center bg-white ">
    <!--      first row-->
    <div class="flex flex-row w-full h-1/4">
      <h1> {{ dateSpot.name }} </h1>
    </div>

    <!--      second row-->
    <div class="flex flex-row gap-1 w-full h-1/4">
      <div class="flex flex-row gap-1">
        <HeartRatingComponent
          :rating="dateSpot.rating"
        >
        </HeartRatingComponent>
        <b>{{ dateSpot.reviews_count }} reviews</b>
      </div>

      <div class="flex flex-row">
        <p> {{ formattedCategories }} </p>
      </div>
    </div>

<!--    third row-->
    <div class="w-full h-1/4">
      {{ formattedAddress }}
    </div>

<!--    fourth row-->
    <div class="w-full h-1/4">

    </div>
  </div>

</template>


<style scoped>

</style>
