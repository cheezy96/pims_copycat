<template>
  <v-container class="d-flex justify-center">
    <SettingsResetDialog ref="settingsResetDialog"></SettingsResetDialog>
    <v-card width="950">
      <v-tabs color="primary" v-model="tab">
        <v-tab value="one">Others</v-tab>
        <v-tab value="two">BAC members</v-tab>
        <v-tab value="three">Personnel</v-tab>
      </v-tabs>
      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one"> </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <SettingsTabsBacMember
          /></v-tabs-window-item>

          <v-tabs-window-item value="three">
            <SettingsTabsPersonnel />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="orange" @click="settingsResetDialog.openDialog()">RESET</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import SettingsTabsPersonnel from "./SettingsTabsPersonnel.vue";
import SettingsTabsBacMember from "./SettingsTabsBacMember.vue";
import SettingsResetDialog from "./SettingsResetDialog.vue";

let settingsResetDialog = ref();
let tab = ref(null);
</script>

<style scoped></style>
