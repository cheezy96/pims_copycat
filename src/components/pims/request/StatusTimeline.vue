<template>
  <v-dialog>
    <v-container class="bg-white rounded" style="max-width: 600px">
      <v-timeline theme="light" density="comfortable" size="100" width="100%">
        <v-timeline-item dot-color="teal" size="large" fill-dot>
          <template v-slot:icon>
            <v-icon>mdi-chat</v-icon>
          </template>

          <v-text-field
            variant="plain"
            placeholder="Status details(Optional)"
            hide-details
            class="align-center"
          >
            <template v-slot:append>
              <v-btn variant="plain" class="bg-grey-lighten-4">Post</v-btn>
            </template>
          </v-text-field>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </v-dialog>
</template>

<script setup></script>

<style lang="scss" scoped></style>
