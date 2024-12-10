import ApiClient from './clients/ApiClient'

export default {
  async getForms() {
    return await ApiClient.get('formulario')
  },
  async putNewForm(payload) {
    return await ApiClient.post(`formulario`, payload)
  },
  async putForm(id, payload) {
    return await ApiClient.put(`formulario/${id}`, payload)
  },
  async deleteForm(id, payload = {}) {
    return await ApiClient.delete(`formulario/${id}`, payload)
  },
  async getDetilForm(id) {
    return await ApiClient.get(`formulario/${id}`)
  },
}
