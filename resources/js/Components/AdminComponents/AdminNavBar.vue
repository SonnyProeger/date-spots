<script>
import PrimaryButton from "@/Components/PrimaryButton.vue";
import NavLink from "@/Components/NavLink.vue";
import {Link} from "@inertiajs/vue3";

export default {
	name: "AdminNavBar",
	components: {NavLink, PrimaryButton, Link},
	mounted() {
		console.log(this.$page.props.can);

	},
	methods: {
		pluralizeWord(word) {

			const pluralExceptions = {
				category: 'categories',
				datespot: 'datespots',
				review: 'reviews',
				subcategory: 'subcategories',
				type: 'types',
				user: 'users',
			};

			return pluralExceptions[word] || `${word}s`;
		},
		generateRoute(permission) {
			const lastWord = this.extractLastWord(permission);
			const lastWordPlural = this.pluralizeWord(lastWord);
			return `${lastWordPlural}`;
		},

		extractLastWord(permission) {
			const parts = permission.split('-');
			return parts[parts.length - 1];
		},
		formatPermissionName(permission) {
			const lastWord = this.extractLastWord(permission);
			const pluralizedWord = this.pluralizeWord(lastWord); // Pluralize the word
			const spaces = pluralizedWord.replace(/-/g, ' '); // Replace hyphens with spaces
			console.log(spaces)
			return this.capitalizeFirstLetter(spaces);
		},
		isUrl(...urls) {
			const currentUrl = this.$page.url.substr(1);

			if (urls[0] === '/admin') {
				return currentUrl === '/admin'; // Check if the current URL is empty (home page)
			}

			return urls.filter((url) => currentUrl.startsWith(url)).length
		},

	},
}
</script>

<template>
	<div class="mb-4">
		<Link class="group flex items-center py-3" :href="route('admin.dashboard')">
			<icon name="dashboard" class="mr-2 w-4 h-4"
			      :class="isUrl('') ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'"/>
			<div :class="isUrl('') ? 'text-white' : 'text-indigo-300 group-hover:text-white'">Dashboard</div>
		</Link>
	</div>
	<div v-for="(value, key) in $page.props.can" :key="key">
		<div v-if="value && key.startsWith('view-any-')" class="mb-4">
			<Link
					:href="generateRoute(key)"
					class="group flex items-center py-3"
					:class="isUrl(generateRoute(key)) ? 'text-white' : 'text-indigo-300 group-hover:text-white'"
			>
				<icon
						name="office"
						class="mr-2 w-4 h-4"
						:class="isUrl(generateRoute(key)) ? 'fill-white' : 'fill-indigo-400 group-hover:fill-white'"
				/>
				<div>{{ formatPermissionName(key) }}</div>
			</Link>
		</div>
	</div>

</template>

<style scoped>

</style>