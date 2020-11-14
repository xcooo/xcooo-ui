<template>
  <button
    class="xc-button"
    :class="[
      `xc-button--${type}`,
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-circle': circle },
      { 'is-disabled': disabled }
    ]"
    @click="handleClick"
    :disabled="disabled"
  >
    <!-- 如果没有传入任何的内容, 当我们没有传入插槽的时候 -->
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  // 组件注册可以拿到这个名字
  name: "XcButton",
  // 封装一个通用的组件, 会对props做一个约束, props进行校验
  props: {
    type: {
      // 数据类型: 字符串
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {
    // console.log(this.$slots)
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.xc-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &.is-plain:hover,
  &.is-plain:focus {
    background: #fff;
    border-color: #409eff;
    color: #409eff;
  }
  &.is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
  &--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
    &.is-plain {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
      &:hover,
      &:focus {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
      }
    }
    &.is-disabled {
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;
    }
  }
  &--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
    &.is-plain {
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;
      &:hover,
      &:focus {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
      }
    }
    &.is-disabled {
      color: #fff;
      background-color: #b3e19d;
      border-color: #b3e19d;
    }
  }
  &--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
    &.is-plain {
      color: #909399;
      background: #f4f4f5;
      border-color: #d3d4d6;
      &:hover,
      &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
      }
    }
    &.is-disabled {
      color: #fff;
      background-color: #c8c9cc;
      border-color: #c8c9cc;
    }
  }
  &--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
    &.is-plain {
      color: #e6a23c;
      background: #fdf6ec;
      border-color: #f5dab1;
      &:hover,
      &:focus {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
      }
    }
    &.is-disabled {
      color: #fff;
      background-color: #f3d19e;
      border-color: #f3d19e;
    }
  }
  &--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
    &.is-plain {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;
      &:hover,
      &:focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
      }
    }
    &.is-disabled {
      color: #fff;
      background-color: #fab6b6;
      border-color: #fab6b6;
    }
  }
  // 圆角
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
  // 按钮后的文本
  & [class*="xc-icon-"] + span {
    margin-left: 5px;
  }
}
</style>
