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
    respondeUpdateForm: {},
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
    async getFormDetail(id) {
      const { data } = await ApiRepository.getFormDetail(id)
      this.responseDetail = data
    },
    async updateForm(id, payload) {
      this.respondeUpdateForm = await ApiRepository.putForm(id, payload)
    },
  },
})
