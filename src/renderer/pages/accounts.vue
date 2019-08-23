<template>
  <div class="home-page">
    <header>
      <a-row style="line-height: 32px;">
        <a-col :span="3">用户账号：</a-col>
        <a-col :span="8">
          <a-input-search
            placeholder="输入用户名"
            style="width: 200px"
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
            <a-button type="link" size="small" @click="recharge(action)">
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
            <a-button type="link" size="small">
              添加到选定账号列表
            </a-button>
          </li>
        </ul>
      </a-table>
    </main>
    <!-- 账号充值Modal -->
    <a-modal
      ref="rechargeModal"
      title="账号充值"
      :visible="visible"
      @ok="handleModalOk"
      :confirmLoading="confirmLoading"
      @cancel="handleModalCancel">
      <p>充值</p>
    </a-modal>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      confirmLoading: false,
      visible: false,
      plainOptions: ['全部', '在线', '不在线'],
      userType: '全部',
      tableData: [],
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
    recharge (account) {
      this.visible = true
      console.log(this.$refs.rechargeModal)
    },
    handleModalOk () {},
    handleModalCancel () {
      this.visible = false
    },
    getList () {
      let sql = `select * from d_taiwan.accounts`
      this.$getGlobal('connection').query(sql, (error, result) => {
        if (error) {
          console.log(error)
          return
        }
        this.tableData = result.map(item => {
          item.key = item.UID
          return item
        })
      })
    },
    resetRolesCount (id) {
      let sql = `update d_taiwan.limit_create_character set count=0 where m_id=${id}`
      this.$getGlobal('connection').query(sql, (error, result) => {
        if (error) {
          console.log(error)
          this.$message.error('重置角色创建次数失败')
          return
        }
        this.$message.success('重置角色创建次数成功')
      })
    },
    onUserTypeChange () {},
    onSearch () {}
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
