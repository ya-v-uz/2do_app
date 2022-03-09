<template>
  <v-app>
    <v-app-bar
      app
      color="teal"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="logomogo"
          class="shrink mr-2"
          contain
          src="/assets/mylogo.png"
          transition="scale-transition"
          width="40"
        />
      
      <h1>
        all-tracker
      </h1>
      
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
    
     
     <v-row class="pa-8">
        <Generic> </Generic>
     </v-row>

    <v-divider></v-divider>

      <container>
      <Employees />
      
      </container>

    </v-main>
  </v-app>
</template>

<script>
import Employees from './components/Employee.vue';
//import Todos from './components/Todos.vue';
//import Daily from './components/Daily.vue';
import Generic from './components/Generic.vue';

export default {
  name: 'App',

  components: {
    Employees,
    Generic,
  },

  data: () => ({
    //
  }),
};
</script>
