import sql from './sql.js'
import { remote } from 'electron'
const { getGlobal } = remote

export default {
  install (Vue) {
    Vue.prototype.$getGlobal = getGlobal
    Vue.prototype.$sql = sql
    Vue.prototype.$query = (sql) => {
      return new Promise((resolve, reject) => {
        getGlobal('connection').query(sql, (error, result) => {
          if (error) {
            reject(error)
          } else {
            resolve(result)
          }
        })
      })
    }
  }
}