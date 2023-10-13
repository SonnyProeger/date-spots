<script>
export default {
    name: "HowItWorks"
}
</script>

<template>
    <div class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-extrabold text-gray-900 text-center">How It Works</h2>
            <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3">
                <!-- Step 1: Enter Location -->
                <div class="group relative">
                    <div class="rounded-lg overflow-hidden bg-roseGold group-hover:bg-rose-700 p-4">
                        <!-- Step 1 Icon/Image -->
                        <img src="../../../public/images/location.png" alt="Location Icon" class="w-16 h-16 mx-auto" />
                        <!-- Step 1 Description -->
                        <p class="mt-2 text-lg font-medium text-white">1. Enter Location</p>
                        <p class="mt-1 text-black">Tell us where you would like to go for your date night.</p>
                    </div>
                </div>

                <!-- Step 2: Find Date Spot -->
                <div class="group relative">
                    <div class="rounded-lg overflow-hidden bg-roseGold group-hover:bg-rose-700 p-4">
                        <!-- Step 2 Icon/Image -->
                        <img src="../../../public/images/answer.png" alt="Search Icon" class="w-16 h-16 mx-auto" />
                        <!-- Step 2 Description -->
                        <p class="mt-2 text-lg font-medium text-white">2. Find Date Spot</p>
                        <p class="mt-1 text-black">Browse our amazing date spot recommendations.</p>
                    </div>
                </div>

                <!-- Step 3: Go on a Date -->
                <div class="group relative">
                    <div class="rounded-lg overflow-hidden bg-roseGold group-hover:bg-rose-700 p-4">
                        <!-- Step 3 Icon/Image -->
                        <img src="../../../public/images/dating.png" alt="Date Icon" class="w-16 h-16 mx-auto" />
                        <!-- Step 3 Description -->
                        <p class="mt-2 text-lg font-medium text-white">3. Go on a Date</p>
                        <p class="mt-1 text-black">Plan your perfect date night and make lasting memories.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-8">
            <!-- CTA Button -->
            <a href="#" class="text-white bg-roseGold hover:bg-rose-700 px-6 py-3 rounded-md text-lg font-medium transition duration-300 ease-in-out">
                Get Started
            </a>
        </div>
    </div>
</template>


<style scoped>

</style>
