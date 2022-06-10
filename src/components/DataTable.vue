<template>
  <q-table
    :loading="loading"
    flat
    separator="cell"
    :rows="rows"
    :columns="columns"
    row-key="name"
  >
    <template v-slot:header="props">
      <q-tr :props="props">
        <q-th
          v-for="col in props.cols"
          :key="col.name"
          :props="props"
          class="text-italic text-orange"
        >
          {{ col.label }}
        </q-th>
      </q-tr>
    </template>

    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <div>
          <q-badge color="purple" :label="props.value" />
        </div>
        <div class="my-table-details">
          {{ props.row.details }}
        </div>
      </q-td>
    </template>
  </q-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DataTable',
  props: {
    loading: {
      required: true,
      type: Boolean
    },
    rows: {
      required: true,
      type: Object
    },
    columns: {
      required: true,
      type: Object
    }
  }
})
</script>
