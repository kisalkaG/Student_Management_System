<template>
  <div>
    <div class="container">
      <button
        class="btn btn-info btn-sm"
        data-toggle="modal"
        data-target="#myModal"
      >
        {{ "Add New Record" }}
      </button>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>{{ "Action" }}</th>
            <th>{{ "Id" }}</th>
            <th>{{ "Name" }}</th>
            <th>{{ "Grade" }}</th>
            <th>{{ "School Fee" }}</th>
            <th>{{ "Other Fee" }}</th>
            <th>{{ "Additional Fee" }}</th>
            <th>{{ "Total Fee" }}</th>
            <th>{{ "Amount Paid" }}</th>
            <th>{{ "Rest of Amount" }}</th>
            <th>{{ "Edit" }}</th>
             <th>{{ "Delete" }}</th>
          </tr>
        </thead>

        <tr v-for="studentFee in studentFees" :key="studentFee.action">
          <td>{{ studentFee.action }}</td>
          <td>{{ studentFee.id }}</td>
          <td>{{ studentFee.name }}</td>
          <td>{{ studentFee.grade }}</td>
          <td>{{ studentFee.school_fee }}</td>
          <td>{{ studentFee.other_fee }}</td>
          <td>{{ studentFee.additional_fee }}</td>
          <td>{{ studentFee.total_fee }}</td>
          <td>{{ studentFee.amount_paid }}</td>
          <td>{{ studentFee.rest_of_amount }}</td>
          <td><button @click.prevent ="updateStudentFees(studentFee)"
          class="btn btn-info btn-sm"
              data-toggle="modal"
              data-target="#myModal"
            >{{ "Edit" }}</button></td>
          <td><button @click.prevent ="deleteStudentFee(studentFee.id)" class="btn btn-danger btn-sm">{{"Delete"}}</button></td>  
        </tr>
      </table>
    </div>


    <div class="modal fade" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">{{ modalTitle}}</h4>
          <button type="button" class="close" data-dismiss="modal" @click.prevent="closeModal()">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
          <form class="form-horizontal">
              <div class="form-group">
                <label class="control-label col-sm-2" for="action">{{
                  "Action :"
                }}</label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="action"
                    v-model="userAction"
                  />
                </div>
              </div>

              <div class="form-group">
                <label class="control-label col-sm-2" for="id">{{
                  "Student Id :"
                }}</label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="id"
                    v-model="userId"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="name">{{
                  "Name :"
                }}</label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    v-model="userName"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="grade">{{
                  "Grade :"
                }}</label>
                <div class="col-sm-8">
                  <input
                    type="text"
                    class="form-control"
                    id="grade"
                    v-model="userGrade"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="school_fee">{{
                  "School Fee :"
                }}</label>
                <div class="col-sm-8">
                  <input
                    type="number"
                    class="form-control"
                    id="school_fee"
                    v-model="userSchoolFee"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="other_fee">{{
                  "Other Fee :"
                }}</label>
                <div class="col-sm-8">
                  <input
                    type="number"
                    class="form-control"
                    id="other_fee"
                    v-model="userOtherFee"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="additional_fee">{{
                  "Additional Fee :"
                }}</label>
                <div class="col-sm-8">
                  <input
                    type="number"
                    class="form-control"
                    id="additional_fee"
                    v-model="userAdditionalFee"
                  />
                </div>
              </div>
              <div class="form-group">
                <label class="control-label col-sm-2" for="amount_paid">{{
                  "Amount Paid :"
                }}</label>
                <div class="col-sm-8">
                  <input
                    type="number"
                    class="form-control"
                    id="amount_paid"
                    v-model="userAmountPaid"
                  />
                </div>
              </div>
            </form>
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button
              type="submit"
              class="btn btn-default pull-right"
              data-dismiss="modal"
              @click.prevent="saveFee()"
              v-if="isEditRecord == true"
            >
              {{ "Submit" }}
            </button>

            <button
              type="submit"
              class="btn btn-default pull-right"
              data-dismiss="modal"
              @click.prevent="saveUpdateStudentFees()"
              v-if="isEditRecord == false"
            >
              {{("Update")}}
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
      userAction: "",
      userId: null,
      userName: "",
      userGrade: "",
      userSchoolFee: null,
      userOtherFee: null,
      userAdditionalFee: null,
      userAmountPaid: null,
      studentFees: [],
      userTotalFee:null,
      userRestofAmount:null,
      isEditRecord:true,      
      modalTitle:"Add New Record",
    };
  },

  mounted() {
    this.getStudentFees();
  },

  methods: {
    saveFee() {
      const student = {
        action: this.userAction,
        id: this.userId,
        name: this.userName,
        grade: this.userGrade,
        school_fee: this.userSchoolFee,
        other_fee: this.userOtherFee,
        additional_fee: this.userAdditionalFee,
        amount_paid: this.userAmountPaid,
      };

      let url = "http://localhost:5000/students/fee-management";
      axios.post(url, student).then((response) => {
        if (response.status == 200) {
          this.modalTitle="Add New Record";
          window.location.reload();
          //   this.$router.push({ path: "/fee-management" });
        }
      });
    },

    getStudentFees() {
      axios
        .get("http://localhost:5000/students/get_student_fee")
        .then((response) => {
          // console.log(response.data);
          if (response.data.length > 0) {
            this.studentFees = response.data;
          } else {
            this.studentFees = [];
          }
        });
    },

    updateStudentFees(studentFee) {
        this.userAction = studentFee.action;
        this.userId = studentFee.id;
        this.userName = studentFee.name;
        this.userGrade = studentFee.grade;
        this.userSchoolFee = studentFee.school_fee;
        this.userOtherFee = studentFee.other_fee;
        this.userAdditionalFee = studentFee.additional_fee;
        this.userTotalFee = studentFee.total_fee ;
        this.userAmountPaid = studentFee.amount_paid;
        this.userRestofAmount= studentFee.rest_of_amount;
        this.isEditRecord = false;
        this.modalTitle= "Edit Record";
    },

    saveUpdateStudentFees() {
      const studentFee = {
        action: this.userAction,
        id: this.userId,
        name: this.userName,
        grade: this.userGrade,
        school_fee: this.userSchoolFee,
        other_fee: this.userOtherFee,
        additional_fee: this.userAdditionalFee,
        amount_paid: this.userAmountPaid,
      };

      let url = "http://localhost:5000/students/update-student_fee";
      axios.post(url,studentFee).then((response) => {
        if (response.status == 200) {
          this.modalTitle="Add New Record";
          window.location.reload();
          // this.$router.push({ path: "/information" });
        }
      });

    },

    deleteStudentFee(studentFeeId) {
       const student = {
         id : studentFeeId,
       }

       let url = "http://localhost:5000/students/delete_student_fee";
       axios.post(url,student).then((response) => {
        if (response.status == 200) {          
          window.location.reload();
          // this.$router.push({ path: "/information" });
        }
      });
    },

    closeModal() {
      this.modalTitle="Add New Record";
    }
    
  },
};
</script>