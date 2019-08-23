<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider
      id="side-bar"
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo">
        Dof<span v-if="!collapsed">-GM System</span>
      </div>
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['accounts']" :selectedKeys="selectedKeys">
        <a-menu-item key="accounts" @click="navTo('accounts')">
          <a-icon type="user-add" />
          <span>用户管理</span>
        </a-menu-item>
        <a-menu-item key="roles" @click="navTo('roles')">
          <a-icon type="usergroup-add" />
          <span>角色管理</span>
        </a-menu-item>
        <a-menu-item key="email">
          <a-icon type="mail" />
          <span>邮件管理</span>
        </a-menu-item>
        <a-menu-item key="func">
          <a-icon type="appstore" />
          <span>常用功能</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-row type="flex" justify="space-between" align="middle">
          <a-col :span="2">
            <a-icon
              class="trigger"
              :type="collapsed ? 'menu-unfold' : 'menu-fold'"
              @click="()=> collapsed = !collapsed"
            />
          </a-col>
          <a-col :span="3">
            <a-button type="primary"  @click="devtool">打开开发者工具</a-button>
          </a-col>
          <a-col :span="3">
            <a-button type="danger"  icon="poweroff" @click="logout">退出</a-button>
          </a-col>
        </a-row>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 0px 24px 16px', padding: '24px', background: '#fff', minHeight: '280px', overflowY: 'auto' }">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import { ipcRenderer } from 'electron'
export default {
  data(){
    return {
      selectedKeys: ['accounts'],
      collapsed: false,
    }
  },
  methods: {
    devtool () {
      ipcRenderer.sendSync('open-devtools', {})
    },
    navTo (key) {
      switch (key) {
        case 'accounts':
          this.$router.push('/accounts')
          this.selectedKeys = [key]
          break;
        case 'roles':
          this.$router.push('/roles')
          this.selectedKeys = [key]
          break;
        case 'mail':
          this.$router.push('/mail')
          this.selectedKeys = [key]
          break;
        case 'func':
          this.$router.push('/func')
          this.selectedKeys = [key]
          break;
      }
    },
    logout () {
      this.$getGlobal('connection').destroy()
      this.$router.push('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
#components-layout-demo-custom-trigger {
  height: 100vh;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.1);
  line-height: 32px;
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  text-shadow: 4px 3px 2px #000000;
  margin: 16px;
}
#side-bar {
  box-shadow: 2px 0 7px 0 rgba(172,173,181,.38);
}
</style>