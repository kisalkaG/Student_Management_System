<template>
  <div>
    <!-- <pre>{{ students[0] }}</pre> -->
    <div>
      <h1>{{ "Student Information" }}</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>{{ "Id" }}</th>
            <th>{{ "Name" }}</th>
            <th>{{ "Address" }}</th>
            <th>{{ "Birthday" }}</th>
            <th>{{ "Attendance Date" }}</th>
            <th>{{ "Name of Owner" }}</th>
            <th>{{ "Edit" }}</th>
            <th>{{ "Delete" }}</th>
          </tr>
        </thead>

        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.address }}</td>
          <td>{{ student.birthday }}</td>
          <td>{{ student.attendance_date }}</td>
          <td>{{ student.name_of_owner }}</td>
          <td>
            <button
              @click.prevent="updateStudent(student)"
              class="btn btn-info btn-sm"
              data-toggle="modal"
              data-target="#myModal"
            >
              {{ "Edit" }}
            </button>
          </td>
          <td>
            <button @click.prevent="deleteStudent(student.id)" class="btn btn-danger btn-sm">
              {{ "Delete" }}
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">
              &times;
            </button>
            <h4 class="modal-title">{{ "Add New Student" }}</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="new form-group">
                <label class="control-label col-sm-2" for="name">{{
                  "Name :"
                }}</label>
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
          </div>
          <div class="modal-footer">
            <button
              @click.prevent="saveUpdateStudent()"
              class="btn btn-default"
              data-dismiss="modal"
            >
              {{ "Update" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      students: [],
      userName: "",
      userAddress: "",
      userBirthday: "",
      userAttendanceDay: "",
      userOwnerName: "",
      userId: null,
    };
  },

  mounted() {
    this.getStudents();
  },

  methods: {
    getStudents() {
      axios
        .get("http://localhost:5000/students/get_student")
        .then((response) => {
          // console.log(response.data);
          if (response.data.length > 0) {
            this.students = response.data;
          } else {
            this.students = [];
          }
        });
    },

    updateStudent(student) {
      // console.log(student);
      this.userName = student.name;
      this.userAddress = student.address;
      this.userBirthday = student.birthday;
      this.userAttendanceDay = student.attendance_date;
      this.userOwnerName = student.name_of_owner;
      this.userId = student.id;
    },

    saveUpdateStudent() {
      const user = {
        id: this.userId,
        name: this.userName,
        address: this.userAddress,
        birthday: this.userBirthday,
        attendance_date: this.userAttendanceDay,
        name_of_owner: this.userOwnerName,
      };
      let url = "http://localhost:5000/students/update-student";
      axios.post(url, user).then((response) => {
        if (response.status == 200) {
          location.reload();
          this.$router.push({ path: "/information" });
        }
      });
    },

    deleteStudent(studentId) {
      // alert(studentId);

      const userId = {
        id: studentId,
      };

      let url = "http://localhost:5000/students/delete-student";
      axios.post(url, userId).then((response) => {
        if (response.status == 200) {
          location.reload();
          this.$router.push({ path: "/information" });
        }
      });
    },
  },
};
</script>