<template>
  <v-app>
    <v-container style="max-width: 900px">
      <v-row align="center" justify="center">
        <v-col md="4" cols="12">
          <v-text-field
            v-model="search"
            prepend-icon="mdi-magnify"
            label="Search"
            variant="underlined"
          ></v-text-field>
        </v-col>

        <v-col align="right" cols="12" md="8">
          <v-btn color="primary" class="mr-2">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn color="primary">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <DepartmentTable
        :search="search"
        :headers="headers"
        :items="departments"
        items-per-page="10"
      />
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import DepartmentTable from "./DepartmentTable.vue";

let search = ref("");
let headers = ref([
  { title: "Index", align: "start", sortable: true },
  { title: "Name", align: "start", sortable: true },
  { title: "", align: "start" },
]);

let departments = ref([
  { title: "DIT" },
  { title: "DIT" },
  { title: "DIT" },
  { title: "DIT" },
  { title: "DIT" },
  { title: "DIT" },
]);
</script>
