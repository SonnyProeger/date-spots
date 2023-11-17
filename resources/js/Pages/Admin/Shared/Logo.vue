<template>
	<!--	white logo or black logo-->
	<img :src="logoColor === 'white' ? '/images/white_logo.png' : '/images/black_logo.png'"
	     alt="Logo"
	     width="120" height="28"
	>

</template>
<script>
export default {
	props: {
		logoColor: {
			type: String,
			required: true,
		},
	},
}
</script>