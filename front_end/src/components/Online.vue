<template>
  <div id="name">
    <h1>{{ "Registration Form" }}</h1>
    <form class="form-horizontal">
      <div class="new form-group">
        <label class="control-label col-sm-2" for="name">{{ "Name :" }}</label>
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter name"
            v-model="userName"
          />
        </div>
      </div>

      <div class="new form-group">
        <label class="control-label col-sm-2" for="Address">{{
          "Address :"
        }}</label>
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control"
            id="address"
            placeholder="Enter address"
            v-model="userAddress"
          />
        </div>
      </div>

      <div class="new form-group">
        <label class="control-label col-sm-2" for="birthday">{{
          "Birthday :"
        }}</label>
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control"
            id="birthday"
            placeholder="Enter birthday"
            v-model="userBirthday"
          />
        </div>
      </div>

      <div class="new form-group">
        <label class="control-label col-sm-2" for="attendance_day">{{
          "Attendance Day :"
        }}</label>
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control"
            id="attendance_day"
            placeholder="Enter attendance day"
            v-model="userAttendanceDay"
          />
        </div>
      </div>

      <div class="new form-group">
        <label class="control-label col-sm-2" for="name_of_owner">{{
          "Name of Owner :"
        }}</label>
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control"
            id="name_of_owner"
            placeholder="Enter name of owner"
            v-model="userOwnerName"
          />
        </div>
      </div>
    </form>

    <button type="button" class="btn btn-primary" @click.prevent="saveUser()">
      {{ "Submit" }}
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userName: "",
      userAddress: "",
      userBirthday: "",
      userAttendanceDay: "",
      userOwnerName: "",
    };
  },

  mounted() {},

  methods: {
    saveUser() {
      const user = {
        name: this.userName,
        address: this.userAddress,
        birthday: this.userBirthday,
        attendance_date: this.userAttendanceDay,
        name_of_owner: this.userOwnerName,
      };
      let url = "http://localhost:5000/students/add_new_student";
      axios.post(url, user).then((response) => {
        if (response.status == 200) {
          this.$router.push({ path: "/information" });
        }
      });
    },
  },
};
</script>

<style scoped>
#name {
  font-size: 20px;
}
</style>