<template>
  <div class="home-page">
    <header>
      <a-row style="line-height: 32px;">
        <a-col :span="3">用户账号：</a-col>
        <a-col :span="8">
          <a-input-search
            placeholder="输入用户名"
            style="width: 200px"
            v-model="query.name"
            @search="onSearch"
          />
        </a-col>
        <!-- <a-col :span="2">在线状态</a-col>
        <a-col :span="8">
          <a-radio-group :options="plainOptions" @change="onUserTypeChange" :defaultValue="userType" />
        </a-col> -->
      </a-row>
    </header>
    <main>
      <a-table 
        :dataSource="tableData"
        :columns="tableColumns">
        <ul class="actions" slot="action" slot-scope="action">
          <li class="action">
            <a-button type="link" size="small" @click="showRechargeModal(action)">
              充值
            </a-button>
          </li>
          <li class="action">
            <a-button type="link" size="small" @click="resetRolesCount(action.UID)">
              重置角色创建限制
            </a-button>
          </li>
          <li class="action">
            <a-button type="link" size="small" @click="$router.push(`/roles?account=${action.UID}`)">
              查看账号下所有角色
            </a-button>
          </li>
          <li class="action">
            <a-button type="link" :disabled="$store.state.selections.accounts.some(item => item.id === action.UID)" size="small" @click="addAccount(action)">
              添加到选定账号列表
            </a-button>
          </li>
        </ul>
      </a-table>
    </main>
    <!-- 账号充值Modal -->
    <a-modal
      ref="rechargeModal"
      :title="`账号充值(当前充值账号：${selected.accountname})`"
      :visible="visible"
      @ok="handleModalOk"
      :footer="null"
      :confirmLoading="confirmLoading"
      @cancel="handleModalCancel">
      <recharge-form @recharge="recharge"></recharge-form>
    </a-modal>
  </div>
</template>
<script>
import rechargeForm from '../components/rechargeForm'
export default {
  name: 'home',
  components: { rechargeForm },
  data () {
    return {
      confirmLoading: false,
      visible: false,
      plainOptions: ['全部', '在线', '不在线'],
      userType: '全部',
      query: {
        name: ''
      },
      tableData: [],
      selected: {},
      tableColumns: [
        {
          title: 'UID',
          dataIndex: 'UID',
        },
        {
          title: '账号',
          dataIndex: 'accountname'
        },
        {
          title: '操作',
          scopedSlots: { customRender: 'action' }
        }
      ]
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    recharge (recharge) {
      let sqlArr = []
      if (recharge.cash) {
        sqlArr.push(`update taiwan_billing.cash_cera set cera=${recharge.cash} where account=`)
      }
      if (recharge.cashPoint) {
        sqlArr.push(`update taiwan_billing.cash_cera_point set cera_point=${recharge.cashPoint} where account=`)
      }
      if (recharge.inventory) {
        sqlArr.push(`update taiwan_cain_2nd.inventory set money=${recharge.inventory} where charac_no=`)
      }
      if (recharge.coin) {
        sqlArr.push(`update taiwan_cain_2nd.member_avatar_coin set avatar_coin=${recharge.coin} where m_id=`)
      }
      let query = ''
      for (let sql of sqlArr) {
        query += `${sql}${this.selected.UID};`
      }
      debugger
      this.$getGlobal('connection').query(query, (error, result) => {
        if (error) {
          console.log(error)
          return
        } else {
          this.$message.success('充值成功，刷新商城获取切换角色查看')
          this.visible = false
        }
      })
    },
    onSearch (value) {
      this.getList()
    },
    addAccount (object) {
      let account = {
        id: object.UID,
        name: object.accountname
      }
      this.$store.dispatch('selections/addAccount', account)
    },
    showRechargeModal (account) {
      this.selected = account
      this.visible = true
      console.log(this.$refs.rechargeModal)
    },
    handleModalOk () {},
    handleModalCancel () {
      this.visible = false
    },
    getList () {
      let sql = `select * from d_taiwan.accounts`

      if (this.query.name.trim()) {
        sql = `select * from d_taiwan.accounts where accountname=${this.query.name.trim()}`
      }

      this.$query(sql).then(res => {
        this.tableData = res.map(item => {
          item.key = item.UID
          return item
        })
      }).catch(error => {
        this.$message.error('账号列表查询失败')
      })
    },
    resetRolesCount (id) {
      let sql = `update d_taiwan.limit_create_character set count=0 where m_id=${id}`
      
      this.$query(sql).then(res => {
        this.$message.success('重置角色创建次数成功')
      }).catch(error => {
         this.$message.error('重置角色创建次数失败')
         throw new Error(error)
      })
    },
    onUserTypeChange () {}
  }
}
</script>

<style lang="scss" scoped>
main {
  margin-top: 20px;
}
.actions {
  margin: 0;
  padding: 0;
  .action {
    display: inline-block;
    list-style: none;
  }
}
</style>
