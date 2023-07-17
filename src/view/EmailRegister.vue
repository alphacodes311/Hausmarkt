

<template>
  <div class="registration-form">
    <h1>Create an account</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" v-model="firstName" required>
      </div>
      <div class="form-group">
        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" v-model="lastName" required>
      </div>
      <div class="form-group">
        <label for="email">Email Address</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" v-model="confirmPassword" required>
      </div>
      <div v-if="errors.length">
        <ul>
          <li v-for="error in errors" :key="error" style="color: red">{{ error }} </li>
        </ul>
      </div>

      <button type="submit">Create Account</button>
    </form>
  </div>
</template>

<style scoped>
.registration-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button[type="submit"] {
  display: block;
  margin: 20px auto 0;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  border: none;
}
</style>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      errors: []
    };
  },
  methods: {
    async submitForm() {
      if (this.password !== this.confirmPassword) {
        this.errors.push('Passwords do not match.');
        return;
      }

      const data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      };

      // try {
      //   const response = await axios.post('http://127.0.0.1:8080/api/v1/register/user', data);
      //   //alert("register")
      //   console.log(response.data);
      //
      //   // Redirect to the login page
      //   this.$router.push('/login');
      // } catch (error) {
      //   console.error(error);
      //   this.errors.push('An error occurred while registering. Please try again later.');
      // }
      axios.post('http://127.0.0.1:8080/api/v1/register/user', data)
        .then(response => {
          // Handle the response data here
          console.log(response.data);
        })
        .catch(error => {
          // Check if error object exists and handle the error response
          if (error.response) {
            console.error(error.response.data);
            console.error(error.response.status);
            console.error(error.response.headers);
          } else if (error.request) {
            // The request was made, but no response was received
            console.error(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error', error.message);
          }
          console.error(error.config);
        });



    }
  }
};
</script>
