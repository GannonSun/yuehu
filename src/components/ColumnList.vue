<template>
  <div class="row">
    <div class="col-4 mb-4" v-for="column in list" :key="column.id">
      <div class="card h-100 shadow-sm m-auto" style="width: 18rem;">
        <div class="card-body text-center">
          <img
            class="rounded-circle border border-light w-25 my-3"
            :src="imagePlaceholder(column.avatar)"
            :alt="column.title"
          />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-start">
            {{ column.description }}
          </p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { imagePlaceholder } from '@/common/util';

export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string;
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  methods: {
    imagePlaceholder
  }
});
</script>

<style></style>
