<script>
export default {
    name: "newAppLayout",
    data() {
        return {
            isOpen: false,
        };
    },
};
</script>

<template>
    <div id="app" class="min-h-screen bg-cream text-gray-800 border-b-2">
        <div class="container mx-auto">
            <header class="md:mb-8 pt-4 px-4 flex justify-between items-center select-none">
                <div class="text-2xl font-semibold flex justify-between items-center">
                    <a href="/">
                        LOGO
                    </a>
                </div>

                <div class="text-gray-800 sm:block md:hidden">
                    <div @click="isOpen =! isOpen" v-show="!isOpen">
                        <svg
                            class="fill-current w-8 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </div>

                    <div @click="isOpen =! isOpen" v-show="isOpen">
                        <svg
                            class="fill-current w-8 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                            />
                        </svg>
                    </div>
                </div>

                <!-- Desktop Links -->
                <div class="hidden md:block text-sm">
                    <a href="/spots" class="py-2 px-3 ml-2 hover:bg-rose-700 hover:text-white rounded">
                        Spots
                    </a>

                    <a href="#" class="py-2 px-3 ml-2 hover:bg-rose-700 hover:text-white rounded">
                        Placeholder
                    </a>

                    <a href="#" class="py-2 px-3 ml-2 hover:bg-rose-700 hover:text-white rounded">
                        Placeholder
                    </a>

                    <a
                        href="#"
                        class="py-2 px-3 ml-2 hover:bg-rose-700 bg-roseGold rounded shadow-lg border text-white"
                    >
                        Login
                    </a>
                </div>
            </header>

            <!-- Mobile Links -->
            <div
                class="bg-white px-4 pt-4 select-none border-b md:hidden"
                v-if="isOpen"
            >
                <a
                    href="/spots"
                    class="block mb-2 font-semibold text-white py-2 px-3 hover:bg-rose-700 bg-roseGold rounded cursor-pointer"
                >
                    Spots
                </a>

                <a
                    href="#"
                    class="block mb-2 font-semibold text-white py-2 px-3 hover:bg-rose-700 bg-roseGold rounded cursor-pointer"
                >
                    Placeholder
                </a>

                <a
                    href="#"
                    class="block mb-2 font-semibold text-white py-2 px-3 hover:bg-rose-700 bg-roseGold rounded cursor-pointer"
                >
                    Placeholder
                </a>

                <a
                    href="#"
                    class="block mb-2 font-semibold text-white py-2 px-3 hover:bg-rose-700 bg-roseGold rounded cursor-pointer"
                >
                    Login
                </a>
            </div>
        </div>
        <main>
            <slot />
        </main>
    </div>
</template>

<style scoped>
</style>
