<template>
  <section class="container">
    <div class="body">
      <NuxtChild/>
    </div>
    <ul class="foot">
      <li>
        <nuxt-link to="/product/list">首页</nuxt-link>
      </li>
      <li>
        <el-badge :value="count" class="item">
          <nuxt-link to="/product/shopCar">购物车</nuxt-link>
        </el-badge>
      </li>
    </ul>
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  components: {
    // Logo
  },
    computed: {
    ...mapState({
      // shop: state => state.list.shop,
      count: state => state.list.count,
    })
  },
  created() {
    this.$router.push({
      path: "/product/list"
    });
  }
};
</script>

<style scoped >
* {
  list-style: none;
  padding: 0;
  margin: 0;
}
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.container .body {
  flex: 1;
}

.container .foot {
  position: fixed;
  bottom: 0;
  left: 0;
  flex-shrink: 0;
  display: flex;
  width: 100%;
  height: 50px;
  background: #f0f0f0;
}
.container li {
  flex: 1;
  line-height: 50px;
  text-align: center;
}
.pink {
  color: pink;
}
</style>
