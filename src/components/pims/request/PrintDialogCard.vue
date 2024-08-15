<template>
  <v-dialog width="100%">
    <template v-slot:default="{ isActive }">
      <v-card max-width="600px" width="100%" class="mx-auto">
        <v-card-title class="bg-primary pa-4">
          SELECT SUPPLIER - PO</v-card-title
        >
        <v-card-text> </v-card-text>
        <v-card-actions>
          <v-btn text="Close" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<script setup></script>

<style lang="scss" scoped></style>
