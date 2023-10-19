export interface GrowCardItem {
  icon: string;
  title: string;
  value?: number;
  total: number;
  color?: string;
  action?: string;
  footer?: string;
}

export const growCardList: GrowCardItem[] = [
  {
    title: '宿主机数',
    icon: 'visit-count|svg',
    value: 2000,
    total: 120000,
    color: 'green',
    action: '台',
  },
  {
    title: '管理节点数',
    icon: 'total-sales|svg',
    value: 20000,
    total: 500000,
    color: 'blue',
    action: '个',
  },
  {
    title: '云主机数',
    icon: 'download-count|svg',
    value: 8000,
    total: 120000,
    color: 'orange',
    action: '台',
  },
  {
    title: '存储设备数',
    icon: 'transaction|svg',
    value: 5000,
    total: 50000,
    color: 'purple',
    action: '台',
  },
];

export const chartCardList: GrowCardItem[][] = [[
  {
    title: '云主机月同比',
    icon: 'visit-count|svg',
    total: 91,
    // value: 234.56,
    footer: '一期',
  },
  {
    title: '内存总量使用率',
    icon: 'total-sales|svg',
    // value: 1234,
    total: 88,
    // color: 'blue',
    footer: '一期',
  },
  {
    title: 'CPU总量使用率',
    icon: 'download-count|svg',
    // value: 60,
    total: 69,
    // color: 'orange',
    footer: '一期',
  },
  {
    title: '存储总量使用率',
    icon: 'transaction|svg',
    total: 78,
    footer: '一期',
  },
],[
  {
    title: '云主机月同比',
    icon: 'visit-count|svg',
    total: 92,
    // value: 234.56,
    footer: '二期',
  },
  {
    title: '内存总量使用率',
    icon: 'total-sales|svg',
    // value: 1234,
    total: 18,
    // color: 'blue',
    footer: '二期',
  },
  {
    title: 'CPU总量使用率',
    icon: 'download-count|svg',
    // value: 60,
    total: 59,
    // color: 'orange',
    footer: '二期',
  },
  {
    title: '存储总量使用率',
    icon: 'transaction|svg',
    total: 18,
    footer: '二期',
  },
],[
  {
    title: '云主机月同比',
    icon: 'visit-count|svg',
    total: 23,
    // value: 234.56,
    footer: '三期',
  },
  {
    title: '内存总量使用率',
    icon: 'total-sales|svg',
    // value: 1234,
    total: 18,
    // color: 'blue',
    footer: '三期',
  },
  {
    title: 'CPU总量使用率',
    icon: 'download-count|svg',
    // value: 60,
    total: 29,
    // color: 'orange',
    footer: '三期',
  },
  {
    title: '存储总量使用率',
    icon: 'transaction|svg',
    total: 78,
    footer: '三期',
  },
],[
  {
    title: '云主机月同比',
    icon: 'visit-count|svg',
    total: 94,
    // value: 234.56,
    footer: '四期',
  },
  {
    title: '内存总量使用率',
    icon: 'total-sales|svg',
    // value: 1234,
    total: 82,
    // color: 'blue',
    footer: '四期',
  },
  {
    title: 'CPU总量使用率',
    icon: 'download-count|svg',
    // value: 60,
    total: 79,
    // color: 'orange',
    footer: '四期',
  },
  {
    title: '存储总量使用率',
    icon: 'transaction|svg',
    total: 68,
    footer: '四期',
  },
]];
export const bdcCardList: GrowCardItem[] = [
  {
    title: '受理量',
    icon: 'ant-design:info-circle-outlined',
    total: 100,
    value: 60,
    footer: '今日受理量',
  },
  {
    title: '办结量',
    icon: 'ant-design:info-circle-outlined',
    value: 54,
    total: 87,
    color: 'blue',
    footer: '今日办结量',
  },
  {
    title: '用户受理量',
    icon: 'ant-design:info-circle-outlined',
    value: 13,
    total: 15,
    color: 'orange',
    footer: '用户今日受理量',
  },
  {
    title: '用户办结量',
    icon: 'ant-design:info-circle-outlined',
    total: 9,
    value: 7,
    footer: '用户今日办结量',
  },
];

