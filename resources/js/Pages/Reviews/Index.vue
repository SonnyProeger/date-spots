<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import UserReviewHero from "@/Components/UserReviewHero.vue";

export default {
	name: "Index",
	components: {UserReviewHero, NewAppLayout}
}
</script>

<template>
	<NewAppLayout>
		<UserReviewHero>

		</UserReviewHero>
	</NewAppLayout>
</template>

<style scoped>

</style>