<script setup>
import { ref, markRaw } from 'vue'
import BreadcrumbMen from '@/components/common/BreadcrumbMen.vue'
import InputText from '../components/common/InputText.vue'
import InputNumber from '../components/common/InputNumber.vue'
import InputTextarea from '../components/common/InputTextarea.vue'
import ButtonMen from '@/components/common/ButtonMen.vue'

const form = ref([])
const dropzone = ref(null)

// Mapeo de componentes
const componentMap = {
  InputText: markRaw(InputText),
  InputNumber: markRaw(InputNumber),
  InputTextarea: markRaw(InputTextarea),
}

// Evento dragstart: se activa al iniciar el arrastre
const dragStart = (event) => {
  event.dataTransfer.setData('text', event.target.id)
}

// Evento dragover: permite que el dropzone reciba el elemento
const dragover = (event) => {
  event.preventDefault() // Permitir la acción de soltar
}

// Evento drop: se activa cuando el elemento se suelta en la zona
const drop = (event) => {
  event.preventDefault()
  const data = event.dataTransfer.getData('text')
  const draggableElement = document.getElementById(data)
  // const clone = draggableElement?.cloneNode(true)
  // dropzone.value.appendChild(clone)
  form.value = [...form.value, componentMap[draggableElement.dataset.option]]
}
</script>

<template>
  <div class="content">
    <breadcrumb-men
      :items="[{ label: 'Formularios', href: '/' }, { label: 'Nuevo formulario' }]"
      class="mb-4"
    />

    <div class="row">
      <div class="col-12">
        <div class="d-flex justify-content-between">
          <h5 class="title">Nuevo formulario</h5>
          <div>
            <button-men label="Publicar" />
          </div>
        </div>

        <div class="col-12 col-md-10 col-lg-9">
          <div class="box">
            <h5>Configuración básica del formulario</h5>
            <input-text
              label="Nombre del formulario"
              placeholder="Nombre"
              :mandatory="true"
              class="mb-4"
            />

            <input-textarea label="Descripción" :mandatory="true" placeholder="Descripción" />
          </div>
        </div>
      </div>

      <!-- <div class="col-12 col-md-8">
        <p>Formulario</p>
        <form ref="dropzone" class="p-3" @dragover="dragover" @drop="drop">
          <div v-if="form.length < 1" class="dropzone p-4 m-3">
            <p class="m-0">Dropzone</p>
          </div>
          <div v-for="(item, index) in form" :key="item + index">
            <component :is="item" />
          </div>
        </form>
      </div> -->
      <!-- <div class="col-12 col-md-4">
        <p>Componentes</p>
        <ul>
          <li id="draggable-1" @dragstart="dragStart" draggable="true" data-option="InputText">
            Text field
          </li>
          <li id="draggable-2" @dragstart="dragStart" draggable="true" data-option="InputNumber">
            Number
          </li>
          <li id="draggable-3" @dragstart="dragStart" draggable="true" data-option="InputTextarea">
            Textarea
          </li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.content {
  padding: 36px;

  background-color: $color-gray-10;
  min-height: calc(100vh - 65px);

  .title {
    font-size: 32px;
    margin-bottom: 38px;
  }

  .box {
    padding: 32px;

    border: 1px solid $color-gray;
    border-radius: 10px;
    background-color: $color-white;

    h5 {
      font-size: 24px;
      margin-bottom: 32px;
    }
  }
}

// .dropzone {
//   border: 2px dashed #bbb;
// }
</style>
