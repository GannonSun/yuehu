<template>
  <div>
    <global-header :user="currentUser" />
    <div class="container">
      <column-list v-if="false" :list="list"></column-list>
      <validate-form @form-submit="onFormSubmit">
        <div class="mb-3">
          <label class="form-label">邮箱地址</label>
          <validate-input
            :rules="emailRules"
            v-model="emailVal"
            placeholder="请输入邮箱地址"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">密码</label>
          <validate-input
            :rules="passwordRules"
            v-model="passwordVal"
            placeholder="请输入密码"
            type="password"
          />
        </div>
        <template #submit>
          <button type="submit" class="btn btn-danger">提交</button>
        </template>
      </validate-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue';
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue';
import ValidateForm from '@/components/ValidateForm.vue';
import ValidateInput, { RulesProps } from '@/components/ValidateInput.vue';

const currentUser: UserProps = {
  isLogin: true,
  name: 'gannonsun'
};
const testData: ColumnProps[] = [
  {
    id: 1,
    title: '音乐1',
    description: '音乐1的简介'
  },
  {
    id: 2,
    title: '音乐2',
    description: '音乐2的简介',
    avatar: 'https://via.placeholder.com/150/FFFF00/000000'
  },
  {
    id: 3,
    title: '音乐3',
    description: '音乐1的简介',
    avatar: 'https://via.placeholder.com/150/FFFF00/000000'
  },
  {
    id: 4,
    title: '音乐4',
    description: '音乐4的简介',
    avatar: 'https://via.placeholder.com/150/FFFF00/000000'
  }
];
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateForm,
    ValidateInput
  },
  setup() {
    const emailVal = ref('');
    const emailRules: RulesProps = [
      {
        type: 'required',
        message: '邮箱地址不能为空'
      },
      {
        type: 'email',
        message: '邮箱地址格式不正确'
      }
    ];
    const passwordVal = ref('');
    const passwordRules: RulesProps = [
      {
        type: 'required',
        message: '密码不能为空'
      }
    ];

    const onFormSubmit = (result: boolean) => {
      console.log(111, result);
    };

    return {
      currentUser,
      list: testData,
      emailRules,
      passwordRules,
      emailVal,
      passwordVal,
      onFormSubmit
    };
  }
});
</script>

<style></style>
