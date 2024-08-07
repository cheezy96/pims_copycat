<template>
  <v-dialog width="auto">
    <v-card width="800px" max-width="100%">
      <v-card-title class="bg-primary pa-4"> PR Numbers </v-card-title>
      <v-card-text class="px-4 pt-0" color="light">
        <v-row class="mt-2" align="center" justify="center">
          <v-col sm="12" md="3" cols="12">
            <v-text-field
              variant="underlined"
              label="PR Number"
              prepend-icon="mdi-barcode"
            ></v-text-field>
          </v-col>
          <v-col sm="12" md="3" cols="12">
            <v-text-field
              variant="underlined"
              label="Abstract Number"
              prepend-icon="mdi-barcode"
            ></v-text-field>
          </v-col>
          <v-col sm="12" md="3" cols="12">
            <v-text-field
              variant="underlined"
              label="PO Number"
              prepend-icon="mdi-barcode"
            ></v-text-field>
          </v-col>
          <v-col sm="12" md="3" cols="12">
            <v-text-field
              variant="underlined"
              label="IAR Number"
              prepend-icon="mdi-barcode"
            ></v-text-field>
          </v-col>
          <v-col sm="12" md="4" cols="12">
            <v-select
              :items="endUser"
              variant="underlined"
              label="End User"
            ></v-select>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider theme="light"></v-divider>

      <v-card-actions>
        <v-btn disabled>Submit</v-btn>
        <v-btn>Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

let endUser = ref([
  { title: "Admin" },
  { title: "DIT Student Support" },
  { title: "Ycker Ponio" },
]);
</script>

<style lang="scss" scoped></style>
