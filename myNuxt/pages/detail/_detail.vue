<template>
  <section>
    <div>
<img :src="detailData.imgUrl" alt=""/>
<h3>{{detailData.title}}</h3>
<p>
  <span>已购买{{detailData.sellCount}}次</span>
  <span>地址：{{detailData.loc}}</span>
  <!-- <span>{{detailData.}}</span> -->
</p>
    </div>
  </section>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
let detail;
export default {
    validate ({ params }) {
     detail=params.detail
    // 必须是number类型
    return /^\d+$/.test(params.detail)
  },
  data() {
    return {
      detailData:{}
    }
  }, 
   computed: {
     ...mapState({
      list: state => state.list.list
    })
  },
  methods: {
    ...mapActions({
      getLists: "list/getLists"
    }),
  },
 created() {
  //  this.getLists()
   this.detailData=this.list.filter(item=>item.itemId==detail)[0]
   console.log(this.detailData,6)

 },
}
</script>
<style>
img{
  width: 100%;
}
p{
  display: flex;
  justify-content: space-around
}
</style>
