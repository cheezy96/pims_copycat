<template>
  <v-menu location="bottom">
    <template v-slot:activator="{ props }">
      <v-btn size="small" color="primary" v-bind="props" rounded>
        <v-icon>mdi-printer</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in printMenu.first"
        :key="index"
        @click="print(item.print)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item
        v-for="(item, index) in printMenu.second"
        :key="index"
        @click="print(item.print, item.card)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item
        v-for="(item, index) in printMenu.third"
        :key="index"
        @click="print(item.print)"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup>
import router from "@/router";
import { ref, defineEmits } from "vue";

const emit = defineEmits(['showPrintDialog']);

let printMenu = ref({
  first: [
    { title: "RIS No" },
    { title: "Purchase Request" },
    { title: "Price Quotation Form" },
    { title: "Request For Quotation" },
  ],
  second: [
    { title: "BAC Resolution" },
    { title: "Abstract", print: "AbstractPrintView" },
    { title: "Purchase Order", card: true },
    { title: "IAR", card: true },
    { title: "Notice of Delivery", card: true },
  ],
  third: [
    { title: "Inventory Custodian Slip", print: "InventoryCustodianSlip" },
    { title: "PAR", card: true },
    { title: "PAR Report", card: true },
    { title: "RIS Yes", card: true },
  ],
});

function print(title, card) {
  if (card) {
    emit('showPrintDialog');
    return;
  }
    console.log("Print Card");

  let url = router.resolve({
    name: title,
  }).href;

  let frame1 = document.createElement("iframe");
  frame1.name = "frame1";
  document.body.appendChild(frame1);
  frame1.src = url;

  setTimeout(function () {
    window.frames["frame1"].focus();
    window.frames["frame1"].print();
    document.body.removeChild(frame1);
  }, 500);
  return false;
}


</script>

<style lang="scss" scoped></style>
