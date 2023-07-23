<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <div class="radio-options">
      <label v-for="option in options" :key="option">
        <input type="radio" :value="option" v-model="selectedOption" />
        {{ option }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const { label, options } = defineProps(['label', 'options']);
const selectedOption = ref('');
</script>

<style scoped>
/* Add custom radio button group styles here if needed */
.form-group {
  margin-bottom: 10px;
}

.radio-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.radio-options label {
  display: flex;
  align-items: center;
}

.radio-options input {
  margin-right: 5px;
}
</style>
