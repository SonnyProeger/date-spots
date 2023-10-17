<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import SpotCard from "@/Components/SpotCard.vue";

export default {
name: "Spots",
  components: {SpotCard, NewAppLayout}
}
</script>

<template>
  <NewAppLayout>
    <div class="container mx-auto flex">
      <!-- Sidebar -->
      <div class="w-1/4 p-4 bg-gray-100">

        <!-- Settings options -->
        <h2 class="text-lg font-semibold mb-4">Settings</h2>

        <!-- Example settings -->
        <label for="setting-1">Setting 1</label>
        <input id="setting-1" type="checkbox" v-model="setting1">
        <!-- Add more settings as needed -->

      </div>
      <div class="w-3/4 p-4 pl-0">
        <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
          <SpotCard
            :spot-name="'Asian Fantasy'"
            :spot-description="'Asian Surinamese'"
            :image-src="'test'"
            :city="'Amsterdam'"
            :star-ratings="4"
            :reviews-count="6">
          </SpotCard>
          <SpotCard
              :spot-name="'Blue Pepper Restaurant'"
              :spot-description="'Asian Surinamese'"
              :image-src="'test'"
              :city="'Amsterdam'"
              :star-ratings="4"
              :reviews-count="6">
          </SpotCard>
          <SpotCard
              :spot-name="'Blue Pepper Restaurant And Candlelight Cruises'"
              :spot-description="'a cozy little place in the heart of amsterdam'"
              :image-src="'test'"
              :city="'Amsterdam'"
              :star-ratings="4"
              :reviews-count="6">
          </SpotCard>
          <SpotCard
              :spot-name="'Blue Pepper Restaurant And Candlelight Cruises'"
              :spot-description="'a cozy little place in the heart of amsterdam'"
              :image-src="'test'"
              :city="'Amsterdam'"
              :star-ratings="4"
              :reviews-count="6">
          </SpotCard>
          <SpotCard
              :spot-name="'Blue Pepper Restaurant And Candlelight Cruises'"
              :spot-description="'a cozy little place in the heart of amsterdam'"
              :image-src="'test'"
              :city="'Amsterdam'"
              :star-ratings="4"
              :reviews-count="6">
          </SpotCard>
          <SpotCard
              :spot-name="'Blue Pepper Restaurant And Candlelight Cruises'"
              :spot-description="'a cozy little place in the heart of amsterdam'"
              :image-src="'test'"
              :city="'Amsterdam'"
              :star-ratings="4"
              :reviews-count="6">
          </SpotCard>
        </div>
      </div>
    </div>
  </NewAppLayout>
</template>

<style scoped>

</style>
