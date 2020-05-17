# Host: localhost  (Version: 5.7.26)
# Date: 2020-05-17 16:14:57
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

DROP TABLE IF EXISTS `goodsinfo`;
CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `typeId` char(3) NOT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`),
  KEY `typeId` (`typeId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

/*!40000 ALTER TABLE `goodsinfo` DISABLE KEYS */;
INSERT INTO `goodsinfo` VALUES ('00101','Redmi K30 Pro 变焦版','001',3799,100,'双模5G，骁龙865，弹出全面屏','images/goods/phone1.webp','images/goods/goods1.jpg','images/goods/goods2.jpg','images/goods/goods3.jpg','images/goods/goods4.jpg','images/goods/goods5.jpg','「购机享信用卡24期分期免息， 低至125元起/期；购机赠价值99.9元无线蓝牙耳机；购机赠价值470元善诊体检卡； 购机享延保碎屏保5折；加1元得50G 云空间月卡」','双模5G / 高通骁龙865 / 弹出式超光感全面屏 /索尼 6400万高清四摄 / 8K视频拍摄 / 超大面积VC立体散热 / 4700mAh+33W疾速闪充 / 多功能NFC / 红外遥控','','','','','',''),('00102','小米10','001',3999,101,'骁龙865/一亿像素相机','images/goods/phone2.webp','images/goods/goods11.jpg','images/goods/goods22.jpg','images/goods/goods33.jpg','images/goods/goods44.jpg','images/goods/goods55.jpg','「256GB赠价值199元立式风冷无线充，+1元得镜面视窗保护套」','向往的生活同款 / 骁龙865处理器 / 1亿像素8K电影相机 / 双模5G / 新一代LPDDR5内存 / 对称式立体声 / 90Hz刷新率+180Hz采样率 / UFS 3.0高速存储','','','','','',''),('00103','小米10 Pro','001',4999,88,'骁龙865 / 50倍变焦','images/goods/phone3.webp','images/goods/goods111.jpg','images/goods/goods222.jpg','images/goods/goods333.jpg','images/goods/goods444.jpg','images/goods/goods555.jpg','「赠价值199元立式风冷无线充」','向往的生活同款 / 骁龙865处理器 / 1亿像素8K电影相机，50倍数字变焦，10倍混合光学变焦 / 双模5G / 新一代LPDDR5内存','','','','','',''),('00104','Redmi K30 5G','001',1999,236,'双模5G，120Hz流速屏','images/goods/phone4.webp','images/goods/goods1111.jpg','images/goods/goods2222.jpg','images/goods/goods3333.jpg','images/goods/goods4444.jpg','images/goods/goods5555.jpg','「6GB+128GB闪降200元，到手价仅1999元；8GB+128GB/6GB+64GB购机赠价值89元耳机；赠价值470元善诊体检卡」','双模5G / 三路并发 / 高通骁龙765G / 7nm 5G低功耗处理器 / 120Hz高帧率流速屏 / 6.67\'小孔径全面屏 / 索尼6400万前后六摄','','','','','',''),('00201','Redmi 红米电视 70英寸','002',3099,302,'70英寸震撼巨屏，4K画质，细腻如真','images/goods/dianshi1.webp','images/goods/dianshi11.jpg','','','','','','','','','','','',''),('00202','小米全面屏电视E32C','002',699,312,'全面屏设计，人工智能系统','images/goods/dianshi2.webp','images/goods/dianshi22.jpg','','','','','','','','','','','',''),('00301','RedmiBook 13','003',4799,351,'四窄边全面屏 / 全新十代酷睿™处理器 / 全金属超轻机身 / MX250 高性能独显 / 小米互传 / 专业「飓风」散热系统 / 11小时长续航','images/goods/bijiben1.jpg','images/goods/bijiben11.jpg','','','','','','','','','','','',''),('00302','小米笔记本 Pro 15 增强版','003',5899,665,'全新十代酷睿处理器 / 大满贯接口 / 100%sRGB高色域 / 全尺寸背光键盘','images/goods/bijiben2.png','images/goods/bijiben22.jpg','','','','','','','','','','','',''),('00401','米家互联网洗烘一体机Pro 10kg','004',2999,222,'智能洗烘，省心省力','images/goods/jiadian1.webp','images/goods/jiadian11.jpg','','','','','','','','','','','',''),('00402','米家空调','004',1399,23,'出众静音，快速制冷热','images/goods/jiadian2.jpg','images/goods/jiadian22.jpg','','','','','','','','','','','',''),('00501','小米手表','005',1299,625,'能打电话、独立上网 / 压力、睡眠、身体能量监测 / 36h超长续航 / 十大专业运动模式 / 多功能NFC / 小爱同学','images/goods/chuandai1.png','images/goods/chuandai11.jpg','','','','','','','','','','','',''),('00502','骑记电动助力自行车 新国标版','005',2999,365,'三种骑行模式 / 40km助力骑行 / 大尺寸光感显示屏','images/goods/chuandai2.png','images/goods/chuandai22.jpg','','','','','','','','','','','',''),('00601','小米AIoT路由器 AX3600','006',599,142,'三千兆无线速率 / 高通6核处理器 / 6根高性能外置信号放大器 / 512MB大内存 / AIoT智能天线 / WPA3网络加密','images/goods/luyou1.png','images/goods/luyou11.jpg','','','','','','','','','','','',''),('00602','小米米家照片打印机','006',499,233,'6寸高清照片 / 细腻还原真实色彩 / 自动覆膜长久保存 / 多尺寸证件照打印 / 多种无线快连 / 可远程打印','images/goods/luyou22.jpg','images/goods/luyou22.jpg','','','','','','','','','','','',''),('00701','小米移动电源3 超级闪充版','007',249,565,'支持小米10 Pro 50W MAX 疾速闪充 / 10000mAh大容量 / 可上飞机 / 两口同时输出 / 智能兼容 / 仿陶瓷高光','images/goods/peijian1.jpg','images/goods/peijian1.jpg','','','','','','','','','','','',''),('00702','5号彩虹电池（10粒装）','007',9.9,665,'麦克赛尔监制电池核芯 / 电量持久，强劲有力 / 碱性10粒装5号环保电池，无汞无镉 / 防泄漏技术，双重安全保障 / 十种绚丽色彩，送收纳盒','images/goods/peijian2.jpg','images/goods/peijian2.jpg','','','','','','','','','','','',''),('00801','米家自动洗手机套装','008',79,1233,'「+20元购小卫质品泡沫洗手液（三瓶装）！」免接触更卫生 / 99.9%有效抑菌 / 植物精华，滋润舒适','images/goods/ertong1.jpg','images/goods/ertong1.jpg','','','','','','','','','','','',''),('00802','米兔折叠婴儿推车','008',699,99,'单手秒收 / 登机免托运 / 四轮独立减震 / 坐躺随心','images/goods/ertong2.png','images/goods/ertong2.png','','','','','','','','','','','',''),('00901','小米双单元半入耳式耳机','009',59,56,'半入耳式舒适佩戴 / 动圈+陶瓷喇叭双单元声学架构 / 高韧性线材+微机电麦克风线控 / 90°贴心插头','images/goods/erji1.jpg','images/goods/erji1.jpg','','','','','','','','','','','',''),('00902','小米小爱音箱 Play','009',99,65,'「下单即送小米巨能写 黑色 10支装！」智能设备控制 / 人工智能语音对话 / 就近唤醒 / 趣味闹钟 / 孩子的超级故事王','images/goods/erji2.jpg','images/goods/erji2.jpg','','','','','','','','','','','',''),('01001','小米小背包','010',49,343,'「小背包全系列满3件8.5折，4件8折，5件7.5折」城市休闲 / 简约设计 / 多容量选择 / 防泼水','images/goods/live1.jpg','images/goods/live1.jpg','','','','','','','','','','','',''),('01002','米家飞行员太阳镜','010',89,568,'UV400 有效阻隔紫外线 / 有效过滤眩光 / 自修复能力 / 弹弓自适应结构','images/goods/live2.jpg','images/goods/live2.jpg','','','','','','','','','','','','');
/*!40000 ALTER TABLE `goodsinfo` ENABLE KEYS */;

