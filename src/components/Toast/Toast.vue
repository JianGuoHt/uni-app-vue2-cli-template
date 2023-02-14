<template>
  <view>
    <u-toast ref="uToast"></u-toast>
  </view>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    show(params) {
      this.$refs.uToast.show(params);
    },
  },
};
</script>
