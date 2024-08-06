<template>
  <v-app>
    <v-container class="w-80">
      <v-row align="center" justify="center">
        <v-col sm="4" md="2" cols="12">
          <v-text-field
            v-model="search"
            prepend-icon="mdi-magnify"
            label="Search"
            variant="underlined"
          ></v-text-field>
        </v-col>
        <v-col sm="3" md="2" cols="12">
          <v-select
            label="Department"
            variant="underlined"
            :items="departments"
            item-title="text"
            item-value="value"
          ></v-select>
        </v-col>
        <v-col sm="3" md="2" cols="12">
          <v-select
            label="Status"
            variant="underlined"
            :items="status"
            item-title="text"
            item-value="value"
          ></v-select>
        </v-col>
        <v-col sm="3" md="2" cols="12">
          <v-btn-toggle v-model="toggle_btn" style="height: 30px" mandatory>
            <v-btn size="small" variant="tonal">All</v-btn>
            <v-btn size="small" variant="tonal">Self</v-btn>
          </v-btn-toggle>
        </v-col>
        <v-col align="right" md="4" cols="12">
          <v-btn color="primary" class="mr-2">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn color="primary">
            <v-icon>mdi-refresh</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <v-row>
        <v-data-table
          :headers="headers"
          :items="requestTable"
          :search="search"
          items-per-page="10"
        >
          <template v-slot:item="{ item }">
            <tr>
              <td>
                <v-btn
                  @click="dialogPRNo = true"
                  size="small"
                  color="primary"
                  rounded
                >
                  {{ item.prNo }}
                </v-btn>
              </td>
              <td>{{ item.requestor }}</td>
              <td>{{ item.purpose }}</td>
              <td>{{ item.items }}</td>
              <td>{{ item.amount }}</td>
              <td>{{ item.date }}</td>
              <td>
                <div class="d-flex justify-center">
                  <v-btn
                    @click="dialogStatus = true"
                    size="small"
                    :color="getColor(item.status)"
                    rounded
                  >
                    {{ item.status }}
                  </v-btn>
                </div>
              </td>

              <td>
                <div class="d-flex justify-center ga-1">
                  <v-menu location="bottom">
                    <template v-slot:activator="{ props }">
                      <v-btn
                        size="small"
                        color="primary"
                        v-bind="props"
                        rounded
                      >
                        <v-icon>mdi-printer</v-icon>
                      </v-btn>
                    </template>

                    <v-list>
                      <v-list-item
                        v-for="(item, index) in printMenu.first"
                        :key="index"
                      >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>

                      <v-divider></v-divider>

                      <v-list-item
                        v-for="(item, index) in printMenu.second"
                        :key="index"
                      >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>

                      <v-divider></v-divider>

                      <v-list-item
                        v-for="(item, index) in printMenu.third"
                        :key="index"
                      >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>

                  <v-menu location="bottom">
                    <template v-slot:activator="{ props }">
                      <v-btn
                        size="small"
                        color="primary"
                        v-bind="props"
                        rounded
                      >
                        <v-icon>mdi-cog</v-icon>
                      </v-btn>
                    </template>

                    <v-list>
                      <v-list-item
                        v-for="(item, index) in settingMenu"
                        :key="index"
                      >
                        <v-list-item-title>
                          <v-icon>{{ item.icon }}</v-icon>
                          {{ item.title }}
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </div>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-row>
    </v-container>

    <v-dialog v-model="dialogPRNo" width="auto">
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
  </v-app>
</template>

<script setup>
import { ref } from "vue";

let dialogPRNo = ref(false);
let dialogStatus = ref(false);

let departments = ref([
  { text: "All", value: "all" },
  { text: "Admin", value: "admin" },
  { text: "DABET", value: "dabet" },
  { text: "DAT", value: "dat" },
]);

let status = ref([
  { text: "All", value: "all" },
  { text: "Received", value: "received" },
  { text: "Lacking", value: "lacking" },
  { text: "For Signature", value: "for signature" },
]);