#
# Structure for table "goodstype"
#

DROP TABLE IF EXISTS `goodstype`;
CREATE TABLE `goodstype` (
  `typeid` char(3) NOT NULL,
  `goodstype` varchar(20) NOT NULL,
  PRIMARY KEY (`typeid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodstype"
#

/*!40000 ALTER TABLE `goodstype` DISABLE KEYS */;
INSERT INTO `goodstype` VALUES ('001','手机'),('002','电视'),('003','笔记本'),('004','家电'),('005','穿戴'),('006','路由'),('007','配件'),('008','儿童'),('009','耳机'),('010','生活');
/*!40000 ALTER TABLE `goodstype` ENABLE KEYS */;

#
# Structure for table "shoppingcart"
#

DROP TABLE IF EXISTS `shoppingcart`;
CREATE TABLE `shoppingcart` (
  `vipName` varchar(10) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#

/*!40000 ALTER TABLE `shoppingcart` DISABLE KEYS */;
INSERT INTO `shoppingcart` VALUES ('krystal','00902',5),('krystal','00802',1),('krystal','00502',4),('liguofu','00702',3),('krystal','01001',6),('krystal','00901',14),('李国富','00102',4),('李国富','00401',2),('krystal','00102',1);
/*!40000 ALTER TABLE `shoppingcart` ENABLE KEYS */;

#
# Structure for table "vip"
#

DROP TABLE IF EXISTS `vip`;
CREATE TABLE `vip` (
  `username` varchar(20) NOT NULL,
  `userpass` varchar(16) NOT NULL,
  `sex` char(2) DEFAULT '女',
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "vip"
#

/*!40000 ALTER TABLE `vip` DISABLE KEYS */;
INSERT INTO `vip` VALUES ('krystal','a123456','女',NULL),('liguofu','a123456','女',NULL),('liguofu222','a123456','女',NULL),('李国富','a123456','男神',NULL);
/*!40000 ALTER TABLE `vip` ENABLE KEYS */;
