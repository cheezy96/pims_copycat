<template>
  <v-menu location="bottom">
    <template v-slot:activator="{ props }">
      <v-btn size="small" color="primary" v-bind="props" rounded>
        <v-icon>mdi-printer</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item v-for="(item, index) in printMenu.first" :key="index">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item v-for="(item, index) in printMenu.second" :key="index">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item v-for="(item, index) in printMenu.third" :key="index">
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import { ref } from "vue";

let printMenu = ref({
  first: [
    { title: "RIS No" },
    { title: "Purchase Request" },
    { title: "Price Quotation Form" },
    { title: "Request For Quotation" },
  ],
  second: [
    { title: "BAC Resolution" },
    { title: "Abstract" },
    { title: "Purchase Order" },
    { title: "IAR" },
    { title: "Notice of Delivery" },
  ],
  third: [
    { title: "Inventory Custodian Slip" },
    { title: "PAR Report" },
    { title: "RIS Yes" },
  ],
});
</script>

<style lang="scss" scoped></style>
