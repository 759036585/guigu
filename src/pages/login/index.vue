<template>
  <div>
    <van-nav-bar
      title="登录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
      style="background: green;"
    />

    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">硅谷外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="['message',checkClass==='1' ?'check':'']" @click="loginMessage">短信登录</a>
          <a href="javascript:;" :class="[checkClass==='2' ?'check':'']" @click="loginPassword">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div v-if="checkClass==='1'">
            <van-row gutter="20">
              <van-col span="15">
                <van-field placeholder="请输入手机号" border type="number"/>
              </van-col>
              <van-col span="9">
                <van-button plain>获取验证码</van-button>
              </van-col>
            </van-row>
            <van-field placeholder="请输入验证码" style="margin-top:10px;"/>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div v-if="checkClass==='2'">
            <section>
              <van-field placeholder="手机/邮箱/用户名" style="margin-top:10px;"/>
              <van-field placeholder="密码" style="margin-top:10px;"/>
              <van-field placeholder="验证码" style="margin-top:10px;"/>
            </section>
          </div>
          <van-button type="primary" size="normal" block style="margin: 20px 0; font-size:18px;">登录</van-button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkClass: '1'
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    },
    loginMessage () {
      this.checkClass = '1'
    },
    loginPassword () {
      this.checkClass = '2'
    }
  }
}
</script>

<style lang="less" scoped>
  /deep/ .van-nav-bar__title {
    color: #fff;
  }
  /deep/ .van-nav-bar__text {
    color: #fff;
  }
  /deep/ .van-icon-arrow-left::before {
    color: #fff;
  }
  .loginInner {
    .login_header {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .login_logo {
        font-size: 32px;
        color: green;
        font-weight: 600;
      }
      .login_header_title {
        margin-top: 20px;
        text-align: center;
        width: 100%;
        // display: flex;
        a {
          text-decoration: none;
          font-size: 16px;
          color: #666;
          display: inline-block;
          padding-bottom: 10px;
        }
        .message {
          margin-right: 20px;
        }
        .check {
          color: green;
          border-bottom: 4px solid green;
        }
      }
    }
    .login_content {
      margin-top: 20px;
      padding: 0 20px;
      /deep/ .van-field {
        border: 1px solid #eee;
      }
      .login_hint {
        font-size: 14px;
        color: #999;
        margin-top: 20px;
        a {
          color: green;
          text-decoration: none;
        }
      }
      .about_us {
        width: 100%;
        display: block;
        color: #999;
        font-size: 16px;
        text-align: center;
      }
    }
  }
</style>
