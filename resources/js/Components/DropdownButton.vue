<script>
import {Link} from "@inertiajs/vue3";

export default {
	name: "DropdownButton",
	components: {Link}
}
</script>

<template>
	<div>
		<button
				class="block px-4 py-2 w-full text-left text-sm leading-5 text-gray-700 hover:text-white hover:bg-roseGold focus:outline-none focus:bg-roseGold duration-150 ease-in-out">
			<slot/>
		</button>
	</div>
</template>

<style scoped>

</style>