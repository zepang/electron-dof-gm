import mysql from 'mysql'

export default {
  install: function (Vue) {
    function createConnection (options) {
      var connection = mysql.createConnection({
        host: options.host,
        user: options.user,
        password: options.password,
        port: options.port
      })
      Vue.prototype.$connection = connection
    }
    Vue.prototype.$createConnection = createConnection
  }
}