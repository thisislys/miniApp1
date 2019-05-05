<template>
  <div class="banner">
   
    <swiper autoplay="true" indicator-dots="true" indicator-color indicator-active-color>
      <div v-for="(item,idx) in  banner.legaowei.template1.model2.avatarList" :key="idx">
        <swiper-item>
          <img :src="item">
        </swiper-item>
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    banner: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style>

</style>
