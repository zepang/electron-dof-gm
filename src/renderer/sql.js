export default {
  // 获取账号列表
  getAccounts (name) {
    let sql = `select * from d_taiwan.accounts`
    if (name && name.trim()) {
      sql = `select * from d_taiwan.accounts where accountname=${this.query.name.trim()}`
    }
    return sql
  },
  // 重置账号创建角色次数
  resetRolesCreateLimit (id) {
    return `update d_taiwan.limit_create_character set count=0 where m_id=${id}`
  },
  // 充值D币
  updateCash (id, value) {
    return `update taiwan_billing.cash_cera set cera=${value} where account=${id}`
  },
  // 充值D点
  updateCashCeraPoint (id, value) {
    return `update taiwan_billing.cash_cera_point set cera_point=${value} where account=${id}`
  },
  // 充值金币
  updateInventory (id, value) {
    return `update taiwan_cain_2nd.inventory set money=${value} where charac_no=${id}`
  },
  // 充值时装硬币
  updateAvatarCoin (id, value) {
    return `update taiwan_cain_2nd.member_avatar_coin set avatar_coin=${value} where m_id=${id}`
  },
}