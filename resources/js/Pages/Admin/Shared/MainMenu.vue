<template>
	<div>
		<div class="mb-4">
			<Link class="group flex items-center py-3" :href="route('admin.dashboard')">
				<icon name="dashboard" class="mr-2 w-4 h-4"
				      :class="isUrl('') ? 'fill-white' : 'fill-lightRoseGold group-hover:fill-white'"/>
				<div :class="isUrl('') ? 'text-white' : 'text-lightRoseGold group-hover:text-white'">Dashboard</div>
			</Link>
		</div>
		<div v-for="(value, key) in $page.props.can" :key="key">
			<div v-if="value && key.startsWith('view-any-') || value && key.startsWith('before')" class="mb-4">
				<Link
						:href="generateRoute(key)"
						class="group flex items-center py-3"
						:class="isUrl(generateRoute(key)) ? 'text-white' : 'text-lightRoseGold hover:text-white'"
				>
					<icon
							name="office"
							class="mr-2 w-4 h-4"
							:class="isUrl(generateRoute(key)) ? 'fill-white' : 'fill-lightRoseGold group-hover:fill-white'"
					/>
					<div>{{ formatPermissionName(key) }}</div>
				</Link>
			</div>
		</div>
		<div v-if="isCompany()" class="mb-4">
			<Link class="group flex items-center py-3" :href="route('admin.dashboard')">
				<icon name="dashboard" class="mr-2 w-4 h-4"
				      :class="isUrl('') ? 'fill-white' : 'fill-lightRoseGold group-hover:fill-white'"/>
				<div :class="isUrl('') ? 'text-white' : 'text-lightRoseGold group-hover:text-white'">
					{{ this.$page.props.auth.user.role.name }}
				</div>
			</Link>
		</div>
	</div>
</template>

<script>
import {Link} from '@inertiajs/vue3'
import Icon from '@/Pages/Admin/Shared/Icon.vue'

export default {
	components: {
		Icon,
		Link,
	},
	created() {
		console.log(this.$page.props.can)
	},
	methods: {
		isSuperAdmin() {
			return this.$page.props.auth.user.role.name === 'SuperAdmin'
		},
		isCompany() {
			return this.$page.props.auth.user.role.name === 'company'
		},
		capitalizeFirstLetter(word) {
			return word.charAt(0).toUpperCase() + word.slice(1);
		},
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
			return `/admin/${lastWordPlural}`;
		},

		extractLastWord(permission) {
			const parts = permission.split('-');
			return parts[parts.length - 1];
		},
		formatPermissionName(permission) {
			const lastWord = this.extractLastWord(permission);
			const pluralizedWord = this.pluralizeWord(lastWord); // Pluralize the word
			return this.capitalizeFirstLetter(pluralizedWord); // Capitalize the first letter
		},
		isUrl(...urls) {
			const currentUrl = this.$page.url;

			if (urls[0] === '') {
				return currentUrl === '/admin'; // Check if the current URL is /admin (home page)
			}

			return urls.includes(currentUrl);
		},

	},
}
</script>
