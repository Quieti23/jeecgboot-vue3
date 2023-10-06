import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: 'poolalias',
    align:"center",
    dataIndex: 'poolalias'
   },
   {
    title: 'physicalcluster',
    align:"center",
    dataIndex: 'physicalcluster'
   },
   {
    title: 'ttotal',
    align:"center",
    dataIndex: 'ttotal'
   },
   {
    title: 'tcputotal',
    align:"center",
    dataIndex: 'tcputotal'
   },
   {
    title: 'distributioncpu',
    align:"center",
    dataIndex: 'distributioncpu'
   },
   {
    title: 'tmemorytotal',
    align:"center",
    dataIndex: 'tmemorytotal'
   },
   {
    title: 'distributionmemory',
    align:"center",
    dataIndex: 'distributionmemory'
   },
   {
    title: 'tdisktotal',
    align:"center",
    dataIndex: 'tdisktotal'
   },
   {
    title: 'distributiondisk',
    align:"center",
    dataIndex: 'distributiondisk'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: 'poolalias',
    field: 'poolalias',
    component: 'Input',
  },
  {
    label: 'physicalcluster',
    field: 'physicalcluster',
    component: 'Input',
  },
  {
    label: 'ttotal',
    field: 'ttotal',
    component: 'InputNumber',
  },
  {
    label: 'tcputotal',
    field: 'tcputotal',
    component: 'InputNumber',
  },
  {
    label: 'distributioncpu',
    field: 'distributioncpu',
    component: 'InputNumber',
  },
  {
    label: 'tmemorytotal',
    field: 'tmemorytotal',
    component: 'InputNumber',
  },
  {
    label: 'distributionmemory',
    field: 'distributionmemory',
    component: 'InputNumber',
  },
  {
    label: 'tdisktotal',
    field: 'tdisktotal',
    component: 'InputNumber',
  },
  {
    label: 'distributiondisk',
    field: 'distributiondisk',
    component: 'InputNumber',
  },
  {
    label: 'ID',
    field: 'id',
    component: 'Input',
  },
];



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}