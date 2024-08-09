<template>
  <DepartmentDialog ref="departmentDialog"></DepartmentDialog>
  <div class="d-flex justify-space-around w-100">
    <div>
      <v-text-field
        label="Search"
        variant="underlined"
        color="primary"
        prepend-icon="mdi-magnify"
        placeholder="Search"
        width="300"
      ></v-text-field>
    </div>
    <v-spacer></v-spacer>
    <div class="pa-2 my-auto d-flex ga-2">
      <v-btn color="primary" @click="departmentDialog.openDialog()">
        <v-icon size="x-large">mdi-plus</v-icon>
      </v-btn>
      <v-btn color="primary">
        <v-icon size="x-large">mdi-refresh</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import DepartmentDialog from "./DepartmentDialog.vue";


let departmentDialog = ref();
</script>

<style></style>

<style scoped></style>
