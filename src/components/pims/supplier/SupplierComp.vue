<template>
  <div class="w-100">
    <v-main max-width="750px" class="mx-auto">
      <SearchAndButtonsComp />
      <SupplierDataTableComp />
    </v-main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SearchAndButtonsComp from "../SearchAndButtonsComp";
import SupplierDataTableComp from "./SupplierDataTableComp";
</script>

<style scoped></style>
