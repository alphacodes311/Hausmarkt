<template>
  <div>
    <Datepicker v-model="date" type="date" placeholder="Move-in-date" :format="format"/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref();
const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
</script>

<style>
.vue-datepicker-trigger {
  display: none;
}

</style>
