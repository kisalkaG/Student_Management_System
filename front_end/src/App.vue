<template>
  <div id="app">
     <div class="col-sm-4" > <router-link to="/dashboard"> Dashboard</router-link></div>
   School Management System
    <!-- <Dashboard /> -->
    <router-view />
  </div>  
</template>

<script>
//  import Dashboard from './components/Dashboard';

export default {
  name: 'App',
  components: {
  //  Dashboard
  },

  mounted() {
      this.$router.push({
        path: '/dashboard'
      })
  },
}
</script>

<style>

  
</style>
