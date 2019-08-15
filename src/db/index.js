import mysql from 'mysql'

export default {
  createConnection (options) {
    var connection = mysql.createConnection({
      host: options.host,
      user: options.user,
      password: options.password,
      port: options.port,
      charset: 'latin1',
      debug: true,
      fatal: true,
      timeout: 20000
    })
    return connection
  }
}