<template>
  <div class="rank">
    <h4 class="title"></h4>
    <a-select
        v-model:value="value"
        label-in-value
        style="width: 120px"
        :options="options"
        @change="handleChange"
        placeholder="资源池的数据"
      ></a-select>
    <ul class="list" :style="{ height: height ? `${height}px` : 'auto', overflow: 'auto' }">
      <li :key="index" v-for="(item, index) in list">
        <span :class="index < 3 ? 'active' : null">{{ index + 1 }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.total }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import { SelectProps } from 'ant-design-vue';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    name: 'RankList1',
    props: {
      title: {
        type: String,
        default: '',
      },
      list: {
        type: Array,
        default: null,
      },
      height: {
        type: Number,
        default: null,
      },
    },
  });
  
  const options = ref<SelectProps['options']>([
    {
      value: 'jack',
      label: 'Jack (100)',
    },
    {
      value: 'lucy',
      label: 'Lucy (101)',
    },
  ]);
  const handleChange: SelectProps['onChange'] = value => {
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
  };

  const value = ref('lucy');
</script>

<style lang="less" scoped>
  .rank {
    padding: 0 32px 32px 72px;

    .list {
      margin: 25px 0 0;
      padding: 0;
      list-style: none;

      li {
        margin-top: 16px;

        span {
          color: rgba(0, 0, 0, 0.65);
          font-size: 14px;
          line-height: 22px;

          &:first-child {
            background-color: #f5f5f5;
            border-radius: 20px;
            display: inline-block;
            font-size: 12px;
            font-weight: 600;
            margin-right: 24px;
            height: 20px;
            line-height: 20px;
            width: 20px;
            text-align: center;
          }
          &.active {
            background-color: #314659;
            color: #fff;
          }
          &:last-child {
            float: right;
          }
        }
      }
    }
  }

  .mobile .rank {
    padding: 0 32px 32px 32px;
  }
</style>
