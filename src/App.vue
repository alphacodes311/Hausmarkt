<template>
  <div id="app">
    <Toolbar />

    <main>
      <!-- Your page content goes here -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Toolbar from './assets/Toolbar.vue';

export default {
  components: {
    Toolbar,
  },
};
</script>
