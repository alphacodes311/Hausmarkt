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
          <h2>Address</h2>
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

        <div class="form-group" id="PropertyType">
          <h2>Property Type</h2>
          <h5>Multiple selection possible</h5>
          <checkbox :options="propertyTypes" v-model="formData.checkboxes" />

        </div>

        <div class="form-group" id="dimensions">
          <h2>Dimensions</h2>
          <label for="livingspace">Living Space in m2</label>
          <input type="text" id="livingspace" v-model="formData.livingspace" required />

          <label for="room">Room</label>
          <input type="number" id="room" v-model="formData.room" required />
        </div>

        <div class="form-group" id="tenancy">
          <h2>Tenancy</h2>
          <label for="coldrent">Cold Rent</label>
            <input type="number" id="coldrent" v-model="formData.coldrent" required />
          <label for="warmrent">Warm Rent</label>
            <input type="number" id="warmrent" v-model="formData.warmrent" required />
          <label for="extracost">Extra Cost</label>
            <input type="number" id="extracost" v-model="formData.extracost" required />
          <label for="deposit">Deposit</label>
            <input type="number" id="deposit" v-model="formData.deposit" required />
          <h2></h2>
          <checkbox :options="durationOptions" v-model="formData.checkboxes" />

<!--              <input v-if="selectedRadioOption === 'Option 1'" type="text" v-model="additionalFieldValue" class="additional-field" />-->
          <label for="availabledate">Available from</label>
            <input type="date" id="availabledate" v-model="formData.availabledate" required />
          <label for="endDate">End Date</label>
           <input type="date" id="endDate" v-model="formData.endDate" />

        </div>

        <div class="form-group" id="details">
          <h2>Details</h2>
          <h5>Multiple selection possible</h5>
          <checkbox :options="checkboxOptions" v-model="formData.checkboxes" />

          <h3>Pets Allowed</h3>
          <RadioButtonGroup :options="petOptions" v-model="formData.radio" />

        </div>

        <div class="form-group" id="details">
          <label for="baths">number of Bathrooms</label>
            <input type="number" id="baths" v-model="formData.baths" required />
          <label for="beds">number of Bedrooms</label>
            <input type="number" id="beds" v-model="formData.beds" required />
          <label for="flrSpace">Floor space</label>
            <input type="number" id="flrSpace" v-model="formData.flrSpace" required />
          <label for="maxppl">Max people allowed</label>
            <input type="number" id="maxppl" v-model="formData.maxppl" required />
        </div>

        <div class="form-group" id="details">
          <label for="Floor">Floor</label>
          <input type="number" id="Floor" v-model="formData.Floor" required />
          <label for="Floor">from</label>
          <input type="number" id="totalFloor" v-model="formData.totalFloor" required >
        </div>

        <div class="form-group" id="description">
          <h2>Description</h2>
          <label for="title">Title of the ad </label>
          <input type="text" id="title" v-model="formData.title" required />

          <label for="desc">Description of apartment</label>
          <input type="text" id="desc" v-model="formData.desc" required />
        </div>

        <div class="form-group" id="furnishing">
          <h2>Furnishing</h2>
          <h5>Multiple selection possible</h5>
          <checkbox :options="furnishOptions" v-model="formData.checkboxes" />

          <h3>Parking</h3>
          <RadioButtonGroup :options="parkingOptions" v-model="formData.radio" />

          <h3>Position</h3>
          <input type="text" id="position" v-model="formData.position" required />

          <h3>Miscellaneous</h3>
          <input type="text" id="misc" v-model="formData.misc" required />
        </div>

        <h3>Internet Speed</h3>
          <RadioButtonGroup :options="internetOptions" v-model="formData.radio" />

        <div class="form-group" id="documents">
          <h2>Documents</h2>
          <checkbox :options="docOptions" v-model="formData.checkboxes" />

        </div>


        <button type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import checkbox from '@/design/CheckboxGroup.vue';
import RadioButtonGroup from '@/design/RadioButtonGroup.vue';
import CustomDropdown from "@/components/CustomDropdown.vue";

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
  endDate:'date',
  checkboxes: [],
  radio: '',
  selectedPrice:'',
  baths:'',
  beds:'',
  flrSpace:'',
  Floor:'',
  totalFloor:'',
  title:'',
  position:'',
  misc:'',
  parkingOptions:'',
  docOptions:[],
  maxppl:'',
  maxAge:'',
  minAge: ''
});

const imagePreview = ref('');
const typeOptions = ref([]);
const selectedType= ref(typeOptions.value[0]);

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
const groupNames = ['address','type', 'dimensions', 'tenancy','details', 'description', 'furnishing','documents','contact'];
const propertyTypes = ['Senior housing','Nursing room', 'Apartment', 'House', 'Shared room', 'Duplex', 'Office/Commercial','Penthouse','Short term']
const checkboxOptions = [ 'Balcony/Terrace', 'Guest toilet', 'Garden/joint use','Basement/celler',
                          'Student','Elevator','Sublet allowed','Stepless access','Old Building'
                          ,'Underfloor heating'];

const petOptions =['Yes', 'No', 'According to arrangement'];
const furnishOptions = ['Oak parquet','floor-to-celling windows','Spacious kitchen','Furnished','Bathtub','Shower','Equipped Kitchen'];
const parkingOptions = ['Free', 'Paid', 'Not available']
const docOptions = ['Tenant self-assessment', 'SCHUFA', 'Rent payment confirmation','Proof of identity', 'Proof of income']

const durationOptions = ['Short Term']
const internetOptions= ['all speeds','atleast 100 Mbit/s']

// TODO in future get this list from backend API for flexibility

function scrollToSection(groupName) {
  const element = document.getElementById(groupName.toLowerCase().replace(/ /g, ''));
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style>
.rentProperty {
  display: flex;
  max-width: 1700px;
  margin: 0 auto;
}

.sidebar {
  width: 200px;
  background-color: wheat; /* Change sidebar background color to blue */
  color: black; /* Set text color to white */
  padding: 20px;
  position: fixed;
  top: 50px;
  left: 60px;
  overflow-y: auto;
  max-height: calc(100vh - 100px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px;
}

.sidebar a {
  text-decoration: black;
  color: #fff; /* Set link text color to white */
  font-weight: bold;
  display: block;
  padding: 5px 0;
  border-bottom: 1px solid #ddd;
}

.sidebar a:last-child {
  border-bottom: none;
}

.sidebar a:hover {
  background-color: #0056b3; /* Add a dark blue background on hover */
}

.content {
  flex: 1;
  padding: 20px;
  margin-left: 240px;
  background-color: #f7f7f7;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

.form-group h2 {
  margin-bottom: 10px;
  color: #007bff; /* Set heading color to blue */
}

.form-group h5 {
  color: #777;
  font-size: 14px;
  margin-bottom: 5px;
}

label {
  font-weight: bold;
  color: #333; /* Set label color to dark gray */
}

.input-group {
  display: flex;
}

.input-group label {
  margin-right: 10px;
}

.input-group input[type="text"],
.input-group input[type="number"],
.input-group input[type="date"] {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}


</style>


