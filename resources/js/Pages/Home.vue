<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Components/Welcome.vue";
import Hero from "@/Components/Hero.vue";

export default {
    name: "Home",
    components: {Hero, Welcome, AppLayout}
}
</script>

<template>
    <AppLayout title="Home">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard
            </h2>
        </template>

        <hero>

        </hero>
<!--        <div class="py-12">-->
<!--            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">-->
<!--                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">-->
<!--                    <Welcome />-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </AppLayout>
</template>

<style scoped>

</style>
