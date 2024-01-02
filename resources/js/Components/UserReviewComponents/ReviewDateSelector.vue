<script>
export default {
	name: "ReviewDateSelector",
	data() {
		return {
			selectedMonth: '', // To store the selected month
		};
	},
	computed: {
		pastMonths() {
			const today = new Date(); // Get today's date
			const months = []; // Array to store past 11 months
			const monthNames = [
				'January', 'February', 'March', 'April', 'May', 'June',
				'July', 'August', 'September', 'October', 'November', 'December'
			];

			// Loop through past 11 months from current date
			for (let i = 0; i < 11; i++) {
				const newDate = new Date(today.getFullYear(), today.getMonth() - i, 1);
				const label = `${monthNames[newDate.getMonth()]} ${newDate.getFullYear()}`;
				const value = `${newDate.getFullYear()}-${String(newDate.getMonth() + 1).padStart(2, '0')}`;

				months.push({label, value});
			}

			return months;
		},
	},
	methods: {
		emitSelectedMonth() {
			// Emit the selected month value to the parent component
			this.$emit('selected-month', this.selectedMonth);
		},
	},
}
</script>

<template>
	<div>
		<h1 class="text-2xl font-semibold mb-4">When did you go?</h1>
		<!-- Dropdown select -->
		<select v-model="selectedMonth" @change="emitSelectedMonth" class="p-2 border border-gray-300 rounded-md">
			<option value="" disabled selected>Select date</option>
			<option v-for="month in pastMonths" :key="month.value" :value="month.value">
				{{ month.label }}
			</option>
		</select>
	</div>
</template>

<style scoped>

</style>