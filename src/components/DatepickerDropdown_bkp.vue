<template>
  <div class="date-picker-dropdown">
    <div class="caldropdown">
      <span @click="toggleCalendar">
        <span>{{ selectedDate ? formatDate(selectedDate) : 'Select Date' }}</span>
        <i class="arrow" :class="{ 'arrow-up': showCalendar }"></i>
      </span>
    </div>
    <div class="calendar" v-show="showCalendar">
      <VueDatePicker v-model="selectedDate" @input="closeCalendar" @change="closeCalendar" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';

const selectedDate = ref(null);
const showCalendar = ref(false);

const toggleCalendar = () => {
  showCalendar.value = !showCalendar.value;
};

const closeCalendar = () => {
  showCalendar.value = false;
};

const formatDate = (date) => {
  if (!date) return '';
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};
</script>

<style>
.date-picker-dropdown {
  position: relative;
  display: inline-block;
}

.caldropdown {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.arrow {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  margin-left: 5px;
}

.arrow-up {
  transform: rotate(-135deg);
}

.calendar {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 10px;
}
</style>
