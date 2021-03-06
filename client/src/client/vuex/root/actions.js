import * as UserService from '../../services/UserService'

export default {

  // 用户api
  async getSessionUser({ commit, state }) {
    const {user} = await UserService.getSessionUser()
    commit('setLoginUser', user)
  },

  async login({ commit, state }, passport) {
    const {user} = await UserService.login(passport)
    commit('setLoginUser', user)
  },

  async logout({ commit, state }) {
    await UserService.logout()
    commit('setLoginUser', null)
  },

  async register({ commit, state }, passport) {
    const {user} = await UserService.register(passport)
    commit('setLoginUser', user)
  },

  async updateUser({ commit, state }, form) {
    const {user} = await UserService.updateUser(form)
    commit('setLoginUser', user)
  },

  // 搜索api
  async searchUsers({}, search) {
    if(typeof search === 'string') {
      search = {
        nickname: {$regex: search},
        name: {$regex: search}
      }
    }

    return await UserService.searchUsers(search)
  }
}