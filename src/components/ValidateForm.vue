<template>
  <form>
    <slot></slot>
    <div @click.prevent="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue';
import mitt from 'mitt';
type validateFunc = () => boolean;
export const emitter = mitt();
export default defineComponent({
  emits: ['form-submit'],
  setup(props, context) {
    let funcArr: validateFunc[] = [];
    const submitForm = () => {
      const result = funcArr.map(func => func()).every(res => res);
      context.emit('form-submit', result);
    };

    const callback = (func?: validateFunc) => {
      if (func) {
        funcArr.push(func);
      }
    };

    emitter.on('form-item-create', callback);

    onUnmounted(() => {
      emitter.off('form-item-create', callback);
      funcArr = [];
    });

    return {
      submitForm
    };
  }
});
</script>

<style></style>
