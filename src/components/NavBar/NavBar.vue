<template>
  <u-navbar leftText="返回" :title="title" safeAreaInsetTop placeholder>
    <view class="u__nav__slot" slot="left">
      <u-icon name="arrow-left" size="19"></u-icon>
      <u-line direction="column" :hairline="false" length="16" margin="0 8px"></u-line>
      <u-icon name="home" size="20"></u-icon>
    </view>
  </u-navbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.u__nav__slot {
  display: flex;
  border: 1rpx solid #ccc;
  border-radius: 50rpx;
  padding: 7rpx 10rpx;
}
</style>
