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
    title: 'servicedomain',
    align:"center",
    dataIndex: 'servicedomain'
   },
   {
    title: 'department',
    align:"center",
    dataIndex: 'department'
   },
   {
    title: 'admindepartment',
    align:"center",
    dataIndex: 'admindepartment'
   },
   {
    title: 'businesssystemset',
    align:"center",
    dataIndex: 'businesssystemset'
   },
   {
    title: 'businesssystem',
    align:"center",
    dataIndex: 'businesssystem'
   },
   {
    title: 'appsystemcoding',
    align:"center",
    dataIndex: 'appsystemcoding'
   },
   {
    title: 'bearingbusiness',
    align:"center",
    dataIndex: 'bearingbusiness'
   },
   {
    title: 'physicalcluster',
    align:"center",
    dataIndex: 'physicalcluster'
   },
   {
    title: 'uuid',
    align:"center",
    dataIndex: 'uuid'
   },
   {
    title: 'ipv4',
    align:"center",
    dataIndex: 'ipv4'
   },
   {
    title: 'ipv6',
    align:"center",
    dataIndex: 'ipv6'
   },
   {
    title: 'securitysoftware',
    align:"center",
    dataIndex: 'securitysoftware'
   },
   {
    title: 'mac',
    align:"center",
    dataIndex: 'mac'
   },
   {
    title: 'rootpwd',
    align:"center",
    dataIndex: 'rootpwd'
   },
   {
    title: 'vipipv4',
    align:"center",
    dataIndex: 'vipipv4'
   },
   {
    title: 'vipipv6',
    align:"center",
    dataIndex: 'vipipv6'
   },
   {
    title: 'vmname',
    align:"center",
    dataIndex: 'vmname'
   },
   {
    title: 'tyngpwd',
    align:"center",
    dataIndex: 'tyngpwd'
   },
   {
    title: 'vcpu',
    align:"center",
    dataIndex: 'vcpu'
   },
   {
    title: 'memory',
    align:"center",
    dataIndex: 'memory'
   },
   {
    title: 'osdisk',
    align:"center",
    dataIndex: 'osdisk'
   },
   {
    title: 'datadisk',
    align:"center",
    dataIndex: 'datadisk'
   },
   {
    title: 'datadiskname',
    align:"center",
    dataIndex: 'datadiskname'
   },
   {
    title: 'osmount',
    align:"center",
    dataIndex: 'osmount'
   },
   {
    title: 'datamount',
    align:"center",
    dataIndex: 'datamount'
   },
   {
    title: 'cardnumber',
    align:"center",
    dataIndex: 'cardnumber'
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
    title: 'os',
    align:"center",
    dataIndex: 'os'
   },
   {
    title: 'osname',
    align:"center",
    dataIndex: 'osname'
   },
   {
    title: 'businessmanager',
    align:"center",
    dataIndex: 'businessmanager'
   },
   {
    title: 'businesstell',
    align:"center",
    dataIndex: 'businesstell'
   },
   {
    title: 'postbox',
    align:"center",
    dataIndex: 'postbox'
   },
   {
    title: 'maintainmanufactor',
    align:"center",
    dataIndex: 'maintainmanufactor'
   },
   {
    title: 'manufacturermanager',
    align:"center",
    dataIndex: 'manufacturermanager'
   },
   {
    title: 'manufacturertell',
    align:"center",
    dataIndex: 'manufacturertell'
   },
   {
    title: 'sal',
    align:"center",
    dataIndex: 'sal'
   },
   {
    title: 'whether4a',
    align:"center",
    dataIndex: 'whether4a'
   },
   {
    title: 'status',
    align:"center",
    dataIndex: 'status'
   },
   {
    title: 'boottime',
    align:"center",
    dataIndex: 'boottime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: 'reassemblytime',
    align:"center",
    dataIndex: 'reassemblytime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: 'shutdowntime',
    align:"center",
    dataIndex: 'shutdowntime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: 'recyclingtime',
    align:"center",
    dataIndex: 'recyclingtime',
    customRender:({text}) =>{
      return !text?"":(text.length>10?text.substr(0,10):text)
    },
   },
   {
    title: 'recyclingsources',
    align:"center",
    dataIndex: 'recyclingsources'
   },
   {
    title: 'acquisitionstate',
    align:"center",
    dataIndex: 'acquisitionstate'
   },
   {
    title: 'acquisitionmethods',
    align:"center",
    dataIndex: 'acquisitionmethods'
   },
   {
    title: 'note',
    align:"center",
    dataIndex: 'note'
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
    label: 'servicedomain',
    field: 'servicedomain',
    component: 'Input',
  },
  {
    label: 'department',
    field: 'department',
    component: 'Input',
  },
  {
    label: 'admindepartment',
    field: 'admindepartment',
    component: 'Input',
  },
  {
    label: 'businesssystemset',
    field: 'businesssystemset',
    component: 'Input',
  },
  {
    label: 'businesssystem',
    field: 'businesssystem',
    component: 'Input',
  },
  {
    label: 'appsystemcoding',
    field: 'appsystemcoding',
    component: 'Input',
  },
  {
    label: 'bearingbusiness',
    field: 'bearingbusiness',
    component: 'Input',
  },
  {
    label: 'physicalcluster',
    field: 'physicalcluster',
    component: 'Input',
  },
  {
    label: 'uuid',
    field: 'uuid',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入uuid!'},
          ];
     },
  },
  {
    label: 'ipv4',
    field: 'ipv4',
    component: 'Input',
  },
  {
    label: 'ipv6',
    field: 'ipv6',
    component: 'Input',
  },
  {
    label: 'securitysoftware',
    field: 'securitysoftware',
    component: 'Input',
  },
  {
    label: 'mac',
    field: 'mac',
    component: 'Input',
  },
  {
    label: 'rootpwd',
    field: 'rootpwd',
    component: 'Input',
  },
  {
    label: 'vipipv4',
    field: 'vipipv4',
    component: 'Input',
  },
  {
    label: 'vipipv6',
    field: 'vipipv6',
    component: 'Input',
  },
  {
    label: 'vmname',
    field: 'vmname',
    component: 'Input',
  },
  {
    label: 'tyngpwd',
    field: 'tyngpwd',
    component: 'Input',
  },
  {
    label: 'vcpu',
    field: 'vcpu',
    component: 'InputNumber',
  },
  {
    label: 'memory',
    field: 'memory',
    component: 'InputNumber',
  },
  {
    label: 'osdisk',
    field: 'osdisk',
    component: 'InputNumber',
  },
  {
    label: 'datadisk',
    field: 'datadisk',
    component: 'InputNumber',
  },
  {
    label: 'datadiskname',
    field: 'datadiskname',
    component: 'Input',
  },
  {
    label: 'osmount',
    field: 'osmount',
    component: 'Input',
  },
  {
    label: 'datamount',
    field: 'datamount',
    component: 'Input',
  },
  {
    label: 'cardnumber',
    field: 'cardnumber',
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
  },
  {
    label: 'os',
    field: 'os',
    component: 'Input',
  },
  {
    label: 'osname',
    field: 'osname',
    component: 'Input',
  },
  {
    label: 'businessmanager',
    field: 'businessmanager',
    component: 'Input',
  },
  {
    label: 'businesstell',
    field: 'businesstell',
    component: 'Input',
  },
  {
    label: 'postbox',
    field: 'postbox',
    component: 'Input',
  },
  {
    label: 'maintainmanufactor',
    field: 'maintainmanufactor',
    component: 'Input',
  },
  {
    label: 'manufacturermanager',
    field: 'manufacturermanager',
    component: 'Input',
  },
  {
    label: 'manufacturertell',
    field: 'manufacturertell',
    component: 'Input',
  },
  {
    label: 'sal',
    field: 'sal',
    component: 'Input',
  },
  {
    label: 'whether4a',
    field: 'whether4a',
    component: 'Input',
  },
  {
    label: 'status',
    field: 'status',
    component: 'Input',
  },
  {
    label: 'boottime',
    field: 'boottime',
    component: 'DatePicker',
  },
  {
    label: 'reassemblytime',
    field: 'reassemblytime',
    component: 'DatePicker',
  },
  {
    label: 'shutdowntime',
    field: 'shutdowntime',
    component: 'DatePicker',
  },
  {
    label: 'recyclingtime',
    field: 'recyclingtime',
    component: 'DatePicker',
  },
  {
    label: 'recyclingsources',
    field: 'recyclingsources',
    component: 'Input',
  },
  {
    label: 'acquisitionstate',
    field: 'acquisitionstate',
    component: 'Input',
  },
  {
    label: 'acquisitionmethods',
    field: 'acquisitionmethods',
    component: 'Input',
  },
  {
    label: 'note',
    field: 'note',
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