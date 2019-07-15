<template>
  <div id="app">
    <div class="app-header">
      <div class="logo"></div>
      <div class="user">
        <img src="" alt="">
        <span>zepang</span>
      </div>
    </div>
    <div class="app-body">
      <div class="side-bar">
        <Menu mode="vertical" theme="primary">
          <MenuItem name="home">
            首页
          </MenuItem>
          <MenuItem name="user">
            用户列表
          </MenuItem>
          <MenuItem name="fun">
            常用功能
          </MenuItem>
          <MenuItem name="email">
            邮件管理
          </MenuItem>
          <MenuItem name="active">
            活动管理
          </MenuItem>
          <MenuItem name="sql">
            数据库相关
          </MenuItem>
        </Menu>
      </div>
      <div class="content">
        <Router-view></Router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 100%;
}

#app {
  display: flex;
  flex-direction: column;

  .app-header {
    height: 50px;
    box-shadow: 0px 0px 1px #ddd;
  }
}

.app-header {
  display: flex;
  .logo {
    flex: 1;
  }
  .user {
    min-width: 120px;
    text-align: center;
    img {
      display: inline-block;
      width: 40px;
      height: 40px;
      margin-top: 5px;
      border-radius: 50%;
      background-color: #dddddd;
    }
    span {
      display: inline-block;
      vertical-align: 14px;
    }
  }
}

.app-body {
  margin-top: 4px;
  display: flex;

  .content {
    flex: 1
  }
}
</style>
