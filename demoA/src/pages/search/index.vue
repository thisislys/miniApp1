<template>
  <div>
    <div class="head">
      <input type="text" v-model="val" @input="ipt">
      <p @click="clear">取消</p>
      <!-- <p @click="ok">确定</p> -->
    </div>
    <div v-if="talg">
      <ul v-for="(item,index) in keyWord.output.kwRes" :key="index">
        <li @click="detail(item)">{{item}}</li>
      </ul>
    </div>
    <div class="history" v-if="!talg">
<span v-for="(item,index) in history" :key="index">{{item}}</span>
    </div>
  </div>
</template>

<script>
// Use Vuex getkeyWords
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  data() {
    return {
      val: "",
      history: [],
      talg: false
    };
  },

  computed: {
    ...mapState({
      keyWord: state => state.search.l_keyWord
    })
  },
  methods: {
    ...mapActions({
      getkeyWords: "search/getkeyWords"
    }),
    // async ok() {
    //   await this.getkeyWords({ kw: this.val });
    //   this.history = [...this.history, this.val];
    //   this.talg = true;
    //   if (this.val == "") {
    //     this.talg = false;
    //   }
    // },
   async ipt(){
 await this.getkeyWords({ kw: this.val });
      this.history = [...this.history, this.val];
      this.talg = true;
      if (this.val == "") {
        this.talg = false;
      }
    },
   async clear() {
      this.talg = false;
      this.val = "";
    },
    detail(key){
      wx.navigateTo({
        url: '/pages/searchList/main?key='+key
      });
    }
  },

  created() {}
};
</script>

<style lang="scss">
.head {
  display: flex;
  justify-content: space-around;
  input {
    border: 2rpx solid #ccc;
  }
}
.history{
  span{
    padding: 20rpx;
  }
}
</style>
