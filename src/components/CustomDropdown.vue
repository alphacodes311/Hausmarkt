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

<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps(['options', 'defaultOption']);

const selectedOption = ref(props.defaultOption);
const isDropdownOpen = ref(false);
const isPopupOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const selectOption = (option) => {
  selectedOption.value = option;
  isDropdownOpen.value = false;
};

const handleClickOutside = (event) => {
  const dropdownElement = document.querySelector('.dropdown-selector');
  if (dropdownElement && !dropdownElement.contains(event.target)) {
    isDropdownOpen.value = false;
  }
};

const openPopup = () => {
  isPopupOpen.value = true;
};

const closePopup = () => {
  isPopupOpen.value = false;
};

const emitOpenPopupEvent = () => {
  // Emit the event when the "More" option is clicked
  emit('openPopup');

  onMounted(() => {
    document.addEventListener('click', handleClickOutside);
  });

  watch(isPopupOpen, (newValue) => {
    if (!newValue) {
      isDropdownOpen.value = false;
    }
  });

  onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
  });
}

// TODO add option to close the if click outside
</script>


<style scoped>
.dropdown-selector {
  position: relative;
  display: inline-block;
  z-index: 1000;
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
