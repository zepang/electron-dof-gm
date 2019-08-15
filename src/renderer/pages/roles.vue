<template>
  <div class="home-page">
    <header>
      <a-row style="line-height: 32px;">
        <a-col :span="3">用户角色：</a-col>
        <a-col :span="8">
          <a-input-search
            placeholder="输入角色户名"
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
      this.getList()
    },
    methods: {
      getList () {
        let sql = `select charac_no,charac_name,job,lev,grow_type from taiwan_cain.charac_info`
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
      },
      onSearch () {},
    }
  }
</script>

<style lang="scss" scoped>
main {
  margin-top: 20px;
}
</style>