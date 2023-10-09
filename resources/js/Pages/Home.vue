<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import Welcome from "@/Components/Welcome.vue";
import Hero from "@/Components/Hero.vue";
import NewAppLayout from "@/Layouts/newAppLayout.vue";

export default {
    name: "Home",
    components: {NewAppLayout, Hero, Welcome, AppLayout}
}
</script>

<template>
    <newAppLayout>
        <hero>

        </hero>
<!--        <div class="py-12">-->
<!--            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">-->
<!--                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">-->
<!--                    <Welcome />-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
    </newAppLayout>
</template>

<style scoped>

</style>
