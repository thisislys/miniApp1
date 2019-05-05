<template>
  <div class="wrap">
    <ul class="left">
      <li
        @click="change(item.categoryName,index)"
        v-for="(item,index) in categoryList"
        :key="index"
        :class="item.categoryName===type?'bg':''"
      >{{item.categoryName}}</li>
    </ul>
    <ul class="right">
      <li v-for="(item,index) in categoryList" :key="index" v-if="item.categoryName===type">
        <div v-for="(val,idx) in item.spuList" :key="idx">
          <img :src="val.bigImageUrl" alt>
          <div class="con">
            <span class="tit">{{val.spuName}}</span>
            <span class="pic">价格：{{val.originPrice}}</span>
            <p class="counts">
              <span :class="val.skuList[0].count<=0?'none':''" @click="cmp('minus',idx,type)">-</span>
              <span :class="val.skuList[0].count<=0?'none':''">{{val.skuList[0].count}}</span>
              <span :class="val.skuList[0].count<=0?'add':''" @click="cmp('plas',idx,type)">+</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <footer>
      <span @click="shop">我的购物车</span>
      <span>总件数：{{num}}</span>
      <span>总价钱：{{sum}}</span>
    </footer>
    <!-- :class="talg?'':'none'" -->
    <div id="shop">
      <ul>
        <li v-for="(v,i) in shop" :key="i">
          
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import card from '@/components/card'
import { mapState } from "vuex";
export default {
  data() {
    return {
      shopInfo: {},
      categoryList: [],
      idx: 0,
      type: "热销",
      num: 0,
      sum: 0,
      shop: [],
      tlag: false
    };
  },

  components: {
    // card
  },
  computed: {
    ...mapState({
      data: state => state.data
    })
  },
  methods: {
    change(type, idx) {
      this.type = type;
      this.shopInfo = this.categoryList.filter(i => i.categoryName === type);
    },
    cmp(type, idx, types) {
      if (type === "minus") {
        this.categoryList.filter(i => i.categoryName === types)[0].spuList[idx]
          .skuList[0].count--;
        this.count("minus");
      } else {
        this.categoryList.filter(i => i.categoryName === types)[0].spuList[idx]
          .skuList[0].count++;
        this.count("plus");
      }
    },
    count(type) {
      let num = 0;
      let sum = 0;
      let shop = [];
      this.categoryList.forEach((v, i) => {
        //加减
        v.spuList.forEach((val, item) => {
          num += val.skuList[0].count;
          sum += val.skuList[0].count * val.originPrice;
          this.num = num;
          this.sum = sum;
          //购买商品
          val.skuList[0].count != 0 ? shop.push(val) : null;
        });
      });
      this.shop = shop;
    },
    shop() {
      this.tlag = true;
    }
  },

  created() {
    console.log(this.data.shopInfo, this.data.categoryList);
    this.shopInfo = this.data.shopInfo;
    this.categoryList = this.data.categoryList;
  }
};
</script>

<style scoped>
page,
.wrap {
  height: 100%;
  width: 100%;
}
.wrap {
  display: flex;
}
.left {
  width: 200rpx;
  background: #eee;
  text-align: center;
}
.left > li {
  height: 105rpx;
  line-height: 105rpx;
  border-bottom: 2rpx solid #ccc;
}
.left > li:last-child {
  border: 0;
}
.right {
  flex: 1;
  background: #f0f0f0;
}
.right > li {
  height: 240rpx;
}
.right > li > div {
  height: 240rpx;
  display: flex;
}
.right img {
  height: 200rpx;
  width: 200rpx;
  margin: 10rpx;
  flex-shrink: 0;
}
.con {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
}
.tit {
  font-size: 35rpx;
  height: 100rpx;
}
.pic {
  font-size: 30rpx;
  color: #666;
}
.counts {
  position: absolute;
  right: 20rpx;
  bottom: 20rpx;
  height: 50rpx;
  width: 100rpx;
  display: flex;
  justify-content: space-between;
}
.bg {
  background: green;
}
.none {
  display: none;
}
.add {
  margin-left: 73rpx;
}
footer {
  position: fixed;
  width: 100%;
  background: #333;
  color: #fff;
  height: 100rpx;
  line-height: 100rpx;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
}
#shop {
  position: fixed;
  bottom: 100rpx;
  left: 0;
  height: 300rpx;
  width: 100%;
  background: #fff;
}
</style>
