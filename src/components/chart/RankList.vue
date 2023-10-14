<template>
  <div class="rank">
    <h3 class="title">{{ title }}   
      <a-select v-model="selectedValue" style="width: 100px;" @change="handleSelectChange">
        <a-option v-for="option in options" :key="option.value" :value="option.value">
          {{ option.label }}
        </a-option>
      </a-select>  
    </h3>     
    <ul class="list" :style="{ height: height ? `${height}px` : 'auto', overflow: 'auto' }">
      <li :key="index" v-for="(item, index) in localList">
        <span :class="index < 3 ? 'active' : null">{{ index + 1 }}</span>
        <span>{{ item.name }}</span>
        <span>{{ item.total }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'RankList',
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

    setup(props) {
      // 创建一个响应式引用来存储数据
      const localList = ref([...props.list]);
      return {
        localList,
        selectedValue: '第一期',  // 默认选中的值
        options: [            // 选项列表
          { value: '1', label: '第一期' },
          { value: '2', label: '第二期' },
          { value: '3', label: '第三期' },
          { value: '4', label: '第四期' },
          { value: '5', label: '第五期' }
        ]
      };
    },
    methods: {
    handleSelectChange(value) {
      const alist = [
          {
          name: '内存',
          total: 104 * value
        },{
          name: 'CPU',
          total: 5 * value
        },{
          name: '存储',
          total: 22 * value
        },{
          name: '虚拟机',
          total: 21 * value
        },{
          name: 'VCPU',
          total: 3 * value
        }
      ]
      this.localList = alist;
    }
  },
  
  });
    
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
