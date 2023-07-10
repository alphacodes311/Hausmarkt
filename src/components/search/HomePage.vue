<template>
  <div class="textbox-container">
    <input v-model="textInput" class="text-input" type="text" @input="fetchData" />
    <select v-model="selectedOption" class="select-input">
      <option value="rent">Rent</option>
      <option value="buy">Buy</option>
    </select>

    <div>
    <DropdownSelector :options="priceOptions" :defaultOption="selectedPrice" />

    </div>

    <button @click="search" class="search-button">Search</button>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref} from 'vue';
import DropdownSelector from "@/assets/CustomDropdown.vue";

export default defineComponent({
  name: 'TextBoxContainer',
  components: {
    DropdownSelector,
  },
  data() {
    return {
      textInput: 'Location',
      selectedOption: 'rent',
      selectedPrice: 'Price',
      minValue: '',
      maxValue: '',
      priceOptions: ['$2,000', '$2,500', '$3,000', '$4,000', '$5,000', '$9,000'],
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
      this.$router.push('/search');
    },

  },
});
</script>

<style scoped>
@import '@/assets/searchBoard.css';
</style>


