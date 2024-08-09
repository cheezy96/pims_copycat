<template>
  <body>
    <div class="header">
      <h3>ABSTRACT OF PRICE QUOTATION</h3>
      <h4>Date: Invalid date</h4>
    </div>

    <table>
      <thead>
        <tr>
          <th style="width: 10%">Item No.</th>
          <th style="width: 60%" colspan="3">Article/Description</th>
          <th style="width: 30%" colspan="2">
            Lowest Calculated and Responsive Quotation
          </th>
        </tr>
        <tr>
          <th></th>
          <th style="width: 10%">Qty</th>
          <th style="width: 10%">Unit</th>
          <th style="width: 40%">Description</th>
          <th colspan="2"></th>
        </tr>
        <tr>
          <th colspan="100%">
            Purpose: Airfare during the process of documents for Visa and
            Diploma Passport
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.qty }}</td>
          <td>{{ item.unit }}</td>
          <td style="text-align: start">
            {{ item.description }}
          </td>
          <td v-if="index == 0" rowspan="100%" colspan="2"></td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td colspan="2" style="text-align: end"></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>xxx nothing follows xxx</td>
          <td colspan="2"></td>
        </tr>
      </tbody>

      <tbody>
        <tr>
          <td colspan="100%">for Bids and Awards Committee</td>
        </tr>
        <tr>
          <th colspan="3">Prepared by:</th>
          <th>Recommended by:</th>
          <th></th>
          <th colspan="2">Approved by:</th>
        </tr>
        <tr>
          <td colspan="3" class="underline">ALANAH TAMARAH N. MILLAN</td>
          <td class="underline">MARILOU F. COLOMA</td>
          <td style="width: 15%" class="underline">MARIBEL B. TERO</td>
          <td style="width: 15%" class="underline">
            ENGR. CONSTANTINO B. PANES, JR. Ed
          </td>
        </tr>
        <tr>
          <td colspan="3">Procurement Focal</td>
          <td>BAC Chairperson</td>
          <td>BAC Vice-Chairperson</td>
          <td>Authorized Signatory</td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td class="underline">MARIO M. DELA CERNA</td>
          <td class="underline">ARMANDO D. BOLIVAR</td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td>BAC Member</td>
          <td>BAC Member</td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td class="underline">JOSEPH I. JUNIO</td>
        </tr>
        <tr>
          <td colspan="3"></td>
          <td>BAC Member</td>
        </tr>
      </tbody>
      <tbody>
        <tr>
          <th colspan="100%">with Delegation of Authority</th>
        </tr>
        <tr>
          <th colspan="3">Prepared by:</th>
          <th>Checked by:</th>
          <th>Approved by:</th>
          <th>Noted by:</th>
        </tr>
        <tr>
          <td colspan="3" class="underline">ALANAH TAMARAH N. MILLAN</td>
          <td class="underline">MARIO M. DELA CERNA</td>
          <td class="underline">ENGR. CONSTANTINO B. PANES, JR. Ed.D</td>
        </tr>
        <tr>
          <td colspan="3">Procurement Focal</td>
          <td>Unit Head</td>
          <td>Division Head</td>
          <td>End-user</td>
        </tr>
      </tbody>
    </table>
  </body>
</template>

<script setup>
let items = ref([
  {
    id: 1,
    qty: 2,
    unit: "unit",
    description:
      "Airfare during the process of documents for Visa and Diploma Passport",
  },
  {
    id: 2,
    qty: 2,
    unit: "unit",
    description:
      "Airfare during the process of documents for Visa and Diploma Passport",
  },
  {
    id: 3,
    qty: 2,
    unit: "unit",
    description:
      "Airfare during the process of documents for Visa and Diploma Passport",
  },
]);
</script>

<style scoped>
* {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 12px;
}

.header {
  text-align: center;
  margin: 20px 0;
}
.header h3 {
  font-size: 14px;
  font-weight: 600;
}
.header h4 {
  font-weight: 500;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
}
table tr th,
table tr td {
  border: 1px solid #000;
  padding: 5px;
  text-align: center;
  height: 30px;
}
table tr:nth-child(3) th {
  text-align: start;
}
table tbody:nth-child(1n + 4) tr td,
table tbody:nth-child(1n + 4) tr th {
  border: none;
}
table tbody:nth-child(1n + 4) {
  border: 1px solid #000;
}
table tbody:nth-child(1n + 4) tr th {
  text-align: start;
}
table tbody:nth-child(1n + 4) tr:nth-child(1n + 3) td {
  text-align: start;
}
table tbody:nth-child(1n + 4) tr:nth-child(2) th {
  padding-bottom: 10px;
}
table tbody:nth-child(1n + 4) tr td,
table tbody:nth-child(1n + 3) tr th {
  padding: 0 5px;
  margin: 0;
  height: 0;
}
table tbody:nth-child(1n + 4) tr:nth-child(2n + 4):not(:last-child) td {
  padding-bottom: 20px;
}

.underline {
  text-decoration: underline;
}

@media print {
  @page {
    size: A4 landscape;
    margin: 20px;
    padding: 0;
  }
}
</style>
