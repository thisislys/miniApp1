<template>
  <div class="counter-warp">
    <ul>
      <li @click="jump(1)">1</li>
      <li @click="jump(2)">2</li>
      <li @click="jump(3)">3</li>
    </ul>
  </div>
</template>

<script>
// Use Vuex
import { mapState,mapMutations } from "vuex";
export default {
  computed: {},
  computed: {
    ...mapState({
      type: state => state.index.type
    })
  },
  methods: {
    ...mapMutations({
      changeType:'index/changeType'
    }),
    jump(type) {
      this.changeType(type);
      wx.switchTab({
        url: "/pages/logs/main"
      });
    }
  }
};
</script>

<style>
</style>
