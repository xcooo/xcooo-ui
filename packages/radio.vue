<template>
  <label class="xc-radio" :class="{ 'is-checked': label === model }">
    <span class="xc-radio__input">
      <span class="xc-radio__inner"></span>
      <input
        type="radio"
        class="xc-radio__original"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="xc-radio__label">
      <slot></slot>
      <!-- 如果没有传内容, 我们就把label当成内容 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "XcRadio",
  inject: {
    RadioGroup: {
      default: ""
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      dafault: ""
    },
    value: null,
    name: {
      type: String,
      default: ""
    }
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {},
  // 需要提供一个计算属性
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        // 触发父组件给当前组件注册的input事件
        // this.$emit("input", value);
        this.isGroup? this.RadioGroup.$emit('input',value) : this.$emit('input',value)
      }
    },
    isGroup() {
      // 用于判断radio是否被radioGroup所包裹
      return !!this.RadioGroup;
    }
  }
};
</script>

<style lang="scss" scoped>
.xc-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    .xc-radio_input{
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .xc-radio_inner{
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after{
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale(0);
          transition: transform .15s ease-in;
        }
      }
      .xc-radio_original{
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .xc-radio_label{
      font-size: 14px;
      padding-left: 10px;;
    }
  }
  // 选中的样式
  .xc-radio.is-checked{
    .xc-radio_input{
      .xc-radio_inner{
        border-color: #409eff;
        background-color: #409eff;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .xc-radio_label{
      color:#409eff;
    }
  }
</style>
