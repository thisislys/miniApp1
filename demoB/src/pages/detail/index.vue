<template>
  <div class="page">
    <p>{{data.keyword}}</p>
    <p>
        <img :src="data.message_user.head_img" alt>
        <span>{{data.message_user.name}}</span>
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      data: {}
    };
  },

  components: {
    // List
  },
  computed: {},
  methods: {},
  created() {},
  onShow() {},
  onLoad(options) {
    this.data = JSON.parse(options.detail)
  }
};
</script>

<style scoped lang="scss">
p {
  display: flex;
  align-items: center;
  flex-direction: column;
  img {
    height: 50rpx;
    width: 50rpx;
    border-radius: 50%;
  }
}
</style>
