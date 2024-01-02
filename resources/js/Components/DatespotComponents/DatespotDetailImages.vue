<script>
import {DatespotDetailMixin} from "@/mixins/DatespotMixin.js";

export default {
	name: "DatespotDetailImages",
	props: {
		datespot: Object,
	},
	mixins: [DatespotDetailMixin],
}
</script>
<template>
	<div class="h-64 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-0.5">

		<template v-for="(item, index) in filteredItems" :key="index">
			<img v-if="item.collection_name === 'images'"
			     :src="item.temporary_url"
			     :alt="'Image ' + (index + 1)"
			     :class="{
             'hidden md:block': index !== 0,
             'w-full': true,
             'h-64': true,
             'object-cover': true,
             'hover:cursor-pointer': true,
           }"
			     @click="enlargeImage(item.temporary_url)"
			>

			<video v-else-if="item.collection_name === 'videos'"
			       :src="item.temporary_url"
			       controls
			       :class="{
               'hidden md:block': index !== 0,
               'w-full': true,
               'h-64': true,
               'object-cover': true
             }"
			></video>
		</template>
	</div>
	<div v-if="enlargedImageUrl !== ''"
	     class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
		<img :src="enlargedImageUrl" alt="Enlarged Image" @click="closeEnlargeImage"
		     class="max-w-full max-h-full cursor-pointer">
	</div>
</template>
<style scoped>

</style>