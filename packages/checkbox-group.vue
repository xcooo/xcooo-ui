<template>
  <div class="xc-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'XcCheckboxGroup',
  props:{
    value: {
      type: Array,
      default:()=>{return []}
    }
  },
  provide() {
    return {
      CheckboxGroup: this
    }
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>

</style>
