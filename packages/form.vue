<template>
  <div class="xc-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'XcForm',
  props: {
    model: {
      type: Object,
      required:true
    },
    labelWidth: {
      type: String,
      default:'80px'
    }
  },
  provide(){
    return {
      Form: this
    }
  },
  components: {},
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="scss" scoped></style>
