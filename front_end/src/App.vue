<template>
  <div id="app">
    <div class="col-sm-4">
      <h3>
        <router-link to="/dashboard"> {{ "Dashboard" }}</router-link>
      </h3>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",

  mounted() {
    this.$router.push({
      path: "/dashboard",
    });
  },
};
</script>


