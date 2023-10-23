<template>
  <div class="md:flex">
    <template v-for="(item, index) in dataList" :key="item.title">
      <ChartCard
        :loading="loading"
        :title="item.title"
        :total="getTotal(item.total)"
        class="md:w-1/4 w-full !md:mt-0 !mt-4"
        :class="[index + 1 < 4 && '!md:mr-4']"
      >
        <template #action>
          <a-tooltip title="指标说明">
            <Icon :icon="item.icon" :size="20" />
          </a-tooltip>
        </template>
        <div v-if="type === 'chart'">
          <!-- <Trend term="周同比" :percentage="12" v-if="index === 0" />
          <Trend term="日同比" :percentage="11" v-if="index === 0" :type="false" /> -->
          <Progress v-if="index === 0" :percent="78" :show-info="false"></Progress>
          <!-- <Line v-if="index === 1" :option="option" :chartData="chartData" height="50px"></Line> -->
          <Progress v-if="index === 1" :percent="78" :show-info="false"></Progress>
          <!-- <Bar v-if="index === 2" :option="option" :chartData="chartData" height="50px"></Bar> -->
          <Progress v-if="index === 2" :percent="78" :show-info="false"></Progress>
          <Progress v-if="index === 3" :percent="78" :show-info="false"></Progress>
        </div>
        <!-- <div v-else>
          <Line v-if="index === 0" :option="option" :chartData="chartData" height="50px"></Line>

          <Line v-if="index === 1" :option="option" :chartData="chartData" height="50px"></Line>

          <Bar v-if="index === 2" :option="option" :chartData="chartData" height="50px"></Bar>

          <Bar v-if="index === 3" :option="option" :chartData="chartData" height="50px"></Bar>
        </div> -->
        <!-- <template #footer v-if="type === 'chart'">
          <span v-if="index !== 3"
            >{{ item.footer }}<span>{{ item.value }}</span></span
          >
          <Trend term="周同比" :percentage="12" />
          <Trend term="日同比" :percentage="11" />
        </template>
        <template #footer v-else>
          <span
            >{{ item.footer }}<span>{{ item.value }}</span></span
          >
        </template> -->


        <template #footer v-if="type === 'chart'">
          <span
            >{{ item.footer }}<span>{{ item.value }}</span></span
          > 
          <Trend term="周同比" :percentage="12" />
          <Trend term="日同比" :percentage="11" />

          <div class="indicators">
            <button v-for="(item, index) in items" :key="index" 
                    @click="setIndex(index)"
                    :class="{ active: index === currentIndex }" aria-label="Go to slide {{index + 1}}">
            </button>
          </div>
        </template>
      </ChartCard>
    </template>
  </div>
</template>
<script lang="ts" setup>
  // import { ref, computed } from 'vue';
  import { computed, onMounted, onUnmounted, ref } from 'vue';
  import { Icon } from '/@/components/Icon';
  import { Progress } from 'ant-design-vue';
  import ChartCard from '/@/components/chart/ChartCard.vue';
  import Trend from '/@/components/chart/Trend.vue';
  // import Bar from '/@/components/chart/Bar.vue';
  // import Line from '/@/components/chart/Line.vue';
  import { chartCardList, bdcCardList } from '../data';

  const props = defineProps({
    loading: {
      type: Boolean,
    },
    type: {
      type: String,
      default: 'chart',
    },
  });
  // const option = ref({ xAxis: { show: false, boundaryGap: false }, yAxis: { show: false, boundaryGap: false, max: 220 } });

  // const chartData = ref([
  //   {
  //     name: '1月',
  //     value: 50,
  //   },
  //   {
  //     name: '2月',
  //     value: 100,
  //   },
  //   {
  //     name: '3月',
  //     value: 150,
  //   },
  //   {
  //     name: '4月',
  //     value: 40,
  //   },
  //   {
  //     name: '5月',
  //     value: 110,
  //   },
  //   {
  //     name: '6月',
  //     value: 120,
  //   },
  // ]);

    // 新方法：处理指示器点击，切换到对应的项
    const setIndex = (newIndex) => {
      currentIndex.value = newIndex;
    };

  // 当前显示的数据索引
  const currentIndex = ref(0);

  // 存储setInterval的变量，以便之后可以清除
  let slideInterval;

  // 在组件加载时开始轮播
  onMounted(() => {
    slideInterval = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % chartCardList.length; // 循环轮播
    }, 5000); // 每5秒切换
  });

  const dataList = computed(() => (props.type === 'dbc' ? bdcCardList : chartCardList[currentIndex.value]));

  const items = ref(dataList);
  // 在组件卸载时清除轮播
  onUnmounted(() => {
    clearInterval(slideInterval);
  });

  // function getTotal(total, index) {
  function getTotal(total) {
    // return index === 0 ? `￥${total}` : index === 3 ? `${total}%` : total;
    return `${total}%`;
  }
  
</script>

<style lang="less" scoped>
.indicators {
  display: flex;
  justify-content: center;
  padding: 0;
}
.indicators button {
  background-color: gray; /* 非活动圆点的颜色 */
  border: none; /* 移除边框 */
  width: 10px;
  height: 10px;
  border-radius: 50%; /* 圆形效果 */
  margin: 0 5px;
  padding: 0; /* 移除内边距 */
  cursor: pointer;
}
.indicators button.active {
  background-color: black; /* 活动圆点的颜色 */
}
.indicators button:focus {
  outline: none; /* 如果你不希望在聚焦时有外边框，可以添加这一行 */
}
</style>