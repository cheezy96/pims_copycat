<template>
  <div>
    <v-dialog v-model="dialog" max-width="400px">
      <v-card min-height="400">
        <v-card-title class="bg-primary pa-4"> Supplier Form </v-card-title>
        <v-card-text class="py-1 d-flex flex-column justify-space-between">
          <v-text-field
            color="primary"
            label="Supplier Name"
            variant="underlined"
            class="mx-n2 my-2"
          ></v-text-field>
          <v-text-field
            color="primary"
            label="Address"
            variant="underlined"
            class="mx-n2 my-2"
          ></v-text-field>
          <v-text-field
            color="primary"
            label="TIN"
            variant="underlined"
            class="mx-n2 my-2"
          ></v-text-field>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">Submit</v-btn>
          <v-btn @click="dialog=false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

let dialog = ref(false);

defineExpose({
  openDialog,
});
function openDialog() {
  dialog.value = true;
}
</script>

<style scoped></style>
