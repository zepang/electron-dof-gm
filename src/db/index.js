import mysql from 'mysql'

export default {
  createConnection (options) {
    var connection = mysql.createConnection({
      host: options.host,
      user: options.user,
      password: options.password,
      port: options.port
    })
    return connection
  }
}