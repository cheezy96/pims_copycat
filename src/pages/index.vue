<template>
  <v-app>
    <h1 class="text-h4">Procurement & Inventory Management System</h1>
    <v-card>
      <v-tabs v-model="tab" bg-color="primary">
        <v-tab value="one">MAIN</v-tab>
        <v-tab value="two">REQUESTS</v-tab>
        <v-tab value="three">SUPPLIERS</v-tab>
        <v-tab value="four">DEPARTMENTS</v-tab>
        <v-tab value="five">SETTINGS</v-tab>
      </v-tabs>

      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <MainComponent />
          </v-tabs-window-item>

          <v-tabs-window-item value="two"> Two </v-tabs-window-item>

          <v-tabs-window-item value="three"> Three </v-tabs-window-item>
          <v-tabs-window-item value="four"> Three </v-tabs-window-item>
          <v-tabs-window-item value="five"> Three </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script setup>
import MainComponent from "../components/pims/main/MainComponent.vue";
import SettingsComp from "../components/pims/setting/SettingsComp.vue";
import { ref } from "vue";

let tab = ref(null);
</script>
