<template>
  <view class="content">
    <image class="logo" src="http://127.0.0.1:3000/logo.png"></image>
    <view class="flex w-2">
      <text class="title">{{ title }}</text>
    </view>
    <view
      class="bg-green-300 hover:bg-red-700 active:bg-blue-700"
      style="width: 100rpx; height: 100rpx"
    ></view>
    <u-button>123</u-button>
    <u-tag text="标签" plain size="mini" type="warning"></u-tag>
  </view>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello',
    };
  },
  onLoad() {},
  methods: {},
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
