<template>
  <div class="page">
    <div class="swiper">
      <swiper autoplay="true" indicator-dots="true" indicator-color indicator-active-color>
        <div v-for="(item,idx) in  slides" :key="idx">
          <swiper-item>
            <img :src="item.slide_pic" class="slide-image" width="355" height="150">
          </swiper-item>
        </div>
      </swiper>
    </div>
    <div class="manu">
      <p v-for="(item,idx) in manus" :key="idx">
        <img :src="item.icon">

        <span>{{item.title}}</span>
      </p>
    </div>
    <div class="nav">
      <span
        @click="tabChange(idx)"
        :style="{width:item[0].width}"
        v-for="(item,idx) in navs"
        :key="idx"
      >{{item[0].name}}</span>
    </div>
    <!-- <List :lists="list"></List> -->
    <div class="list">
      <ul v-if="lists.length">
        <li v-for="(item,idx) in lists" :key="idx" @click="detail(item.id)">
          <h3>{{item.keyword}}</h3>
          <p>
            <span>
              <img :src="item.message_user.head_img" alt>
              <span>{{item.message_user.name}}</span>
            </span>
            <span>{{item.message_user.sex}}</span>
          </p>
          <p>
            <span>{{item.car_name}}</span>
            <span>{{item.create_time}}</span>
          </p>
        </li>
      </ul>
      <p class="more" v-if="lists.length">{{hasMore?'上拉加载更多': '我是有底线的'}}</p>
    </div>
  </div>
</template>

<script>
import List from "@/components/list";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },

  components: {
    // List
  },
  computed: {
    ...mapState({
      slides: state => state.index.lunbos.slides,
      navs: state => state.index.navs.data,
      lists: state => state.index.lists,
      hasMore: state => state.index.hasMore,
      p: state => state.index.p,
      manus: state => state.index.manus,
      details: state => state.index.details
    })
  },
  methods: {
    ...mapActions({
      getLunbo: "index/getLunbo",
      getNav: "index/getNav",
      getList: "index/getList",
      getManu: "index/getManu",
      getDetail: "index/getDetail"
    }),
    ...mapMutations({
      lbs: "index/lbs",
      xq: "index/xq"
    }),
    tabChange(idx) {
      this.lbs({ active: idx, p: 1 });
      this.getList();
    },
    async detail(id) {
      await this.getDetail({ page_size: 20, p: 1, id });
      wx.navigateTo({
        url: "/pages/detail/main?detail=" + JSON.stringify(this.details)
      });
    }
  },
  created() {
    this.getLunbo();
    this.getNav();
    this.getList();
    this.getManu();
  },
  onShow() {
    this.getList();
  },
  onReachBottom() {
    if (this.hasMore) {
      this.lbs({ p: this.p + 1 });
      this.getList();
    }
  }
};
</script>

<style scoped lang="scss">
page,
.page {
  height: 100%;
  width: 100%;
}
.swiper {
  height: 355rpx;
  width: 100%;
}
.nav {
  height: 80rpx;
  line-height: 80rpx;
  width: 100%;
  span {
    display: inline-block;
    background: #fff;
    text-align: center;
  }
}

.more {
  text-align: center;
  font-size: 32rpx;
  line-height: 2;
  color: #999;
  border-top: 20rpx solid #eee;
}
.manu {
  width: 100%;
  height: 100rpx;
  display: flex;
  justify-content: space-around;
  p {
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
      height: 50rpx;
      width: 50rpx;
    }
  }
}
.list {
  background: #f0f0f0;
  height: 100%;
  width: 100%;
  li {
    padding: 20rpx;
    box-sizing: border-box;
    width: 100%;
    background: #fff;
    height: 250rpx;
    margin: 10rpx;
    p {
      display: flex;
      justify-content: space-between;
    }
    img {
      height: 40rpx;
      width: 40rpx;
      border-radius: 50%;
    }
  }
}
</style>
