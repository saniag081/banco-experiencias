<script setup>
import { ref, markRaw } from 'vue'
import BreadcrumbMen from '@/components/common/BreadcrumbMen.vue'
import OptionForm from '@/components/OptionForm.vue'
import InputText from '@/components/common/InputText.vue'
import InputNumber from '@/components/common/InputNumber.vue'
import InputTextarea from '@/components/common/InputTextarea.vue'
import ButtonMen from '@/components/common/ButtonMen.vue'
import IconMen from '@/components/common/Icon/IconMen.vue'
import QuestionItem from '@/components/QuestionItem.vue'

const form = ref([])
let draggedItemIndex = null

function getRandomNumbers() {
  return Math.floor(Math.random() * 100)
}

const handlePushItem = (item) => {
  const formItem = {
    type: item,
    id: `${item}${getRandomNumbers()}`,
    mandatory: false,
    label: '',
    value: null,
  }
  form.value = [...form.value, formItem]
}

const componentMap = {
  InputText: markRaw(InputText),
  InputNumber: markRaw(InputNumber),
  InputTextarea: markRaw(InputTextarea),
}

const deleteItem = (id) => {
  form.value = form.value.filter((item) => item.id != id)
}

const toggleMandatory = ({ id, mandatory }) => {
  form.value = form.value.map((item) => {
    if (item.id === id) {
      item.mandatory = mandatory
    }
    return item
  })
}

const dragStart = (index) => {
  draggedItemIndex = index
}

const dragEnter = (targetIndex) => {
  if (draggedItemIndex === targetIndex) return

  const item = form.value.splice(draggedItemIndex, 1)[0]
  form.value.splice(targetIndex, 0, item)

  draggedItemIndex = targetIndex
}

const dragEnd = () => {
  draggedItemIndex = null
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
        <div class="d-flex justify-content-between btns">
          <h5 class="title">Nuevo formulario</h5>
          <div>
            <button-men label="Guardar" :primary="false" class="me-4" />
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

          <div
            v-if="form.length > 0"
            class="divider d-flex justify-content-center align-items-center"
          >
            <p class="mb-0">Preguntas</p>
          </div>

          <div>
            <question-item
              v-for="(item, index) in form"
              :key="index"
              :id="item.id"
              :class="{ 'mb-3': form.length > 1 }"
              draggable="true"
              @delete-item="deleteItem"
              @mandatory="toggleMandatory"
              @dragstart="dragStart(index)"
              @dragover.prevent
              @dragenter="dragEnter(index)"
              @dragend="dragEnd"
            >
              <component :is="componentMap[item.type]" />
            </question-item>
          </div>

          <div class="divider d-flex justify-content-center align-items-center">
            <icon-men name="plus_men" width="32" height="32" />
          </div>

          <div class="box d-flex justify-content-around">
            <option-form
              label="Texto largo"
              icon="burger_men"
              @click="() => handlePushItem('InputTextarea')"
            />

            <option-form
              label="Texto corto"
              icon="text_men"
              @click="() => handlePushItem('InputText')"
            />

            <!-- <option-form
              label="Selector maestro"
              icon="checkbox_men"
              @click="() => handlePushItem('InputTextarea')"
            /> -->
          </div>

          <div class="divider d-flex justify-content-center align-items-center"></div>

          <div class="box">
            <button-men label="Enviar" />
          </div>
        </div>
      </div>
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
  }

  .btns {
    margin-bottom: 36px;
    button {
      min-width: 180px;
    }
  }

  .divider {
    padding: 16px 0px;
    position: relative;

    &::before {
      content: '';
      display: block;
      color: $color-blue-10;
      border: 1px solid $color-gray-40;
      position: absolute;
      left: 0px;
      right: 0px;
    }

    p,
    svg {
      font-size: 18px;
      z-index: 1;
    }
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

    button {
      min-width: 230px;
    }
  }
}
</style>
