<template>
  <div class="main">
    <h1 class="text-dark text-center">{{("STUDENT MANAGEMENT SYSTEM")}}</h1>
    <div class="icon_container">
      <div class="col-sm-4 dashboard_icon">
        <img class="imag" src="../assets/add_student.png" />
        <h4>{{("Online Registration")}}</h4>
        <router-link
          to="/online-registration"
          type="button"
          class="btn btn-outline-dark btn-lg"
        >
          {{("Register")}}</router-link
        >
      </div>

      <div class="col-sm-4 dashboard_icon">
        <img class="imag" src="../assets/information.png" />
        <h4>{{("Students Information")}}</h4>
        <router-link
          to="/information"
          type="button"
          class="btn btn-outline-dark btn-lg"
          >{{("Info")}}</router-link
        >
      </div>
      <div class="col-sm-4 dashboard_icon">
        <img class="imag" src="../assets/fee.png" />
        <h4>{{("School Fee Management")}}</h4>
        <router-link
          to="/fee-management"
          type="button"
          class="btn btn-outline-dark btn-lg"
          >{{("Manage")}}</router-link
        >
      </div>
    </div>

    <div class="icon_container">
      <div class="col-sm-4 dashboard_icon">
        <img class="imag" src="../assets/result.png" />
        <h4>{{("Exam & Result Management")}}</h4>
        <router-link
          to="/result-management"
          type="button"
          class="btn btn-outline-dark btn-lg"
          >{{("Manage")}}</router-link
        >
      </div>
      <div class="col-sm-4 dashboard_icon">
        <img class="imag" src="../assets/add_student.png" />
        <h4>{{("Studence Attendance Management")}}</h4>
        <router-link
          to="/attendance-management"
          type="button"
          class="btn btn-outline-dark btn-lg"
          >{{("Manage")}}</router-link
        >
      </div>
      <div class="col-sm-4 dashboard_icon">
        <img class="imag" src="../assets/add_student.png" />
        <h4>{{("Library Management")}}</h4>
        <router-link
          to="/library-management"
          type="button"
          class="btn btn-outline-dark btn-lg"
          >{{("Manage")}}</router-link
        >
      </div>
    </div>
  </div>
</template>


<script>
export default {
  methods: {
    GoToOnlineRegistration() {
      this.$router.push({ path: "/information" });
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}
.icon_container {
  display: flex;
  flex-wrap: wrap;
}

.dashboard_icon {
  height: auto;
  width: auto;
  margin: 20px;
  padding: 20px;
  /* border: 1px solid black; */
  text-align: center;
  font-size: 30px;
  background-color: lightgray;
  border-radius: 5px;
  flex: 1;
}

.imag {
  height: 200px;
  width: 200px;
  margin: 5px;
  padding: 5px;
}
</style>