<template>
  <div class="home">
    <h1>Calendar Calculator</h1>

    <div class="row">
      <div class="col-xl col-lg">
          <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Class start day</h6>
                  <div class="dropdown no-arrow"><a href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false" class="dropdown-toggle"><i
                              class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a>
                      <div aria-labelledby="dropdownMenuLink"
                          class="dropdown-menu dropdown-menu-right shadow animated--fade-in">
                          <div class="dropdown-header">Dropdown Header:</div><a href="#"
                              class="dropdown-item">Action</a><a href="#" class="dropdown-item">Another action</a>
                          <div class="dropdown-divider"></div><a href="#" class="dropdown-item">Something else here</a>
                      </div>
                  </div>
              </div>
              <div class="card-body" style="margin: auto">
                <datepicker format="MM/dd" :bootstrap-styling="true" :monday-first="true" v-model="vDateStart"></datepicker>
                <div class="mt-3">
                  <p>Lead syllabus start date: <strong>{{ dateStartSimple }}</strong></p>
                </div>
                <button @click="calculateDueDates()" class="btn btn-primary"> {{ textStartDate }} </button>
                            
              </div>
          </div>
      </div>
      <div class="col-xl col-lg">
          <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Class meeting time</h6>
                  <div class="dropdown no-arrow"><a href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false" class="dropdown-toggle"><i
                              class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a>
                      <div aria-labelledby="dropdownMenuLink"
                          class="dropdown-menu dropdown-menu-right shadow animated--fade-in">
                          <div class="dropdown-header">Dropdown Header:</div><a href="#"
                              class="dropdown-item">Action</a><a href="#" class="dropdown-item">Another action</a>
                          <div class="dropdown-divider"></div><a href="#" class="dropdown-item">Something else here</a>
                      </div>
                  </div>
              </div>
              <div class="card-body" style="margin: auto">
                <div class="mt-3">
                  <p>Enter times for your own reference</p>
                </div>
                <input data-v-4a88859a="" type="text" placeholder="9:00 AM" aria-label="Search" aria-describedby="basic-addon2" class="form-control bg-light border-0 small"> 
                <input data-v-4a88859a="" type="text" placeholder="11:00 AM" aria-label="Search" aria-describedby="basic-addon2" class="form-control bg-light border-0 small">           
              </div>
          </div>
      </div>    
    </div>

    <div class="row">
      <div class="col-xl col-lg">
        <div class="card shadow mb-4">
          <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 class="m-0 font-weight-bold text-primary">Skip weeks</h6>
          </div>
          <div class="card-body" style="margin: auto">
            <div class="mt-4">
              <p class="mt-2">Enter one number at a time</p>
              <input type="text" aria-label="Skip week" aria-describedby="basic-addon" class="form-control small" v-model="vSkipWeek">
            </div>
            <div class="mt-4">
              <button @keypress.Enter="addSkipWeek()" @click="addSkipWeek()" class="btn btn-primary">Add skip week</button>
            </div>
            <div class="mt-4">
              <ul class="list-group">
                <li v-for="week in skipWeeks" :key="week.id" class="list-group-item list-group-item-light">
                  {{ week.number }}
                  <i @click="deleteSkipWeek(week.id)" class="fa fa-trash" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl col-lg">
        <div class="card shadow mb-4">
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-primary">Add due date</h6>
                <div class="dropdown no-arrow"><a href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false" class="dropdown-toggle"><i
                            class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a>
                    <div aria-labelledby="dropdownMenuLink"
                        class="dropdown-menu dropdown-menu-right shadow animated--fade-in">
                        <div class="dropdown-header">Dropdown Header:</div><a href="#"
                            class="dropdown-item">Action</a><a href="#" class="dropdown-item">Another action</a>
                        <div class="dropdown-divider"></div><a href="#" class="dropdown-item">Something else here</a>
                    </div>
                </div>
            </div>
            <div class="card-body" style="margin: auto">
              <datepicker format="MM/dd" :bootstrap-styling="true" :monday-first="true" v-model="vDateDue"></datepicker>
              <div class="mt-5">
                <p>Assignment/Forum Name:</p>
                <input @keypress.Enter="addAssignment()" v-model="vAssignmentName" type="text" placeholder="" aria-label="Assignment Name" aria-describedby="basic-addon" class="form-control">
              </div>
              <div class="mt-3">
                <button @click="addAssignment()" class="btn btn-primary">Add due date</button>
              </div>     
            </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl col-lg">
          <div class="card shadow mb-4">
              <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 class="m-0 font-weight-bold text-primary">Due dates</h6>
                  <div class="dropdown no-arrow"><a href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                          aria-haspopup="true" aria-expanded="false" class="dropdown-toggle"><i
                              class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a>
                      <div aria-labelledby="dropdownMenuLink"
                          class="dropdown-menu dropdown-menu-right shadow animated--fade-in">
                          <div class="dropdown-header">Dropdown Header:</div><a href="#"
                              class="dropdown-item">Action</a><a href="#" class="dropdown-item">Another action</a>
                          <div class="dropdown-divider"></div><a href="#" class="dropdown-item">Something else here</a>
                      </div>
                  </div>
              </div>
              <div class="card-body" style="margin: auto">
                <ul class="list-group">
                  <li v-for="assignment in assignments" :key="assignment.id" class="list-group-item list-group-item-light" ><span v-if="assignment.name" span class="p-3 mb-2 bg-info text-white">{{ assignment.name }}</span> Week {{ assignment.week }}: {{ assignment.dueDate }} 
                    <i @click="deleteAssignmentDueDate(assignment.id)" class="fa fa-trash" aria-hidden="true"></i>
                  </li>
                </ul>               
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Datepicker from 'vuejs-datepicker';

