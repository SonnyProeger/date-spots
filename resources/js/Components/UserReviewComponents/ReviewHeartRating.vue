<script>
export default {
	name: "ReviewHeartRating",
	emits: ['selected-rating'],
	data() {
		return {
			value: 0,
			hoverValue: 0,
		};
	},
	methods: {
		hoverRating(val) {
			this.hoverValue = val;
		},
		resetHover() {
			this.hoverValue = this.value;
		},
		saveRating(val) {
			this.value = val;
			this.$emit("selected-rating", val);
		},
		getRatingText() {
			const i = this.hoverValue || this.value;
			if (i <= this.hoverValue) {
				return this.getTextByRating(i);
			} else if (this.hoverValue === 0 && i <= this.value) {
				return this.getTextByRating(i);
			} else {
				return '';
			}
		},
		getTextByRating(rating) {
			switch (rating) {
				case 1:
					return "Terrible";
				case 2:
					return "Poor";
				case 3:
					return "Average";
				case 4:
					return "Good";
				case 5:
					return "Amazing";
				default:
					return "";
			}
		},
	},
}
</script>

<template>
	<h1 class="text-2xl font-semibold mb-4">How would you rate this Datespot?</h1>

	<div class="flex items-center">
		<template v-for="i in 5" :key="i">
			<div class="flex items-center">
        <span
		        @mouseover="hoverRating(i)"
		        @click="saveRating(i)"
		        @mouseleave="resetHover"
		        class="cursor-pointer relative"
        >
          <svg
		          class="w-6 h-6 lg:w-10 lg:h-12"
		          :class="{
              'text-rose-700': i <= hoverValue,
              'text-gray-300': i > hoverValue && i > value,
            }"
		          fill="currentColor"
		          stroke="currentColor"
		          stroke-width="2"
		          stroke-linecap="round"
		          stroke-linejoin="round"
		          viewBox="0 0 24 24"
          >
            <path
		            stroke="none"
		            d="M12 21.35l-1.45-1.32C5.4 15.54 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 7.04-8.55 11.54L12 21.35z"
            ></path>
            <path stroke="none" d="M12 21.35l1.45-1.32"></path>
          </svg>
        </span>
			</div>
		</template>
		<span v-if="hoverValue || value" class="ml-1">
          {{ getRatingText() }}
        </span>
	</div>
</template>

<style scoped>

</style>