<script>
import Hero from "@/Components/Hero.vue";
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import HowItWorks from "@/Components/HowItWorks.vue";

export default {
    name: "Home",
    components: {HowItWorks, NewAppLayout, Hero}
}
</script>

<template>
    <newAppLayout>
        <div class="flex flex-col">
            <hero>

            </hero>
            <howItWorks>

            </howItWorks>
        </div>
    </newAppLayout>
</template>

<style scoped>

</style>
