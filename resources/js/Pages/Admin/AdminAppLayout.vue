<script>
import {Link, router} from "@inertiajs/vue3";
import Icon from '@/Pages/Admin/Shared/Icon.vue'
import Logo from '@/Pages/Admin/Shared/Logo.vue'
import Dropdown from '@/Pages/Admin/Shared/Dropdown.vue'
import MainMenu from '@/Pages/Admin/Shared/MainMenu.vue'
import FlashMessages from '@/Pages/Admin/Shared/FlashMessages.vue'
import DropdownLink from "@/Components/DropdownLink.vue";

export default {
	name: "AdminAppLayout",
	components: {
		DropdownLink,
		Dropdown,
		FlashMessages,
		Icon,
		Link,
		Logo,
		MainMenu,
	},
	props: {
		auth: Object,
	},
	methods: {
		logout() {
			router.post(route('logout'));
		}
	},
}
</script>


<template>
	<div>
		<div id="dropdown"/>
		<div class="md:flex md:flex-col">
			<div class="md:flex md:flex-col md:h-screen">
				<div class="md:flex md:flex-shrink-0">
					<div
							class="flex items-center justify-between px-6 py-4 bg-darkRoseGold md:flex-shrink-0 md:justify-center md:w-56">
						<Link class="mt-1" :href="route('admin.dashboard')">
							<Logo logo-color="white" width="120" height="28"/>
						</Link>
						<dropdown class="md:hidden" placement="bottom-end">
							<template #default>
								<svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
								</svg>
							</template>
							<template #dropdown>
								<div class="mt-2 px-8 py-4 bg-indigo-800 rounded shadow-lg">
									<main-menu/>
								</div>
							</template>
						</dropdown>
					</div>
					<div
							class="md:text-md flex items-center justify-between p-4 w-full text-sm bg-white border-b md:px-12 md:py-0">
						<div class="mr-4 mt-1">{{ $page.props.auth.user.name }}</div>
						<dropdown class="mt-1" placement="bottom-end">
							<template #default>
								<div class="group flex items-center cursor-pointer select-none">
									<div class="mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap">
										<span>{{ $page.props.auth.user.email }}</span>
									</div>
									<icon class="w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600"
									      name="cheveron-down"/>
								</div>
							</template>
							<template #dropdown>
								<div class="mt-2 py-2 text-sm bg-white rounded shadow-xl">
									<DropdownLink as="button" :href="`admin/users/${$page.props.auth.user.id}/edit`">
										My Profile
									</DropdownLink>
									<form method="POST" @submit.prevent="logout()">
										<DropdownLink as="button">
											Log Out
										</DropdownLink>
									</form>
								</div>
							</template>
						</dropdown>
					</div>
				</div>
				<div class="md:flex md:flex-grow md:overflow-hidden">
					<main-menu class="hidden flex-shrink-0 p-12 w-56 bg-roseGold overflow-y-auto md:block"/>
					<div class="px-4 py-8 md:flex-1 md:p-12 md:overflow-y-auto bg-cream" scroll-region>
						<flash-messages/>
						<slot/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

