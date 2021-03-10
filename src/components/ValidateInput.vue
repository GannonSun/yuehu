<template>
  <div class="pb-3">
    <input
      type="text"
      class="form-control"
      :class="{ 'is-invalid': inputRef.error }"
      :value="inputRef.val"
      @blur="validateInput"
      @input="updateValue"
      v-bind="$attrs"
    />
    <span v-if="inputRef.error" class="invalid-feedback">
      {{ inputRef.message }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, onMounted } from 'vue';
import { emitter } from './ValidateForm.vue';
interface RuleProps {
  type: 'required' | 'email';
  message: string;
}
export type RulesProps = RuleProps[];

const EmailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

export default defineComponent({
  props: {
    rules: Array as PropType<RulesProps>,
    modelValue: String
  },
  inheritAttrs: false,
  setup(props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    });

    const validateInput = () => {
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true;
          inputRef.message = rule.message;
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== '';
              break;
            case 'email':
              passed = EmailReg.test(inputRef.val);
              break;
            default:
              break;
          }
          return passed;
        });
        inputRef.error = !allPassed;
        return allPassed;
      }
      return true;
    };

    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value;
      inputRef.val = targetValue;
      context.emit('update:modelValue', targetValue);
    };

    onMounted(() => {
      emitter.emit('form-item-create', validateInput);
    });

    return {
      inputRef,
      validateInput,
      updateValue
    };
  }
});
</script>

<style></style>
