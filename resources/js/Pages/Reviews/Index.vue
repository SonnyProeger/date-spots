<script>
import NewAppLayout from "@/Layouts/newAppLayout.vue";
import UserReviewHero from "@/Components/UserReviewHero.vue";
import ReviewList from "@/Components/UserReviewComponents/ReviewList.vue";

export default {
	name: "Index",
	components: {ReviewList, UserReviewHero, NewAppLayout},
	props: {
		reviews: Object,
	},
}
</script>

<template>
	<NewAppLayout title="User Review">
		<div class="flex flex-col w-full">
			<UserReviewHero>

			</UserReviewHero>
			<ReviewList :reviews="this.reviews">

			</ReviewList>
		</div>
	</NewAppLayout>
</template>

<style scoped>

</style>