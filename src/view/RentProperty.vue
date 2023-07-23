<template>
  <div class="rentProperty">
    <div class="sidebar">
      <ul>
        <li v-for="groupName in groupNames" :key="groupName">
          <a @click="scrollToSection(groupName)">{{ groupName }}</a>
        </li>
      </ul>
    </div>
    <div class="content">
      <form @submit.prevent="submitForm">

        <div class="form-group" id="address">
          <h2>address</h2>
          <label for="street">Street</label>
          <input type="text" id="street" v-model="formData.street" required />

          <label for="number">No.</label>
          <input type="text" id="number" v-model="formData.number" required />
          <!--Add this toggle 'Do not show street and house number'-->
        </div>
        <div class="form-group" id="address">
          <label for="postcode">Postcode</label>
          <input type="text" id="postcode" v-model="formData.postcode" required />

          <label for="location">Location</label>
          <input type="text" id="location" v-model="formData.location" required />
        </div>

        <div class="form-group" id="housetype">
          <h2>housing type</h2>
          <h5>Multiple selection possible</h5>
          <checkbox :options="Housetypes" v-model="formData.checkboxes" />

        </div>

        <div class="form-group" id="dimentions">
          <h2>dimentions</h2>
          <label for="livingspace">Living Space in m2</label>
          <input type="text" id="livingspace" v-model="formData.livingspace" required />

          <label for="room">Room</label>
          <input type="number" id="room" v-model="formData.room" required />
        </div>

        <div class="form-group" id="tenancy">
          <h2>tenancy</h2>
          <label for="coldrent">Cold Rent</label>
          <input type="number" id="coldrent" v-model="formData.coldrent" required />
          <label for="warmrent">Warm Rent</label>
          <input type="number" id="warmrent" v-model="formData.warmrent" required />
          <label for="extracost">Extra Cost</label>
          <input type="number" id="extracost" v-model="formData.extracost" required />
          <label for="deposit">Deposit</label>
          <input type="number" id="deposit" v-model="formData.deposit" required />
          <label for="availabledate">Available from</label>
          <input type="date" id="availabledate" v-model="formData.availabledate" required />

          <radio :options="durationOptions" v-model="formData.radio" />
        </div>

        <div class="form-group" id="details">
          <h2>details</h2>
          <h5>Multiple selection possible</h5>
          <checkbox :options="checkboxOptions" v-model="formData.checkboxes" />

        </div>

        <div class="form-group" id="group1">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="formData.name" required />
        </div>
        <div class="form-group" id="group1">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="formData.email" required />
        </div>

        <!-- Group 2: Image Upload -->
        <div class="form-group" id="group2">
          <label for="image">Upload Image:</label>
          <input type="file" id="image" accept="image/*" @change="handleImageChange" />
          <img v-if="imagePreview" :src="imagePreview" alt="Uploaded" />
        </div>

        <!-- Group 3: Checkboxes -->
        <div class="form-group" id="group3">
          <label>Checkboxes:</label>
          <label>
            <input type="checkbox" v-model="formData.checkbox1" />
            Option 1
          </label>
          <label>
            <input type="checkbox" v-model="formData.checkbox2" />
            Option 2
          </label>
          <!-- Add more checkbox options as needed -->
        </div>

        <!-- Group 4: Radio Buttons -->
        <div class="form-group" id="group4">
          <label>Radio Buttons:</label>
          <label>
            <input type="radio" value="option1" v-model="formData.radio" />
            Option 1
          </label>
          <label>
            <input type="radio" value="option2" v-model="formData.radio" />
            Option 2
          </label>
          <!-- Add more radio button options as needed -->
        </div>

        <!-- Add more groups as needed (Group 5 to Group 9) -->

        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import checkbox from '@/design/CheckboxGroup.vue';
import radio from '@/design/RadioButtonGroup.vue';

const formData = reactive({
  street: '',
  number: '',
  postcode:'',
  location:'',
  livingspace:'',
  coldrent:'',
  room:'',
  warmrent:'',
  extracost:'',
  deposit:'',
  availabledate:'date',
  checkboxes: [],
  radio: '',
});

const imagePreview = ref('');

function handleImageChange(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imagePreview.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
}

function submitForm() {
  // You can handle form submission here, e.g., send form data to the server
  console.log(formData);
}

// Sidebar navigation
const groupNames = ['address', 'dimentions', 'tenancy', 'details', 'Group 5', 'Group 6', 'Group 7', 'Group 8', 'Group 9'];
const Housetypes = ['Senior citizen', 'Student','WBS','All']
const durationOptions = ['Short term','Long term']
const checkboxOptions = ['Equipped Kitchen', 'Balcony/Terrace', 'Guest toilet', 'Garden/joint use','Basement/celler',
                          'Shared flat','Elevator','Sublet allowed','Stepless access'];
// TODO in future get this list from backend API for flexibility

function scrollToSection(groupName) {
  const element = document.getElementById(groupName.toLowerCase().replace(/ /g, ''));
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style>
/* Add your CSS styles here */
.rentProperty {
  display: flex;
  max-width: 900px;
  margin: 0 auto;
}

.sidebar {
  width: 200px;
  background-color: #f1f1f1;
  padding: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px;
}

.sidebar a {
  text-decoration: none;
  color: #333;
}

.sidebar a:hover {
  color: #555;
}

.content {
  flex: 1;
  padding: 20px;
}

.form-group {
  margin-bottom: 10px;
}

img {
  max-width: 200px;
  margin-top: 10px;
}
</style>
