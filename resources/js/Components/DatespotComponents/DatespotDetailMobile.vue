<script>
import {Link} from "@inertiajs/vue3";
import {DatespotMixin} from "@/mixins/DatespotMixin.js";

export default {
	name: "DatespotDetailMobile",
	components: {Link},
	props: {
		datespot: Object,
	},
	mixins: [DatespotMixin],
}
</script>

<template>

	<!--				mobile only!-->
	<div class="md:hidden grid grid-cols-4 gap-4 bg-white p-4 justify-center items-center">
		<!-- Phone -->
		<a :href="'tel:'+datespot.phone_number" class="flex flex-col items-center text-gray-600 text-center">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
			     stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round"
				      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
			</svg>

			<div class="">Call</div>
		</a>

		<!-- Route -->
		<a :href="getDirectionsLink"
		   class="flex flex-col items-center text-gray-600">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
			     stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round"
				      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/>
			</svg>
			<div class="">Route</div>
		</a>

		<!-- Website -->
		<a :href="datespot.website"
		   class="flex flex-col items-center text-gray-600 hqTWt" target="_blank">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
			     stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round"
				      d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"/>
			</svg>
			<div class="">Website</div>
		</a>

		<!-- Review -->
		<Link href="#"
		      class="flex flex-col items-center text-gray-600 hqTWt" target="_blank"
		>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
			     stroke="currentColor" class="w-6 h-6">
				<path stroke-linecap="round" stroke-linejoin="round"
				      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"/>
			</svg>
			<div class="">Review</div>
		</Link>
	</div>
</template>

<style scoped>

</style>