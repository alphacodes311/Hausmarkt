<template>
  <div id="app">
    <Toolbar /> <!--This is fixed header for all the paged-->

    <main>
      <!-- Your page content goes here -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
import { ref, provide} from 'vue';
import Toolbar from './components/Toolbar.vue';
import google from 'googlemaps';

provide('google', google); // Provides the google object to whole application


</script>
