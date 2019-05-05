<template>
  <div>
    <dl v-for="(item,index) in list" :key="index">
      <dd>
        <img :src="item.topicPic">
      </dd>
      <dt>
        <p>{{item.topicTitle}}</p>
        <p>{{item.statusName}}</p>
        <p>{{item.price}}</p>
      </dt>
    </dl>
    <p class="more">{{isShow?'上拉加载更多':'我是有底线的'}}</p>
  </div>
</template>

<script>
// import Banner from "@/components/banner";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      // key:''
    };
  },

  components: {
    // Banner
  },
  computed: {
    ...mapState({
      list: state => state.searchList.l_list,
      pageNums: state => state.searchList.pageNum,
      isShow: state => state.searchList.isShow
    })
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      getlists: "searchList/getlists"
    })
  },
  async onLoad(options) {
    this.key = options.key;
    await this.getlists({
      pageNum: 1,
      kw: this.key
    });
  },
  onReachBottom() {
    this.getlists({
      pageNum: this.pageNums+1,
      kw: this.key
    });
  },
  created() {
    // let app = getApp()
  }
};
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
.more{
  height: 80rpx;
  line-height: 80rpx;
  width: 100%;
  text-align: center;
  background: #ccc;
}
</style>
