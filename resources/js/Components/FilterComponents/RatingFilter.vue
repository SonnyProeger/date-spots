<script>
export default {
name: "RatingFilter",
  data() {
    return {
      selectedRating: null,
    };
  },
  methods: {
    updateRatingFilter(rating) {
      this.selectedRating = rating;
      // Emit an event to notify the parent component (Spots.vue) about the selected rating.
      this.$emit("rating-filter-updated", this.selectedRating);
    },
  },
}
</script>

<template>
  <div>
    <div v-for="i in 5" :key="i" @click="updateRatingFilter(i)">
      <svg
          class="w-6 h-6"
          :class="{ 'text-rose-700': i <= selectedRating, 'text-gray-300': i > selectedRating }"
          fill="currentColor"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          viewBox="0 0 24 24"
      >
        <path
            stroke="none"
            d="M12 21.35l-1.45-1.32C5.4 15.54 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 7.04-8.55 11.54L12 21.35z"
        ></path>
      </svg>
    </div>
  </div>
</template>


<style scoped>

</style>
