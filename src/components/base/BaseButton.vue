<template>
  <div>
    <button v-on="$listeners" class="btn" :class="buttonClass" v-bind="$attrs">
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String,
    },
  },
}
</script>

<style></style>
