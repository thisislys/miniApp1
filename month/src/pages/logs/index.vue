<template>
  <div>
    <div class="right">
      <p v-for="item in car" :key="item.tit" @click="changes(item.tit)">{{item.tit}}</p>
    </div>
    <div class="left">
      <scroll-view scroll-y :scroll-into-view="ids" class="scroll">
        <div :id="item.tit" v-for="item in car" :key="item.tit">
          <p>{{item.tit}}</p>
          <p class="names" v-for="(items,idx) in item.names" :key="idx">
            <span>{{items}}</span>
          </p>
        </div>
      </scroll-view>
    </div>
    <!-- <div class="nav">
      <p :class="flag?'':'red'">填写信息</p>
      <p :class="flag?'red':''">上传照片</p>
    </div>
    <div class="first" v-if="!flag">
      <h3>宠物信息</h3>
      <div class="form">
        <p>
          <lable>姓名</lable>
          <input v-model="name" type="text">
        </p>
        <p>
          <span
            @click="change1(index)"
            :class="idx1===index?'red':''"
            v-for="(item,index) in nav"
            :key="index"
          >{{item}}</span>
        </p>
        <p>
          <lable>品种</lable>
          <input v-model="type" @click="choose" type="text">
        </p>
        <p>
          <picker class="pick" @change="bindPickerChange" :value="index" :range="array">
           <div class="pick">
             <lable>年龄</lable>
            <input v-model="array[index]" @click="age" type="text">
    </div>-->
    <!-- <view class="picker">当前选择：{{array[index]}}</view> -->
    <!-- </picker>
        </p>
        <p>
          <span
            @click="change2(index)"
            :class="idx2===index?'red':''"
            v-for="(item,index) in sex"
            :key="index"
          >{{item}}</span>
        </p>
      </div>
      <h3>联系方式</h3>
      <div class="form">
        <p>
          <lable>地址</lable>
          <input v-model="add" type="text">
        </p>

        <p>
          <lable>微信号</lable>
          <input v-model="id" type="text">
        </p>
        <p>
          <lable>手机号</lable>
          <input v-model="phone" type="text">
        </p>
      </div>
      <button @click="toggle">下一步</button>
    </div>
    <div class="last" v-if="flag">
      <button @click="save">保存</button>
    </div>-->
  </div>
</template>

<script>
import car from "@/mock/list.js";
import { mapState, mapMutations } from "vuex";
export default {
  components: {
    // card
  },

  data() {
    return {
      car: [],
      ids: "A"
      // nav: ["狗狗", "猫猫", "其他"],
      // sex: ["未知", "男孩", "女孩"],
      // flag: false,
      // idx1: 0,
      // idx2: 0,
      // array: ["1岁", "2岁", "3岁", "4岁"],
      // index: 0
    };
  },
  computed: {
    // ...mapState({
    //   type: state => state.index.type
    // })
  },
  methods: {
    changes(id) {
      this.ids = id;
      console.log(this.ids);
    }
    //   ...mapMutations({
    //     add: "index/add"
    //   }),
    //   toggle() {
    //     console.log(this.type);
    //     if (!/^1(3|4|5|7|8)\d{9}$/.test(this.phone)) {
    //       wx.showToast({
    //         title: "请输入正确的手机号码",
    //         icon: "none"
    //       });
    //       return false;
    //     }
    //     this.flag = true;
    //   },
    //    bindPickerChange(e) {
    //   this.index= e.mp.detail.value
    // },
    //   save() {
    //     this.add({ name: this.name, type: "cat" });
    //     wx.navigateTo({
    //       url: "/pages/index/main"
    //     });
    //   },
    //   choose() {
    //     wx.navigateTo({
    //       url: "/pages/counter/main"
    //     });
    //   },
    //   age() {
    //     console.log("年龄");
    //   },
    //   change1(idx) {
    //     this.idx1 = idx;
    //   },
    //   change2(idx) {
    //     this.idx2 = idx;
    //   }
  },
  created() {
    this.car = car;
  }
};
</script>

<style lang="scss">
.right {
  background: red;
  position: fixed;
  right: 0;
  top: 100rpx;
  z-index: 999;
  p {
    height: 50rpx;
    width: 50rpx;
    line-height: 50rpx;
    text-align: center;
  }
}
.left {
  div,
  .names {
    display: flex;
    flex-direction: column;
  }
}
.scroll{
  height:1000rpx;
}
// .log-list {
//   display: flex;
//   flex-direction: column;
//   padding: 40rpx;
// }

// .log-item {
//   margin: 10rpx;
// }
// .nav ,.pick{
//   display: flex;
//   justify-content: space-around;
// }
// .form {
//   p {
//     display: flex;
//     justify-content: space-around;
//     height: 100rpx;
//     line-height: 100rpx;
//     input {
//       border: 2rpx solid #ccc;
//     }
//   }
// }
// .red {
//   color: red;
// }
// .btm {
//   background: red;
//   width: 100%;
//   height: 300rpx;
// }
</style>
