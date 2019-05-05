<template>
  <div class="copm">
    <span>已选项目（*代表必选）</span>
    <span>/{{choose}}/</span>
    <span>点击选择需要填写的信息</span>
    <picker @change="pickerChoose" :value="indexs" :range="arrays">
      <p class="choose">
        <span
          class="item"
          :class="index==indexs?'red':''"
          @click="addChoose(item,index)"
          v-for="(item,index) in type"
          :key="index"
        >{{item}}</span>
      </p>
    </picker>
  </div>
</template>

<script>
export default {
  props: {
    choose: {
      type: Array,
      default: []
    },
    indexs: {
      type: Number,
      default: 0
    },
    arrays: {
      type: Array,
      default: []
    },
    type: {
      type: Array,
      default: []
    },
    addChoose: {
      type: null,
      default: () => {}
    },
    pickerChoose: {
      type: null,
      default: () => {}
    }
  }

};
</script>

<style scoped lang="scss">
.copm {
  background: #fff;
  display: flex;
  flex-direction: column;
  > span {
    box-sizing: border-box;
    padding: 0 40rpx;
    font-size: 35rpx;
  }
  .choose {
    box-sizing: border-box;
    padding: 0 40rpx;
    font-size: 35rpx;
    .item {
      padding:15rpx;
    }
  }
}
.red {
  color: red;

}
</style>
