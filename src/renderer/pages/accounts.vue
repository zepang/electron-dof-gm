<template>
  <div class="home-page">
    <header>
      <a-row style="line-height: 32px;">
        <a-col :span="2">用户账号</a-col>
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
        <router-link slot="action" slot-scope="action" :to="`/accounts/${action.UID}`">查看详情</router-link>
      </a-table>
    </main>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
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
    getList () {
      let sql = `select * from d_taiwan.accounts`
      this.$connection.query(sql, (error, result) => {
        if (error) {
          console.log(error)
          return
        }
        console.log(result)
        this.tableData = result.map(item => {
          item.key = item.UID
          return item
        })
      })
    },
    onUserTypeChange () {},
    onSearch () {}
  }
}
</script>

<style lang="scss" scoped>

</style>
