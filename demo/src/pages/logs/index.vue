<template>
  <div class="list">
    <p>{{now.tit}}</p>
    <p>发起人：{{nickName}}</p>
    <p>报名人数：{{now.num}}</p>
    <p>
      <span>开启报名提醒</span>
      <span>关注公众号，及时接收用户报名提醒</span>
    </p>
    <div class="nav">
      <span>已报名（{{now.count.length?now.count.length:0}}）</span>
      <span>详细数据(管理员可见)</span>
    </div>
    <div v-if="now.count.length">
      <p class="items" v-for="(item,index) in now.count" :key="index">
        <span>{{item.name}}</span>
        <span>手机号：{{item.phone}}</span>
        <span>职业：{{item.job}}</span>
        <span>报名成功</span>
      </p>
    </div>
    <button @click="add">编辑报名</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      nickName:''
    }
  },
  computed: {
    ...mapState({
      infos: state => state.index.info,
      now: state => state.index.now
    })
  },
  methods: {
    add() {
      wx.navigateTo({
        url: "/pages/counter/main"
      });
    }
  },
  onLoad(options){
    wx.getUserInfo({
      withCredentials: 'false',
      lang: 'zh_CN',
      timeout:10000,
      success: (result)=>{
        this.nickName =result.userInfo.nickName
      }
    });
  }
};
</script>

<style  scoped lang="scss">
.list {
  span {
    display: block;
  }
}
.nav {
  display: flex;
  justify-content: space-around;
}
.items{
  background: #f0f0f0;
  margin:10rpx;
}
</style>
