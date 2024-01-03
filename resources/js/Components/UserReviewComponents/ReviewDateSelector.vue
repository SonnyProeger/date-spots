<script>
export default {
	name: "ReviewDateSelector",
	emits: ['selected-month'],
	data() {
		return {
			selectedMonth: '',
		};
	},
	computed: {
		pastMonths() {
			const today = new Date();
			const months = [];
			const monthNames = [
				'January', 'February', 'March', 'April', 'May', 'June',
				'July', 'August', 'September', 'October', 'November', 'December'
			];

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
			const [year, month] = this.selectedMonth.split('-');
			const formattedMonth = `${year}-${String(month).padStart(2, '0')}`;
			console.log(formattedMonth);

			this.$emit('selected-month', formattedMonth);
		},
	},
}
</script>

<template>
	<div>
		<h1 class="text-2xl font-semibold mb-4">When did you go?</h1>
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