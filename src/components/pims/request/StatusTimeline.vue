<template>
  <v-dialog max-width="500">
    <v-card class="pb-10">
      <v-container class="bg-white rounded">
        <v-timeline theme="light" density="comfortable" size="100" width="100%">
          <v-timeline-item dot-color="teal" size="x-large" fill-dot>
            <template size="large" v-slot:icon>
              <v-icon>mdi-chat</v-icon>
            </template>

            <div
              style="
                width: 350px;
                display: flex;
                gap: 2px;
                align-items: center;
                justify-content: center;
              "
            >
              <div style="width: 100%">
                <v-text-field
                  variant="plain"
                  placeholder="Status details(Optional)"
                  hide-details
                  density="compact"
                  class="align-center pb-2"
                >
                </v-text-field>
              </div>
              <v-spacer></v-spacer>
              <div>
                <v-btn variant="plain" class="bg-grey-lighten-2">Post</v-btn>
              </div>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script setup></script>

<style lang="scss" scoped></style>
