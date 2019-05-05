<template>
  <div>
    <div class="navs">
      <scroll-view scroll-x :style="{width:'100%'}">
        <div class="navss">
          <p @click="change(item)" v-for="(item,index) in nav" :key="index">{{item}}</p>
        </div>
      </scroll-view>
    </div>
    <div class="nav2">
      <p @click="change(item)" v-for="(item,index) in nav2" :key="index">{{item}}</p>
    </div>
    <div class="con">
      <dl v-for="(item,index) in cars" :key="index">
        <dd>{{item.tit}}</dd>
        <dt>666</dt>
      </dl>
    </div>
    <!-- <div class="nav">
      <p @click="change(item)" v-for="(item,index) in nav" :key="index">{{item}}</p>
    </div>
    <div class="con">
      <dl v-for="(item,index) in cons" :key="index">
        <dd>{{item.name}}</dd>
        <dt>{{item.type}}</dt>
      </dl>
    </div>-->
  </div>
</template>

<script>
// import card from '@/components/card'
import car from "@/mock/car.js";
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      car: [],
      cars: []
    };
  },
  computed: {
    ...mapState({
      nav: state => state.index.nav,
      nav2: state => state.index.nav2
    })
    // ...mapState({
    //   nav: state => state.index.nav,
    //   cons: state => state.index.cons
    // })
  },
  components: {
    // card
  },

  methods: {
    change(type) {
      if (type == "车型pk") {
        this.cars = this.car.filter(item => item.type == 2);
        return;
      } else if (type == "购车计算机") {
        this.cars = this.car.filter(item => item.type == 1);
        return;
      } else {
        this.cars = this.car;
      }
    }
    // ...mapMutations({
    //   type: "index/type"
    // }),
    // change(type) {
    //   this.type(type);
    // }
  },
  created() {
    // let app = getApp()
    this.car = car;
    this.cars = car;
  },
  onReachBottom(){
    console.log(666)
  }
};
</script>

<style scoped lang="scss">
.navss {
  width: 100%;
  flex-wrap: nowrap;
  display: flex;
  white-space: nowrap;
  p {
    width: 200rpx;
    padding: 0 100rpx;
    font-size: 30rpx;
    text-align: center;
  }
}

.nav2 {
  height: 100rpx;
  line-height: 100rpx;
  display: flex;
  font-size: 30rpx;
  justify-content: space-around;
}
.con {
  dl {
    height: 200rpx;
    display: flex;
    flex-direction: column;
  }
}
// .nav {
//   height: 100rpx;
//   line-height: 100rpx;
//   display: flex;
//   justify-content: space-around;
// }
// .con {
//   dl {
//     height: 200rpx;
//     display: flex;
//     flex-direction: column;
//   }
// }
</style>
