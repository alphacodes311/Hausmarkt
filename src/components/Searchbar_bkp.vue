<template>
  <div class="app">
    <div class="searchbar">
      <nav class="navbar">
        <div class="navbar-left">
          <input v-model="location" class="text-input" type="text" @input="onLocationChange" placeholder="Search for a city..." />
          <DropdownSelector :options="priceOptions" :defaultOption="selectedPrice" v-model="selectedPrice" />
          <DropdownSelector :options="bedsOptions" :defaultOption="selectedBed" />
          <DropdownSelector :options="houseTypeOptions" :defaultOption="selectedType" />
          <DropdownSelector :options="lifestyleOptions" :defaultOption="selectedLifestyle" />
          <DropdownSelector :options="calendar" :defaultOption="selectedDate" />
          <DropdownSelector :options="moreOptions" :defaultOption="moreOption" />

        </div>
        <div class="navbar-right">
          <a href="#" align="right">Sort</a>
          <a href="#">Save Search</a>
        </div>
      </nav>
    </div>
    <div>
      <li></li>
    </div>

<!--    <div id="map" style="height: 400px;"></div>-->

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DropdownSelector from "@/components/CustomDropdown.vue";
import Dropdowntest from '@/components/DatepickerDropdown.vue';


const location = ref('');
const priceOptions = ref(['$2,000', '$2,500', '$3,000', '$4,000', '$5,000', '$9,000']);
const selectedPrice = ref('Price');
const bedsOptions = ref(['1','2','3','4+']);
const selectedBed = ref('Beds');
const houseTypeOptions = ref(['Apartments', 'Houses', 'Condos', 'WB']);
const selectedType = ref('Type');
const lifestyleOptions = ref(['Student', 'Senior Housing', 'Short Term', 'WBS']);
const selectedLifestyle = ref('Lifestyle');
const calendar = ref(['1', '2', '3']);
const selectedDate = ref('Move-In-Date');
const moreOptions = ref(['Popup', 'opo']);
const moreOption = ref('More');

let map: any = null;
const markers: any[] = [];
let autocompleteService: google.maps.places.AutocompleteService;

//Move all the Map functions in another page
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
  autocompleteService = new google.maps.places.AutocompleteService();
}

function searchPlaces() {
  const request = {
    input: location.value,
    types: ['(cities)'], // Restrict to cities
  };

  autocompleteService.getPlacePredictions(request, (results: any[], status: any) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      // Log the list of predictions
      console.log(results);
    }
  });
}

function clearMarkers() {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
  markers.length = 0;
}

function onLocationChange() {
  if (location.value) {
    // Search for places
    searchPlaces();
  } else {
    // Clear the map when the location is empty
    clearMarkers();
  }
}

onMounted(() => {
  // Load the Google Maps API here since there's no separate index.html
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=&libraries=places`;
  script.onload = () => {
    // Assign the global `google` object to the locally imported `google` variable
    // to make it recognized in this scope
    google = window.google;
    initMap();
    // Optionally, search for places immediately if there's a default location
    if (location.value) {
      searchPlaces();
    }
  };
  document.head.appendChild(script);
});
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