let search = ref("");

let requestTable = ref([
  {
    prNo: "2023-7-21",
    requestor: "Ycker Ponio",
    purpose: "RTX 3080 For Better Gaming Experience",
    items: 20,
    amount: 20000,
    date: "2023-23-23",
    status: "received",
  },
  {
    prNo: "2023-7-14",
    requestor: "Ycker Ponio",
    purpose: "RTX 3080 For Better Gaming Experience",
    items: 20,
    amount: 20000,
    date: "2023-23-23",
    status: "new",
  },
  {
    prNo: "2023-7-11",
    requestor: "Ycker Ponio",
    purpose: "RTX 3080 For Better Gaming Experience",
    items: 20,
    amount: 2120000,
    date: "2023-23-23",
    status: "new",
  },
  {
    prNo: "2023-7-11",
    requestor: "Ycker Ponio",
    purpose: "RTX 3080 For Better Gaming Experience",
    items: 20,
    amount: 20000,
    date: "2023-23-23",
    status: "new",
  },
  {
    prNo: "2023-7-15",
    requestor: "Ycker Ponio",
    purpose: "RTX 3080 For Better Gaming Experience",
    items: 20,
    amount: 20000,
    date: "2023-23-23",
    status: "new",
  },
  {
    prNo: "2023-7-11",
    requestor: "Ycker Ponio",
    purpose: "RTX 3080 For Better Gaming Experience",
    items: 20,
    amount: 20000,
    date: "2023-23-23",
    status: "new",
  },
  {
    prNo: "2023-7-11",
    requestor: "Ycker Ponio",
    purpose: "RTX 3080 For Better Gaming Experience",
    items: 20,
    amount: 20000,
    date: "2023-23-23",
    status: "new",
  },
  {
    prNo: "2023-7-11",
    requestor: "Ycker Ponio",
    purpose: "RTX 3080 For Better Gaming Experience",
    items: 20,
    amount: 20000,
    date: "2023-23-23",
    status: "new",
  },
  {
    prNo: "2023-7-11",
    requestor: "rix",
    purpose: "RTX 3080 For Better Gaming Experience",
    items: 20,
    amount: 2002100,
    date: "2023-23-23",
    status: "new",
  },
]);

let headers = ref([
  { title: "PR No", value: "prNo", sortable: true },
  { title: "Requestor", value: "requestor", sortable: true },
  { title: "Purpose", value: "purpose", sortable: true },
  { title: "Items", value: "items", sortable: true },
  { title: "Amount", value: "amount", sortable: true },
  { title: "Date", value: "date", sortable: true },
  { title: "Status", value: "status", sortable: true },
  { title: "", value: "button" },
]);

let endUser = ref([
  { title: "Admin" },
  { title: "DIT Student Support" },
  { title: "Ycker Ponio" },
]);

let printMenu = ref({
  first: [
    { title: "RIS No" },
    { title: "Purchase Request" },
    { title: "Price Quotation Form" },
    { title: "Request For Quotation" },
  ],
  second: [
    { title: "BAC Resolution" },
    { title: "Abstract" },
    { title: "Purchase Order" },
    { title: "IAR" },
    { title: "Notice of Delivery" },
  ],
  third: [
    { title: "Inventory Custodian Slip" },
    { title: "PAR Report" },
    { title: "RIS Yes" },
  ],
});

let settingMenu = ref([
  { title: "Bids", icon: "mdi-tag" },
  { title: "View", icon: "mdi-eye" },
  { title: "Force Edit", icon: "mdi-pencil" },
  { title: "Personnel", icon: "mdi-pencil" },
]);

let toggle_btn = ref(0);

function getColor(status) {
  if (status == "new") return "warning";
  else if (status == "cancelled") return "error";
  else if (status == "received") return "primary";
}
</script>

<style lang="scss" scoped></style>
