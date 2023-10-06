import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '业务系统',
    align:"center",
    dataIndex: 'businesssystem'
   },
   {
    title: '部门',
    align:"center",
    dataIndex: 'department'
   },
   {
    title: '管理部门',
    align:"center",
    dataIndex: 'admindepartment'
   },
   {
    title: '业务经理',
    align:"center",
    dataIndex: 'businessmanager'
   },
   {
    title: '业务描述',
    align:"center",
    dataIndex: 'businesstell'
   },
   {
    title: '虚拟机数量',
    align:"center",
    dataIndex: 'vmquantity'
   },
   {
    title: '开机数量',
    align:"center",
    dataIndex: 'bootquantity'
   },
   {
    title: '关机数量',
    align:"center",
    dataIndex: 'shutdownquantity'
   },
   {
    title: '回收量',
    align:"center",
    dataIndex: 'recyclequantity'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '业务系统',
    field: 'businesssystem',
    component: 'Input',
  },
  {
    label: '部门',
    field: 'department',
    component: 'Input',
  },
  {
    label: '管理部门',
    field: 'admindepartment',
    component: 'Input',
  },
  {
    label: '业务经理',
    field: 'businessmanager',
    component: 'Input',
  },
  {
    label: '业务描述',
    field: 'businesstell',
    component: 'Input',
  },
  {
    label: '虚拟机数量',
    field: 'vmquantity',
    component: 'InputNumber',
  },
  {
    label: '开机数量',
    field: 'bootquantity',
    component: 'InputNumber',
  },
  {
    label: '关机数量',
    field: 'shutdownquantity',
    component: 'InputNumber',
  },
  {
    label: '回收量',
    field: 'recyclequantity',
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