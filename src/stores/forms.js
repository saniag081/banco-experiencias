import { defineStore } from 'pinia'
import RepositoryFactory from '@/repositories/RepositoryFactory'

const ApiRepository = RepositoryFactory.get('api')

export const useFormsStore = defineStore('form', {
  state: () => ({
    forms: [],
    reponsePut: {},
    isLoadingNewForm: false,
    responseDelete: {},
    responseDetail: {},
  }),
  actions: {
    async getForms() {
      const { data } = await ApiRepository.getForms()
      this.forms = data
    },
    async putNewForm(payload) {
      this.reponsePut = await ApiRepository.putNewForm(payload)
    },
    async deleteForm(id, payload) {
      this.responseDelete = await ApiRepository.deleteForm(id, payload)
    },
    async getDetilForm(id) {
      const { data } = await ApiRepository.getDetilForm(id)
      this.responseDetail = data
    },
  },
})
