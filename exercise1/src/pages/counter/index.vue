<template>
  <div class="counter-warp">
    <p>{{type.tit}}</p>
    <ul>
      <li v-for="item in arr" :key="item.id">{{item.tit}}</li>
      <!-- 点击高亮 单选 -->
    </ul>
    <ul>
      <li v-for="item in money" :key="item.id">
        <p>{{type.tit}}</p>
        <p>{{item.money}}元</p>
        <p v-if="item.count">
          <span @click="increments(item.id)">-</span>
          <span>{{item.count}}</span>
          <span @click="decrements(item.id)">+</span>
        </p>
        <p v-else>
          <span @click="decrements(item.id)">+</span>
        </p>
      </li>
      <!-- 点击高亮 多选 -->
    </ul>
    <p @Click="sum">{{sum}}</p>
    <!-- <p>Vuex counter：{{ count }}</p>
    <p>
      <button>+</button>
      <button>-</button>
    </p>-->
  </div>
</template>

<script>
// Use Vuex
// import store from './store'
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      arr: [
        {
          id: 0,
          tit: "感谢爸妈"
        },
        {
          id: 1,
          tit: "感谢同学"
        },
        {
          id: 2,
          tit: "感谢朋友"
        },
        {
          id: 3,
          tit: "感谢老师"
        }
      ],
      sum: 0
    };
  },
  computed: {
    ...mapState({
      money: state => state.datas.money
    })
  },
  methods: {
    ...mapMutations({
      increment: "datas/increment",
      decrement: "datas/decrement"
    }),
    cpt(id) {
      this.sum += this.money[id].money;
    },
    increments(id) {
      this.increment(id);
      this.cpt(id);
    },
    decrements(id) {
      this.decrement(id);
      this.cpt(id);
    }
  },
  onLoad: function(options) {
    this.type = JSON.parse(options.type);
    console.log(this.type, this.money);
  }
};
</script>

<style>
</style>
