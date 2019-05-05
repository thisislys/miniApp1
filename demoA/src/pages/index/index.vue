<template>
  <div>
    <div class="head">
      <p>享物说</p>
      <span @click="search">{{banner.searchContent}}</span>
    </div>
    <Banner :banner="banner"></Banner>
    <ul class="nav">
      <li @click="type(item)" v-for="(item,index) in nav" :key="index">{{item}}</li>
    </ul>
    <ul class="nav2 nav">
      <li
        :class="item.type?'bg':''"
        @click="type2(index)"
        v-for="(item,index) in nav2"
        :key="index"
      >{{item.tit}}</li>
    </ul>
    <ul class="list">
      <li v-for="item in index" :key="item.topicId">
        <img :src="item.topicPic" alt>
        <p>{{item.topicTitle}}</p>
        <p>
          <span>{{item.topicLikeCount}}</span>
          <span>{{item.homeCity}}</span>
        </p>
      </li>
    </ul>
    <p class="more">{{!hasMore?"上拉加载":"我是有底线的"}}</p>
  </div>
</template>

<script>
import Banner from "@/components/banner";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      nav: ["全部", "品牌", "时尚", "美妆", "母婴", "书籍"],
      nav2: [
        { type: 0, tit: "一口花" },
        { type: 0, tit: "全新" },
        { type: 0, tit: "同城" }
      ],
      types: "全部"
    };
  },

  components: {
    Banner
  },
  computed: {
    ...mapState({
      banner: state => state.index.l_banner,
      index: state => state.index.l_index,
      pageNum: state => state.index.pageNum,
      hasMore: state => state.index.hasMore
    })
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      getIndexs: "index/getIndexs",
      getBanner: "index/getBanners"
    }),
    search() {
      wx.navigateTo({
        url: "/pages/search/main"
      });
    },
    type(item) {
      this.types = item;
      this.getIndexs({
        pageNum:1,
        cateTag: this.types, // 全部  || 品牌  || …
        fixedFlower: this.nav2[0].type, //一口花  1 或者 0
        isNew: this.nav2[1].type, //是否全新  1 或者 0
        isLocal: this.nav2[2].type // 是否同城   1或者0
      });
    },
    type2(id) {
      this.nav2[id].type == 0
        ? (this.nav2[id].type = 1)
        : (this.nav2[id].type = 0);
      this.getIndexs({
        pageNum:1,
        cateTag: this.types, // 全部  || 品牌  || …
        fixedFlower: this.nav2[0].type, //一口花  1 或者 0
        isNew: this.nav2[1].type, //是否全新  1 或者 0
        isLocal: this.nav2[2].type // 是否同城   1或者0
      });
    }
  },

 async created() {
    this.getIndexs({
       pageNum:1,
      cateTag: this.types, // 全部  || 品牌  || …
      fixedFlower: this.nav2[0].type, //一口花  1 或者 0
      isNew: this.nav2[1].type, //是否全新  1 或者 0
      isLocal: this.nav2[2].type // 是否同城   1或者0
    });
   await this.getBanner();
  },
  onReachBottom() {
    this.getIndexs({
      cateTag: this.types, // 全部  || 品牌  || …
      fixedFlower: this.nav2[0].type, //一口花  1 或者 0
      isNew: this.nav2[1].type, //是否全新  1 或者 0
      isLocal: this.nav2[2].type, // 是否同城   1或者0
      pageNum:this.pageNum+1
    });
  }
};
</script>

<style scoped lang="scss">
.head {
  position: fixed;
  top: 80rpx;
  left: 50rpx;
  z-index: 999;
  display: flex;
  p {
    color: #fff;
    font-size: 30rpx;
  }
  span {
    display: inline-block;
    height: 40rpx;
    font-size: 30rpx;
    width: 320rpx;
    text-align: center;
    background: #fff;
    margin-left: 50rpx;
  }
}
.nav {
  height: 80rpx;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.bg {
  background: #999;
}
.list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  li {
    width: 49%;
    img {
      width: 100%;
    }
    p {
      display: flex;
      justify-content: space-around;
    }
  }
}
.more{
  height: 80rpx;
  background: #ccc;
  width: 100%;
  text-align: center;
}
</style>
