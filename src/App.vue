<template>
  <global-header :user="currentUser" />
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColumnList, { ColumnProps } from '@/components/ColumnList.vue';
import GlobalHeader, { UserProps } from '@/components/GlobalHeader.vue';

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
    GlobalHeader
  },
  setup() {
    return {
      currentUser,
      list: testData
    };
  }
});
</script>

<style></style>
