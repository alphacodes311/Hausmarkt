<template>
    <label :for="labelFor">{{ label }}</label>
    <input :type="type" :id="labelFor" :value="value" @input="$emit('input', $event.target.value)" :required="required" />

</template>

<script setup>
import { defineProps } from 'vue';

const { label, labelFor, type, value, required } = defineProps(['label', 'labelFor', 'type', 'value', 'required']);
</script>

<style scoped>
/* Add custom form group styles here if needed */
.form-group {
  margin-bottom: 10px;
}
</style>
