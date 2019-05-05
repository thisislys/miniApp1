<template>
  <section>
    <div class="list">
      <dl @click="detail(item.itemId)" v-for="(item,index) in list" :key="item.itemId">
        <!-- <nuxt-link to="./detail/detail"> -->
        <dd>
          <img :src="item.imgUrl" alt>
        </dd>
        <dt>
          <p>{{item.title}}</p>
          <p class="price">
            <span>{{item.price}}</span>
            <span>
              <span @click.stop="btn('-',index)">-</span>
              <span>{{item.count}}</span>
              <span @click.stop="btn('+',index)">+</span>
            </span>
          </p>
        </dt>
        <!-- </nuxt-link> -->
      </dl>
    </div>
  </section>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      path: "/detail/"
    };
  },
  computed: {
    ...mapState({
      list: state => state.list.list
    })
  },
  methods: {
    ...mapMutations({
      shopList: "list/shopList"             
    }),
    ...mapActions({
      getLists: "list/getLists"
    }),
    detail(id) {
      console.log(id);
      this.$router.push({
        path: this.path + id
      });
    },
    btn(type, index) {
      if (type == "-") {
        this.list[index].count > 0
          ? this.list[index].count--
          : (this.list[index].count = 0);
      } else {
        this.list[index].count++;
      }
      this.shopList(this.list.filter(item => item.count));
    }
  },
  created() {
    this.list.filter(item => item.count).length ? null : this.getLists();
  },
  //    validate ({ params }) {
  //   // 必须是number类型
  //   console.log(params)
  //   return /^\d+$/.test(params.id)
  // }
};
</script>
<style scoped>
.list {
  box-sizing: border-box;
  padding: 5px;
  background: #f0f0f0;
  margin-bottom: 50px;
}
dl {
  height: 120px;
  background: #fff;
  margin: 5px 0;
  display: flex;
}
dt {
  box-sizing: border-box;
  padding: 5px 10px 5px 5px;
  display: flex;
  flex-direction: column;
  width: 100%;
}
.price {
  margin-top: 30px;
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
}
dl img {
  height: 100px;
  margin: 10px;
  width: 100px;
}
</style>
