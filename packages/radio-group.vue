<template>
  <div class="xc-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "XcRadioGroup",
  provide() {
    return {
      RadioGroup: this
    };
  },
  props: {
    // xc-radio-group接收到了 value值
    // 将来还需要触发 当前组件的input事件
    // provide 与 inject
    value: null
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scoped></style>
