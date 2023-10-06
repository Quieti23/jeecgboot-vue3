-- 注意：该页面对应的前台目录为views/resourceutilizationrates文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
VALUES ('2023092907081640000', NULL, 'resourceutilizationrates', '/resourceutilizationrates/resourceutilizationratesList', 'resourceutilizationrates/ResourceutilizationratesList', NULL, NULL, 0, NULL, '1', 0.00, 0, NULL, 1, 0, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2023-09-29 19:08:00', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023092907081640001', '2023092907081640000', '添加resourceutilizationrates', NULL, NULL, 0, NULL, NULL, 2, 'resourceutilizationrates:resourceutilizationrates:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-09-29 19:08:00', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023092907081640002', '2023092907081640000', '编辑resourceutilizationrates', NULL, NULL, 0, NULL, NULL, 2, 'resourceutilizationrates:resourceutilizationrates:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-09-29 19:08:00', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023092907081640003', '2023092907081640000', '删除resourceutilizationrates', NULL, NULL, 0, NULL, NULL, 2, 'resourceutilizationrates:resourceutilizationrates:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-09-29 19:08:00', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023092907081640004', '2023092907081640000', '批量删除resourceutilizationrates', NULL, NULL, 0, NULL, NULL, 2, 'resourceutilizationrates:resourceutilizationrates:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-09-29 19:08:00', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023092907081640005', '2023092907081640000', '导出excel_resourceutilizationrates', NULL, NULL, 0, NULL, NULL, 2, 'resourceutilizationrates:resourceutilizationrates:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-09-29 19:08:00', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2023092907081640006', '2023092907081640000', '导入excel_resourceutilizationrates', NULL, NULL, 0, NULL, NULL, 2, 'resourceutilizationrates:resourceutilizationrates:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2023-09-29 19:08:00', NULL, NULL, 0, 0, '1', 0);