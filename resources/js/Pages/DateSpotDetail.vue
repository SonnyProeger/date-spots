<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import Hero from "@/Components/Hero.vue";
import DateSpotDetailHeader from "@/Components/DateSpotDetailHeader.vue";
import DateSpotCard from "@/Components/DateSpotCard.vue";

export default {
name: "DateSpotDetail",
  components: {DateSpotCard, Hero, NewAppLayout, DateSpotDetailHeader},
    props:{
        dateSpot: Object,
    }
}
</script>

<template>
  <NewAppLayout>
      <div class="container mx-auto flex">
          <DateSpotDetailHeader
            :date-spot="dateSpot"
          ></DateSpotDetailHeader>

      </div>
  </NewAppLayout>
</template>

<style scoped>

</style>
