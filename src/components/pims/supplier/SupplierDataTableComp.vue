<template>
  <v-data-table
    :headers="headers"
    :items="items"
    item-key="name"
    items-per-page="10"
    :items-per-page-options="[
      { value: 5, title: '5' },
      { value: 10, title: '10' },
      { value: 15, title: '15' },
      { value: -1, title: '$vuetify.dataFooter.itemsPerPageAll' },
    ]"
    color="#033"
    ><template #item.action="{ item }">
      <div>
        <v-btn
          variant="outlined"
          class="border-sm bg-grey-lighten-5 rounded-0 rounded-ts rounded-bs border-e-thin"
          size="small"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn
          variant="outlined"
          class="border-sm bg-grey-lighten-5 rounded-0 rounded-te rounded-be border-s-thin"
          size="small"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </div>
    </template></v-data-table
  >
</template>

<script setup>
import { ref } from "vue";
let headers = ref([
  { title: "ID", value: "id", align: "start", sortable: true },
  { title: "Name", value: "name", align: "start", sortable: true },
  { title: "Address", value: "address", align: "start", sortable: true },
  { title: "TIN", value: "tin", align: "start", sortable: true },
  {
    title: "",
    align: "end",
    value: "action",
  },
]);
let items = ref([
  {
    id: 1,
    name: "Great Pyramid of Giza",
    address: "Egypt",
    tin: "146.6",
    action: "",
  },
  {
    id: 2,
    name: "Pyramid of Khafre",
    address: "Egypt",
    tin: "136.4",
    action: "",
  },
  {
    id: 3,
    name: "Red Pyramid",
    address: "Egypt",
    tin: "104",
    action: "",
  },
  {
    id: 4,
    name: "Bent Pyramid",
    address: "Egypt",
    tin: "101.1",
    action: "",
  },
  {
    id: 5,
    name: "Pyramid of the Sun",
    address: "Mexico",
    tin: "65",
    action: "",
  },
  {
    id: 6,
    name: "Pyramid of the Moon",
    address: "Philppines",
    tin: "69",
    action: "",
  },
]);
</script>
