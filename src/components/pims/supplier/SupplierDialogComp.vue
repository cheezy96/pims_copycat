<template>
  <div>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title> Supplier Form </v-card-title>
        <v-card-text>
            <v-text-field label="Supplier Name" variant="underlined"></v-text-field>
            <v-text-field label="Address"  variant="underlined"></v-text-field>
            <v-text-field label="TIN"  variant="underlined"></v-text-field>
        </v-card-text>
        tec
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
function openDialog() {
    dialog.value = true;
}
</script>

<style scoped></style>
