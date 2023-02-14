<script>
export default {
  onLaunch: function () {
    console.log('App Launch');
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
};
</script>

<style lang="scss">
/* tailwindcss */
@import 'tailwindcss/base';
@import 'tailwindcss/utilities';
/* uview-ui css */
@import 'uview-ui/index.scss';
/* 每个页面公共css */
@import './design/index.scss';
</style>
