import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: 'liuwenpwd',
    align:"center",
    dataIndex: 'liuwenpwd'
   },
   {
    title: 'zhangjing3pwd',
    align:"center",
    dataIndex: 'zhangjing3pwd'
   },
   {
    title: 'sN',
    align:"center",
    dataIndex: 'sn'
   },
   {
    title: 'assettag',
    align:"center",
    dataIndex: 'assettag'
   },
   {
    title: 'manufacturer',
    align:"center",
    dataIndex: 'manufacturer'
   },
   {
    title: 'model',
    align:"center",
    dataIndex: 'model'
   },
   {
    title: 'hostfunction',
    align:"center",
    dataIndex: 'hostfunction'
   },
   {
    title: 'hardwareconfig',
    align:"center",
    dataIndex: 'hardwareconfig'
   },
   {
    title: 'softwareconfig',
    align:"center",
    dataIndex: 'softwareconfig'
   },
   {
    title: 'ostype',
    align:"center",
    dataIndex: 'ostype'
   },
   {
    title: 'access4a',
    align:"center",
    dataIndex: 'access4a'
   },
   {
    title: 'status',
    align:"center",
    dataIndex: 'status'
   },
   {
    title: 'onlinetime',
    align:"center",
    dataIndex: 'onlinetime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: 'maintenancemanufacturer',
    align:"center",
    dataIndex: 'maintenancemanufacturer'
   },
   {
    title: 'maintenancestarttime',
    align:"center",
    dataIndex: 'maintenancestarttime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: 'maintenanceendtime',
    align:"center",
    dataIndex: 'maintenanceendtime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: 'hardwarestatus',
    align:"center",
    dataIndex: 'hardwarestatus'
   },
   {
    title: 'note',
    align:"center",
    dataIndex: 'note'
   },
   {
    title: 'poolalias',
    align:"center",
    dataIndex: 'poolalias'
   },
   {
    title: 'computerroom',
    align:"center",
    dataIndex: 'computerroom'
   },
   {
    title: 'uinformation',
    align:"center",
    dataIndex: 'uinformation'
   },
   {
    title: 'knifebox',
    align:"center",
    dataIndex: 'knifebox'
   },
   {
    title: 'knifeslice',
    align:"center",
    dataIndex: 'knifeslice'
   },
   {
    title: 'hostname',
    align:"center",
    dataIndex: 'hostname'
   },
   {
    title: 'hostnameipv4',
    align:"center",
    dataIndex: 'hostnameipv4'
   },
   {
    title: 'hostnameipv6',
    align:"center",
    dataIndex: 'hostnameipv6'
   },
   {
    title: 'mac',
    align:"center",
    dataIndex: 'mac'
   },
   {
    title: 'publicip',
    align:"center",
    dataIndex: 'publicip'
   },
   {
    title: 'storageip',
    align:"center",
    dataIndex: 'storageip'
   },
   {
    title: 'pxeip',
    align:"center",
    dataIndex: 'pxeip'
   },
   {
    title: 'ipmiip',
    align:"center",
    dataIndex: 'ipmiip'
   },
   {
    title: 'ipmiuser',
    align:"center",
    dataIndex: 'ipmiuser'
   },
   {
    title: 'ipmipwd',
    align:"center",
    dataIndex: 'ipmipwd'
   },
   {
    title: 'rootpwd',
    align:"center",
    dataIndex: 'rootpwd'
   },
   {
    title: 'teamsunpwd',
    align:"center",
    dataIndex: 'teamsunpwd'
   },
   {
    title: 'managerpwd',
    align:"center",
    dataIndex: 'managerpwd'
   },
   {
    title: 'langchaopwd',
    align:"center",
    dataIndex: 'langchaopwd'
   },
   {
    title: 'jtcjxzpwd',
    align:"center",
    dataIndex: 'jtcjxzpwd'
   },
   {
    title: 'tyngpwd',
    align:"center",
    dataIndex: 'tyngpwd'
   },
   {
    title: 'huzeqiupwd',
    align:"center",
    dataIndex: 'huzeqiupwd'
   },
   {
    title: 'fanbinglongpwd',
    align:"center",
    dataIndex: 'fanbinglongpwd'
   },
   {
    title: 'danzengcirenpwd',
    align:"center",
    dataIndex: 'danzengcirenpwd'
   },
   {
    title: 'wangyingpwd',
    align:"center",
    dataIndex: 'wangyingpwd'
   },
   {
    title: 'wangenlongpwd',
    align:"center",
    dataIndex: 'wangenlongpwd'
   },
   {
    title: 'luofengcpwd',
    align:"center",
    dataIndex: 'luofengcpwd'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: 'liuwenpwd',
    field: 'liuwenpwd',
    component: 'Input',
  },
  {
    label: 'zhangjing3pwd',
    field: 'zhangjing3pwd',
    component: 'Input',
  },
  {
    label: 'sN',
    field: 'sn',
    component: 'Input',
  },
  {
    label: 'assettag',
    field: 'assettag',
    component: 'Input',
  },
  {
    label: 'manufacturer',
    field: 'manufacturer',
    component: 'Input',
  },
  {
    label: 'model',
    field: 'model',
    component: 'Input',
  },
  {
    label: 'hostfunction',
    field: 'hostfunction',
    component: 'Input',
  },
  {
    label: 'hardwareconfig',
    field: 'hardwareconfig',
    component: 'Input',
  },
  {
    label: 'softwareconfig',
    field: 'softwareconfig',
    component: 'Input',
  },
  {
    label: 'ostype',
    field: 'ostype',
    component: 'Input',
  },
  {
    label: 'access4a',
    field: 'access4a',
    component: 'Input',
  },
  {
    label: 'status',
    field: 'status',
    component: 'Input',
  },
  {
    label: 'onlinetime',
    field: 'onlinetime',
    component: 'DatePicker',
  },
  {
    label: 'maintenancemanufacturer',
    field: 'maintenancemanufacturer',
    component: 'Input',
  },
  {
    label: 'maintenancestarttime',
    field: 'maintenancestarttime',
    component: 'DatePicker',
  },
  {
    label: 'maintenanceendtime',
    field: 'maintenanceendtime',
    component: 'DatePicker',
  },
  {
    label: 'hardwarestatus',
    field: 'hardwarestatus',
    component: 'Input',
  },
  {
    label: 'note',
    field: 'note',
    component: 'Input',
  },
  {
    label: 'poolalias',
    field: 'poolalias',
    component: 'Input',
  },
  {
    label: 'computerroom',
    field: 'computerroom',
    component: 'Input',
  },
  {
    label: 'uinformation',
    field: 'uinformation',
    component: 'Input',
  },
  {
    label: 'knifebox',
    field: 'knifebox',
    component: 'Input',
  },
  {
    label: 'knifeslice',
    field: 'knifeslice',
    component: 'Input',
  },
  {
    label: 'hostname',
    field: 'hostname',
    component: 'Input',
  },
  {
    label: 'hostnameipv4',
    field: 'hostnameipv4',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入hostnameipv4!'},
          ];
     },
  },
  {
    label: 'hostnameipv6',
    field: 'hostnameipv6',
    component: 'Input',
  },
  {
    label: 'mac',
    field: 'mac',
    component: 'Input',
  },
  {
    label: 'publicip',
    field: 'publicip',
    component: 'Input',
  },
  {
    label: 'storageip',
    field: 'storageip',
    component: 'Input',
  },
  {
    label: 'pxeip',
    field: 'pxeip',
    component: 'Input',
  },
  {
    label: 'ipmiip',
    field: 'ipmiip',
    component: 'Input',
  },
  {
    label: 'ipmiuser',
    field: 'ipmiuser',
    component: 'Input',
  },
  {
    label: 'ipmipwd',
    field: 'ipmipwd',
    component: 'Input',
  },
  {
    label: 'rootpwd',
    field: 'rootpwd',
    component: 'Input',
  },
  {
    label: 'teamsunpwd',
    field: 'teamsunpwd',
    component: 'Input',
  },
  {
    label: 'managerpwd',
    field: 'managerpwd',
    component: 'Input',
  },
  {
    label: 'langchaopwd',
    field: 'langchaopwd',
    component: 'Input',
  },
  {
    label: 'jtcjxzpwd',
    field: 'jtcjxzpwd',
    component: 'Input',
  },
  {
    label: 'tyngpwd',
    field: 'tyngpwd',
    component: 'Input',
  },
  {
    label: 'huzeqiupwd',
    field: 'huzeqiupwd',
    component: 'Input',
  },
  {
    label: 'fanbinglongpwd',
    field: 'fanbinglongpwd',
    component: 'Input',
  },
  {
    label: 'danzengcirenpwd',
    field: 'danzengcirenpwd',
    component: 'Input',
  },
  {
    label: 'wangyingpwd',
    field: 'wangyingpwd',
    component: 'Input',
  },
  {
    label: 'wangenlongpwd',
    field: 'wangenlongpwd',
    component: 'Input',
  },
  {
    label: 'luofengcpwd',
    field: 'luofengcpwd',
    component: 'Input',
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