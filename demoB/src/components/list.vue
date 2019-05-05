<template>
   <div class="list">
     2222
      <ul v-if="lists.length">
        <li v-for="(item,idx) in lists" :key="idx">
          <h3>{{item.keyword}}</h3>
          <p>
            <span>
              <img :src="item.message_user.head_img" alt>
              <span>{{item.message_user.name}}</span>
            </span>

            <span>{{item.message_user.sex}}</span>
          </p>
          <p>
            <span>{{item.car_name}}</span>
            <span>{{item.create_time}}</span>
          </p>
        </li>
      </ul>
      <p class="more" v-if="lists.length">{{hasMore?'上拉加载更多': '我是有底线的'}}</p>
    </div>
</template>

<script>
export default {
  props: {
    lists:{
      type:Array
    }
  },
  created() {
  },
}
</script>

<style lang="scss">
.list {
  background: #f0f0f0;
  height: 100%;
  width: 100%;
  li {
    padding: 20rpx;
    box-sizing: border-box;
    width: 100%;
    background: #fff;
    height: 250rpx;
    margin: 10rpx;
    p {
      display: flex;
      justify-content: space-between;
    }
    img {
      height: 40rpx;
      width: 40rpx;
      border-radius: 50%;
    }
  }
}
</style>
