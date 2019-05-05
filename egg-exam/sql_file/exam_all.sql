-- MySQL dump 10.13  Distrib 5.5.36, for Linux (x86_64)
--
-- Host: localhost    Database: exam
-- ------------------------------------------------------
-- Server version	5.5.36-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `api_authority`
--

DROP TABLE IF EXISTS `api_authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `api_authority` (
  `api_authority_id` varchar(255) NOT NULL DEFAULT '',
  `api_authority_text` varchar(255) DEFAULT NULL,
  `api_authority_url` varchar(255) DEFAULT NULL,
  `api_authority_method` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`api_authority_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `api_authority`
--

LOCK TABLES `api_authority` WRITE;
/*!40000 ALTER TABLE `api_authority` DISABLE KEYS */;
INSERT INTO `api_authority` VALUES ('i69wzm-bkqldr','获取所有的考试类型','/exam/examType','GET'),('duf7ds-zwvace','获取所有的课程','/exam/subject','GET'),('yda3h-y6nekr','删除指定的试题类型','/exam/delQuestionsType','POST'),('ybay6c-kqm7w','添加试题类型','/exam/insertQuestionsType','GET'),('rzerajv-0d95uo','获取所有的试题类型','/exam/getQuestionsType','GET'),('32uyuk-lg0kel','添加试题接口','/exam/questions','POST'),('ekp5yh-5xyxoh','获取所有试题','/exam/questions/new','GET'),('kpp9kr-nywgm','展示用户数据','/user/user','GET'),('1nm0c-hj4i9i','展示api接口权限数据','/user/api_authority','GET'),('9mi37w-edgwper','展示身份数据','/user/identity','GET'),('wctk6-eb17u','展示身份和api权限关系','/user/identity_api_authority_relation','GET'),('axk8no-pi8un','添加用户','/user','POST'),('fcmvyt-0l7e1s','添加视图权限','/user/authorityView/edit','GET'),('iowcpb-0rmeze','添加身份','/user/identity/edit','GET'),('rnlldc-cbymie','添加api接口权限','/user/authorityApi/edit','GET'),('prvn7n-p6khft','给身份设定api接口权限','/user/setIdentityApi','POST'),('y707cc-kiahhg','更新用户信息(用户名，用户密码，用户身份)','/user/user','PUT'),('fvmtcb-g339h','登录接口','/user/login','POST'),('2irygl-h8we2','获取当前用户信息','/user/userInfo','GET'),('db1edd-ywjnus','获取视图权限数据','/user/view_authority','GET'),('vkngbd-gnjkq','给身份设定视图权限','/user/setIdentityView','POST'),('md2k6-5phy2a','展示身份和视图权限关系','/user/identity_view_authority_relation','GET'),('oczc1v-uf0m0d','根据用户id，返回该用户的视图权限','/user/new','GET'),('2z41v-6b16qq','按条件获取用户数据','/exam/questions/condition','GET'),('61ocu2-kko0gq','更新试题','/exam/questions/update','PUT'),('vyojc-ivkvmj','添加学生','/manger/student','POST'),('i36cqa-kymf6k','查看所有学生','/manger/student','GET'),('xymq2-61tk5o','查看所有教室','/manger/room','GET'),('q3shir-90gdgg','添加教室','/manger/room','POST'),('trvocc-8k1aqs','查看所有班级','/manger/grade','GET'),('9shqic-k0df6','添加班级','/manger/grade','POST'),('ys4ntc-zp4r5w','更新班级','/manger/grade/update','PUT'),('9rwj7v-6q4ro','更新教室','/manger/room/update','PUT');
/*!40000 ALTER TABLE `api_authority` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exam_exam`
--

DROP TABLE IF EXISTS `exam_exam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exam_exam` (
  `exam_exam_id` varchar(32) NOT NULL,
  `subject_id` varchar(32) NOT NULL,
  `title` varchar(255) NOT NULL,
  `question_ids` varchar(255) NOT NULL,
  `user_id` varchar(32) NOT NULL,
  `status` int(11) DEFAULT '-1' COMMENT '-1表示未确认，0表示未开始，1表示正在进行，2表示已完成',
  `description` varchar(100) DEFAULT NULL COMMENT '试卷描述',
  `exam_type` varchar(32) NOT NULL COMMENT '考试类型',
  `number` int(11) NOT NULL,
  `start_time` varchar(20) NOT NULL,
  `end_time` varchar(20) NOT NULL,
  PRIMARY KEY (`exam_exam_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exam_exam`
--

LOCK TABLES `exam_exam` WRITE;
/*!40000 ALTER TABLE `exam_exam` DISABLE KEYS */;
INSERT INTO `exam_exam` VALUES ('5wjvx5-km0st8','fqtktr-1lq5u','Nodejs开发第二周摸底考试','[\"4vu7t9-t9vv08-chvz3r-n8i3nq\",\"ma0uj-yctlrp-xjf87d-p2xrg\",\"4t0rar-39c33-wq098t-phh5ht\",\"npcnawn-0apvx-qbofy-ms3t4p\"]','axg8t2-oroeja',0,NULL,'jpg8y9-zbzt7o-jpvuhf-fwnjvr',4,'1552699800000','1552705200000'),('9udxat-t45zl8','fqtktr-1lq5u','项目整合开发第二周摸底考试','[\"4vu7t9-t9vv08-chvz3r-n8i3nq\",\"4t0rar-39c33-wq098t-phh5ht\",\"ma0uj-yctlrp-xjf87d-p2xrg\",\"npcnawn-0apvx-qbofy-ms3t4p\"]','axg8t2-oroeja',0,NULL,'jpg8y9-zbzt7o-jpvuhf-fwnjvr',4,'1552699800000','1552707000000'),('sd6t3d-kdrt6e','1psw2b-cy7o07','组件化开发第二周摸底考试','[\"6ivrh-g7kp8a-2gixkg-p117t\",\"05snch-6eq8dn-szfd6q-t34nld\",\"3zayso-dq7kt-86q4ye-9ydupa\"]','axg8t2-oroeja',0,NULL,'jpg8y9-zbzt7o-jpvuhf-fwnjvr',3,'1552699800000','1552705200000'),('zbaqnn-5w572k','1psw2b-cy7o07','渐进式开发第二周摸底考试','[\"c7y73-e0nft-6rplem-daxvxe\",\"9wck8-qt73nd-0v6s8-f6jyid\",\"00o5nwy-qw7jj-ko6qkb-4uwrhv\"]','axg8t2-oroeja',0,NULL,'jpg8y9-zbzt7o-jpvuhf-fwnjvr',3,'1552699800000','1552705200000');
/*!40000 ALTER TABLE `exam_exam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exam_student`
--

DROP TABLE IF EXISTS `exam_student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exam_student` (
  `exam_student_id` varchar(32) NOT NULL,
  `exam_exam_id` varchar(32) NOT NULL,
  `answer_json_path` varchar(255) NOT NULL,
  `student_id` varchar(32) NOT NULL,
  `grade_id` varchar(32) NOT NULL,
  `score` int(11) NOT NULL DEFAULT '0',
  `start_time` varchar(16) NOT NULL,
  `end_time` varchar(16) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0' COMMENT '0表示未阅，1表示已阅',
  PRIMARY KEY (`exam_student_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exam_student`
--

LOCK TABLES `exam_student` WRITE;
/*!40000 ALTER TABLE `exam_student` DISABLE KEYS */;
INSERT INTO `exam_student` VALUES ('5ztkis-ic3whh-kjjssl-iuk5u','w5tcy-g2dts','5ztkis-ic3whh-kjjssl-iuk5u.json','456789','tjpjhb-eofdk-dizf1q-5q8rcd',0,'1551863357534','1551863357534',0);
/*!40000 ALTER TABLE `exam_student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `exam_type`
--

DROP TABLE IF EXISTS `exam_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `exam_type` (
  `exam_id` varchar(255) NOT NULL DEFAULT '',
  `exam_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`exam_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `exam_type`
--

LOCK TABLES `exam_type` WRITE;
/*!40000 ALTER TABLE `exam_type` DISABLE KEYS */;
INSERT INTO `exam_type` VALUES ('8sc5d7-7p5f9e-cb2zii-ahe5i','周考1'),('jpg8y9-zbzt7o-jpvuhf-fwnjvr','周考2'),('ukmp9b-radddj-ogwdr-nw3ane','周考3'),('wbxm4-jf8q6k-lvt2ca-ze96mg','月考');
/*!40000 ALTER TABLE `exam_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grade`
--

DROP TABLE IF EXISTS `grade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `grade` (
  `grade_id` varchar(255) NOT NULL DEFAULT '',
  `grade_name` varchar(255) DEFAULT NULL,
  `room_id` varchar(255) DEFAULT NULL,
  `subject_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`grade_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grade`
--

LOCK TABLES `grade` WRITE;
/*!40000 ALTER TABLE `grade` DISABLE KEYS */;
INSERT INTO `grade` VALUES ('hg9pz-qxoiw2-8hgd8-bmtr5','1701B','68kr4-5hl1br-4p1ogc-r7qj8s','4pu32-vs796l'),('joyqt9-gyxsa8-fif6c-j12o0k','1610C','7u98ic-jee0x-hv6fb-7ht5gm','fyu3ln-azjkie'),('0sm5zr-vgeeat-eh5uej-dvzjfk','1701A','w0hsld-2q053d-ogkwb-0qcs5h','4pu32-vs796l'),('ef5vzf-mk31ka-3ltqao-3ikaf7','1610A','ddlo2b-qqts69-2pq07w-hiua58','fyu3ln-azjkie'),('r4ksz-uekje5-pu3b4-jqwzc9','1611A','9t1107-7wj1wa-9r5r44-jg42j','1psw2b-cy7o07'),('j4pro7-8fe63v-f7dhkk-uuj2or','1611B','lqdoi-3rujiu-463jtu-luhrmt','1psw2b-cy7o07'),('xoqxd-807vj9-z2r7k-2hcdo','1611C','fexmqe-3vzo4-e3m2b-tzwwr','1psw2b-cy7o07'),('mqz5t-dhqsqk-lz265l-qui8tb','1609B','ipb57j-9uyebp-6xgdp-ud3i6','94sjh6-lnlxe'),('oery4-9h55c-76sdkj-fba5ag','1609A','idf126-po0y5l-y19vjj-y2ud6o','94sjh6-lnlxe'),('tjdbk9-r8dbn8-4wsck-c7akdb','1610B','7c2oqu-czal5-7mywic-5t20xq','fyu3ln-azjkie');
/*!40000 ALTER TABLE `grade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `identity`
--

DROP TABLE IF EXISTS `identity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `identity` (
  `identity_id` varchar(255) NOT NULL DEFAULT '',
  `identity_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`identity_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `identity`
--

LOCK TABLES `identity` WRITE;
/*!40000 ALTER TABLE `identity` DISABLE KEYS */;
INSERT INTO `identity` VALUES ('63no9p-8y0k4','管理员'),('uf81yn-hv8uvv','出题者'),('zi0gu7-v7dy08','浏览者');
/*!40000 ALTER TABLE `identity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `identity_api_authority_relation`
--

DROP TABLE IF EXISTS `identity_api_authority_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `identity_api_authority_relation` (
  `identity_api_authority_relation_id` varchar(255) NOT NULL DEFAULT '',
  `identity_id` varchar(255) DEFAULT NULL,
  `api_authority_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`identity_api_authority_relation_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `identity_api_authority_relation`
--

LOCK TABLES `identity_api_authority_relation` WRITE;
/*!40000 ALTER TABLE `identity_api_authority_relation` DISABLE KEYS */;
INSERT INTO `identity_api_authority_relation` VALUES ('2sipwi-b2hul-5mw0xf','63no9p-8y0k4','i69wzm-bkqldr'),('9ltxnf-lwhywa-h3khm','63no9p-8y0k4','duf7ds-zwvace'),('0e6v5-6ssbu-ns9bp','63no9p-8y0k4','yda3h-y6nekr'),('ebgihf-zxn3z-xybmoh','63no9p-8y0k4','ybay6c-kqm7w'),('cu92a-dfmwu-w6351g','63no9p-8y0k4','rzerajv-0d95uo'),('o4ncu-zb3rlf-fof02s','63no9p-8y0k4','32uyuk-lg0kel'),('pok0k-ncgj3-hscre','63no9p-8y0k4','jxczxso-8e8enf'),('p4mdam-ml5uy6-hgs7zr','63no9p-8y0k4','kpp9kr-nywgm'),('9nd48n-8tko9e-wxcgds','63no9p-8y0k4','1nm0c-hj4i9i'),('rpg6cc-2hgckf-z88iu','63no9p-8y0k4','9mi37w-edgwper'),('xrv6mm-ae7n6m-04n7','63no9p-8y0k4','wctk6-eb17u'),('nwv5p7-iqg8na-rvuxdn','63no9p-8y0k4','axk8no-pi8un'),('otajrg-k800ke-zinmo','63no9p-8y0k4','fcmvyt-0l7e1s'),('wsckga-4myyih-7yudma','63no9p-8y0k4','iowcpb-0rmeze'),('ipplws-7jozs9u-wm70qh','63no9p-8y0k4','rnlldc-cbymie'),('2zfz4-v7kvff-iwd0rj','63no9p-8y0k4','prvn7n-p6khft'),('0ewep7-np7npj-tqwxr','63no9p-8y0k4','y707cc-kiahhg'),('pdtxuk-0gfm8m-jafbsmd','uf81yn-hv8uvv','i69wzm-bkqldr'),('tj2eqd-9owdy8-6pyx','uf81yn-hv8uvv','yda3h-y6nekr'),('vq7g5m-dukco4-ovqkuj','uf81yn-hv8uvv','32uyuk-lg0kel'),('w5nj09-l0vd5b-ljs0gb','uf81yn-hv8uvv','jxczxso-8e8enf'),('xc7z2-bxvy8m-3k66pl','63no9p-8y0k4','fvmtcb-g339h'),('1lejic-80tm0d-jpo5mq','uf81yn-hv8uvv','fvmtcb-g339h'),('cctsi7-lystop-mmnxx9','uf81yn-hv8uvv','duf7ds-zwvace'),('46uezp9-u23t8b-tmewpb','uf81yn-hv8uvv','ybay6c-kqm7w'),('4n5obj-ngchf-fo9u4o','uf81yn-hv8uvv','rzerajv-0d95uo'),('stdqf-6axl7c-f6xi6','63no9p-8y0k4','2irygl-h8we2'),('irbac-hpzioe-i7y48','uf81yn-hv8uvv','2irygl-h8we2'),('yqg7b-e3vypl-lot8mj','63no9p-8y0k4','db1edd-ywjnus'),('i124cf-4q73hv-121pa4','63no9p-8y0k4','vkngbd-gnjkq'),('xlzxp-ksz2i-z1a39k','63no9p-8y0k4','md2k6-5phy2a'),('rwj63d-jqe4v-omvypq','63no9p-8y0k4','oczc1v-uf0m0d'),('gt20bs-w8vam-6gvv78','uf81yn-hv8uvv','oczc1v-uf0m0d'),('hhog7b-7t234g-00olkf','63no9p-8y0k4','ekp5yh-5xyxoh'),('1f17v8-jjs2b-ffbqhr','uf81yn-hv8uvv','ekp5yh-5xyxoh'),('ru7ty-nitle-acap0y','zi0gu7-v7dy08','i69wzm-bkqldr'),('eun0fq-0am9qo-ppthl','zi0gu7-v7dy08','ekp5yh-5xyxoh'),('krt9n9-zvncag-57ae5','zi0gu7-v7dy08','fvmtcb-g339h'),('v47vgn-qweotd-qlh7z','zi0gu7-v7dy08','2irygl-h8we2'),('r663p-cvpreh-9ts2l7','zi0gu7-v7dy08','oczc1v-uf0m0d'),('kvxxef-6b4l9x-jhphnw','63no9p-8y0k4','2z41v-6b16qq'),('lr6bub-0su6y5-gmkejr','uf81yn-hv8uvv','2z41v-6b16qq'),('74ytp-w0m20yo-sbinre','zi0gu7-v7dy08','2z41v-6b16qq'),('j4432s-rca6hj-1s4reh','63no9p-8y0k4','61ocu2-kko0gq'),('o9m1q-pxym3c-wzzbof','uf81yn-hv8uvv','61ocu2-kko0gq'),('t6cf2p-6zsnw-dggryc','63no9p-8y0k4','vyojc-ivkvmj'),('16car5-hziw4a-arr71','63no9p-8y0k4','i36cqa-kymf6k'),('2uvbmh-o1t0ei-ljfrqp','63no9p-8y0k4','xymq2-61tk5o'),('ecp7fl-3jmgpq-5eivh3','63no9p-8y0k4','q3shir-90gdgg'),('6joqn-3vq0o-zl9ha6','63no9p-8y0k4','trvocc-8k1aqs'),('bl0n4-y8ave-apoh6g','63no9p-8y0k4','9shqic-k0df6'),('r9kcz-i37tun-5skrhf','uf81yn-hv8uvv','i36cqa-kymf6k'),('dhai27-tu6cj8-juutt6','uf81yn-hv8uvv','vyojc-ivkvmj'),('xffaj-0yrg8j-o9o3bc','uf81yn-hv8uvv','xymq2-61tk5o'),('ksooap-2kfqiv-36v2y','uf81yn-hv8uvv','q3shir-90gdgg'),('o4awzv-enj01d-5dtq2','uf81yn-hv8uvv','trvocc-8k1aqs'),('54yi29-cjdube-mc7j2e','uf81yn-hv8uvv','9shqic-k0df6'),('m8bajm-z4l732-iwkspt','uf81yn-hv8uvv','ys4ntc-zp4r5w'),('8qoz6s-btnqp-m086z','uf81yn-hv8uvv','9rwj7v-6q4ro');
/*!40000 ALTER TABLE `identity_api_authority_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `identity_view_authority_relation`
--

DROP TABLE IF EXISTS `identity_view_authority_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `identity_view_authority_relation` (
  `identity_view_authority_relation_id` varchar(255) NOT NULL DEFAULT '',
  `identity_id` varchar(255) DEFAULT NULL,
  `view_authority_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`identity_view_authority_relation_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `identity_view_authority_relation`
--

LOCK TABLES `identity_view_authority_relation` WRITE;
/*!40000 ALTER TABLE `identity_view_authority_relation` DISABLE KEYS */;
INSERT INTO `identity_view_authority_relation` VALUES ('uo48jw-9wmca3-xiu7qgc','63no9p-8y0k4','r50r9t-1p1kbm'),('3p0q4i-ap1qne-hhxy7i','63no9p-8y0k4','8olznh-943zt'),('h2m3l3-y61zk1-dpksjp','63no9p-8y0k4','4pvvb3-h5kzg'),('lnx4i-dl9998-btorgs','63no9p-8y0k4','vnpojq-tisgu'),('5erk2p-fk1e2n-moraba','63no9p-8y0k4','xpz8cf-xoyd7n'),('7jsj48-ullf9o-dautlb','63no9p-8y0k4','qcrhh-k0tvh'),('5c6fu6-zwtfa-kzuies','63no9p-8y0k4','o4xsrn-5heg27'),('1g0ui-l52ryb-932yj','uf81yn-hv8uvv','r50r9t-1p1kbm'),('v79dd8-3a01kl-jyl10p','uf81yn-hv8uvv','8olznh-943zt'),('e2xgol-l5ttus-k00i9f','uf81yn-hv8uvv','4pvvb3-h5kzg'),('0p9s9i-h74p9-z3ihhw','uf81yn-hv8uvv','xpz8cf-xoyd7n'),('u7grma-f5zamg-oxzfxs','63no9p-8y0k4','1orauc-piu6gm'),('kui3x-9x0pf8-dx2lgq','63no9p-8y0k4','43t70e-pk8ylk'),('it7q68-1ww2ad-p3mwn','zi0gu7-v7dy08','r50r9t-1p1kbm'),('uhsmb6-sy2te-6krt4q','zi0gu7-v7dy08','8olznh-943zt'),('4tgudt-mcx4tb-4lort5','zi0gu7-v7dy08','xpz8cf-xoyd7n'),('eyhdy-6ayhkc-g9gvtd','63no9p-8y0k4','0a1llo-a1vt2'),('00nqqg-n5ac3h-rx2t0q','uf81yn-hv8uvv','0a1llo-a1vt2'),('ysq6m3-xmvt2n-7noqdj','uf81yn-hv8uvv','n083ob-u54cop'),('y92xxr-hek19i-vvmikn','63no9p-8y0k4','n083ob-u54cop'),('s644lw-vmp9nu-31w53c','63no9p-8y0k4','2iilq2-n3c8qi'),('r8evb1-x6vg7f-0ntghk','63no9p-8y0k4','xpnrf-levvc'),('x2ayw-9k35w-8vidj','63no9p-8y0k4','dow3c8-tb0lid'),('7l95q-16m92w-jq2a4v','uf81yn-hv8uvv','2iilq2-n3c8qi'),('glf3t-b0a3un-8nxs4','uf81yn-hv8uvv','xpnrf-levvc'),('lfht8v-r3sk6c-29kkf','uf81yn-hv8uvv','dow3c8-tb0lid'),('0txhan-z1aj8-zis298','63no9p-8y0k4','fmdrhm-xfnmxk'),('ur6ghm-v46zea-ar24ug','63no9p-8y0k4','04d1m-605j25');
/*!40000 ALTER TABLE `identity_view_authority_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions`
--

DROP TABLE IF EXISTS `questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions` (
  `questions_id` varchar(255) NOT NULL DEFAULT '',
  `questions_type_id` varchar(255) DEFAULT NULL,
  `json_path` varchar(255) DEFAULT NULL,
  `subject_id` varchar(255) DEFAULT NULL,
  `exam_id` varchar(255) DEFAULT NULL,
  `user_id` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`questions_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions`
--

LOCK TABLES `questions` WRITE;
/*!40000 ALTER TABLE `questions` DISABLE KEYS */;
INSERT INTO `questions` VALUES ('4t0rar-39c33-wq098t-phh5ht','fwf0t-wla1q','4t0rar-39c33-wq098t-phh5ht.json','fqtktr-1lq5u','8sc5d7-7p5f9e-cb2zii-ahe5i','ypay2t-7uxsd','机器人归位'),('4vu7t9-t9vv08-chvz3r-n8i3nq','v8i73-r8oai','4vu7t9-t9vv08-chvz3r-n8i3nq.json','fqtktr-1lq5u','8sc5d7-7p5f9e-cb2zii-ahe5i','ypay2t-7uxsd','创建一副扑克牌'),('npcnawn-0apvx-qbofy-ms3t4p','fwf0t-wla1q','npcnawn-0apvx-qbofy-ms3t4p.json','fqtktr-1lq5u','8sc5d7-7p5f9e-cb2zii-ahe5i','ypay2t-7uxsd','洗牌'),('izvfy-572mw-thxrmm-7aba5s','br9d6s-wh46i','izvfy-572mw-thxrmm-7aba5s.json','4pu32-vs796l','8sc5d7-7p5f9e-cb2zii-ahe5i','axg8t2-oroeja','解构赋值和数组的map方法'),('bqq54a-jly2z9-m9fg7pj-oio193','fwf0t-wla1q','bqq54a-jly2z9-m9fg7pj-oio193.json','4pu32-vs796l','8sc5d7-7p5f9e-cb2zii-ahe5i','axg8t2-oroeja','async配合transition实现自定义动画'),('c7y73-e0nft-6rplem-daxvxe','v8i73-r8oai','c7y73-e0nft-6rplem-daxvxe.json','1psw2b-cy7o07','8sc5d7-7p5f9e-cb2zii-ahe5i','w6l6n-cbvl6s','类的抽象'),('sue8v-wa50ws-jss7qm-592yt8','fwf0t-wla1q','sue8v-wa50ws-jss7qm-592yt8.json','1psw2b-cy7o07','8sc5d7-7p5f9e-cb2zii-ahe5i','w6l6n-cbvl6s','使用类实现任务调度'),('gt8z4u-ufd66j-najaef-y8ytir','fwf0t-wla1q','gt8z4u-ufd66j-najaef-y8ytir.json','1psw2b-cy7o07','jpg8y9-zbzt7o-jpvuhf-fwnjvr','w6l6n-cbvl6s','封装图片加载Promise'),('fl7dll-xh6eo-hpri8a-edulg','fwf0t-wla1q','fl7dll-xh6eo-hpri8a-edulg.json','1psw2b-cy7o07','jpg8y9-zbzt7o-jpvuhf-fwnjvr','w6l6n-cbvl6s','使用async函数实现多张图片的依次加载（第一张加载完之后才能加载第二张）'),('5oxqyl-8dnbaa-3dt3o9-qrecrk','fwf0t-wla1q','5oxqyl-8dnbaa-3dt3o9-qrecrk.json','1psw2b-cy7o07','jpg8y9-zbzt7o-jpvuhf-fwnjvr','w6l6n-cbvl6s','使用async函数实现多张图片的依次加载（哪张加载完哪张添加到页面）'),('42cuvb-7216fb-zlkab2-wwns3d','fwf0t-wla1q','42cuvb-7216fb-zlkab2-wwns3d.json','1psw2b-cy7o07','wbxm4-jf8q6k-lvt2ca-ze96mg','w6l6n-cbvl6s','Vue导航守卫做鉴权处理'),('uecyx-3qim4-rwk9o-v43sj8','774318-730z8m','uecyx-3qim4-rwk9o-v43sj8.json','1psw2b-cy7o07','wbxm4-jf8q6k-lvt2ca-ze96mg','w6l6n-cbvl6s','Vue基础知识'),('h7f6hq-cezl0g-fyu3o-6onwjf','774318-730z8m','h7f6hq-cezl0g-fyu3o-6onwjf.json','4pu32-vs796l','8sc5d7-7p5f9e-cb2zii-ahe5i','axg8t2-oroeja','let和var的区别'),('3zayso-dq7kt-86q4ye-9ydupa','774318-730z8m','3zayso-dq7kt-86q4ye-9ydupa.json','1psw2b-cy7o07','wbxm4-jf8q6k-lvt2ca-ze96mg','w6l6n-cbvl6s','Vue基础知识'),('05snch-6eq8dn-szfd6q-t34nld','774318-730z8m','05snch-6eq8dn-szfd6q-t34nld.json','1psw2b-cy7o07','jpg8y9-zbzt7o-jpvuhf-fwnjvr','w6l6n-cbvl6s','Vue基础知识'),('ayf32j-5kv76-qvfqh-cigaoo','774318-730z8m','ayf32j-5kv76-qvfqh-cigaoo.json','4pu32-vs796l','8sc5d7-7p5f9e-cb2zii-ahe5i','axg8t2-oroeja','commonjs规范'),('00o5nwy-qw7jj-ko6qkb-4uwrhv','774318-730z8m','00o5nwy-qw7jj-ko6qkb-4uwrhv.json','1psw2b-cy7o07','jpg8y9-zbzt7o-jpvuhf-fwnjvr','w6l6n-cbvl6s','vue基础知识'),('6ivrh-g7kp8a-2gixkg-p117t','br9d6s-wh46i','6ivrh-g7kp8a-2gixkg-p117t.json','1psw2b-cy7o07','jpg8y9-zbzt7o-jpvuhf-fwnjvr','w6l6n-cbvl6s','vue自定义指令'),('zyocwi-drka9-kx8vv-blrmw9p','v8i73-r8oai','zyocwi-drka9-kx8vv-blrmw9p.json','4pu32-vs796l','8sc5d7-7p5f9e-cb2zii-ahe5i','axg8t2-oroeja','输入的reduce方法'),('9wck8-qt73nd-0v6s8-f6jyid','br9d6s-wh46i','9wck8-qt73nd-0v6s8-f6jyid.json','1psw2b-cy7o07','jpg8y9-zbzt7o-jpvuhf-fwnjvr','w6l6n-cbvl6s','vue自定义指令'),('d5osduj-krhc1-akr9l2-9tz2nz','fwf0t-wla1q','d5osduj-krhc1-akr9l2-9tz2nz.json','wl5yk-38c0g','8sc5d7-7p5f9e-cb2zii-ahe5i','kqpvys-hpzkdt','不借助临时变量，进行两个整数的交换'),('in5k9-nqedo7-cjpek-30cmi','fwf0t-wla1q','in5k9-nqedo7-cjpek-30cmi.json','wl5yk-38c0g','8sc5d7-7p5f9e-cb2zii-ahe5i','kqpvys-hpzkdt','进行两个整数的交换输入 a = 2, b = 4 输出 a = 4, b =2'),('40lhum-rtymrz-r8x2h-6c9od','fwf0t-wla1q','40lhum-rtymrz-r8x2h-6c9od.json','wl5yk-38c0g','8sc5d7-7p5f9e-cb2zii-ahe5i','kqpvys-hpzkdt','微信分享后地址发生改变，根据地址获取get传递参数'),('xt05yo-prna5g-f7zqo-ltl5rh','774318-730z8m','xt05yo-prna5g-f7zqo-ltl5rh.json','fyu3ln-azjkie','8sc5d7-7p5f9e-cb2zii-ahe5i','ypay2t-7uxsd','react生命周期'),('0r33sp-v8csso-y34tc3-ddsoj','fwf0t-wla1q','0r33sp-v8csso-y34tc3-ddsoj.json','wl5yk-38c0g','jpg8y9-zbzt7o-jpvuhf-fwnjvr','kqpvys-hpzkdt','找出考试结果数组中排名前三的学生'),('joo9h2-q79phw-pskuido-ua4t7k','774318-730z8m','joo9h2-q79phw-pskuido-ua4t7k.json','1psw2b-cy7o07','ukmp9b-radddj-ogwdr-nw3ane','kqpvys-hpzkdt','computed 和 watch 区别'),('aihpv-1ru212-wun87-0hli3','v8i73-r8oai','aihpv-1ru212-wun87-0hli3.json','k1gvd4-8lrx8f','wbxm4-jf8q6k-lvt2ca-ze96mg','axg8t2-oroeja','实现发布订阅模式'),('ma0uj-yctlrp-xjf87d-p2xrg','774318-730z8m','ma0uj-yctlrp-xjf87d-p2xrg.json','fqtktr-1lq5u','8sc5d7-7p5f9e-cb2zii-ahe5i','ypay2t-7uxsd','数据结构之对象'),('x0gf6-ogyaaf-t88yrd-mnhxlr','fwf0t-wla1q','x0gf6-ogyaaf-t88yrd-mnhxlr.json','wl5yk-38c0g','ukmp9b-radddj-ogwdr-nw3ane','ypay2t-7uxsd','汉英翻译'),('y6cbma-9qjye-rdx5kw-oundyo','v8i73-r8oai','y6cbma-9qjye-rdx5kw-oundyo.json','wl5yk-38c0g','ukmp9b-radddj-ogwdr-nw3ane','ypay2t-7uxsd','实现单选切换');
/*!40000 ALTER TABLE `questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questions_types`
--

DROP TABLE IF EXISTS `questions_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `questions_types` (
  `questions_type_id` varchar(255) NOT NULL DEFAULT '',
  `questions_type_text` varchar(255) DEFAULT NULL,
  `questions_type_sort` int(11) DEFAULT NULL,
  PRIMARY KEY (`questions_type_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questions_types`
--

LOCK TABLES `questions_types` WRITE;
/*!40000 ALTER TABLE `questions_types` DISABLE KEYS */;
INSERT INTO `questions_types` VALUES ('774318-730z8m','简答题',1),('br9d6s-wh46i','代码阅读题',2),('fwf0t-wla1q','代码补全',3),('n66k4n-i9zpen','修改bug',4),('v8i73-r8oai','手写代码',5);
/*!40000 ALTER TABLE `questions_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room`
--

DROP TABLE IF EXISTS `room`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `room` (
  `room_id` varchar(255) NOT NULL DEFAULT '',
  `room_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`room_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room`
--

LOCK TABLES `room` WRITE;
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` VALUES ('68kr4-5hl1br-4p1ogc-r7qj8s','34303'),('idf126-po0y5l-y19vjj-y2ud6o','34301'),('ipb57j-9uyebp-6xgdp-ud3i6','34401'),('7u98ic-jee0x-hv6fb-7ht5gm','34308'),('w0hsld-2q053d-ogkwb-0qcs5h','34304'),('ddlo2b-qqts69-2pq07w-hiua58','34313'),('9t1107-7wj1wa-9r5r44-jg42j','34310'),('lqdoi-3rujiu-463jtu-luhrmt','34403'),('fexmqe-3vzo4-e3m2b-tzwwr','34311'),('7c2oqu-czal5-7mywic-5t20xq','34404');
/*!40000 ALTER TABLE `room` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `student_id` varchar(255) NOT NULL DEFAULT '',
  `student_name` varchar(255) DEFAULT NULL,
  `student_pwd` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `grade_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`student_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('17221100271','董生','@Dongsheng0504',NULL),('17382100369','张婷','8464Zt*',NULL),('162711000869','张娜','Zn990703@',NULL),('151611000702','高诗蕊','Gaoshir1028*',NULL),('163231000784','田佳茹','W!tjr1',NULL),('17382100471','司瑞雪','woaiZIJI2!',NULL),('17356100084','王璐','Wangklpl2010@',NULL),('18382100119','翟勋','1609Azhaixun!',NULL),('163231000691','牛慧涛','Nht0725!',NULL),('162711000970','范丹丹','Fdd1006!',NULL),('163231000592','郭敏敏','Gmm0620*',NULL),('162711001044','苏祥辉','Su150$',NULL),('163231000706','袁世清','Ysq1997!',NULL),('163231000377','崔静宏','CJH*zilan7',NULL),('162711000957','吴洪洋','www*1999*WHY',NULL),('162711000940','侯梦杰','@Jane1128',NULL),('18382100162','马兰','!Ml00162',NULL),('163231000122','罗夏扬','Lxy20@',NULL),('162711000141','朱高锰','888888****Zgm',NULL),('152031000541','张诗','1609Azs!','oery4-9h55c-76sdkj-fba5ag'),('163231000791','李映儒','Lyr1310070068!',NULL),('152221000137','雷梦柯','baweiExam@163.com',NULL),('162711000971','刘焕杰','Liu.0606@',NULL),('162711000435','韩英华','Hanyinghua123?',NULL),('163231000357','李晓娜','LXna@99',NULL),('162711000731','贾国振','741/852*963.Asdfghjkl;\'',NULL),('162711000557','周骥宇','Zhou123.@',NULL),('151591000413','窦永铎','@DYDlove19990520',NULL),('18382100191','张珈豪','Jiahe102038@',NULL),('18382100208','郜英杰','Gyj863591815*',NULL),('151991000354','郑伟浩','Zheng5831200*',NULL),('162711000463','张金城','Zjc12300*',NULL),('17382100197','葛思辰','@Gsc19990821',NULL),('17382100460','高天','@Gt836149233',NULL),('162711000949','申旺旺','s1023181X*',NULL),('163231000281','杨一帆','Yyf1998@',NULL),('18382100251','雷佳','Lj521521@',NULL),('152121000450','张搏康','Zbk580230@',NULL),('163231000741','闫国程','@1610Aygc',NULL),('18382100241','管悦','GyGx1006*',NULL),('18382100271','赵倩','Zq@120319',NULL),('17382100322','墨潘','050888Mm@',NULL),('162711000465','张金城','Zjc12300*',NULL),('162221000234','董梦全','@Dmq123',NULL),('162231000822',' 梁俊成','*Ljv1341670218',NULL),('162711000468','张金城','Zjc12300*',NULL),('17382100218','樊艳蓉','Fyr*521',NULL),('18382100085','边晓雅','Bxy*0522',NULL),('163231001257','杨梦伟','@Ymw0324',NULL),('18382100168','杜孟芳','Dmf1993*',NULL),('163231000105','葛荷清','Ghq123@@',NULL),('18381100254','张克','Zk1992/*-+',NULL),('18382100268','张硕','96144DNz1*',NULL),('163231001026','张少泽','Zsz0312@',NULL),('1632310000208','杨超男','Ycn#521',NULL),('18378100160','闫江涛','Ks19940210*',NULL),('18382100173','盖学强','Gxq246368!',NULL),('18382100069','姚震宇','Yao930425?',NULL),('163231000432','翟怡梦','Zym205650@',NULL),('17376100480','郑豪','Ah@123',NULL),('17382100202','李志勇','@1610Alzy',NULL),('18382100057','王坤','@Wk521521',NULL),('162711000732','陈倩','@Cq0506',NULL),('17382100434','谷会林','Gu123456789#',NULL),('162711000633','赵文姣','Zwj914926*',NULL),('162711000729','魏澳回','@WEIaohui0726',NULL),('17382100155','马志强','2135319WWa ',NULL),('18382100186','周杰','Zj123456!',NULL),('163231000376','杨仁兵','Yrb0321!',NULL),('162711001030','张馨心','Zxx@1016304',NULL),('17382100235','祁云凯','*Q1i0k8ai',NULL),('141381000791','赵浩冬','1008611Aa*',NULL),('18381100203','高芳','Gfyyzs1378436$',NULL),('151661000441','丁宇','@Dy12345',NULL),('162711000777','刘丽霞','Liu980519!',NULL),('152001000388','卢毓儒','Bt9524@5',NULL),('151661000756','陈静','Chenjing123*',NULL),('18382100053','钱家豪','Xy1314!',NULL),('18382100212','赵崎','ZQm759199521&',NULL),('18356100001','孟佳琦','Mjq123*',NULL),('17382100387','徐园园','Xy6@66',NULL),('163231000767','焦娅柠','@1610Ajyn',NULL),('17382100423','梁艳','Ly@54957628',NULL),('17382100475','孟旭盈','@Mxy112698',NULL),('162221000222','张鑫祎','Zxy043015*',NULL),('15221000200','wanghao','Wanghao0615@',NULL),('18382100130','贺瀚彬','Bin119119#*',NULL),('18382100181','王鑫磊','@Wxl134120',NULL),('163231000672','马好好','Mh0129#.',NULL),('163231001206','李喜慧','Li@0819',NULL),('152121000134','贾志腾','@Jzt98',NULL),('18382100105','胡应','@1610Ahy',NULL),('18382100215','陈可欣','Ckx1108@',NULL),('163231000334','武媚','Wm1003*',NULL),('163231000678','王晓园','Wbb97@0512',NULL),('18382100062','邢琴','YyAiMm931128@',NULL),('17382100420','唐宇','Ty0844!',NULL),('163231000413','樊振','fZ0526!',NULL),('162711000941','杭一达','Hang123..**',NULL),('163231000925','石瑶宇','Syy1611@',NULL),('162711000673','吕师恩','L&&sn1',NULL),('18382100025','侯瑞峰','HRFdashuaibi1@',NULL),('163231001005','楚凤沛','@aaAA11',NULL),('162711000943','张健榜','Bang1228*',NULL),('18382100210','郭小刚','142580.@Gxg',NULL),('17356100064','李晓凯','Lxk*549426524',NULL),('18382100270','靳苗','Jm983125071!',NULL),('162711020711','张聪','Zc@123',NULL),('18382100127','张紫薇','ZZWzzw123456!!',NULL),('18382100279','冉苗苗','Rm1996*',NULL),('163231000175','靳壮壮','!Jzz131',NULL),('18382100139','张红红','630120825@QQ.com',NULL),('162711000921','赵少康','@1610Azsk',NULL),('163231001139','闫敏','9BYM*y',NULL),('162221000050','单春雨','WZ3428787fm&',NULL),('18378100161','康杰','MuMusmile0925!',NULL),('18382100118','刘辰星','XIAObaitu0319**',NULL),('18382100294','杜松光','@Dsg521314',NULL),('152121000564','杨锋','Yf123*&',NULL),('163231000203','王子音','Wzy@123',NULL),('162711000622','史纪萱','SJx1990429*',NULL),('163231000852','闫慧芬','Yhf163231000852*',NULL),('18382100287','金鹰志','Jyz620512%',NULL),('18382100073','侯晓圆','Yy$13784388824',NULL),('141361000845','齐炳昌','QBCqbc123@',NULL),('163231001146','孙璐','Sl1998@',NULL),('163231000117','牛莉','Nl0521&&',NULL),('17382100372','杨子源','@YZYyzy123',NULL),('18382100204','张哲','Zz1609@',NULL),('17382100077','李俊豪','Ljh123@',NULL),('18382100140','焦江倩','JJQjjq316@',NULL),('162231001406','李晓飞','5120.LI?dui',NULL),('152221000120','马子涵','Mzh1998@',NULL),('151661000528','蒋淑娟','Jsj@1997',NULL),('18382100222','安彩云','Ancaiyun950419*',NULL),('162711000550','张玉英','Zyy@521',NULL),('18382100048','李国栋','Lgd@891879',NULL),('163231000259','曹欢','19980213Ch**',NULL),('162711000561','尤锦涛','*1611Atao',NULL),('162711000892','赵晓铮','Zxz666*',NULL),('162151000064','王璐玮','Aa1234**',NULL),('163231000648','梁元','Ly19991214..&',NULL),('163231000655','李佳','liJia*760913',NULL),('162711000431','孟雅莉','mengyali124MYL@',NULL),('163231000939','张冰倩','Zbq98076*',NULL),('163231001219','温延会','@0219Wyh',NULL),('141391000615','高伟轩','Gwx*5921',NULL),('18382100095','薛帅康','Nuo1999.@',NULL),('151661000696','牟灿','12150645Mc*',NULL),('18382100166','郭青青','@GUOqq7',NULL),('152221000136','张嘉琪','Zjq03251781!',NULL),('162711000185','樊军','FJ0774fj@',NULL),('152001000515','郑强','1500651289@QQ.com',NULL),('163231000246','布淑倩','Aa1*bushuqian',NULL),('18382100137','金旭','Jin@0529',NULL),('163231000523','冯小予','Fxyu*4',NULL),('18382100157','李潘红','Lph8222!',NULL),('163231000920','王艳霞','Lxk595*',NULL),('163221000037','康金坍','ScAuC1130@kkk',NULL),('1623231000767','焦娅柠','@1610Ajyn',NULL),('162711000281','古泽腾','Tity21@qq.com',NULL),('163231000918','江琳琳','Jk*.1583510652',NULL),('163231000698','尹耀旋','yyx1610A!',NULL),('163231000374','王玮瑶','Wwy0106*',NULL),('162711000099','姚子烜','Yzx*123',NULL),('151521000391','宋梦磊','S*l12345',NULL),('163231001212','谭庆达','TQDtqd6*',NULL),('163231000427','姬晓胜','663866*Jxs',NULL),('163231001207','闫伟莲','Ywl0923@',NULL),('17376100586','韩笑','Hx1611@',NULL),('18382100094','要慧勤','Hui810*',NULL),('151661000708','刘琦','lIU.*9951',NULL),('17382100241','周永强','As711029*',NULL),('162711000747','耿增','gengzeng1611A@',NULL),('163231000286','牛军霞','Niujunxia321@',NULL),('163231000756','胡新玉','@Hxy163',NULL),('17382100219','赵越','2289956458@Qq.com',NULL),('163231000699','聂鹏','NploveGmm99*',NULL),('163301000899','吴鹏鹏','wUPENGJUN521!',NULL),('163231000262','苏旭','Su123*',NULL),('18382100054','张惠娟','ZHJzhj704@',NULL),('163231000098','刘庆芸','Lqq@521',NULL),('163231000915','郭铭瑛','Gmy199826@',NULL),('16321020614','单寒','Sh19991006*',NULL),('17382100441','王美悦','Wmy12*',NULL),('18382100091','王雯茂','Wwm9213!',NULL),('163231001061','程静','@cJ19980821',NULL),('18382100023','张旭飞','Zxf@18335405041',NULL),('162711000850','种筱','Cx0709*',NULL),('163231001086','郎玲玲','Ling217*',NULL),('18382100189','李仁鹏','@1610Alrp',NULL),('17382100065','张志祥','Zzx&&9824',NULL),('162711000965','王琴','Wq970223*',NULL),('163231000355','王芳','Wf123*',NULL),('162711001040','常津瑜','Zxy0221*',NULL),('162711000630','刘轲','LiuKe0327..*',NULL),('152121000418','王琳','Wl123@123',NULL),('18382100243','刘士军','Aa!11049356603',NULL),('18382100175','李鑫秋','Lxq0401@',NULL),('17382100068','孟莹','?Ying8023.',NULL),('162711000252','苗佳钰','KasuganoSora@1984148683.com',NULL),('163231000125','张鑫','z1225736X*m',NULL),('162711000353','王乐康','Wlk2417*',NULL),('162711000762','崔鸥','Co*2372081698',NULL),('162711000935','石旭','Sx123*',NULL),('16323100025','程志','Cz*8229',NULL),('17382100325','杨立波','yANG0212@',NULL),('17382100196','宋嘉玮','Sjw0128*',NULL),('162711000792','杨婷婷','Yttt8*',NULL),('17382100341','党会娟','Dang&3443',NULL),('163231000454','张晴','Zq5792589!',NULL),('163231001204','王冰','WangBing0615@',NULL),('163231000884','赵鑫雨','Cjy0821*',NULL),('17382100443','王泽健','Wz1@123456',NULL),('163231000603','刘新雨','LXYlxy99!!',NULL),('163231000536','李晓晨','Se0412*',NULL),('17382100244','梁鹏飞','@LPFlpf1',NULL),('163231001230','孙慧','101218@Sh',NULL),('162711000827','王少辉','wSH09173051$',NULL),('162711000629','师风鑫','SHIFENGXIN981019!s',NULL),('162711000104','黄富娇','Hfj205368*',NULL),('163231000495','丁思羽','Sy*963.',NULL),('163231000415','李伟','@LW0917041x',NULL),('152001000514','景建海','JINGjian1314@',NULL),('17382100403','王君恩','@Wje1200',NULL),('1627111000792','杨婷婷','Yttt8*',NULL),('151661000762','王孟','Wm159910?',NULL),('163231000677','嗯呢','Zzm@976632',NULL),('163231000789','刘慧芳','Lhh016*',NULL),('163231001166','郭怡凯','223Guo*',NULL),('17382100329','孙靓','Sl2002!',NULL),('18382100111','秦柯','qXk@123520+',NULL),('110','警察叔叔','2539892785@qq.comA',NULL),('163231001173','罗鹏莲','@Pl1211',NULL),('17382100396','范国红','Fanguohong123!',NULL),('151591000414','冀占豪','Jz0107@',NULL),('1103','密码太恶心了','2539892785@qq.comA',NULL),('163231000863','闫佩云','SHinglike486!',NULL),('17382100344','张凯丽','Zkl@19970816',NULL),('18382100131','倪克灿','NIke@0928',NULL),('18382100327','徐龙威','Xlw520*..',NULL),('163301001796','屈明汉','Qq!1654371764',NULL),('16521000042','孙炳鑫','Tian1130!',NULL),('18382100326','杨瑶瑶','Yy*123963',NULL),('18382100195','郑雷','Zl1995*',NULL),('17382100090','苏玉叶','Zs811812!',NULL),('152221000268','赵迪','Zd1000%',NULL),('163301000944','杨晋','Yj327!',NULL),('17382100258','王伶娟','@Wlj955',NULL),('152221000361','肖臣','07133921Xy*',NULL),('18382100304','荆涛','King2038692$',NULL),('18382100129','陈天亮','JHwoaini131420#',NULL),('163231000714','张文龙','Zwl1218!',NULL),('17382100398','刘祥祥','@21Lxx',NULL),('16521000044','啊就','Rasd@1',NULL),('18382100106','张敏','Zm@520ljx',NULL),('17382100200','侯发星','Hfx951024*',NULL),('18382100029','候姣姣','Hjj58&',NULL),('18382100112','薛汾','Xue980311@',NULL),('18382100176','张浩宇','Zhy130185@',NULL),('18382100012','王书玲','Wmm20000129@',NULL),('162221000393','weixue','WeiXue123123@@',NULL),('16323100792','李子璇','Lzx88@',NULL),('162711000632','许瑞','XUrui123!',NULL),('17382100377','魏薇','Ww17382100377@',NULL),('163221000025','李越洋','Ly971130*',NULL),('162711000710','张贤','Zhangxian1012*',NULL),('18382100316','党立强','Dd1023$',NULL),('18382100249','吉胜楠','Aa123?',NULL),('18382100040','马艺婷','Myt@Wjq@520',NULL),('18382100217','郝凌凯','@Hlk2189860',NULL),('18382100103','靳攀','Jinpan1996@',NULL),('18382100167','赵浩宇','Zhy061900@',NULL),('162221000332','康根','@Kanggen1996',NULL),('163231000848','孙一昊','Sun123,@',NULL),('151521000326','付亚飞','FUyafei!0123',NULL),('163241000011','段钟海','Dzh763784@',NULL),('162231002340','马亚辰','Ycp12!',NULL),('163231000479','赵莹杰','@Zyj1026',NULL),('163231000389','吕媛','lY965836@',NULL),('162231001389','高迪迪','Zxdyr6423649*',NULL),('18382100082','周真真','1999@Zz',NULL),('17356100045','孙小凝','As123@',NULL),('18382100263','杨昕宇','Yxy13280358073!!',NULL),('18382100223','吴光宇','Wgy.4284100$',NULL),('163231000094','王诗璇','WSXwsx123456@',NULL),('163231000159','杨彩平','Ycp12!',NULL),('163231000819','闻悦','Wenyue0813@',NULL),('18382100163','韩晓爽','Hxs@1993',NULL),('18382100193','邓涢桐','Dengyuntong123!',NULL),('152221000145','王欣月 ','Ww2*Ww',NULL),('18382100141','王红婷','AAAa1!',NULL),('163231000373','张伟杰','Zwj0525@dyd',NULL),('162221000462','陈沭江','0218Csj@',NULL),('17382100469','王用封','Wyf971124#',NULL),('163231000908','武辰淇','wcqWCQ111@',NULL),('18382100076','景星萌','Jx1!123456789',NULL),('163231000825','郭骁锐','Gxr163231000825!',NULL),('16323100443','孙鹏辉','@Sun1012',NULL),('152221000160','高雪佳','GXJgxj123@',NULL),('163231000887','张翠丽','57351EXO61zcl@',NULL),('17382100384','王诗雨','woxihuanniA0@',NULL),('18382100108','石龙','@Sl176365633160.0',NULL),('18382100284','焦旭洋','Jiaoxuyang520@',NULL),('18382100324','韩磊','$Hl426534',NULL),('17382100007','刘亚斌','Liu@940416',NULL),('163231000822','史士洁','1336853296@QQ.com',NULL),('163231000336','曹柯熠','@CaoYi68619',NULL),('162221000431','冯丹','AAaa11@@',NULL),('18382100260','周凯','zhoukai@1611B',NULL),('18382100283','张颖','Zy11176625*',NULL),('163231000851','张文秀','@Zhang666',NULL),('163231000809','王淑琴','Wsq1996@',NULL),('18382100125','许琪琪','ABCabc1215123@',NULL),('17382100457','乔卿振冬','Qdd19950920$',NULL),('163231000562','孙瑜锋','@SunYuFeng0918',NULL),('162711000547','高彩鹏','Gaocaipeng521@',NULL),('162221000168','马芸','My@970404',NULL),('162711000760','孙佳','Sj199604@',NULL),('17382100501','王保强','Wbq@0903',NULL),('17382100463','梁博文','Lbweng159357*',NULL),('17382100130','马帅帅','Mss521+.@',NULL),('18382100349','郑王飞','482013Exo?',NULL),('163231000184','韩原','HY917721810@.com',NULL),('18382100329','兰佳硕','lanjiaSHUO@1997',NULL),('163231000434','张霞','@Zx119111',NULL),('163231000631','赵帅','ZSww1.*',NULL),('151591001740','强曌','Qz521!',NULL),('163231100006','王卿松 ','Wqs02182714@',NULL),('18382100064','吕方胜','Lfs565261799!',NULL),('163231000525','张嫚嫚','Zmm0107@',NULL),('18382100052','戚赛','@WOaiwojia521',NULL),('162711000966','武家媛','WUwu55%%',NULL),('18382100115','丁猛','Dm1234!',NULL),('173821005011','二狗','Wbq@0903',NULL),('18382100198','夏昌文','Xia1971501#',NULL),('163231001090','田益莎','Tian1996*',NULL),('162711000828','张尚攀','ZSp5*_',NULL),('163231000734','张子瑞','ZZRqwe120@',NULL),('163231000371','卫玮','WwSs0102*.',NULL),('163231000054','程鑫','@CX126x',NULL),('17382100406','刘振宁','LLll11**',NULL),('17382100474','周思丽','@Zsl00',NULL),('151991000858','秦启贤','Qq980219!',NULL),('18382100252','刘斌斌','Lbb0000#',NULL),('152121000306','王高超','Ab1234@',NULL),('17382100425','石鑫琪','SHIshixinqi1013%',NULL),('163231000296','刘凯亮','Liu1998*',NULL),('163231000351','陈婉莹','1008Aa@',NULL),('111','111','11111@aa1d..SSSaaa',NULL),('162711000916','高博仑','Gaobolun1904!',NULL),('1111','111','11111@aa1d..SSSaaa',NULL),('163231000108','马梦悦','Mm00&&',NULL),('18382100109','刘敢','Lg0401^',NULL),('17382100385	','万呵呵','Whh1126@',NULL),('18382100297','王朝晖','Wzh1314521@',NULL),('18382100288','赵晓怡','Zhao0410@',NULL),('162711000703','乔惠','Qiaohui*0509',NULL),('163231001295','李姿静','Lzj123@',NULL),('162711000186','韩淑先','HSXhsx123!!!',NULL),('152121000028','韩涛烽','Hh1@Hh1@',NULL),('18382100187','钟元','Zhong1997$',NULL),('16334100023','孙睿','SUNrui@1221',NULL),('18382100031','宋英杰','!Syj18595802007',NULL),('163231000461','房磊','FANGlei21*',NULL),('18382100093','王振','zhixiang123A*',NULL),('17382100327','黄雪','Hx1018*',NULL),('163221000007','何智博','HZBqq123!',NULL),('ddd','dddeee','123qQ**',NULL),('18382100104','张勇勇','Zyy123!',NULL),('17382100479','原超宁','Ycn179897834@',NULL),('151561000188','刘爽','Ls123%&',NULL),('12312','3123123','12@aa..DSADXZ',NULL),('18382100203','李宛卿','@LWQlwq18382100203',NULL),('123122','3123123','12@aa..DSADXZ',NULL),('163301001171','王鹏','Wp19970817@',NULL),('162221000111','程建业','Cjy1997@',NULL),('1','3123123','12@aa..DSADXZ',NULL),('12','3123123','12@aa..DSADXZ',NULL),('123','3123123','12@aa..DSADXZ',NULL),('151561000105','邢增辉','HYKxzh1@',NULL),('1233','3123123','12@aa..DSADXZ',NULL),('18382100265','韩若男','HANhan123@',NULL),('163231001215','胡海硕','HShs520@',NULL),('12334','3123123','12@aa..DSADXZ',NULL),('123341','3123123','12@aa..DSADXZ',NULL),('1233413','3123123','12@aa..DSADXZ',NULL),('163221000013','刘进龙QQqq$$123','QQqq$$123',NULL),('12334134','3123123','12@aa..DSADXZ',NULL),('dddj','dddeee','123qQ**',NULL),('1233413433','3123123','12@aa..DSADXZ',NULL),('18382100006','马俊杰','Mjj18382100006@',NULL),('18382100116','丁猛','Dm1234!',NULL),('163231000195','申培培','Spp0423&',NULL),('888888888888','高彩鹏','Gaocaipeng521@',NULL),('dda','adaadaw','Zhaohaodong19@',NULL),('163231001088','邢豆豆','SUNrui@1221',NULL),('18382100177','高炎鑫','GAOgao123@',NULL),('151661000744','杨珊','Ys000!',NULL),('162711000492','乔富','QIAOFUqiaofu??1233',NULL),('162711000709','乔亚茹','Qyr123&&',NULL),('17382100229','高素芳','Gsf123&&',NULL),('162711000926','杨丽娜','YLNyln123@',NULL),('18382100160','赵子中','Zzz305379801@',NULL),('18378100053','杨洋','YANG2*yang',NULL),('18382100185','弓哲媛','492078251Gzy@',NULL),('163231000428','位贺','Wh@03291238',NULL),('163231000099','周晨芳','Zcf41#',NULL),('163231000317','王兆颖','WZY123wzy&',NULL),('152121000304','孙磊','@Sl19951016',NULL),('18382100171','赵宇森','Zys?5@',NULL),('19370100023','杜磊','Du960213@',NULL),('163231000541','丁文豪','Ding607914@',NULL),('15201100005190717','辛小龙','@Xxl000',NULL),('162711000553','liuzhongyuan','@1701Alzy',NULL),('18382100227','王银虎','Wyh666666@',NULL),('18382100321','王超','Qwe@003',NULL),('162711000405','徐彪','Aa!19970326',NULL),('162711000832','shenmenghan','Smh08@',NULL),('162221000093','刘鲍','Liubao521@',NULL),('152031000058','韩明阳','Hmy123@',NULL),('162711000755','窦晓楠','Dxn@515',NULL),('18382100590','余娟娟','Yu51921$',NULL),('18382100267','刘录','@Qwe123',NULL),('163221000020','郭家雨','Gjy991128@',NULL),('18389100320','李晓同','112566&Tong',NULL),('18382100622','张鑫','zx241X*',NULL),('162711000838','候雅坤','@Hyk521',NULL),('162711000865','宋国兴','@Songguoxing1',NULL),('18382100635','张梦夏','Zmx618618!',NULL),('162711000915','付饶','l@F315',NULL),('163231000314','林晓寅','Lxy16@',NULL),('151461000021','韩岳江','Woaini1314!',NULL),('18382100619','孙豪浩','Haohao0812*',NULL),('151551000083','李明慧','Li@1502A0103',NULL),('18382100571','杜晋','Dj1701@',NULL),('163231000116','张瑞雪','Qwe@003',NULL),('18382700183','豆皑旗','Dou918@',NULL),('18382100602','孔令芳','@Klf960421',NULL),('18382100150','刘垚文','@Lliu1',NULL),('151661000774','李源','@Qq090504',NULL),('17382100459','左怀攀','Zuo123@',NULL),('18382100587','韩娜','09084123Hn@',NULL),('18382100246','崔元泽','271178790Aa$',NULL),('163231000272','李保垒','Qwe@003',NULL),('162711000749','卢凯','Lukai@123',NULL),('152121000597','李享','Diannao512!',NULL),('163231000022','赵浩男','Zhn@981228',NULL),('162711000885','全李帆','Fanfan@981004',NULL),('163231001012','柴若男','Crn0913?',NULL),('163231000133','刘文改','0525@Liu',NULL),('162711000963','郭喜凤','GXFgxf1205@',NULL),('18382100038','王红英','1qaz!QAZ',NULL),('163231000038','董竞泽','Dongjingze0325@',NULL),('162711000548','任玥宁','Ryn199764!',NULL),('151531000142','雷津钞','Zhf2427@Ljc..',NULL),('162711000962','张雷','Zhanglei666!',NULL),('1627110000954','徐赢','Aa1!15135476469',NULL),('163231000165','郝金萍','Hjp980326?',NULL),('152121000300','王庠','WX970111wx@',NULL),('151601000334','何运正','Heyunzheng123@',NULL),('163231000149','朱彦睿','Yr885640?',NULL),('163231000214','张方云','Zjy324@',NULL),('163231000972','高雅楠','961112Gyn*',NULL),('162231001313','刘中保','Lzb@123',NULL),('152121000311','王胜旋','123456Wsx!',NULL),('162221000142','崔淑娴','Xiaoxian2?',NULL),('162711000376','赵海江','Zhaohaijiang666!',NULL),('17382100456','刘莹','Ly828@',NULL),('18382100179','冯海霞','FHX1701a*',NULL),('151591001273','吴建','wu0805JIAN$',NULL),('18382100250','何苗苗','Qw1@1111',NULL),('163231000123','王启超','Ww1!1208',NULL),('18382100049','王宏平','971223Whp!',NULL),('18382100213','原文宜','Ywy990713!',NULL),('163231000673','胡雪阳','HXYhxy00@',NULL),('17382100487','樊国庆','Fz1004$',NULL),('18382100307','何进','HJin1121!',NULL),('18382100371','叶文程','qQ1!486255',NULL),(' 18382100405','丁鹏飞','Dpf1230.@',NULL),('17382100199','陈家岐','Cjq914?',NULL),('18382100154','王倩','@Wq19930609',NULL),('162711001014','沈丽丽','$And12',NULL),('163231000136','郭丽雯','Gl0528?',NULL),('162711000671','郭晟','Aming@0812',NULL),('1838210272','薛艳玲','Xue7024?',NULL),('18382100352','唐小彬','Tb@0208',NULL),('18382100428','王昱鑫','Wyx8714@',NULL),('18382100300','王博','Txh**963.',NULL),('18382100466','李晓明','Xm07060627!',NULL),('18382100426','曹品','Leslie&0912',NULL),('18382100120','马进凯','@Mjk1483362775',NULL),('18382100234','张家兴','Zjx659431@',NULL),('18382100381','王贞尧','Wzy0202$',NULL),('18382100411','陈永坤','Chyk131525&',NULL),('163231000403','刘梦杰','Lmj@0928',NULL),('18382100415','张婉莹','Zwy962503@',NULL),('163301002285','肖沛林','Xpl10@',NULL),('18382100439','赵思荣','2698926@Ly',NULL),('18382100471','刘子盟','Ee527832@',NULL),('163231000021','郭雅静','Gyj@123456',NULL),('163231100305','张宝特','Te123456&',NULL),('163321001305','张宝特','Te123456&',NULL),('17382100288','李政帅','LZSlzs123@',NULL),('163231000600','赵竹苗','Zzm00@',NULL),('18382100199','张欢','5561854qQ@',NULL),('163231000487','李新宇','1612A@lxy',NULL),('18382100933','韩志刚','1612A@hzg',NULL),('163254000882','孔令汝','1612a@KLR',NULL),('17381100231','李想','Lx3344?',NULL),('18382100063','杨晨','Yc1224@',NULL),('163231001062','潘德平','Pd12345&',NULL),('152221000200','王浩','Wanghao@520',NULL),('18382100425','张猛','Zh1@123',NULL),('163231000953','董明宇','Dongmingyu123@',NULL),('152121000629','李鹏','@Lp123',NULL),('1521210629','李鹏','Lp@123..',NULL),('163231000341','方格士','Fgs&0319',NULL),('18382100225','杨超','Yang2980680@',NULL),('152221000014','刘伟杰','Ll1701??',NULL),('163231000375','兰剑剑','Lj0321**',NULL),('18382100332','张宇杰','@1242380537qq.COM',NULL),('163231000026','冯少坤','@Asd1001010010',NULL),('18382100320','李雪尧','$aA8971178',NULL),('18382100420','杨质瑞','523293511@QQ.com',NULL),('163231000808','张慧','Zhanghui423!',NULL),('163231000727','冯琳娜','Alina1207&',NULL),('18382100156','付琳琳','Qx950209@',NULL),('151661000691','杨鹏程','ABCabc123$',NULL),('18382100142','刘嘉鹏·','Ljp142@',NULL),('163231000027','吴俊威','Ww!16323',NULL),('163231000014','李宁','A@s12.21',NULL);
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject`
--

DROP TABLE IF EXISTS `subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subject` (
  `subject_id` varchar(255) NOT NULL DEFAULT '',
  `subject_text` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`subject_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject`
--

LOCK TABLES `subject` WRITE;
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` VALUES ('fqtktr-1lq5u','javaScript上'),('wl5yk-38c0g','javaScript下'),('8tl7os-r49tld','模块化开发'),('1ux00o6-2xbj5i','移动端开发'),('4pu32-vs796l','node基础'),('1psw2b-cy7o07','组件化开发(vue)'),('fyu3ln-azjkie','渐进式开发(react)'),('94sjh6-lnlxe','项目实战'),('k1gvd4-8lrx8f','javaScript高级'),('u3ix15-dd6md','node高级');
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `user_id` varchar(255) NOT NULL DEFAULT '',
  `user_name` varchar(255) DEFAULT NULL,
  `user_pwd` varchar(255) DEFAULT NULL,
  `identity_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('tq5yea-wxnv0k','zhaoxiaoru','10eea2ee3ad66731d1dbc283ddfca3bd94d6a5e7ec78b0e8fe0126d7f505b718','uf81yn-hv8uvv'),('kqpvys-hpzkdt','liuyu','eb9d5a1d7b1ddeb95b63ca05e371460e0b7aa75a6f64bc0a1c6398da61cd1511','uf81yn-hv8uvv'),('axg8t2-oroeja','w916peach','f868620347ebb09e05360104eb4eab95351fa7e95da6023fdccea0768e870946','63no9p-8y0k4'),('qlgjry-9rwvb','yihang','5b46a84eb0eec0a3eea2d5977dca7269f18265dabf76182204291f7f2f93cbc3','uf81yn-hv8uvv'),('ypay2t-7uxsd','dingshaoshan','cc41634ea8c8acf9dea97bc0808be0091030f44edbf6192d5890c9c3e051ee78','uf81yn-hv8uvv'),('w6l6n-cbvl6s','chenmanjie','aaf2aa719b9f34058f47804f896a521c43424483b575546ffb306526ba107b92','uf81yn-hv8uvv'),('bsz88g-071r5','renyuliang','32042b23ee00e9666c562a242308186d9270d4b4b5394578d06e66c33724377f','uf81yn-hv8uvv'),('9a22l-wj1kmf','cuidongcai','fd72764421b36fd9aa09787937327ab448699b7171ccab5006a7402b02a21579','zi0gu7-v7dy08');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `view_authority`
--

DROP TABLE IF EXISTS `view_authority`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `view_authority` (
  `view_authority_id` varchar(255) NOT NULL DEFAULT '',
  `view_authority_text` varchar(255) DEFAULT NULL,
  `view_id` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`view_authority_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `view_authority`
--

LOCK TABLES `view_authority` WRITE;
/*!40000 ALTER TABLE `view_authority` DISABLE KEYS */;
INSERT INTO `view_authority` VALUES ('r50r9t-1p1kbm','登录','login'),('8olznh-943zt','主界面','main'),('4pvvb3-h5kzg','添加试题','main-addQuestions'),('vnpojq-tisgu','试题分类','main-questionsType'),('xpz8cf-xoyd7n','查看试题','main-watchQuestions'),('qcrhh-k0tvh','添加用户','main-addUser'),('o4xsrn-5heg27','用户展示','main-showUser'),('1orauc-piu6gm','添加考试','main-addExam'),('43t70e-pk8ylk','添加菜单','main-menu'),('0a1llo-a1vt2','编辑试题','main-editQuestions'),('n083ob-u54cop','试题详情','main-questionsDetail'),('2iilq2-n3c8qi','班级管理','main-grade'),('xpnrf-levvc','学生管理','main-student'),('dow3c8-tb0lid','教室管理','main-room'),('04d1m-605j25','试卷列表','main-examList'),('fmdrhm-xfnmxk','创建试卷','main-examEdit');
/*!40000 ALTER TABLE `view_authority` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-16  0:56:26
