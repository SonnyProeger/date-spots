<script>
import AdminAppLayout from "@/Layouts/AdminAppLayout.vue";
import {Head} from "@inertiajs/vue3";

export default {
	name: "AdminDashboard",
	components: {Head, AdminAppLayout},
}
</script>

<template>
	<AdminAppLayout title="Dashboard">
		<h1 class="mb-8 text-3xl font-bold">Dashboard</h1>
		<p class="mb-8 leading-normal">Hey there! Welcome to Datespots Admin Dashboard </p>
	</AdminAppLayout>
</template>

<style scoped>

</style>