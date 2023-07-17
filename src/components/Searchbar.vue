<template>
  <div class="searchbar">
    <nav>
        <input v-model="location" class="text-input" type="text" @input="fetchData" />
        <DropdownSelector :options="priceOptions" :defaultOption="selectedPrice" />
        <DropdownSelector :options="bedsOptions" :defaultOption="selectedBed" />
        <DropdownSelector :options="houseTypeOptions" :defaultOption="selectedType" />
        <DropdownSelector :options="lifestyleOptions" :defaultOption="selectedLifestyle" />
        <DropdownSelector :options="calendar" :defaultOption="selectedDate" />
        <DropdownSelector :options="moreOptions" :defaultOption="moreOption" />
        <a href="#" >Sort</a>
        <a href="#" >Save Search</a>
    </nav>
  </div>
  <div>
    <li></li>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue';
import DropdownSelector from "@/components/CustomDropdown.vue";

export default defineComponent({
  name: 'Searchbar',
  components: {
    DropdownSelector,
  },
  data() {
    return {
      location: 'Location',
      priceOptions: ['$2,000', '$2,500', '$3,000', '$4,000', '$5,000', '$9,000'],
      selectedPrice: 'Price',
      bedsOptions: ['1','2','3','4+'],
      selectedBed: 'Beds',
      houseTypeOptions: ['Apartments', 'Houses', 'Condos', 'WB' ],
      selectedType: 'Type',
      lifestyleOptions : ['Student','Senior Housing','Short Term','WBS'],
      selectedLifestyle: 'Lifestyle',
      calendar: ['1,2,3'],
      selectedDate: 'Move-In-Date',
      moreOptions: 'Date',
      moreOption: 'More'




    };
  },
  methods: {
    fetchData() {
      // Call your API here based on the text input value
      console.log('API called with:', this.textInput);
    }
  }

})

  </script>

<style>
 .searchbar {
    padding: 10px; /* Adjust the initial padding size as needed */
   background-color: #80808040;
  }

  @media screen and (max-width: 600px) {
    /* Adjust the maximum width as needed */
    .searchbar {
      padding: 5px; /* Adjust the padding size for smaller screens */
    }
  }

.navigation {
  display: flex;
  list-style: none;
  padding: 0;
}

.navigation li {
  margin-right: 1000px;
}

.navigation li:last-child {
  margin-right: 10;
}
</style>
