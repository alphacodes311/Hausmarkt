<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <div class="checkbox-options">
      <label v-for="option in options" :key="option">
        <input type="checkbox" :value="option" v-model="selectedOptions" />
        {{ option }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue';

const { label, options } = defineProps(['label', 'options']);
const selectedOptions = ref([]);
</script>

<style scoped>
/* Add custom checkbox group styles here if needed */
.form-group {
  margin-bottom: 10px;
}

.checkbox-options {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.checkbox-options label {
  display: flex;
  align-items: center;
}

.checkbox-options input {
  margin-right: 5px;
}
</style>
