<template>
  <div>
    <van-nav-bar :title="title" fixed style="background-color:green;">
      <!-- <template #left>
        <van-icon name="search" size="18" />
      </template> -->
      <template v-slot:left v-if="search">
        <van-icon name="search" size="18" color="#fff" />
      </template>
      <template v-slot:right v-if="login">
        <span>登录</span>
        <span>|</span>
        <span>注册</span>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    search: {
      type: Boolean,
      default: false
    },
    login: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
  /deep/ .van-nav-bar__title {
    color:#fff;
  }
  span {
    color: #fff;
  }
  span:nth-child(2) {
    margin: 0 2px;
  }
</style>
