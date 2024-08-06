<template>
  <div>
    <v-dialog v-model="dialog" width="auto" persistent>
      <v-card class="pa-1" height="130" width="300">
        <v-card-title class="text-h5">Reset all settings?</v-card-title>
        <v-spacer></v-spacer>
        <v-card-actions>
          <v-btn text="Confirm" color="success"></v-btn>
          <v-btn text="Cancel" color="success" @click="dialog = false"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";

let dialog = ref(false);

defineExpose({
    openDialog
})

function openDialog(){
    dialog.value = true;
}
</script>

<style scoped></style>
