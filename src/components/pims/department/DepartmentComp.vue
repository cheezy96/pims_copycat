<template>
  <v-app>
    <DepartmentDialog ref="departmentDialog"></DepartmentDialog>
    <v-container style="max-width: 900px" class="mt-n3">
      <DepartementSearchAndButtonsComp></DepartementSearchAndButtonsComp>
      <!-- <v-row align="center" justify="center">
        <v-col md="4" cols="12">
          <v-text-field
            v-model="search"
            prepend-icon="mdi-magnify"
            label="Search"
            variant="underlined"
            color="primary"
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
      </v-row> -->

      <v-data-table
        :search="search"
        :headers="headers"
        :items="departments"
        items-per-page="10"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td></td>
            <td>{{ item.title }}</td>
            <td>
              <v-btn-toggle style="height: 30px">
                <v-btn
                  variant="outlined"
                  class="border-sm bg-grey-lighten-5"
                  size="small"
                  @click="departmentDialog.openDialog()"
                  ><v-icon>mdi-pencil</v-icon></v-btn
                >
                <v-btn
                  variant="outlined"
                  class="border-sm bg-grey-lighten-5"
                  size="small"
                  ><v-icon>mdi-delete</v-icon></v-btn
                >
              </v-btn-toggle>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import DepartmentDialog from "./DepartmentDialog.vue";
import DepartementSearchAndButtonsComp from "./DepartementSearchAndButtonsComp.vue";

let departmentDialog = ref();
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
  { title: "DIT" },
  { title: "DIT" },
  { title: "DIT" },
  { title: "DIT" },
  { title: "DIT" },
]);
</script>
