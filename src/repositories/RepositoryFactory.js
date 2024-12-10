import ApiRepository from './ApiRepository'

const repositories = {
  api: ApiRepository,
}
export default {
  get: (name) => repositories[name],
}
