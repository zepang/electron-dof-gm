select * from d_taiwan.accounts  取帐号列表
取帐号ID信息
select account,cera from taiwan_billing.cash_cera where account='18000006' order by account ASC
select * from d_taiwan.accounts where UID='18000006'

select * from taiwan_cain.charac_info where m_id='18000006'
select charac_no,money from taiwan_cain_2nd.inventory where charac_no='5' order by charac_no ASC

select * from d_taiwan.accounts where accountname='456456'

封账号
select * from d_taiwan.accounts where UID='18000601'
select * from taiwan_cain.charac_info where m_id='18000601'
delete from d_taiwan.member_info where m_id='18000601'
insert into d_taiwan.test set a='18000601',b='2015-09-27 18:12:20'
查已封账号select * from d_taiwan.test


注册
select * from d_taiwan.accounts where accountname='666777'
insert into d_taiwan.accounts set accountname='666777',password='60b48fc41714190a8d1b7d5dbf04d0dd',qq='1071442669'
select * from d_taiwan.accounts where accountname='666777'
insert into d_taiwan.member_white_account set m_id='18000603'
insert into d_taiwan.member_info set m_id='18000603',user_id='18000603'
insert into taiwan_login.member_login set m_id='18000603'
insert into taiwan_billing.cash_cera set account='18000603',cera='10000000',mod_tran='0',mod_date='2015-09-27 18:17:33',reg_date='2015-09-27 18:17:33'
insert into taiwan_billing.cash_cera_point set account='18000603',cera_point='0',reg_date='2015-09-27 18:17:33',mod_date='2015-09-27 18:17:33'

修改密码
select * from d_taiwan.accounts where accountname='789789'
update d_taiwan.accounts set password='21b95a0f90138767b0fd324e6be3457b' where accountname='789789'


删除帐号
select * from d_taiwan.accounts where UID='18000600'
select * from taiwan_cain.charac_info where m_id='18000600'

delete from d_taiwan.accounts where UID='18000600'

冲D币
update taiwan_billing.cash_cera  set cera=888 where account=18000002
冲金币
update taiwan_cain_2nd.inventory  set money=888 where charac_no=556
冲D点
update taiwan_billing.cash_cera_point  set cera_point=888 where account=18000002
时装硬币
update taiwan_cain_2nd.member_avatar_coin  set avatar_coin=888 where m_id=18000002
SP点
update taiwan_cain_2nd.skill  set remain_sp=888 where charac_no=556
Qp点
update taiwan_cain.charac_quest_shop  set qp=888 where charac_no=556
TP点
update taiwan_cain_2nd.skill  set remain_sfp_2nd=888,remain_sfp_1st=888 where charac_no=556

修改PK等级 段位 胜利数 胜利点
update taiwan_cain.pvp_result set win=100 ,pvp_grade=30,pvp_point=99,win_point=99 where charac_no=556

修改角色等级
update taiwan_cain.charac_info  set lev=70 where charac_no=556
重置人物数限制
update d_taiwan.limit_create_character set count=0 where m_id='18000002'
清理角色时装
delete from taiwan_cain_2nd.user_items  where slot>9 and  charac_no=556
清空宠物
delete from taiwan_cain_2nd.creature_items  where slot <> 238 and  charac_no=556
 
发邮件
insert into taiwan_cain_2nd.letter(charac_no,send_charac_no,send_charac_name,letter_text,reg_date,stat)  values ('556','0','GM','Thanks!','2015年9月27日18时45分30秒','1')
select max(letter_id) as letter_id from taiwan_cain_2nd.letter
INSERT INTO taiwan_cain_2nd.postal VALUES ('',now(), '', 'GAME MASTER', '556', '530033', '1', '0', '15', '0', '8', '100', '0000-00-00 00:00:00', '0', '0', '0', '0', '0', '0', '6045', '0', '0', '0', '', '0', 0x0000000000000000000000000000, '5', '0', 0x00000000000000000000);

             红字力量3
INSERT INTO taiwan_cain_2nd.postal VALUES ('',now(), '', 'GAME MASTER', '556', '530033', '1', '0', '15', '3', '8', '100', '0000-00-00 00:00:00', '0', '0', '0', '0', '0', '0', '6046', '0', '0', '0', '', '0', 0x0000000000000000000000000000, '5', '0', 0x00000000000000000000);
             红字精神2
INSERT INTO taiwan_cain_2nd.postal VALUES ('',now(), '', 'GAME MASTER', '556', '530033', '1', '0', '15', '2', '8', '100', '0000-00-00 00:00:00', '0', '0', '0', '0', '0', '0', '6047', '0', '0', '0', '', '0', 0x0000000000000000000000000000, '5', '0', 0x00000000000000000000);
             红字体力1
INSERT INTO taiwan_cain_2nd.postal VALUES ('',now(), '', 'GAME MASTER', '556', '530033', '1', '0', '15', '3', '8', '100', '0000-00-00 00:00:00', '0', '0', '0', '0', '0', '0', '6048', '0', '0', '0', '', '0', 0x0000000000000000000000000000, '5', '0', 0x00000000000000000000);
             红字智力4
INSERT INTO taiwan_cain_2nd.postal VALUES ('',now(), '', 'GAME MASTER', '556', '530033', '1', '0', '15', '4', '8', '100', '0000-00-00 00:00:00', '0', '0', '0', '0', '0', '0', '6049', '0', '0', '0', '', '0', 0x0000000000000000000000000000, '5', '0', 0x00000000000000000000);
             红字体力1      封装1     
INSERT INTO taiwan_cain_2nd.postal VALUES ('',now(), '', 'GAME MASTER', '556', '530033', '1', '0', '15', '1', '8', '100', '0000-00-00 00:00:00', '0', '0', '0', '1', '0', '0', '6051', '0', '0', '0', '', '0', 0x0000000000000000000000000000, '5', '0', 0x00000000000000000000);

 

转职
update taiwan_cain.charac_info set job=0,grow_type=17  where charac_no=556
JOB 0=鬼剑士 grow_type 17=剑魂 18=鬼泣 19=狂战 20=修罗
JOB 1=女格斗  grow_type 17=气功师 18=散打 19=街霸 20=柔道
JOB 2=男枪手  grow_type 17=漫游枪手 18=枪炮师 19=机械师 20=弹药专家
JOB 3=女法师  grow_type 17=元素 18=召唤 19=战斗 20=魔道
JOB 4=圣职者  grow_type 17=圣骑士 18=蓝拳圣使 19=驱魔师 20=复仇者
JOB 5=女枪手  grow_type 17=漫游枪手 18=枪炮师 19=机械师 20=弹药专家
JOB 6=暗夜使者  grow_type 17=刺客 18=死林术士
JOB 7=男格斗  grow_type 17=气功师 18=散打 19=街霸 20=柔道
JOB 8=男法师  grow_type 17=元素爆破 18=冰洁师
JOB 9=暗黑骑士  grow_type 0=暗黑骑士
JOB 9=缔造者  grow_type 0=缔造者