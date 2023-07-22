<template>
  <div class="dropdown-selector">
    <div class="dropdown">
      <div class="dropdown-toggle" @click="toggleDropdown">
        <span class="selected-text">{{ selectedOption }}</span>
        <span class="arrow-icon"></span>
      </div>
      <div class="dropdown-menu" :class="{ open: isDropdownOpen }">
        <ul class="options">
          <li v-for="option in options" :key="option" @click="selectOption(option)">
            {{ option }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DropdownSelector',
  props: {
    options: {
      type: Array,
      required: true,
    },
    defaultOption: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectedOption: this.defaultOption,
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isDropdownOpen = false;
    },
    handleClickOutside(event) {
      const dropdownElement = this.$el;
      if (!dropdownElement.contains(event.target)) {
        this.isDropdownOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
});
</script>

<style scoped>
.dropdown-selector {
  position: relative;
  display: inline-block;
}

.dropdown {
  position: relative;
}

.dropdown-toggle {
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.selected-text {
  flex-grow: 1;
}

.arrow-icon {
  width: 8px;
  height: 8px;
  border-top: 2px solid #000;
  border-right: 2px solid #000;
  transform: rotate(135deg);
  margin-left: 5px;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 200px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  display: none;
}

.dropdown-menu.open {
  display: block;
}

.options li {
  cursor: pointer;
  padding: 5px;
}

.min-max-inputs {
  display: flex;
  gap: 5px;
  margin-bottom: 5px;
}
</style>
