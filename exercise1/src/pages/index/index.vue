<template>
  <div>
    <div v-for="item in arr" :key="item.id" @click="card(item)">
      <p>{{item.tit}}</p>
    </div>
    <p @click="history">购买历史</p>
    <!-- <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <img class="userinfo-avatar" src="/static/images/user.png" background-size="cover" />

      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text" class="form-control" :value="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model="motto" placeholder="v-model" />
      <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy" />
    </form>

    <a href="/pages/counter/main" class="counter">去往Vuex示例页面</a>

    <div class="all">
        <div class="left">
        </div>
        <div class="right">
        </div>
    </div>-->
  </div>
</template>

<script>
// import card from "@/components/card";

export default {
  data () {
    return {
      arr: [
        {
          id: 0,
          tit: '亲朋卡'
        },
        {
          id: 1,
          tit: '挚爱卡'
        },
        {
          id: 2,
          tit: '生日卡'
        },
        {
          id: 3,
          tit: '感谢卡'
        }
      ]
      // motto: 'Hello miniprograme',
      // userInfo: {
      //   nickName: 'mpvue',
      //   avatarUrl: 'http://mpvue.com/assets/logo.png'
      // }
    }
  },

  // components: {
  //   card
  // },

  methods: {
    history () {
      wx.navigateTo({
        url: '/pages/history/main'
      })
    },
    card (type) {
      wx.navigateTo({
        url: '/pages/counter/main?type=' + JSON.stringify(type)
      })
    }
    // bindViewTap() {
    //   const url = "../logs/main";
    //   if (mpvuePlatform === "wx") {
    //     mpvue.switchTab({ url });
    //   } else {
    //     mpvue.navigateTo({ url });
    //   }
    // },
    // clickHandle(ev) {
    //   console.log("clickHandle:", ev);
    //   // throw {message: 'custom test'}
    // }
  }

  // created() {
  // let app = getApp()
  // }
}
</script>

<style scoped>
</style>
