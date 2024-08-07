<template>
  <v-data-table hide-defualt-footer>
    <template v-slot:item="{ item }">
      <tr>
        <td></td>
        <td>{{ item.title }}</td>
        <td>
          <v-btn-toggle style="height: 30px">
            <v-btn
              variant="outlined"
              class="border-sm bg-grey-lighten-5"
              size="small"
              ><v-icon>mdi-pencil</v-icon></v-btn
            >
            <v-btn
              variant="outlined"
              class="border-sm bg-grey-lighten-5"
              size="small"
              ><v-icon>mdi-delete</v-icon></v-btn
            >
          </v-btn-toggle>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>
