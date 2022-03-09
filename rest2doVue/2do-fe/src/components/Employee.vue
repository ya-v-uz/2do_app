<template>
    <div class="container">
     <h3 class="text-center font-weight-regular text-darken-1 grey--text mb-2"> Todo's </h3>

      


        <container>
            <v-row>
                <v-chip
                class="ma-2"
                color="red"
                text-color="white"
                >
                <v-avatar left>
                    <v-icon>mdi-account-multiple</v-icon>
                </v-avatar>
                Social
                </v-chip>

                 <v-chip
                class="ma-2"
                color="teal"
                text-color="white"
                >
                <v-avatar left>
                    <v-icon>mdi-school</v-icon>
                </v-avatar>
                School
                </v-chip>
                
                 <v-chip
                class="ma-2"
                color="orange"
                text-color="white"
                >
                <v-avatar left>
                    <v-icon>mdi-domain</v-icon>
                </v-avatar>
                Business
                </v-chip>

                  <v-chip
                class="ma-2"
                color="purple"
                text-color="white"
                >
                <v-avatar left>
                    <v-icon>mdi-star</v-icon>
                </v-avatar>
                Misc
                </v-chip>

        <v-divider></v-divider>

    <template>
            <v-row justify="end" class="pa-4">
                <v-dialog
                v-model="dialog"
                max-width="850"
                >
        <template v-slot:activator="{ on, attrs }">
            <v-btn
            fa
            color="teal"
            dark
            v-bind="attrs"
            v-on="on"
            >
            New
            <v-icon small>mdi-pencil</v-icon>
            </v-btn>
        </template>
        <v-card>
            <v-card-title class="text-h5">
                new 2do
            </v-card-title>
           
           <!-- new 2do popup card --> 
           
        <container class="ma-0"> 
          <v-row no-gutters>
               
                <!-- date picker --> 
            <v-col
            cols="12"
            md="5">
            <v-date-picker class="ma-2 pa-0" justify="center" 
            cols="2"
            v-model="picker"
            color="teal"
            dark
            body-color="black"
            ></v-date-picker>
            </v-col>
             <!-- date picker --> 

            <v-col 
             cols="6"
             sm="8"
             md="6">
            <form class="pa-2" justify="start">
                <v-text-field
                v-model="name"
                label= "Title"
                required
                :counter="15"
                :error-messages="nameErrors"
                v-bind:value="kek"
                v-on:input="$emit('input', $event)"
                @blur="$v.name.$touch()"
                ></v-text-field>
               
                 <v-text-field
                v-model="description"
                label="Description"
                ></v-text-field>
          </form>
           </v-col>
             </v-row>
           
           


           </container> 
           
           
           <!-- 2do popup card actions --> 
    
            <v-card-actions>
            <v-spacer></v-spacer>
           
            <v-btn
                color="teal"
                text
                @click="dialog = false;"
                v-on:click="posty(name, description);"
            >
              submit
            </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
             </v-row>
    </template>

    <!-- new 2do popup card end --> 

            </v-row>
        </container>
        
        <container class="pa-md-4">
         <v-progress-linear
         color="teal"
          height="10"
          value="20"
          striped
        ></v-progress-linear>
        </container>
        
               
        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th class="text-left">
                    No.
                </th>
                <th class="text-left">
                    Elements
                </th>
                <th class="text-left">
                    Date
                </th>
                 <th class="text-left">
                    Status
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="employee in employees"
                :key="employee.id"
                >
                <td>{{ employee.id}} </td>
                <td>{{ employee.name}}</td>
                 <td>{{ employee.role}}</td>
                
                 <td>

                   <v-checkbox 
                   class="pa-1"
                   color="teal"
                   
                   >

                   </v-checkbox>

                 </td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>
    
        <container class="pa-2">
        
           
            <div class="text-center">
                <v-pagination
                v-model="page"
                :length="4"
                circle
                color = "teal"
                ></v-pagination>
            </div>
           
        
            
        </container>

    </div>

   
</template>

<script>

import EmployeeService from '../services/employeeService'

export default {
    name: 'Employees',
    data(){
       return{
           employees : [],
            page: 1,
          dialog: false,
         picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
       }
    },

    methods: {

        getEmployees(){
            EmployeeService.getEmployees().then((response) =>{
                this.employees = response.data;
            });
        },

        postEmployees(title, date){
            EmployeeService.postEmployees(title,date).then((response) =>{
                console.log("axios post sent" + response);
            });
        },

        posty: function(title, date) {
        console.log(title)
        this.postEmployees(title, date)
    },

    },
    
    created() {
        this.getEmployees()
    }

   


}
</script>