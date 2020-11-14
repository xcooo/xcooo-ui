<template>
  <!-- 对话框的遮罩层  .self代表只有点击自己才触发 -->
  <transition name="xc-fade">
    <div class="xc-dialog__wrapper" v-show="visible" @click.self="handleClose">
      <div class="xc-dialog" :style="{ width, marginTop: top }">
        <div class="xc-dialog__header">
          <slot name="title">
            <span class="xc-dialog__title">{{ title }}</span>
          </slot>
          <button class="xc-dialog__headerbtn" @click="handleClose">
            <i class="xc-icon-close"></i>
          </button>
        </div>
        <div class="xc-dialog__body">
          <!-- 默认插槽 -->
          <slot>
            <span>这是一段信息</span>
          </slot>
        </div>
        <div class="xc-dialog__footer" v-if="$slots.footer">
          <slot name="footer"> </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "XcDialog",
  props: {
    title: {
      type: String,
      default: "提示"
    },
    width: {
      type: String,
      default: "50%"
    },
    top: {
      type: String,
      default: "15vh"
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    handleClose() {
      this.$emit("update:visible", false);
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.xc-dialog__wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .xc-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &__header {
      padding: 20px 20px 10px;
      .xc-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .xc-dialog__headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .el-icon-close {
          color: #909399;
        }
      }
    }
    &__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      /deep/ .xc-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.xc-fade-enter-active {
  animation: xc-fade-in 0.4s;
}
.xc-fade-leave-active {
  animation: xc-fade-out 0.4s;
}
@keyframes xc-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes xc-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>
