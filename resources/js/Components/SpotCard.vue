<script>
export default {
name: "SpotCard",
  props: {
    spotName: String,
    imageSrc: String,
    starRatings: Number,
    spotDescription: String,
    reviewsCount: Number,
    city: String
  },
  data() {
    return {
      imageURL: 'https://lh3.googleusercontent.com/places/ANXAkqHMtdv-0Lgtb08rKatMMCJ97kCQnm0QlQAiOWNy90yhK7BWs7E3ATHnTs65S0Lt38ZV4hIEY0bIAW_eV9NgkDjnVWf80qvSCtc=s1600-w4032',
    };
  }

}
</script>
<template>
  <div class="bg-white rounded-lg shadow-md">
    <div class="w-full md:flex md:flex-col">
      <!-- Spot Image-->
      <img
          :src="imageURL"
          alt="Spot Image"
          class="w-full h-32 object-cover rounded-t-lg"
      />

      <div class="p-4">
<!--        Spot name and Review SVG-->
        <div class="flex justify-between">

        <!-- Spot Name -->
        <h2 class="text-xl font-semibold">{{ spotName }}</h2>

        <!-- Review Stars svg -->
        <div class="flex items-center">
          <template v-for="i in 5">
            <svg
                class="w-6 h-6"
                :class="{ 'text-rose-700': i <= starRatings, 'text-gray-300': i > starRatings }"
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
          </template>
        </div>
        </div>

        <!-- Review Count and City -->
        <div class="flex justify-between">
          <p class="text-gray-400">{{ city }}</p>
          <p class="text-sm text-gray-400 md:text-left">{{ reviewsCount }} reviews</p>
        </div>

        <!-- Description centered -->
        <div class="flex justify-center">
        <p class="text-gray-600 text-center md:text-left mb-2">{{ spotDescription }}</p>
        </div>

        <!-- Additional Spot Details Here -->

        <button class="mt-4 bg-roseGold text-white py-2 px-4 rounded-md hover:bg-rose-700">
          Explore Date Spot
        </button>
      </div>
    </div>
  </div>
</template>




<style scoped>

</style>