export default {
  name: 'home',
  components: {
    Datepicker
  },
  data() {
    return {
      vDateStart: null,
      vDateDue: null,
      vAssignmentName: null,
      vSkipWeek: null,
      assignments: [],
      skipWeeks: [],
      dateStart: {
        type: Date,
        default: null
      },
      termStart: new Date('April 29, 2019, 00:00:00'),
      dateStartSimple: null,
      textStartDate: "Add New Start Date",
      timeDifference: null
    }
  },
  methods: {
    deleteAssignmentDueDate(id) {
      this.assignments = this.assignments.filter(assignment => {
        return assignment.id != id
      })
    },
    deleteSkipWeek(id) {
      this.skipWeeks = this.skipWeeks.filter(week => {
        return week.id != id
      })
      
      // Subtract a week from assignment due dates that fall during or after the skip week
      this.changeWeek(false)
    },
    addAssignment() {
      let assignmentWeek = this.computeWeek(this.vDateDue)

      // Push the properties to the object array
      this.assignments.push({ name: this.vAssignmentName, week: assignmentWeek, dueDate: this.vDateDue.toDateString(), id: this.assignments.length - 1 })
    },
    addSkipWeek() {
      // Push the properties to the object array
      this.skipWeeks.push({ number: this.vSkipWeek, id: this.skipWeeks.length - 1 })

      // Add a week assignment due dates that fall during or after the skip week
      this.changeWeek(true)
    },
    calculateDueDates() {
      if (this.timeDifference != null) {
        let newTimeString = new Date(this.vDateStart).getTime()
        
        // eslint-disable-next-line
        console.log(newTimeString)

        this.timeDifference = newTimeString - this.dateStart.getTime()

        newTimeString = this.timeDifference

        for (let assignment of this.assignments) {

          let assignmentDueDateTime = new Date(assignment.dueDate).getTime()
          let assignmentDueDateCalculated = new Date(assignmentDueDateTime + newTimeString)

          assignment.dueDate = assignmentDueDateCalculated.toDateString()
          
          // eslint-disable-next-line
          // console.log(assignment.dueDate)
        }

        this.dateStart = new Date(this.vDateStart)
        
      }
      else {
        this.textStartDate = "Change Start Date"

        // eslint-disable-next-line
        // console.log(this.vDateStart)

        this.dateStart = new Date(this.vDateStart)
        this.dateStartSimple = this.dateStart.toDateString()
        this.timeDifference = 0
      }
    },
    changeWeek(isPlus) {
      let daysPerWeek = 7

      for (let assignment of this.assignments) {
        let date = new Date(assignment.dueDate)
        
        let numWeek = this.computeWeek(date)
        
        date = new Date(date.setHours(0, 0, 0, 0))

        if (numWeek >= this.vSkipWeek) {  
          if (isPlus) {
            date.setTime(date.getTime() + daysPerWeek * 86400000)
            assignment.week++
          } else {
            date.setTime(date.getTime() - daysPerWeek * 86400000)
            assignment.week--
          }
          assignment.dueDate = date.toDateString()
        }
      }
    },
    computeWeek(date) {
      // Set start and assignment date time to 00:00:00
      date.setHours(0, 0, 0, 0)

      // Calculate miliseconds of one day
      let oneDay = 24*60*60*1000

      // Find number of days from the start
      let numDays = Math.round(Math.abs((this.termStart.getTime() - date.getTime()) / oneDay))

      // Find the week
      let numWeek = Math.floor(numDays / 7) + 1

      return numWeek
    }
  }
}
</script>
