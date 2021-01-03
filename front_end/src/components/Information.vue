<template>
  <div id = "">
    <!-- <pre>{{ students[0] }}</pre> -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th>name</th>
          <th>address</th>
          <th>birthday</th>
          <th>attendance_date</th>
          <th>name_of_owner</th>
        </tr>
      </thead>
      
        <tr v-for="student in students" :key="student.id">            
          <td>{{student.name}}</td>
          <td>{{student.address}}</td>
          <td>{{student.birthday}}</td>
          <td>{{student.attendance_date}}</td>
          <td>{{student.name_of_owner}}</td>
        </tr>
      
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      students: [],
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
          console.log(response.data);
          if (response.data.length > 0) {
            this.students = response.data;
          } else {
            this.students = [];
          }
        });
    },
  },
};
</script>