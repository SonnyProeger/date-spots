<script>
import {Head, Link, router} from "@inertiajs/vue3";
import Dropdown from "@/Components/Dropdown.vue";
import DropdownLink from "@/Components/DropdownLink.vue";
import Logo from "@/Pages/Admin/Shared/Logo.vue";

export default {
	name: "newAppLayout",
	components: {Logo, DropdownLink, Dropdown, Link, Head, router},
	data() {
		return {
			isOpen: false,
		};
	},
	props: {
		title: String,
	},
	methods: {
		logout() {
			router.post(route('logout'));
		}
	}
};
</script>

<template>
	<div id="app" class="flex flex-col h-screen bg-cream text-gray-800">
		<div class="container md:w-4/5 mx-auto">
			<header class="md:mb-8 md:pt-4 md:py-0 py-4 px-2 flex justify-between items-center select-none">
				<div class="text-2xl font-semibold flex justify-between items-center">
					<Link :href="route('home')">
						<Logo logo-color="black"/>
					</Link>
				</div>

				<div class="text-gray-800 sm:block md:hidden">
					<div v-show="!isOpen" @click="isOpen =! isOpen">
						<svg
								class="fill-current w-8 cursor-pointer"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
						</svg>
					</div>

					<div v-show="isOpen" @click="isOpen =! isOpen">
						<svg
								class="fill-current w-8 cursor-pointer"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
						>
							<path
									d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
							/>
						</svg>
					</div>
				</div>

				<!-- Desktop Links -->
				<div class="hidden md:block text-sm md:flex md:flex-row">
					<Link :href="route('datespots')" class="py-2 px-3 ml-2 hover:bg-rose-700 hover:text-white rounded">
						Datespots
					</Link>

					<Link class="py-2 px-3 ml-2 hover:bg-rose-700 hover:text-white rounded" href="#">
						Review
					</Link>

					<Link v-if="!$page.props.auth.user"
					      :href="route('register')"
					      class="py-2 px-3 ml-2 hover:bg-rose-700 hover:text-white rounded">
						Register
					</Link>

					<Link v-if="!$page.props.auth.user"
					      :href="route('login')"
					      class="py-2 px-3 ml-2 hover:bg-rose-700 bg-roseGold rounded shadow-lg border text-white"
					>
						Login

					</Link>

					<Dropdown v-else class="pl-8">
						<template #trigger>
							<button v-if="$page.props.jetstream.managesProfilePhotos"
							        class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-rose-700 transition duration-300 ease-in-out transform hover:border-rose-700 hover:scale-105">
								<img :alt="$page.props.auth.user.name" :src="$page.props.auth.user.profile_photo_path"
								     class="h-8 w-8 rounded-full object-cover">
							</button>

							<span v-else class="inline-flex rounded-md">
                <button
		                class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"
		                type="button">
                    {{ $page.props.auth.user.name }}

                    <svg class="ms-2 -me-0.5 h-4 w-4" fill="none"
                         stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5 8.25l-7.5 7.5-7.5-7.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </button>
            </span>
						</template>

						<template #content>
							<!-- Account Management -->
							<div class="block px-4 py-2 text-xs text-gray-400">
								Manage Account
							</div>

							<DropdownLink :href="route('profile.show')"
							              class=""
							>
								Profile
							</DropdownLink>

							<DropdownLink v-if="$page.props.jetstream.hasApiFeatures" :href="route('api-tokens.index')">
								API Tokens
							</DropdownLink>

							<div class="border-t border-gray-200"/>

							<!-- Authentication -->
							<form @submit.prevent="logout">
								<DropdownLink as="button">
									Log Out
								</DropdownLink>
							</form>
						</template>
					</Dropdown>
				</div>
			</header>

			<!-- Mobile Links -->
			<div
					v-if="isOpen"
					class="bg-white px-4 pt-4 select-none border-b md:hidden"
			>
				<Link
						:href="route('datespots')"
						class="block mb-2 font-semibold text-white py-2 px-3 hover:bg-rose-700 bg-roseGold rounded cursor-pointer"
				>
					Datespots
				</Link>

				<Link
						class="block mb-2 font-semibold text-white py-2 px-3 hover:bg-rose-700 bg-roseGold rounded cursor-pointer"
						href="#"
				>
					Review
				</Link>

				<Link
						:href="route('register')"
						class="block mb-2 font-semibold text-white py-2 px-3 hover:bg-rose-700 bg-roseGold rounded cursor-pointer"
				>
					Register
				</Link>

				<Link
						:href="route('login')"
						class="block mb-2 font-semibold text-white py-2 px-3 hover:bg-rose-700 bg-roseGold rounded cursor-pointer"
				>
					Login
				</Link>
			</div>
		</div>
		<main class="flex flex-1">
			<slot/>
		</main>
		<footer class="flex justify-center py-4 text-gray-500 text-sm bg-cream">
			&copy; 2023 Datespots. All rights reserved.
		</footer>
	</div>
	<!-- Footer Section -->

</template>

<style scoped>
</style>
