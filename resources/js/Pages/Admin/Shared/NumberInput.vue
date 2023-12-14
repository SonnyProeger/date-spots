<template>
	<div :class="$attrs.class">
		<label v-if="label" class="form-label" :for="id">{{ label }}:</label>
		<input :id="id" ref="input" v-bind="{ ...$attrs, class: null }" class="form-input" :class="{ error: error }"
		       type="number" :value="modelValue" @input="handleInput" step="1" min="0"/>
		<div v-if="error" class="form-error">{{ error }}</div>
	</div>
</template>

<script>
import {v4 as uuid} from 'uuid'

export default {
	name: 'NumberInput',
	inheritAttrs: false,
	props: {
		id: {
			type: String,
			default() {
				return `number-input-${uuid()}`
			},
		},
		error: String,
		label: String,
		modelValue: Number,
	},
	emits: ['update:modelValue'],
	methods: {
		handleInput(event) {
			this.$emit('update:modelValue', parseFloat(event.target.value))
		},
	},
}
</script>
