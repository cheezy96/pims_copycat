<template>
  <v-app>
    <div class="h-100">
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

            <v-tabs-window-item value="two"> Two </v-tabs-window-item>

            <v-tabs-window-item value="three">
              <SupplierComp />
            </v-tabs-window-item>

            <v-tabs-window-item value="four"> Three </v-tabs-window-item>

            <v-tabs-window-item value="five">
              <SettingsComp />
            </v-tabs-window-item>
          </v-tabs-window>
        </v-card-text>
    </div>
  </v-app>
</template>

<script setup>
import MainComp from "../components/pims/main/MainComp.vue";
import SettingsComp from "../components/pims/setting/SettingsComp.vue";
import SupplierComp from "../components/pims/supplier/SupplierComp.vue";
import { ref } from "vue";

let tab = ref(null);
</script>
