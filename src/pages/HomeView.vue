<script setup>
import ButtonMen from '../components/common/ButtonMen.vue'
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next'

const columns = [
  {
    label: 'Nombre del formulario',
    field: 'name',
  },
  {
    label: 'Número de preguntas',
    field: 'age',
  },
  {
    label: 'Fecha de creación',
    field: 'createdAt',
  },
  {
    label: 'Estado',
    field: 'state',
  },
]

const rows = [
  {
    id: 1,
    name: 'Shalom Winner - Solar Sales Receipt Installation',
    age: 20,
    createdAt: null,
    state: 'Publicado',
  },
  {
    id: 2,
    name: 'Shalom Winner - Solar Sales Receipt Installation',
    age: 24,
    createdAt: '2011-10-31',
    state: 'Publicado',
  },
  {
    id: 3,
    name: 'Shalom Winner - Solar Sales Receipt Installation',
    age: 16,
    createdAt: '2011-10-30',
    state: 'Borrador',
  },
  {
    id: 4,
    name: 'Shalom Winner - Solar Sales Receipt Installation',
    age: 55,
    createdAt: '2011-10-11',
    state: 'Publicado',
  },
  {
    id: 5,
    name: 'Shalom Winner - Solar Sales Receipt Installationn',
    age: 40,
    createdAt: '2011-10-21',
    state: 'Publicado',
  },
  {
    id: 6,
    name: 'Shalom Winner - Solar Sales Receipt Installation',
    age: 20,
    createdAt: '2011-10-31',
    state: 'Publicado',
  },
]
</script>

<template>
  <div class="content">
    <div class="row">
      <div class="col-12 col-sm-6">
        <h5>Formularios</h5>
        <p>Consulta y crea nuevos formularios</p>
      </div>
      <div class="col-12 col-sm-6 text-end mb-4">
        <button-men label="Nuevo formulario" icon="add_men" href="/formulario" />
      </div>
      <div class="col-12 mt-2">
        <div class="box">
          <p class="mb-0 p-3 total">Formularios: 927</p>
          <vue-good-table
            :columns="columns"
            :rows="rows"
            :sort-options="{
              enabled: false,
            }"
            :pagination-options="{
              enabled: true,
              mode: 'records',
              perPage: 5,
              dropdownAllowAll: false,
              nextLabel: 'Siguiente',
              prevLabel: 'Anterior',
              ofLabel: 'de',
              pageLabel: 'Pagina', // for 'pages' mode
              allLabel: 'All',
            }"
          >
            <template #table-row="props">
              <span v-if="props.column.field == 'state'">
                <span
                  :class="{
                    green: props.row.state === 'Publicado',
                    gray: props.row.state === 'Borrador',
                  }"
                  >{{ props.row.state }}</span
                >
              </span>
            </template>
          </vue-good-table>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '../scss/variables' as *;

.content {
  padding: 36px;

  background-color: $color-gray-10;
  min-height: calc(100vh - 65px);

  .green {
    padding: 2px 12px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 12px;
    background-color: $color-green-10;
    color: $color-green;
  }

  .gray {
    padding: 2px 12px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 12px;
    background-color: $color-gray-40;
    color: $color-blue-10;
  }

  .box {
    background: $color-white;
    border-radius: 10px;
    border: 1px solid $color-gray;
    box-shadow: 0px 4px 4px -2px #00000005;

    .total {
      font-size: 16px;
    }
  }

  .vgt-wrap {
    .vgt-table.bordered td,
    .vgt-table.bordered th {
      border: none;
      border-bottom: 1px solid $color-gray-20;
    }

    .vgt-table.bordered th {
      padding: 13px 24px;
      font-size: 12px;
    }

    .vgt-table.bordered td {
      padding: 26px 24px;
      font-size: 14px;
    }

    .vgt-pull-left {
      display: none;
    }

    .vgt-table {
      border: none;
    }

    .vgt-wrap__footer {
      background: $color-white;
      border: none;
      border-radius: 10px;
    }
  }
}
</style>
