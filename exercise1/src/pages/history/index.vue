<template>
  <div>
    <div v-for="item in money" :key="item.id">
      <div v-if="item.count">{{item.money}}</div>
      <div v-else>没有数据</div>
    </div>

    <!-- <swiper v-if="imgUrls.length > 0" indidator-dots="imgUrls.length > 1" >
      <block v-for="(item, index) in imgUrls" :key="index" >
        <swiper-item>
          <image :src="item" mode="scaleToFill"></image>
        </swiper-item>
      </block>
    </swiper>

    <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>-->
  </div>
</template>

<script>
// import { formatTime } from '@/utils/index'
// import card from '@/components/card'
import { mapState } from "vuex";
export default {
  components: {
    // card
  },
  computed: {
    ...mapState({
      money: state => state.datas.money
    })
  },

  created() {
    // let logs
    // if (mpvuePlatform === 'my') {
    //   logs = mpvue.getStorageSync({key: 'logs'}).data || []
    // } else {
    //   logs = mpvue.getStorageSync('logs') || []
    // }
    // this.logs = logs.map(log => formatTime(new Date(log)))
  }
};
</script>

<style>
</style>
