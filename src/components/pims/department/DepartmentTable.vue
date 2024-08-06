<template>
  <v-data-table>
    <template v-slot:item="{ item }">
      <tr>
        <td></td>
        <td>{{ item.title }}</td>
        <td>
          <v-btn-toggle style="height: 30px">
            <v-btn size="small" variant="tonal" class="border"
              ><v-icon>mdi-pencil</v-icon></v-btn
            >
            <v-btn size="small" variant="tonal" class="border"
              ><v-icon>mdi-delete</v-icon></v-btn
            >
          </v-btn-toggle>
        </td>
      </tr>
    </template>
  </v-data-table>
</template>
