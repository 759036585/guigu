<template>
  <section class="profile">
    <topGuide title="我的"></topGuide>
    <router-link :to="'/login'">
      <section class="profile-number">
        <van-icon class="user-icon-left" name="user-circle-o" />
        <div class="user-info">
          <p class="user-info-top">登录/注册</p>
          <p>
            <span class="user-icon">
              <i class="iconfont icon-shouji icon-mobile"></i>
            </span>
            <van-icon name="phone-o" />
            <span class="icon-mobile-number">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <van-icon name="arrow" />
        </span>
      </section>
    </router-link>
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top">
            <span>
              <em>0.00</em>
            </span>元
          </span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top">
            <span>
              <em>0</em>
            </span>个
          </span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:" class="info_data_link">
          <span class="info_data_top">
            <span>
              <em>0</em>
            </span>分
          </span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 我的订单 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-order-s"></i>
        </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <!-- 积分商城 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-jifen"></i>
        </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <!-- 硅谷外卖会员卡 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-vip"></i>
        </span>
        <div class="my_order_div">
          <span>硅谷外卖会员卡</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
    <section class="profile_my_order border-1px">
      <!-- 服务中心 -->
      <a href="javascript:" class="my_order">
        <span>
          <i class="iconfont icon-fuwu"></i>
        </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
            <i class="iconfont icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>

    <!-- <section class="profile_my_order border-1px" >
      <van-button class="logout" type="danger">退出登陆</van-button>
    </section>-->
  </section>
</template>

<script>
import topGuide from '@/components/topGuide'
export default {
  components: {
    topGuide
  }
}
</script>

<style lang="less" scoped>
html,
body {
  width: 100%;
  height: 100%;
  overflow: scroll;
}
html::-webkit-scrollbar,
body::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
body {
  margin: 0;
}
.profile {
  padding-top: 46px;
  background-color: #eee;
  height: 100%;
  padding-bottom: 50px;
  .profile-number {
    height: 100px;
    background-color: green;
    border-top: 1px solid #fff;
    display: flex;
    .user-icon-left {
      flex: 1;
      font-size: 40px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .user-info {
      flex: 3;
      display: flex;
      font-size: 16px;
      flex-direction: column;
      justify-content: space-around;
      color: #fff;
      font-weight: 600;
      /deep/ .van-icon-phone-o {
        font-size: 20px;
        vertical-align: middle;
      }
    }
    .arrow {
      display: flex;
      align-items: center;
    }
  }
  .profile_info_data {
    margin-bottom: 8px;
    .info_data_list {
      display: flex;
      height: 100px;
      .info_data_link {
        background-color: #fff;
        width: 33.33%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: #999;
        font-size: 14px;
        em {
          font-size: 24px;
        }
      }
      .info_data_link:first-child {
        em {
          color: orange;
        }
      }
      .info_data_link:nth-child(2) {
        em {
          color: red;
        }
      }
      .info_data_link:last-child {
        em {
          color: green;
        }
      }
    }
  }
  .profile_my_order {
    .my_order {
      height: 50px;
      display: block;
      width: 100%;
      line-height: 50px;
      background-color: #fff;
      color: #999;
      margin-bottom: 4px;
      padding-left: 20px;
    }
  }
}
</style>
