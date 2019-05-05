<template>
  <section>
    <div class="list">
      <dl v-if="item.count" v-for="(item,index) in shop" :key="item.itemId">
        <dd>
          <img :src="item.imgUrl" alt>
        </dd>
        <dt>
          <p>{{item.title}}</p>
          <p class="price">
            <span>{{item.price}}</span>
            <span>
              <span @click="btn('-',index)">-</span>
              <span>{{item.count}}</span>
              <span @click="btn('+',index)">+</span>
            </span>
          </p>
        </dt>
      </dl>
      <!-- <nuxt-link to="../detail/detail">详情</nuxt-link> -->
      <div class="foot"><p>总价：{{price.toFixed(2)}}</p>
      <p>总件数：{{count}}</p>
      <p class="btns">去结算</p></div>
    </div>
  </section>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      // list: []
    };
  },
  computed: {
    ...mapState({
      shop: state => state.list.shop,
      count: state => state.list.count,
      price: state => state.list.price,
    })
  },
  methods: {
    ...mapMutations({
      shopList: "list/shopList"
    }),
    // ...mapActions({
    //   getLists: "list/getLists"
    // }),
    btn(type, index) {
      if (type == "-") {
        this.shop[index].count > 0
          ? this.shop[index].count--
          : (this.shop[index].count = 0);
      } else {
        this.shop[index].count++;
      }
      this.shopList(this.shop)
    }
  },
  created() {
    // this.getLists();
  }
};
</script>
<style scoped>
.list {
  box-sizing: border-box;
  padding: 5px;
  background: #f0f0f0;
  margin-bottom: 50px;
}
dl {
  height: 120px;
  background: #fff;
  margin: 5px 0;
  display: flex;
}
dt {
  box-sizing: border-box;
  padding: 5px 10px 5px 5px;
  display: flex;
  flex-direction: column;
}
.price {
  margin-top: 30px;
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
}
dl img {
  height: 100px;
  margin: 10px;
  width: 100px;
}
.foot{
  width: 100%;
  position: fixed;  text-align: center;
  line-height: 50px;
  bottom: 50px;
  left: 0;
  height: 50px;
  background: #eee;
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
}
.btns{
  background: orangered;
  color: #fff;
  height: 100%;
  width: 100px;
  text-align: center;
  line-height: 50px;
}
</style>