export const table = {
  dataSource: [
    { reBizCode: '1', type: '转移登记', acceptBy: '张三', acceptDate: '2019-01-22', curNode: '任务分派', flowRate: 60 },
    { reBizCode: '2', type: '抵押登记', acceptBy: '李四', acceptDate: '2019-01-23', curNode: '领导审核', flowRate: 30 },
    { reBizCode: '3', type: '转移登记', acceptBy: '王武', acceptDate: '2019-01-25', curNode: '任务处理', flowRate: 20 },
    { reBizCode: '4', type: '转移登记', acceptBy: '赵楼', acceptDate: '2019-11-22', curNode: '部门审核', flowRate: 80 },
    { reBizCode: '5', type: '转移登记', acceptBy: '钱就', acceptDate: '2019-12-12', curNode: '任务分派', flowRate: 90 },
    { reBizCode: '6', type: '转移登记', acceptBy: '孙吧', acceptDate: '2019-03-06', curNode: '任务处理', flowRate: 10 },
    { reBizCode: '7', type: '抵押登记', acceptBy: '周大', acceptDate: '2019-04-13', curNode: '任务分派', flowRate: 100 },
    { reBizCode: '8', type: '抵押登记', acceptBy: '吴二', acceptDate: '2019-05-09', curNode: '任务上报', flowRate: 50 },
    { reBizCode: '9', type: '抵押登记', acceptBy: '郑爽', acceptDate: '2019-07-12', curNode: '任务处理', flowRate: 63 },
    { reBizCode: '20', type: '抵押登记', acceptBy: '林有', acceptDate: '2019-12-12', curNode: '任务打回', flowRate: 59 },
    { reBizCode: '11', type: '转移登记', acceptBy: '码云', acceptDate: '2019-09-10', curNode: '任务签收', flowRate: 87 },
  ],
  columns: [
    {
      title: '业务号',
      align: 'center',
      dataIndex: 'reBizCode',
    },
    {
      title: '业务类型',
      align: 'center',
      dataIndex: 'type',
    },
    {
      title: '受理人',
      align: 'center',
      dataIndex: 'acceptBy',
    },
    {
      title: '受理时间',
      align: 'center',
      dataIndex: 'acceptDate',
    },
    {
      title: '当前节点',
      align: 'center',
      dataIndex: 'curNode',
    },
    {
      title: '办理时长',
      align: 'center',
      dataIndex: 'flowRate',
      slots: { customRender: 'flowRate' },
    },
  ],
  ipagination: {
    current: 1,
    pageSize: 5,
    pageSizeOptions: ['10', '20', '30'],
    showTotal: (total, range) => {
      return range[0] + '-' + range[1] + ' 共' + total + '条';
    },
    showQuickJumper: true,
    showSizeChanger: true,
    total: 0,
  },
};
export const table1 = {
  dataSource: [
    { reBizCode: 'A001', type: '转移登记', acceptBy: '张四', acceptDate: '2019-01-22', curNode: '任务分派', flowRate: 12 },
    { reBizCode: 'A002', type: '抵押登记', acceptBy: '李吧', acceptDate: '2019-01-23', curNode: '任务签收', flowRate: 3 },
    { reBizCode: 'A003', type: '转移登记', acceptBy: '王三', acceptDate: '2019-01-25', curNode: '任务处理', flowRate: 24 },
    { reBizCode: 'A004', type: '转移登记', acceptBy: '赵二', acceptDate: '2019-11-22', curNode: '部门审核', flowRate: 10 },
    { reBizCode: 'A005', type: '转移登记', acceptBy: '钱大', acceptDate: '2019-12-12', curNode: '任务签收', flowRate: 8 },
    { reBizCode: 'A006', type: '转移登记', acceptBy: '孙就', acceptDate: '2019-03-06', curNode: '任务处理', flowRate: 10 },
    { reBizCode: 'A007', type: '抵押登记', acceptBy: '周晕', acceptDate: '2019-04-13', curNode: '部门审核', flowRate: 24 },
    { reBizCode: 'A008', type: '抵押登记', acceptBy: '吴有', acceptDate: '2019-05-09', curNode: '部门审核', flowRate: 30 },
    { reBizCode: 'A009', type: '抵押登记', acceptBy: '郑武', acceptDate: '2019-07-12', curNode: '任务分派', flowRate: 1 },
    { reBizCode: 'A0010', type: '抵押登记', acceptBy: '林爽', acceptDate: '2019-12-12', curNode: '部门审核', flowRate: 16 },
    { reBizCode: 'A0011', type: '转移登记', acceptBy: '码楼', acceptDate: '2019-09-10', curNode: '部门审核', flowRate: 7 },
  ],
  columns: [
    {
      title: '业务号',
      align: 'center',
      dataIndex: 'reBizCode',
    },
    {
      title: '受理人',
      align: 'center',
      dataIndex: 'acceptBy',
    },
    {
      title: '发起时间',
      align: 'center',
      dataIndex: 'acceptDate',
    },
    {
      title: '当前节点',
      align: 'center',
      dataIndex: 'curNode',
    },
    {
      title: '超时时间',
      align: 'center',
      dataIndex: 'flowRate',
      slots: { customRender: 'flowRate' },
    },
  ],
  ipagination: {
    current: 1,
    pageSize: 5,
    pageSizeOptions: ['10', '20', '30'],
    showTotal: (total, range) => {
      return range[0] + '-' + range[1] + ' 共' + total + '条';
    },
    showQuickJumper: true,
    showSizeChanger: true,
    total: 0,
  },
};
