<script setup>
import { markRaw } from 'vue'
import ButtonMen from '@/components/common/ButtonMen.vue'
import InputText from '@/components/common/InputText.vue'
import InputTextarea from '@/components/common/InputTextarea.vue'
import BreadcrumbMen from '@/components/common/BreadcrumbMen.vue'
import { useFormsStore } from '@/stores/forms'
import { useRoute } from 'vue-router'

const route = useRoute()
const storeForm = useFormsStore()

const dictionaryComponents = {
  InputText: markRaw(InputText),
  InputTextarea: markRaw(InputTextarea),
  select: markRaw(InputText),
}

const requestDetailForm = async () => {
  try {
    await storeForm.getFormDetail(route.params.id)
  } catch (error) {
    console.error(error)
  }
}

requestDetailForm()
</script>

<template>
  <div class="view-form">
    <breadcrumb-men
      :items="[{ label: 'Formularios', href: '/' }, { label: 'Preview de formulario' }]"
      class="mb-4"
    />

    <h4 class="title mb-4">Preview de formulario</h4>

    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 form">
        <h4>{{ storeForm?.responseDetail?.esquema?.name }}</h4>
        <p>
          {{ storeForm?.responseDetail?.esquema?.description }}
        </p>

        <p>“Este es el nombre del centro de interes”</p>

        <form>
          <div
            v-for="(field, index) in storeForm?.responseDetail?.esquema?.fields"
            :key="index"
            class="mb-4"
          >
            <component
              :is="dictionaryComponents[field.type]"
              :label="field.label"
              :mandatory="field.mandatory"
              :placeholder="field.placeholder"
            />
          </div>
          <div class="text-end">
            <button-men label="Enviar" class="btn" disabled />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use '../scss/variables' as *;

.view-form {
  padding: 72px;

  .form {
    padding: 32px;
    border-radius: 12px;
    border: 1px solid #ededf2;

    h4 {
      margin-bottom: 32px;
      font-size: 32px;
    }

    p {
      margin-bottom: 32px;
      font-size: 16px;
      color: $colot-text-10;
    }

    .btn {
      min-width: 230px;
    }
  }
}
</style>
