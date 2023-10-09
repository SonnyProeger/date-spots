<script>
export default {
    name: "Hero",
};
</script>

<template>
    <div class="min-h-screen flex grow items-center justify-center bg-cream">
        <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center">
                <h1 class="text-2xl md:text-3xl mb-8 font-serif max-w-3xl mx-auto">
                    Discover Memorable Date Spots Near You
                </h1>
                <div class="md:max-w-2xl mx-auto">
                    <p class="text-gray-800">
                        Elevate Your Date Nights with Date Spots - Your Perfect Guide to Romantic Adventures
                    </p>
                </div>
                <!-- Address Input and Search Button -->
                <div class="mb-6 mt-12">
                    <div class="flex items-center justify-center">
                        <input
                            type="text"
                            class="w-half px-4 py-2 border rounded-md mr-4 focus:outline-none"
                            placeholder="Enter your location"
                        />
                        <button
                            class="px-6 py-2 text-white bg-roseGold rounded-md hover:bg-rose-700 focus:outline-none"
                        >
                            Find Date Spots
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
</style>
