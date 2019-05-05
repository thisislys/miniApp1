<template>
  <div class="counter-warp">
    <p>
      <span>姓名*</span>
      <input v-model="name" type="text" placeholder="请输入姓名" name id>
    </p>
    <p>
      <span>手机号*</span>
      <input v-model="phone" type="text" placeholder="请输入手机号" name id>
    </p>
    <p>
      <span>备注</span>
      <input v-model="qt" type="text" placeholder="请输入备注" name id>
    </p>
    <p>
      <span>职位*</span>
      <input v-model="job" type="text" placeholder="请输入职位" name id>
    </p>
    <button @click="save">提交</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      job: "",
      name: "",
      phone: "",
      qt: ""
    };
  },
  computed: {
    ...mapState({
      now: state => state.index.now
    })
  },
  methods: {
    ...mapMutations({
      getNow: "index/getNow"
    }),
    save() {
      if (!this.name) {
        wx.showToast({
          title: "请输入姓名",
          icon: "none"
        });
        return false;
      }
      if (!/^1[3,4,5,7,8,9]\d{9}$/.test(this.phone)) {
        wx.showToast({
          title: "手机号有误",
          icon: "none"
        });
        return false;
      }
      if (!this.job) {
        wx.showToast({
          title: "请输入职位",
          icon: "none"
        });
        return false;
      }
      this.getNow({
        name: this.name,
        phone: this.phone,
        qt: this.qt,
        job: this.job
      });
      wx.navigateBack({
        delta: 1
      });
    }
  }
};
</script>

<style>
</style>
