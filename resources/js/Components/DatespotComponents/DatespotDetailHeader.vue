<script>
import HeartRatingComponent from "@/Components/DatespotComponents/HeartRatingComponent.vue";
import {DatespotMixin} from "@/mixins/DatespotMixin.js";


export default {
	name: "Header",
	components: {HeartRatingComponent},
	props: {
		datespot: Object,
	},
	mixins: [DatespotMixin],
}

</script>

<template>
	<div>
		<div class="flex justify-between bg-white p-2">
			<!--		title-->
			<h1 class="text-2xl font-bold">{{ datespot.name }}</h1>
			<!--		review save and share-->
			<div class="hidden md:flex items-center space-x-2">
				<a class="text-roseGold hover:underline flex items-center space-x-1"
				   :href="route('user-review.create', {id: this.datespot.id, name: this.formattedDatespotName(this.datespot.name)})">
					<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
					     stroke-width="2" viewBox="0 0 24 24">
						<path
								d="M14.288 6.793L6.69 14.368l-.816 3.746 3.724-.839 7.588-7.583-2.9-2.9zm3.96 1.84l-2.898-2.9.556-.554A2.318 2.318 0 0117.52 4.5c.378 0 .73.104 1.031.315l.01.007.012.008c1.12.757 1.221 2.26.326 3.151l-.65.651zm-7.896 10.01l-5.99 1.35C4.34 20 4.319 20 4.298 20a.297.297 0 01-.29-.36l1.31-6.023 9.529-9.5A3.818 3.818 0 0117.52 3c.66 0 1.318.184 1.893.587a3.536 3.536 0 01.546 5.457l-9.607 9.599z"></path>
					</svg>
					<span>Review</span>
				</a>

				<div class="flex items-center space-x-1">
					<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
					     stroke-width="2" viewBox="0 0 24 24">
						<path
								d="M19.665 6.346a5.018 5.018 0 00-3.417-1.34c-1.27 0-2.491.478-3.417 1.34l-.84.802-.859-.812A5.019 5.019 0 007.72 5a5.019 5.019 0 00-3.412 1.336c-1.899 1.773-1.579 4.508-.01 6.43A101.233 101.233 0 0011.99 20s5.995-5.143 7.674-7.224c1.679-2.08 1.879-4.657 0-6.43z"></path>
						<path clip-rule="evenodd"
						      d="M3.968 5.969A5.519 5.519 0 017.72 4.5c1.392 0 2.734.525 3.752 1.469l.004.003.513.486.501-.479a5.519 5.519 0 013.758-1.474c1.395 0 2.739.527 3.758 1.474l.002.003c1.042.984 1.519 2.207 1.49 3.475-.027 1.257-.55 2.525-1.444 3.633-.869 1.077-2.82 2.91-4.52 4.45a184.435 184.435 0 01-3.149 2.78l-.068.06-.326-.38.326.38-.323.277-.326-.275a101.716 101.716 0 01-7.731-7.27l-.014-.014-.013-.015c-1.673-2.051-2.098-5.1.056-7.113l.002-.001zm8.02 13.373a182.874 182.874 0 002.874-2.544c1.718-1.553 3.604-3.332 4.414-4.336.784-.972 1.201-2.033 1.223-3.027.022-.984-.34-1.935-1.176-2.725a4.269 4.269 0 00-2.904-1.138 4.269 4.269 0 00-2.903 1.136l-1.35 1.292-1.375-1.3a4.269 4.269 0 00-2.9-1.133 4.269 4.269 0 00-2.901 1.135c-1.507 1.408-1.353 3.659.042 5.385a100.45 100.45 0 007.316 6.907z"
						      fill-rule="evenodd"></path>
					</svg>
					<span>Save</span>
				</div>

				<div class="share">
            <span>
                <div class="tSJmJ S5 H4 _S qNoXj">
                    <span><span class="ui_icon share LWEmz"></span><span class="dScTn">Share</span></span>
                </div>
            </span>
				</div>
			</div>
		</div>

		<!--below title-->
		<div class="flex flex-col bg-white pb-2 pl-2 pr-2">
			<!--		reviews spotranking and categories-->
			<div class="md:flex">
				<div class="flex flex-row gap-1">
					<HeartRatingComponent
							:rating="datespot.rating"
					>
					</HeartRatingComponent>
					<b class="md:pb-2 text-md">{{ datespot.reviews_count }} reviews</b>
				</div>

				<!-- vertical separator -->
				<div class="hidden md:block border-l mx-2 my-1 h-4"></div>

				<p v-html="formattedPosition" class="hidden md:block "></p>

				<!-- vertical separator -->
				<div class="hidden md:block border-l mx-2 my-1 h-4"></div>

				<div class="flex flex-row">
					<p> {{ formattedCategories }} </p>
				</div>
			</div>

			<!--		address-->
			<div class="hidden md:flex flex-row text-sm">
				<div class="flex items-center space-x-1">
					<svg class="d Vb icjEL" height="20px" viewBox="0 0 24 24" width="20px">
						<path
								d="M12 2C7.745 2 4.27 5.475 4.27 9.73c0 4.539 4.539 9.056 6.971 11.486L12 22l.759-.761c2.433-2.453 6.972-6.97 6.972-11.509C19.73 5.475 16.256 2 12 2zm0 10.986c-1.93 0-3.5-1.569-3.5-3.5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.931-1.57 3.5-3.5 3.5z">
						</path>
					</svg>

					<a :href="getDirectionsLink"
					   target="_blank"
					   class="hover:underline"
					>
						{{ formattedAddress }}
					</a>
				</div>

				<!-- vertical separator -->
				<div class="border-l mx-2 my-1 h-4"></div>

				<!--			phone number-->
				<div class="flex items-center space-x-1">
					<svg class="d Vb icjEL" height="20px" viewBox="0 0 24 24" width="20px">
						<path clip-rule="evenodd"
						      d="M6.525 2.011l5.173 5.176-1.826 2.725.096.207c.167.348.427.829.8 1.347.707.986 1.796 2.082 3.383 2.7l3.168-1.354 4.671 4.674-3.152 4.2-.32.038-.087-.745.086.745h-.004l-.006.001-.018.002a5.117 5.117 0 01-.265.017c-.175.007-.424.01-.737-.004a12.514 12.514 0 01-2.557-.399c-2.109-.547-4.89-1.794-7.668-4.574-2.781-2.783-4.037-5.574-4.591-7.69a12.69 12.69 0 01-.409-2.568 8.769 8.769 0 01.003-.946l.005-.06.002-.018V5.48l.001-.002s0-.002.746.08l-.746-.082.036-.325 4.216-3.139zM3.751 5.947c-.002.127 0 .29.01.487.026.538.114 1.318.361 2.262.493 1.884 1.625 4.433 4.2 7.01 2.573 2.575 5.111 3.698 6.984 4.184.94.243 1.716.327 2.25.351.196.01.359.01.485.008l1.969-2.623-3.035-3.036-2.773 1.185-.272-.093c-2.115-.726-3.517-2.137-4.381-3.341a10.51 10.51 0 01-.934-1.574 8.35 8.35 0 01-.29-.682l-.004-.012-.002-.005v-.001s0-.002.71-.242l-.71.24-.12-.35 1.567-2.339L6.38 3.99 3.75 5.947z"
						      fill-rule="evenodd">
						</path>
					</svg>
					<a class="hover:underline"
					   :href="'tel:'+datespot.phone_number"
					> {{ datespot.phone_number }}</a>
				</div>

				<!-- vertical separator -->
				<div class=" border-l mx-2 my-1 h-4"></div>

				<!--			website url-->
				<div class="flex items-center space-x-1">
					<svg class="d Vb icjEL" height="20px" viewBox="0 0 24 24" width="20px">
						<path clip-rule="evenodd"
						      d="M22.507 17.952c0-.416-.369-.605-.45-.643a1.432 1.432 0 00-.338-.105 4.647 4.647 0 00-.595-.064c-.403-.022-.88-.022-1.195-.022H4.267c-.776 0-1.293.01-1.621.04-.152.015-.34.04-.507.103a.912.912 0 00-.338.217.683.683 0 00-.196.473v.667h20.902v-.666zM18.287 5.893H5.809v8.447h12.478V5.893zm-13.978-1.5V15.84h15.478V4.393H4.309z"
						      fill-rule="evenodd">
						</path>
					</svg>
					<a class="hover:underline"
					   target="_blank"
					   :href="datespot.website"
					>
						Website
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>
