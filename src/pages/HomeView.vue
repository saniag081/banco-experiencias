<script setup>
import ButtonMen from '../components/common/ButtonMen.vue'
import 'vue-good-table-next/dist/vue-good-table-next.css'
import { VueGoodTable } from 'vue-good-table-next'
import IconMen from '@/components/common/Icon/IconMen.vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

import { useFormsStore } from '@/stores/forms'

const formsStore = useFormsStore()
const { getForms, deleteForm } = formsStore

const lastItemSelected = ref('')

const requestForms = async () => {
  try {
    await getForms()
  } catch (error) {
    console.log(error)
  }
}

requestForms()

const columns = [
  {
    label: 'Nombre del formulario',
    field: 'esquema.name',
  },
  {
    label: 'Fecha de creación',
    field: 'fechaCreacion',
  },
  {
    label: 'Estado',
    field: 'estado',
  },
]

const getLabelState = (label) => {
  if (label.toLocaleLowerCase() === 'activo') {
    return 'Publicado'
  }

  return 'Borrador'
}

const handleDeleteForm = async () => {
  try {
    await deleteForm(lastItemSelected.value)
    await requestForms()

    const modalElement = document.getElementById('comfirn-delete')
    const modalInstance = window.bootstrap.Modal.getInstance(modalElement)
    modalInstance.hide()
  } catch (error) {
    console.error(error)
  } finally {
    console.log(lastItemSelected)
  }
}
</script>

<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <div
          class="modal fade"
          id="comfirn-delete"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content p-3">
              <div class="modal-body">
                <div class="text-center">
                  <h5 class="mb-4" id="exampleModalLabel">Eliminar formulario</h5>
                  <p class="mb-0">Eliminaras un formulario ¿Seguro que deseas eliminarlo?</p>
                </div>
              </div>
              <div class="d-flex justify-content-center p-3 gap-3">
                <button-men label="Cancelar" data-bs-dismiss="modal" :primary="false" />
                <button-men label="Sí, eliminar" @click="handleDeleteForm" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-sm-6">
        <h5>Formularios</h5>
        <p>Consulta y crea nuevos formularios</p>
      </div>
      <div class="col-12 col-sm-6 text-end mb-4">
        <button-men label="Nuevo formulario" icon="add_men" href="/form/new" />
      </div>
      <div class="col-12 mt-2">
        <div class="box">
          <p class="mb-0 p-3 total">Formularios: 927</p>
          <vue-good-table
            :columns="columns"
            :rows="formsStore.forms"
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
              <div
                v-if="props.column.field == 'estado'"
                class="d-flex justify-content-between align-items-center"
              >
                <span
                  :class="{
                    green: props.row.estado.toLocaleLowerCase() === 'activo',
                    gray: props.row.estado.toLocaleLowerCase() === 'borrador',
                  }"
                  >{{ getLabelState(props.row.estado) }}</span
                >
                <div class="dropdown">
                  <a
                    class="btn-icon d-flex align-items-center justify-content-center"
                    href="#"
                    role="button"
                    id="dropdownOptions"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <icon-men name="dots_men" width="16" height="16" />
                  </a>

                  <ul class="dropdown-menu" aria-labelledby="dropdownOptions">
                    <li v-if="props.row.estado.toLocaleLowerCase() === 'borrador'">
                      <router-link class="dropdown-item" :to="`form/${props.row.id}/edit`">Editar</router-link>
                    </li>
                    <li>
                      <a
                        class="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#comfirn-delete"
                        @click="lastItemSelected = props.row.id">
                        Eliminar
                      </a>
                    </li>
                    <li>
                      <router-link class="dropdown-item" :to="`form/${props.row.id}`">Ver</router-link>
                    </li>
                    <li v-if="props.row.estado.toLocaleLowerCase() === 'activo'"><hr class="dropdown-divider" /></li>
                    <li v-if="props.row.estado.toLocaleLowerCase() === 'activo'">
                      <router-link class="dropdown-item" :to="`form/${props.row.id}/fill`">
                        Enlace público
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
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

  .btn-icon {
    width: 32px;
    height: 32px;
    border: 1px solid #e4e7ec;
    border-radius: 8px;
    color: $color-black;
  }

  .dropdown-menu {
    width: 267px;
    border: none;
    box-shadow: 0px 4px 20px 0px #0000001a;

    a {
      padding: 8px 16px;
    }
  }

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
    .vgt-responsive {
      overflow: initial;
    }
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
