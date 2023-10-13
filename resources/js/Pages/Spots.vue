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
    <div class="container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
          <SpotCard
            :spot-name="'Romantic Restaurant'"
            :spot-description="'a cozy little place in the heart of amsterdam'"
            :image-src="'test'"
            :city="'Amsterdam'"
            :star-ratings="4"
            :reviews-count="6">
          </SpotCard>
            <SpotCard
                :spot-name="test"
                :spot-description="test"
                :image-src="test"
                :star-ratings="2"
                :reviews-count="6">
            </SpotCard>
            <SpotCard
                :spot-name="test"
                :spot-description="test"
                :image-src="test"
                :star-ratings="2"
                :reviews-count="6">
            </SpotCard>
            <SpotCard
                :spot-name="test"
                :spot-description="test"
                :image-src="test"
                :star-ratings="2"
                :reviews-count="6">
            </SpotCard>
            <SpotCard
                :spot-name="test"
                :spot-description="test"
                :image-src="test"
                :star-ratings="2"
                :reviews-count="6">
            </SpotCard>
            <SpotCard
                :spot-name="test"
                :spot-description="test"
                :image-src="test"
                :star-ratings="2"
                :reviews-count="6">
            </SpotCard>
          </div>
    </div>

  </NewAppLayout>
</template>

<style scoped>

</style>
