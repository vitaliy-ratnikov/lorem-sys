<template>
  <component :is="buttonType" :class="buttonClass">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    accent: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    isLink: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    buttonClass() {
      return [
        "btn",
        {
          "btn--accent": this.accent,
          "btn--secondary": this.secondary,
        },
      ];
    },
    buttonType() {
      return this.isLink ? "a" : "button";
    },
  },
};
</script>

<style lang="scss">
.btn {
  text-transform: uppercase;
  font-weight: 400;
  font-size: vw(13px);
  line-height: vw(16px);
  padding: vw(15px);
  display: inline-block;
  border-radius: vw(4px);
  border: none;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: vw(1px) solid transparent;
  transition: all 0.2s ease-in;

  &:active {
    transform: translateY(1px);
  }

  &:hover,
  &:active,
  &:focus {
    background-color: darken($accent-light, 15);
  }

  &--accent {
    background-color: $accent-light;
    border: vw(1px) solid #ffffff;
    color: #fff;
  }

  &--secondary {
    background-color: #fff;
    color: #2a2b30;
    border: vw(1px) solid #6f6d7b;
    &:hover,
    &:active,
    &:focus {
      color: #fff;
    }
  }
}
</style>
