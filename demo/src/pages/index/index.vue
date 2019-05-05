<template>
  <div class="form">
    <input v-model="tit" type="text" placeholder="请输入标题">
    <input v-model="con" type="text" placeholder="请输入详细信息">
    <picker mode="time" @change="pickerChange" :value="time" start="09:01" end="21:01">
      <div class="flex">
        <p>报名开始时间</p>
        <p>{{time}}</p>
      </div>
    </picker>
    <picker mode="time" @change="pickerChange2" :value="time2" start="10:01" end="22:01">
      <div class="flex">
        <p>报名结束时间</p>
        <p>{{time2}}</p>
      </div>
    </picker>
    <p>
      <label for>报名人数</label>
      <input v-model="num" type="text">
    </p>
    <p>
      <span>报名收费（最高50万元）</span>
      <switch checked @change="switch1Change"/>
    </p>
    <p>
      <label for>报名费用</label>
      <input v-model="money" placeholder="单位（元）" type="text">
    </p>
    <span>温馨提示：会收取1%的费用，用于微信支付服务。</span>
    <p>
      <span>活动开始/截止时间</span>
      <switch @change="switch2Change"/>
    </p>
    <p>
      <label for>活动地址</label>
      <input v-model="address" type="text" placeholder="填写活动地址">
    </p>
    <info
      :pickerChoose="pickerChoose"
      :choose="choose"
      :indexs="indexs"
      :arrays="arrays"
      :type="type"
      :addChoose="addChoose"
    ></info>

    <!-- <p>已选项目（*代表必选）</p>
      <p>{{choose}}</p>
      <p>点击选择需要填写的信息</p>
      <picker @change="pickerChoose" :value="indexs" :range="arrays">
        <p>
          <span @click="addChoose(item,index)" v-for="(item,index) in type" :key="index">{{item}}</span>
          <span @click="add">添加自定义</span>
        </p>
    </picker>-->

    <p>
      <span>报名列表显示</span>
      <span>人数头像和昵称</span>
    </p>
    <p>
      <span>报名数据权限</span>
      <span>管理员可见（保护隐私）</span>
    </p>
    <p>
      <span>参与报名需要审核</span>
      <switch/>
    </p>
    <p>
      <span>允许一人多次报名</span>
      <switch/>
    </p>
    <p>
      <span>报名后不允许取消报名</span>
      <switch/>
    </p>
    <p>
      <span>发起人信息</span>
      <span>个人信息</span>
    </p>
    <p>
      <span>发起人署名</span>
      <span>{{name}}</span>
    </p>
    <p>
      <label for>手机号</label>
      <input v-model="phone" placeholder="（必填）" type="text">
    </p>
    <p>
      <label for>发起人微信</label>
      <input v-model="vxId" type="text" placeholder="请输入微信号">
    </p>
    <button @click="save">确认</button>
  </div>
</template>

<script>
import info from "@/components/info";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      time: "12:01",
      time2: "12:01",
      type: [
        "姓名",
        "性别",
        "年龄",
        "婚姻状况",
        "地址",
        "手机号",
        "qq号",
        "微信号",
        "身份证号",
        "工作单位"
      ],
      idx: 0,
      choose: [],
      indexs: 0,
      arrays: ["作为必填项", "作为选填项", "编辑", "取消"]
    };
  },
  computed: {
    ...mapState({
      infos: state => state.index.info
    })
  },
  components: {
    info
  },

  methods: {
    ...mapMutations({
      getInfo: "index/getInfo"
    }),
    pickerChange(e) {
      this.time = e.mp.detail.value;
    },
    pickerChange2(e) {
      this.time2 = e.mp.detail.value;
    },
    switch1Change(e) {
      console.log(e.mp.detail.value, 139);
    },
    addChoose(val, idx) {
      this.indexs = idx;
      this.idx = idx;
    },
    pickerChoose(e) {
      if (e.mp.detail.value == 0) {
        this.choose = [...this.choose, this.type[this.indexs] + "(必填)"];
      } else if (e.mp.detail.value == 1) {
        this.choose = [...this.choose, this.type[this.indexs] + "(选填)"];
      }
    },
    save() {
      if (!/^1[3,4,5,7,8,9]\d{9}$/.test(this.phone)) {
        wx.showToast({
          title: "手机号有误",
          icon: "none"
        });
        return false;
      }
      this.getInfo({
        tit: this.tit,
        con: this.con,
        num: this.num,
        money: this.money,
        phone: this.phone,
        wxId: this.vxId,
        address: this.address,
        count: []
      });
      wx.navigateTo({
        url: "/pages/logs/main"
      });
    }
  },

};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  background: #eee;
  >p {
    box-sizing: border-box;
    padding:0 40rpx;
    display: flex;
    justify-content: space-between;
    background: #fff;
    margin:2rpx 0;
  }
  .flex{
     box-sizing: border-box;
    padding:0 40rpx;
    display: flex;
    justify-content: space-between;
  }
  >input{
 box-sizing: border-box;
    padding:0 40rpx;
    background: #fff;
  }
  >span{
     box-sizing: border-box;
    padding:0 40rpx;
    font-size: 35rpx;
  }
}
</style>
