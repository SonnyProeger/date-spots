<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import Hero from "@/Components/Hero.vue";

export default {
name: "DateSpotDetail",
  components: {Hero, NewAppLayout},
    props:{
        dateSpot: Array,
    }
}
</script>

<template>
  <NewAppLayout>
    <hero></hero>
  </NewAppLayout>
</template>

<style scoped>

</style>
