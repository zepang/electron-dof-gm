<template>
  <div class="account">
    <a-divider>基本信息</a-divider>
    <a-row>
      <a-col :span="8">UID: </a-col>
      <a-col :span="8">账户名称： </a-col>
      <a-col :span="8">QQ： </a-col>
    </a-row>
    <a-row>
      <a-col :span="8">最近一次登录IP： </a-col>
      <a-col :span="8">最近一次登录时间： </a-col>
    </a-row>
    <a-divider>角色信息</a-divider>
    <a-table 
      :dataSource="tableData"
      :columns="tableColumns">
      <router-link slot="action" slot-scope="action" :to="`/accounts/${action.UID}`">查看详情</router-link>
    </a-table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [],
      tableColumns: [
        {
          title: '序号',
          dataIndex: 'charac_no',
          key: 'charac_no'
        },
        {
          title: '角色名称',
          dataIndex: 'charac_name',
          key: 'charac_name'
        },
        {
          title: '职业',
          dataIndex: 'job',
          key: 'job'
        },
        {
          title: '转职',
          dataIndex: 'grow_type',
          key: 'grow_type'
        },
        {
          title: '等级',
          dataIndex: 'lev',
          key: 'lev'
        },
        {
          title: '操作',
          scopedSlots: { customRender: 'action' }
        }
      ]
    }
  },
  mounted () {
    this.getCount(this.$route.params.id)
  },
  methods: {
    getCount (uid) {
      let sql = `select charac_no,charac_name,job,lev,grow_type from taiwan_cain.charac_info where m_id=${uid}`
      this.$getGlobal('connection').query(sql, (error, result) => {
        if (error) {
          console.log(error)
          return
        }
        this.tableData = result.map(item => {
          item.key = item.charac_no
          return item
        })
      })
    }
  }
}
</script>

