const state = {
  accounts: [
    {
      name: '账号1'
    },
    {
      name: '账号2'
    },
    {
      name: '账号3'
    }
  ],
  roles: [
    {
      name: '角色1'
    },
    {
      name: '角色2'
    },
    {
      name: '角色3'
    }
  ]
}

const mutations = {
  addAccount (state, object) {
    state.accounts.unshift(object)
  },
  removeAccount (state, index) {
    state.accounts.splice(index, 1)
  },
  addRole (state, object) {
    state.roles.unshift(object)
  },
  removeRole (state, index) {
    state.roles.splice(index, 1)
  }
}

const actions = {
  addAccount ({commit}, account) {
    if (account) commit('addAccount', account)
  },
  removeAccount ({commit}, index) {
    commit('removeAccount', index)
  },
  addRole ({commit}, role) {
    if (role) commit('addRole', role)
  },
  removeRole ({commit}, index) {
    commit('removeRole', index)
  }
}

const getters = {

}

module.exports = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}