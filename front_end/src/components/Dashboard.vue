<template>
<div id="Dashboard">
    <div class="row">
    <div class="col-sm-4" > <router-link to="/online-registration"> Online Registration</router-link></div>
    <div class="col-sm-4" ><router-link to="/information">Students Information</router-link></div>
    <div class="col-sm-4" ><router-link to="/fee-management">School Fee Management</router-link></div>    
  </div>

  <div class="row">
    <div class="col-sm-4 mt-10 padding-xs" ><router-link to="/result-management">Exam & Result Management</router-link></div>
    <div class="col-sm-4" ><router-link to="/pay-management">Staff Pay Roll Management</router-link></div>
    <div class="col-sm-4" ><router-link to="/library-management">Library Management</router-link></div>    
  </div>   
</div>
</template>


<script>
export default {
  methods: {
    GoToOnlineRegistration() {
      this.$router.push({ path: '/information' })
    }
  }  
}
</script>

<style scoped>
    #Dashboard {
      font-size: 30px;
      margin: 100px;
    }
    
</style>