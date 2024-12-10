<script setup>
import { markRaw } from 'vue'
import ButtonMen from '@/components/common/ButtonMen.vue'
import InputText from '@/components/common/InputText.vue'
import InputTextarea from '@/components/common/InputTextarea.vue'
import { useFormsStore } from '@/stores/forms'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const storeForm = useFormsStore()

const formData = ref({})

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

const handleSubmit = async () => {
  try {
    await storeForm.updateForm(route.params.id, storeForm?.responseDetail)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="view-form">
    <div class="row justify-content-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 form">
        <h4>{{ storeForm?.responseDetail?.esquema?.name }}</h4>
        <p>
          {{ storeForm?.responseDetail?.esquema?.description }}
        </p>

        <p>“Este es el nombre del centro de interes”</p>

        <form @submit.prevent="handleSubmit">
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
              v-model="field.value"
            />
          </div>
          <div class="text-end">
            <button-men type="submit" label="Enviar" class="btn" />
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
