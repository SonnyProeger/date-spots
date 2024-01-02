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
	<NewAppLayout title="Datespots">
		<div class="flex flex-col w-full">
			<Hero :homeScreen="true">

			</Hero>
			<HowItWorks>

			</HowItWorks>
		</div>
	</NewAppLayout>
</template>

<style scoped>

</style>
