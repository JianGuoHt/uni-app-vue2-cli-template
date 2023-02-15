<template>
  <view class="content flex flex-col items-center justify-center">
    <NavBar title="首页"></NavBar>
    <u-image width="200rpx" height="200rpx" :src="RESOURCE_URL + '/logo.png'"></u-image>
    <view class="flex">
      <text class="title">{{ pageTitle }}</text>
    </view>
    <view>
      <text> {{ RESOURCE_URL }} </text>
    </view>

    <view>
      <text>vuex: {{ title }}</text>
    </view>
    <view
      class="bg-green-300 hover:bg-red-700 active:bg-blue-700"
      style="width: 100rpx; height: 100rpx"
    ></view>
    <view class="my-1">
      <u-button @click="showToast">消息</u-button>
    </view>
    <view class="my-1">
      <u-button type="primary" @click="showPrimaryToast">主要消息</u-button>
    </view>
    <view class="my-1">
      <u-button type="success" @click="showSuccessToast">成功消息</u-button>
    </view>
    <view class="my-1">
      <u-button type="warning" @click="showWarningToast">警告消息</u-button>
    </view>
    <view class="my-1">
      <u-button type="error" @click="showErrorToast">错误消息</u-button>
    </view>
  </view>
</template>

<script>
import {
  showToast,
  showSuccessToast,
  showWarningToast,
  showErrorToast,
  showPrimaryToast,
} from '@/utils/showToast';
import { mapState } from 'vuex';
export default {
  data() {
    return {
      pageTitle: 'Hello!',
    };
  },
  computed: {
    ...mapState('app', ['title']),
  },
  onLoad() {
    console.log(this);
  },
  methods: {
    showToast() {
      showToast({
        message: '消息',
      });
    },
    showSuccessToast() {
      showSuccessToast('成功消息');
    },
    showWarningToast() {
      showWarningToast('警告消息');
    },
    showErrorToast() {
      showErrorToast('错误消息');
    },
    showPrimaryToast() {
      showPrimaryToast('主要消息');
    },
  },
};
</script>

<style>
.content {
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
