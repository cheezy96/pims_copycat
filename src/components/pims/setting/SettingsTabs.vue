<template>
  <v-container class="d-flex justify-center">
    <v-card width="8200">
      <v-tabs v-model="tab" bg-color="white">
        <v-tab value="one">Others</v-tab>
        <v-tab value="two">BAC members</v-tab>
        <v-tab value="three">Personnel</v-tab>
      </v-tabs>
      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one"> </v-tabs-window-item>

          <v-tabs-window-item value="two">
            <SettingsTabsBacMembers />
          </v-tabs-window-item>

          <v-tabs-window-item value="three"> Three </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>

      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="orange">RESET</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="primary">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import SettingsTabsBacMembers from "./SettingsTabsBacMembers.vue";

let tab = ref(null);
</script>

<style scoped></style>
