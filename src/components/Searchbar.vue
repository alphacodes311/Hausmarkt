<template>
  <div class="app">
    <div class="searchbar">
      <nav class="navbar">
        <div class="navbar-left">
          <input v-model="location" class="text-input" type="text" @input="onLocationChange" placeholder="Search for a city..." />
          <DropdownSelector :options="priceOptions" :defaultOption="selectedPrice"/>
          <DropdownSelector :options="bedsOptions" :defaultOption="selectedBed" />
          <DropdownSelector :options="houseTypeOptions" :defaultOption="selectedType" />
          <DropdownSelector :options="lifestyleOptions" :defaultOption="selectedLifestyle" />
          <DatepickerDropdown/>
          <DropdownSelector :defaultOption="more" />
        </div>
        <div class="navbar-right">
          <a href="#" align="right">Sort</a>
          <a href="#">Save Search</a>
        </div>
      </nav>
    </div>
    <div>
      <!-- Add your other content here -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DropdownSelector from "@/components/CustomDropdown.vue";
import DatepickerDropdown from "@/components/DatepickerDropdown.vue";

const location = ref('');
const priceOptions = ref(['$2,000', '$2,500', '$3,000', '$4,000', '$5,000', '$9,000']);
const selectedPrice = ref('Price');
const bedsOptions = ref(['1','2','3','4+']);
const selectedBed = ref('Beds');
const houseTypeOptions = ref(['Apartments', 'Houses', 'Condos', 'WB']);
const selectedType = ref('Type');
const lifestyleOptions = ref(['Student', 'Senior Housing', 'Short Term', 'WBS']);
const selectedLifestyle = ref('Lifestyle');
const more = ref('More');
</script>



<style>
 .searchbar {
    padding: 10px; /* Adjust the initial padding size as needed */
    background-color: #80808040;
    z-index: 1000;
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
  margin-right: 120px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f1f1f1;
  padding: 10px;
}

.navbar-left {
  display: flex;
}

.navbar-right {
  float: right;
}

</style>
