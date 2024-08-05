<template>
  <v-app>
    <div class="h-100">
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
              <MainComp />
            </v-tabs-window-item>

            <v-tabs-window-item value="two">
              <RequestComp />
            </v-tabs-window-item>

            <v-tabs-window-item value="three"> Three </v-tabs-window-item>
            <v-tabs-window-item value="four"> Three </v-tabs-window-item>
            <v-tabs-window-item value="five">
              <SettingsComp />
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card-text>
      </v-card>
    </div>
  </v-app>
</template>

<script setup>
import RequestComp from "@/components/pims/request/RequestComp.vue";
import MainComp from "../components/pims/main/MainComp.vue";
import SettingsComp from "../components/pims/setting/SettingsComp.vue";
import { ref } from "vue";

let tab = ref(null);
</script>
