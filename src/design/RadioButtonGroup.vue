<template>
  <div class="form-group">
    <label>{{ label }}</label>
    <div class="radio-options">
      <label v-for="option in options" :key="option">
        <input type="radio" :value="option" v-model="selectedOption" />
        {{ option }}
      </label>
    </div>
    <!-- Use the slot here to display the additional field -->
    <div v-if="showTextField && selectedOption === showTextFieldOption">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, watch, onMounted } from 'vue';

const { label, options, showTextFieldOption } = defineProps(['label', 'options', 'showTextFieldOption']);
const selectedOption = ref('');
const showTextField = ref(false);

// Watch for changes in selectedOption and update showTextField accordingly
watch(selectedOption, (newValue) => {
  console.log('showTextFieldOption-',showTextFieldOption);
  console.log('newValue',newValue);

  if (showTextFieldOption) {
    showTextField.value = newValue === showTextFieldOption;
    console.log('showTextField.value',showTextField.value);
  }
});

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

/* Optional: Add styling for the additional field */
.additional-field {
  margin-top: 5px;
  padding: 5px;
  width: 100%;
}
</style>
