<template>
  <div class="textbox-container">
    <input v-model="textInput" class="text-input" type="text" @input="fetchData" />
    <button @click="search" class="search-button">Search</button>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref} from 'vue';
import DropdownSelector from "@/assets/CustomDropdown.vue";

export default defineComponent({
  name: 'ComponentSearchPage',
  components: {
    DropdownSelector,
  },
  data() {
    return {
      textInput: 'Pallav'
    };
  },
  methods: {
    fetchData() {
      // Call your API here based on the text input value
      console.log('API called with:', this.textInput);
    },
    search() {
      // Perform search logic based on the input values
      console.log('Search button clicked');
      console.log('Text input:', this.textInput);
      console.log('Selected option:', this.selectedOption);
    },

  },
});
</script>

<style scoped>
@import '@/assets/searchBoard.css';
</style>


