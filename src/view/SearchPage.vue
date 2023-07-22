<template>

  <div><searchbar /></div>

</template>


<script lang="ts">
import { defineComponent, ref} from 'vue';
import DropdownSelector from "@/components/CustomDropdown.vue";
import Searchbar from "@/components/Searchbar.vue";
export default defineComponent({
  name: 'ComponentSearchPage',
  components: {
    Searchbar,
    DropdownSelector,
  },
  data() {
    return {
      textInput: 'Pallavi'
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


