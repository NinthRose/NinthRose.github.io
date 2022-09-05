/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2018/07/24/tattle/2018-7-24/index.html","09fa100dffa8efd477f2c221d7184440"],["/2018/08/07/books/2018-8-29/index.html","e1e677ccb64e8b4a7c87469d4df4acec"],["/2018/09/01/books/so-slow-so-beautiful/index.html","2321210714d215a6a9407dce4c51bb2b"],["/2018/09/02/books/→/index.html","85eb597cd7c84e6dfbac5900192a80fc"],["/2018/09/05/books/to-the-monkey-and-the-frog-外婆的道歉信/index.html","1cea4dd04b0a45e173db3abdd95b3214"],["/2018/09/06/books/NaLanRongRuo-纳兰词集/index.html","735c5d8cee2c4c88d8634262f65aa1b2"],["/2018/09/21/books/So/index.html","61914cafdee2087788cf5e28cd7a419c"],["/2018/09/26/books/unsleep/index.html","12621a609005698534f74b2b59d0fcf6"],["/2018/09/27/books/genius-left-idot-right/index.html","a6ddf8d892a01af85a2f107d69ee02e4"],["/2018/09/28/books/2018-9-28/index.html","82446bb4ad0b1a188293394f9da86e50"],["/2018/10/15/books/hua-de-mimi/index.html","b0764495e490bddf247f4332b4fea8f4"],["/2018/10/28/books/2018-10-28/index.html","427796131ce6df08dd8dfd4b4ea03c38"],["/2018/11/25/books/matter/index.html","c6f573dff65057f891fdd84bba8c76eb"],["/2018/11/26/books/a-perfect-life/index.html","dcbea49467bb45fc1c41582e739bcae0"],["/2018/11/29/books/2018-11-29/index.html","526b1a71e7529d6ff57d40a3c127266b"],["/2018/12/06/books/gentle/index.html","fc08b25f8aec80cae12cb7f2a782b8e3"],["/2018/12/30/books/2018-12-30/index.html","306d093420594b5302704e3bfa3c2e4f"],["/2019/02/03/books/2019-2-3/index.html","ee244e62b5717f016b11ca43ca111c0e"],["/2019/02/28/books/2019-2-28/index.html","ff6fcc9a701fb91612631a85982439fd"],["/2019/03/31/books/2019-3-31/index.html","4ead5011f6ad46b458d49777dc4ef21f"],["/2019/05/13/books/ma-ge-li-te-town/index.html","29945b93e34c22d3ced2b04113727ad3"],["/2019/05/29/books/2019-5-29/index.html","2168142eefedcc0c480711b12e3fe4c6"],["/2019/06/06/books/alone/index.html","d6504e5081593b169a0d94c9e900cd3b"],["/2019/07/01/books/2019-7-1/index.html","4edba4c82a39024577f3e1a5c3ac1fc9"],["/2019/07/30/books/2019-7-30/index.html","1b7b840d3d1285e02188e6314f3a9b5a"],["/2019/08/28/books/2019-8-28/index.html","a363b11061ea9eb84c27a4e8779cc9f1"],["/2019/09/17/books/byebye/index.html","78f02f1d2fcd1edb4f54ad4a1f454732"],["/2019/09/29/books/2019-9-29/index.html","2bde4e6b8a4cf7c5c93aacd4602d4981"],["/2019/10/29/books/2019-10-29/index.html","3c3bd2293a51c528402c740de9c77a77"],["/2019/12/02/books/2019-12-2/index.html","2bcd42504c2fe0d48095f8589cdf4de0"],["/2020/01/01/books/2020-1-1/index.html","fff057da20d21aa592ef73a0b45c95b8"],["/2020/01/31/books/2020-1-31/index.html","302578a7d93aabd2245244503a25253b"],["/2020/02/29/books/2020-2-29/index.html","ebc9888a340f511bc736584e743c368a"],["/2020/03/30/books/2020-3-30/index.html","72a787362b3126caebefa85c7abd86fd"],["/2020/05/29/books/2020-5-29/index.html","a2c65dd2843b423dc575dadc36d81ef8"],["/2020/06/25/books/2020-6-25/index.html","32c335843bf12cefc3141286cd6f1725"],["/2020/07/26/books/2020-7-26/index.html","323fe73709a2f890e523ea495e2e5b57"],["/2020/09/01/books/2020-9-1/index.html","a3e36ac5a5c983bc007d56e20c4a742e"],["/2020/09/29/books/2020-9-29/index.html","36b4839b2969072a8f1799a7d0b7720b"],["/2020/12/24/books/2020-12-24/index.html","37d93f148c8d749f400b20ff17356ac8"],["/2021/01/24/books/2021-1-24/index.html","7eb16c5b44ebc3193e8a971c44a756b6"],["/2021/08/01/books/2021-8-1/index.html","4414c001a7b7905efe6623961eaa63b3"],["/2021/10/23/tattle/2021-10-23/index.html","2b6e4fe036c1908fab1a7cc3c0df6607"],["/2021/11/24/tattle/2021-11-24/index.html","163d9ef456b18d989ab9d6a656917df5"],["/2021/12/04/tattle/2021-12-4/index.html","ab1801039b076a8e6b62548f881d8337"],["/2022/03/12/books/linux-command-line-and-shell-script/index.html","851ebf15c7891244a4e62113b612e7b4"],["/2022/05/07/books/the-art-of-unix-programming/index.html","054c92c4d65599e8fd80ffb75723f896"],["/2022/05/23/tattle/2022-5-23/index.html","73fb0f5b8720566b4626bc964a3158fd"],["/2022/06/18/images/bing/index.html","7f114fd92fa67cb1f29b1fd1129ffc78"],["/2022/06/18/movies/index/index.html","173fda1db5a98aa8e40474fa3c9be474"],["/2022/06/18/music/index/index.html","b6a5f1f5c26b1cc4c262a46eb1c22475"],["/2022/06/22/soft/nginx/index.html","e79c7fd5c081dbbdc9ddff8180fce90c"],["/2022/07/18/tattle/2022-7-18/index.html","d647508a45ebc6498877eecd5a233348"],["/2022/08/09/tattle/mao-sha-pen/index.html","4336665724faf58715cba6a638d88c1f"],["/2022/08/09/tattle/xi-wan-ji/index.html","b83bd513d62027d6e124cb3e19bab7e2"],["/2022/08/15/restaurant/MRHot‘sGrill-md/index.html","80cf1e807b08e25a721314b05084901a"],["/2022/08/16/tattle/zheng-dou-fu/index.html","56990fe84d74f0be7234fe833f5fd35f"],["/2022/08/26/math/math/index.html","8c24e303a50ffbc545f6aa670fc9f28e"],["/2022/08/27/soft/git/index.html","863bb1cb824c0120ce310cab51705b13"],["/2022/08/29/badminton/note/index.html","642ba89d19846f0315ce0a1ef58db642"],["/404.html","7ffdd99e2c45d9d5c9afd69e41e11b99"],["/about/index.html","988adbd7ac6022c8b975539f0f95ca3e"],["/archives/2018/07/index.html","7cca67858a5351a7cb1bb793f18db10b"],["/archives/2018/08/index.html","d9dbf4aaed68651976e7822a753eb1c4"],["/archives/2018/09/index.html","a526c83110af0918b242aff20b4d7ce9"],["/archives/2018/10/index.html","0a1442010dd47b12dc10bec6e67c823b"],["/archives/2018/11/index.html","eb1bcd826d3667ce56398388b950b3dc"],["/archives/2018/12/index.html","63a9390e5856f3088eab6779dbd35780"],["/archives/2018/index.html","7d8c81daccb15946dc936fb037b4530a"],["/archives/2019/02/index.html","a08e13c784c1a046d0103c735f6207db"],["/archives/2019/03/index.html","f6298797317ff1a6458dc9038511e556"],["/archives/2019/05/index.html","52ce971bee41f4e803b9afcdc01f0879"],["/archives/2019/06/index.html","483bc3ba7519167c45bc89a883378def"],["/archives/2019/07/index.html","ed13f6ad875d9fc5e5fe846102f188fe"],["/archives/2019/08/index.html","cfeafefb0ac2c7d0647316371b8a5ee4"],["/archives/2019/09/index.html","0a0bb656813af9ff48e45925fb2dd929"],["/archives/2019/10/index.html","36938bb68f15094eadb943a0d4d57f24"],["/archives/2019/12/index.html","c8c89511a3298973c56a0479f7caf4e1"],["/archives/2019/index.html","bf2665c1ea96bf7cbb02769f2da48f5f"],["/archives/2020/01/index.html","8dc0c71650ee262b6f18ef28f901ace4"],["/archives/2020/02/index.html","9646ae4e912fd0ed3a2f4354d1c96dad"],["/archives/2020/03/index.html","d1473fbc95e433c697f860d7395fc393"],["/archives/2020/05/index.html","3b59e9648fa80638f5c676327b82195e"],["/archives/2020/06/index.html","81e3ec6688c5377cfbf636e3a79a5742"],["/archives/2020/07/index.html","4e6806b665a295f105ad447e9f8f522e"],["/archives/2020/09/index.html","5069aff8bc663710b8091c36d60e0ee7"],["/archives/2020/12/index.html","f8ff1fa9a44d93035257669e84e06a5d"],["/archives/2020/index.html","579f9ff50d644b479834f9554bba6067"],["/archives/2021/01/index.html","5a4b9cc9cbd7f1325af58e96d6a3d11b"],["/archives/2021/08/index.html","4b145d9f971dbf8f412211c7cd4b6557"],["/archives/2021/10/index.html","3cb7a5195996dca0b83c383fe049ede0"],["/archives/2021/11/index.html","aeeb55ca28a419187f217f9e49f2dafc"],["/archives/2021/12/index.html","18c4bcd74fe1ffd50ee322696ac6bc85"],["/archives/2021/index.html","ca3b18361f73bf4bfb9e1a1e2e2cbb46"],["/archives/2022/03/index.html","a6e9cc652e04e9053bd6ed5eda24222a"],["/archives/2022/05/index.html","3d9d05d8843a749adb75a2bc4f675754"],["/archives/2022/06/index.html","5a2b4a4f9eae70cf0d56a1b9f72b9271"],["/archives/2022/07/index.html","27f6ad1a2f96169586d91d4c68433391"],["/archives/2022/08/index.html","9233cf982f2eecacb2008ecbd4c97c28"],["/archives/2022/index.html","6a644fccf4d9b9eda4e9786dc858fc0b"],["/archives/index.html","3891ecd792872dcbcba4a2139acdd958"],["/archives/page/2/index.html","502aca14b74e639b45f039658e2aabcd"],["/archives/page/3/index.html","9251f8d835466e76d912240a712b08a4"],["/categories/index.html","64d6e54c5a15e24ae69739edfbff1d69"],["/categories/linux软件/index.html","6b034fdd0654ce123f011cdc4be56478"],["/categories/好物推荐/index.html","2dea57a0ec702a3c6a6c6a42b1e34ee7"],["/categories/学习笔记/index.html","cd8fcff091b260d4e2f75cb2d78c9627"],["/categories/摘抄/index.html","db6b7fb512bc9e0c46caa68ea918b9b4"],["/categories/收藏/index.html","c82999162d66526dead06dbcb13cdcf4"],["/categories/日常碎语/index.html","d9fabe2331ac753113b40620f80f824f"],["/categories/科学/index.html","6b2b2d2cd46e64a5dbf58d36d6be153c"],["/categories/美食推荐/index.html","c20db19f749bb09849d7cba64e32614d"],["/categories/运动/index.html","ad792b323d7668f42f557efa4a2c163c"],["/comment/index.html","9a4af7bc66de9a8dea0d6708ad773050"],["/css/index.css","1d049fa8138cfab97f159253d659b4bb"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/index.html","2899c82740f4c4c9a6d3ab4116d9434d"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpeg","66ad707597a9a2bbaf96de240f089847"],["/img/avatar.jpeg","70ad101546270f465d3a1b060fcddf00"],["/img/badminton/bat.jpeg","a6ad88affc3c8ab7f0e0b816b25b9f48"],["/img/badminton/right.jpeg","217778faf8bee7a388c7fa16d0a2de7d"],["/img/badminton/wrong.jpeg","1b22de4432079d42733424d2d328a7de"],["/img/badminton/内旋外旋发力示范-1327637218560180224.mp4","fe143a3ec98178299de1e9a29b815529"],["/img/badminton/前臂内旋发力结合引拍抬肘的完整扣球挥拍-1327718654985945088.mp4","de6d4521fefe5fa1b652728148698789"],["/img/badminton/羽毛球内旋发力扣球动作-1327641846353727488.mp4","aa619753b71807cb90daf58b299ca068"],["/img/badminton/羽毛球利用手指力量扣球-1327642619762171904.mp4","91c3ac6f1f772e8182142c3d1b51ddc1"],["/img/bgs/bg-1.jpeg","058f4ae7bc2557f1050760ed89bfd410"],["/img/bgs/bg-10.jpeg","b7d78923ca5410376cc54f3ae56bfabf"],["/img/bgs/bg-11.jpeg","f8d0bb8dd5492e003ec03c0895079fa5"],["/img/bgs/bg-12.jpeg","300b954cb50ac769047bdb70688845a9"],["/img/bgs/bg-13.jpeg","0fd5d1a0aaff9df32d0c5eb7a6388208"],["/img/bgs/bg-14.jpeg","bf67530e74c0537493ba042f28f2d7b5"],["/img/bgs/bg-15.jpeg","4b96d9ace955f472c1c71c1e263ac4fe"],["/img/bgs/bg-16.jpeg","ef2bfc9801ef5c2fdccf69f5668dbef6"],["/img/bgs/bg-17.jpeg","b58de11881a8abdc7cf8b547cf6ec6a6"],["/img/bgs/bg-18.jpeg","0d3fdc4498678d34a0de67f9963c096c"],["/img/bgs/bg-19.jpeg","e9783413be44c7b94c5a6bcd2583d6d1"],["/img/bgs/bg-2.jpeg","f1a557285d433798463ce87631580bc3"],["/img/bgs/bg-20.jpeg","5b8149f31fa49f0cc363f7d7b64544e3"],["/img/bgs/bg-3.jpeg","0fa09dcad84bb5923cbec7a6f0484e62"],["/img/bgs/bg-4.jpeg","b0296ed41d362b03130683710d041ca2"],["/img/bgs/bg-5.jpeg","9212554c0511159558934e76d3c247ff"],["/img/bgs/bg-6.jpeg","5a2cd4a9a42d1c8e32de058298a685aa"],["/img/bgs/bg-7.jpeg","b45c7174527518fc072e960e2e353da4"],["/img/bgs/bg-8.jpeg","a4172858d3408d00b9e6da4b19ce07b4"],["/img/bgs/bg-9.jpeg","5e948721f892bfb675901d3ad1f4e2aa"],["/img/bing/20220101.jpg","ff9bb8cfa327e06d49429ea51c5101cd"],["/img/bing/20220102.jpg","29afa343e8c754d4dd31ae56fa689c3d"],["/img/bing/20220103.jpg","98e35fd484e65277839fe89436c1dbc2"],["/img/bing/20220104.jpg","9462fbfe78cae97decec2e40389c5b6a"],["/img/bing/20220105.jpg","7ed5c8f51b0a76005f9fec1ee6e3eb49"],["/img/bing/20220106.jpg","5daccd873ac7bc5d504b806558ba42a6"],["/img/bing/20220107.jpg","c4440cccf59e9b2cf888807fecdb3c0b"],["/img/bing/20220108.jpg","c825c3f3955d3466051a78e9f47a8463"],["/img/bing/20220109.jpg","3765f4bd9b0158bd8bc7104e10c7e003"],["/img/bing/20220110.jpg","2c33b063a55f40218dc2c1b8130e2d38"],["/img/bing/20220111.jpg","ee65f76e7e6207eb969b50c94320857e"],["/img/bing/20220112.jpg","39ed0635e4d6ba9e17790111e483ebc8"],["/img/bing/20220113.jpg","41254d71f07dfe9f818aaa44ecd8628a"],["/img/bing/20220114.jpg","4943bff7fabafa28ed84f881966a5746"],["/img/bing/20220115.jpg","5c1a5dc4a7d25230b12ad6c55f53902b"],["/img/bing/20220116.jpg","85aac24a212ac71fb665218779551f07"],["/img/bing/20220117.jpg","3a89a00e8e909fda2ad60d8eed31257e"],["/img/bing/20220118.jpg","a0ebbd6e2f4507e5810d0cf5f216c323"],["/img/bing/20220119.jpg","b941dfa854c78373275601fe1246648d"],["/img/bing/20220120.jpg","d319ece0883d4457fb4675b4ba9da94b"],["/img/bing/20220121.jpg","06a22fadb3606fa0c87b7b41332f08ed"],["/img/bing/20220122.jpg","a856f9a9fafd0555a4a5ebaf757dc146"],["/img/bing/20220123.jpg","6781c0fb672683c1da3acffa3507ffda"],["/img/bing/20220124.jpg","e1e752d1e4648add775b97770109ea19"],["/img/bing/20220125.jpg","badc8f69e3f250f5de8935bca7b46590"],["/img/bing/20220126.jpg","febb653b69afee74d64fa3bf5ed44766"],["/img/bing/20220127.jpg","b3ebc21dc631801d91d7e636129f2c5e"],["/img/bing/20220128.jpg","5c7c8bb515cb4d1be3006467926aaafc"],["/img/bing/20220129.jpg","5eff7f2e3a2b02d7abb27fd8e6174a4f"],["/img/bing/20220130.jpg","5f7ade157a7636065bcde141b81ff180"],["/img/bing/20220131.jpg","13a17c4288ea6a1ea73fbfcdaa5cb546"],["/img/bing/20220201.jpg","4306948569142c57efcc79e3906c6ae2"],["/img/bing/20220202.jpg","2b19d52f3074e6c21dea17fcdfc51e9d"],["/img/bing/20220203.jpg","9e71979d80f136e35b52c16175392cdc"],["/img/bing/20220204.jpg","f55c1a2f111bb3de2390ba05d8ad855e"],["/img/bing/20220205.jpg","352a34d97378c6b9b37bd4524e87ec50"],["/img/bing/20220206.jpg","f7020aedb98b4f4c7f151858f8755e06"],["/img/bing/20220207.jpg","3267ebbcf9f49a75bcc7bb3827b51187"],["/img/bing/20220208.jpg","d3c91a3aa449c494c2eb2f631c4b37f0"],["/img/bing/20220209.jpg","37fb5362605d1ce3617d6a77b1cf2aee"],["/img/bing/20220210.jpg","d9a0c93cd5e6cbeb7d83dc0cfe2c1874"],["/img/bing/20220211.jpg","75225aa6963d279b966d62e403a9a769"],["/img/bing/20220212.jpg","02d4589c637ae8af8942cab3246fa732"],["/img/bing/20220213.jpg","25f7805da76538e7ded31869b8441921"],["/img/bing/20220214.jpg","e7e6e43902f24ed05292cde8375e9080"],["/img/bing/20220215.jpg","e0f0673d78ddd40a5c6098baf9d4d7c4"],["/img/bing/20220216.jpg","e5e00d0fa538bf17f8c6b40df9a5ffa1"],["/img/bing/20220217.jpg","711df29e64b83332c6f7fbf703e0716f"],["/img/bing/20220218.jpg","c7a93a9b25d12103b6c98ab363824484"],["/img/bing/20220219.jpg","878ec64bd47f0fc218589a8ac0ab9131"],["/img/bing/20220220.jpg","453fb5521548d6e2bf30a948afe5d0cb"],["/img/bing/20220221.jpg","14d7c30ba0592c5e9c2e3d1cbb5d25e9"],["/img/bing/20220222.jpg","9ef220abef2023f3b1aa642bf6e94f21"],["/img/bing/20220223.jpg","a40ef43b55c054842ae03fc57b7cfe03"],["/img/bing/20220224.jpg","33f00781019e17ecead3c5d29313040e"],["/img/bing/20220225.jpg","1d0f3af003f645081d4df5580e0d84c6"],["/img/bing/20220226.jpg","fb19a5e793873c5e364e855b19a6c0e5"],["/img/bing/20220227.jpg","67fd51f70d3f588f469fd2f95b633fbb"],["/img/bing/20220228.jpg","8e3c929404ca3de6914ad2b0116b5efa"],["/img/bing/20220301.jpg","382f9e7ebb50b635c07bd9130b74dd13"],["/img/bing/20220302.jpg","67c6809e965192033a69b2722c3f9da7"],["/img/bing/20220303.jpg","91ba616b3ab5bb7cf1c130f846d66f25"],["/img/bing/20220304.jpg","56aa1b22740fb89d5469a6df97b97cf2"],["/img/bing/20220305.jpg","1a66d2e1a266f143863a9e539e97e6a0"],["/img/bing/20220306.jpg","9d4eee0f49967c76cb63ca5ad390036c"],["/img/bing/20220307.jpg","4f6f66429bbea23c75eb30831cc714fc"],["/img/bing/20220308.jpg","aa6b8c3b45d3f9a46e96a8a0dda78e6c"],["/img/bing/20220309.jpg","7327f05cae2925211febe956cbb0b54b"],["/img/bing/20220310.jpg","94ee23d7470a6c49b2aa6dd51b2481ea"],["/img/bing/20220311.jpg","28c83290bf88cabaaaae23c8c396e516"],["/img/bing/20220312.jpg","2c3ae6bad52ce4b8fc1065dbf81c672b"],["/img/bing/20220313.jpg","0320ac1bdc9c0c5063f99f92e05a1e88"],["/img/bing/20220314.jpg","0a82f238fa798ee06ab5a2b1266dfba3"],["/img/bing/20220315.jpg","ec5b4b87fb52557488405cc4cd9833e1"],["/img/bing/20220316.jpg","b0490c87c34c29279f52cda61df63a62"],["/img/bing/20220317.jpg","df56badd8a141bb363f18308f7b2aebb"],["/img/bing/20220318.jpg","5df865800af11cd9b69e05045d20b479"],["/img/bing/20220319.jpg","6988a7361c1a93f055baae650e8b352b"],["/img/bing/20220320.jpg","6835e4396b0cc7fdd12ac76be7813ca7"],["/img/bing/20220321.jpg","a2aab83a293cf7aef40fec40ab1975d7"],["/img/bing/20220322.jpg","ed69b1778ea72ec5d3975645f6f315a7"],["/img/bing/20220323.jpg","5d93c34674a6eb5770ec884b8bba2219"],["/img/bing/20220324.jpg","3ec836386e0e36ff0f93064f3dd821f1"],["/img/bing/20220325.jpg","5048661ddfc285143a05a99e32b7cfa8"],["/img/bing/20220326.jpg","2719ba5e0cb8e8b0e846162bdfb37ece"],["/img/bing/20220327.jpg","ab03fff110ab09978939ce1d36e73913"],["/img/bing/20220328.jpg","62af08dd9006bacbf1670db29ac4df6b"],["/img/bing/20220329.jpg","380d522cea3c3713f38bcff19c4f9776"],["/img/bing/20220330.jpg","12adcfbdc90daec38075dd6c51422ca2"],["/img/bing/20220331.jpg","4feb5de793f3d8f3250f85f10a9c9cfa"],["/img/bing/20220401.jpg","73a446f8e2bce79c24998e0693f780c9"],["/img/bing/20220402.jpg","df21e815a7847207002d152a2cb15f89"],["/img/bing/20220403.jpg","4d85a09d092d885016ba156fbf6bb1bf"],["/img/bing/20220404.jpg","fd69fc0c1625c385b0f1212fa5edc983"],["/img/bing/20220405.jpg","4510c52bc012cd99d0aa1aec461341a7"],["/img/bing/20220406.jpg","ea9477780e2a8d5211bec695c076bc3a"],["/img/bing/20220407.jpg","fff48cd6eb26fbe8b4001769ecd4a097"],["/img/bing/20220408.jpg","7f0039d4f7bee010b42fd485a8d065fa"],["/img/bing/20220409.jpg","e40c434657eb033720761207e6efc215"],["/img/bing/20220410.jpg","9e44eb5fa20d5079f29f310a360e1e6f"],["/img/bing/20220411.jpg","5fa0a58acafd3b72c1acb066ae5f13be"],["/img/bing/20220412.jpg","5e101f30bd202e9465a5f502ff8b50e8"],["/img/bing/20220413.jpg","91d29d1257dcb74031594e6b1935c984"],["/img/bing/20220414.jpg","575099be19830400e55f6986158843f7"],["/img/bing/20220415.jpg","bde1f84d048728d7dff8954cfed1bf37"],["/img/bing/20220416.jpg","2ab0ce31c4ed635e9425bc8906669529"],["/img/bing/20220417.jpg","b99114d82fec552ebfc4bf7e54afeb1d"],["/img/bing/20220418.jpg","134aa2dd54aa8b6b6e362a4f239e36e3"],["/img/bing/20220419.jpg","ff36497342dd1a0ca38cf8df58d8b202"],["/img/bing/20220420.jpg","3112b4277563c8d17b498cd8347734c9"],["/img/bing/20220421.jpg","4011d3b35c8728c7de8e2ac03e1ac458"],["/img/bing/20220422.jpg","03a5e194d892b86664a234bb35f8ffde"],["/img/bing/20220423.jpg","cdf14bb9d7f953e88487b11c2ae212e0"],["/img/bing/20220424.jpg","e301789e2448603642c7e3b1d4f9358d"],["/img/bing/20220425.jpg","4f1c04ab63d0aff5f996b2c37b45db12"],["/img/bing/20220426.jpg","aad56fcfb3fdab2b192f3f40ffd4151b"],["/img/bing/20220427.jpg","58261a3d460fff188ba23eef762bf628"],["/img/bing/20220428.jpg","e5ee507fec982eb8784b0901e8ed170b"],["/img/bing/20220429.jpg","9d35264ead4fc6fdbb851cf69fd4ed95"],["/img/bing/20220430.jpg","1b0e73e193926b28fb5341c97c7267cb"],["/img/bing/20220501.jpg","ae36d2021c89622fa9251ced5543a72b"],["/img/bing/20220502.jpg","8f517e909d0f12e9b8a8dcec05e24d28"],["/img/bing/20220503.jpg","51c81a1e24d20b2160e67e6fbed83a3a"],["/img/bing/20220504.jpg","d0ef69a6a69d4b9c6023ef2d7e8f41bd"],["/img/bing/20220505.jpg","db4ef59e8cf8e47bcdf26ea647003655"],["/img/bing/20220506.jpg","04c0fd0c9c941829091fb4f71f810fe0"],["/img/bing/20220507.jpg","d41da3b6147c9b810647760b3cbd78ad"],["/img/bing/20220508.jpg","99474d6ad7ba1472aeb859d4f1775359"],["/img/bing/20220509.jpg","7b59db051b39f30ec6015e18090c3be5"],["/img/bing/20220510.jpg","db5053e2e64f6327bdde902ea423bf05"],["/img/bing/20220511.jpg","aa150d10bf2557ad3ed4d278250f3ae9"],["/img/bing/20220512.jpg","bdd0a4156433ad5e439e55e0d89c5f6e"],["/img/bing/20220513.jpg","b44c733fdb8b73ef1c48e00c9a95151e"],["/img/bing/20220514.jpg","971b2018dfef20e26703cbc53110c61c"],["/img/bing/20220515.jpg","9a97b494539ab3e889c3b903eded4de1"],["/img/bing/20220516.jpg","367cbf3a98f386da138f80026b17575a"],["/img/bing/20220517.jpg","da9a662e86e74a63ca066dabea23950b"],["/img/bing/20220518.jpg","3c84851c71aa854121b466ccc8b358c7"],["/img/bing/20220519.jpg","29e81207d8e9e89d7cc82c9bb1283ab6"],["/img/bing/20220520.jpg","daa7c3124c64b22550dbd6e2237dc65f"],["/img/bing/20220521.jpg","6a7671047830ed18dd52aebc1a0bb5a8"],["/img/bing/20220522.jpg","00dc83822fecfeb7df2f1c80ec358ffc"],["/img/bing/20220523.jpg","7c7ff7599667b8325bf9ee0298297adb"],["/img/bing/20220524.jpg","2c1889874022802a88c62ffe18dc8fd8"],["/img/bing/20220525.jpg","b1208222ed9fb77fb806e2291936e9f2"],["/img/bing/20220526.jpg","a9a1309f1db5e33acca088f8dd3739bf"],["/img/bing/20220527.jpg","62a24684d637ff3896c7b887f7edb150"],["/img/bing/20220528.jpg","d206df8247ecda6423646b5d67a4b93a"],["/img/bing/20220529.jpg","e2a5d58a378153b6ba1891a34c811ba3"],["/img/bing/20220530.jpg","1573b9cc9541787744884abdc4af3435"],["/img/bing/20220531.jpg","c2f6c421e8e285e58ae6c6edbabfc890"],["/img/bing/20220601.jpg","8d6a23c506e9f24f6cdd2422948bbaf1"],["/img/bing/20220602.jpg","6a13381e8c2ada55dcd300a81b6a9af0"],["/img/bing/20220603.jpg","bed54f1250afe3aca84beff8ca524e0e"],["/img/bing/20220604.jpg","7a2f714f76519e2f25df85bf8be56697"],["/img/bing/20220605.jpg","830d86325ba375324edd6e1c65f7deb8"],["/img/bing/20220606.jpg","b07018b2b125bdeffeaac38506f5d596"],["/img/bing/20220607.jpg","a2ce21fe967825402d8b95c16bc01861"],["/img/bing/20220608.jpg","49acc9be52e0a66b7b8f8856357c2d7f"],["/img/bing/20220609.jpg","d0205bc4b5555ebbf9e7c19ce197e032"],["/img/bing/20220610.jpg","c087654aa5aab2ac01925225d868f708"],["/img/bing/20220611.jpg","64e3470f9e48895284d3539c6b3c5a47"],["/img/bing/20220612.jpg","8b8fd033367fc8be31222471dcf5af04"],["/img/bing/20220613.jpg","80ab2b04707d8d24f3ce642436f06d98"],["/img/bing/20220614.jpg","ae760d2c8f6f300a2931c5c313cfea7b"],["/img/bing/20220615.jpg","0323a98fe3627a64c6c16d96c701d18f"],["/img/bing/20220616.jpg","22efd2339d6c0d5f304ac3129f8aa6f1"],["/img/bing/20220617.jpg","a382d148dda0a2c8d798fcfe82689e38"],["/img/bing/20220618.jpg","f174649ae5faf7bfd4c829a03b8643b2"],["/img/bing/20220619.jpg","c9b17b2d1b10c8897c7f23be34b389ac"],["/img/bing/20220620.jpg","dfe9f7cb285c06d999d8aa92c6b89a61"],["/img/bing/20220621.jpg","d43e8aef9f671287755c9f086dc7d7ed"],["/img/bing/20220622.jpg","b361e458625d31b770906dd27f9a1b06"],["/img/bing/20220623.jpg","121650a810ce9f7c8b8dcad2716e4b5b"],["/img/bing/20220624.jpg","40e4900014b5fa1b639fbff3d10d167b"],["/img/bing/20220625.jpg","3bbce18a09efc5892721b79f8f7728ef"],["/img/bing/20220626.jpg","b6c876d6a3d42390982d523c413e0f5e"],["/img/bing/20220627.jpg","32131ede20c89cd8ebbdab801f59da60"],["/img/bing/20220628.jpg","9a0e1179460dc324a6c46c35dca67a9d"],["/img/bing/20220629.jpg","d5a97b0a96c2fe6b1a3d5f891b37b6e9"],["/img/bing/20220630.jpg","58ca4dbf5ed7155ed78ad59d34e39142"],["/img/bing/20220701.jpg","bd2f8032f8f641e50eeaec277423085d"],["/img/bing/20220702.jpg","4d2a4b1d19087a61bf1b7fa8fd1b3725"],["/img/bing/20220703.jpg","1478888b817c7d68b00ac04a25d17649"],["/img/bing/20220704.jpg","b1db28703b62c9fd43f4ae3f189f2219"],["/img/bing/20220705.jpg","9ed25a49e4dc07a573695d875dff7d1e"],["/img/bing/20220706.jpg","a4f90d6eb9bb5adbdd8d94d691d38c37"],["/img/bing/20220707.jpg","ff86be1f98b0bd11ec5b30f7f033f271"],["/img/bing/20220708.jpg","7bfc1c8ac451295b558caa4c1c07ddaf"],["/img/bing/20220709.jpg","0c2555dabe97faca6e2f3a132fa24606"],["/img/bing/20220710.jpg","6d703930c76864ca255ee233b3459934"],["/img/bing/20220711.jpg","52d26fd85cce02fe81941b2370394ff7"],["/img/bing/20220712.jpg","35578c037dde0084be284513054ffc7c"],["/img/bing/20220713.jpg","cb10896ff823ffd039fe2cbbb06e9543"],["/img/bing/20220714.jpg","5c32f54a1a31ccb8bd476739827d5ca0"],["/img/bing/20220715.jpg","2c4667491022ca4cd69f02400194cb3e"],["/img/bing/20220716.jpg","38e40a695f02688e91ac9625f737ed10"],["/img/bing/20220717.jpg","d1d16316ebaaf5a69afc97d399e39234"],["/img/bing/20220718.jpg","ad9d6b9cfdb65aa59cbf08cd35c302d1"],["/img/bing/20220719.jpg","7e78676c867708717f4121b7c8e22fd5"],["/img/bing/20220720.jpg","e77947cda0f3b0f3aba7114ef4726b49"],["/img/bing/20220721.jpg","62d7687100ca33535b6f61ce0cb0274d"],["/img/bing/20220722.jpg","70c08007bdf60fd727b6a4ac6b262c40"],["/img/bing/20220723.jpg","2fc8e7f8329a2ac6a0727f564f6960c3"],["/img/bing/20220724.jpg","07a2b3cd31e678d6964267b982a51282"],["/img/bing/20220725.jpg","658a65897972d0ad7e7fda92f85fcaa5"],["/img/bing/20220726.jpg","1726ab4c3a38b43402e0383f8f4a6a80"],["/img/bing/20220727.jpg","e2b13d00d4b7d23584849a48d93cfa93"],["/img/bing/20220728.jpg","9d807557556fd9f977e65436b83131c3"],["/img/bing/20220729.jpg","3ba8c5d0193aa112191c390504bcf15a"],["/img/bing/20220730.jpg","8dbbf811ba0eaf0206ada5b26e1fae8a"],["/img/bing/20220731.jpg","04d11a6d451d3443165e911acad65ace"],["/img/bing/20220801.jpg","95604620f55cd93be9f11cccc38e965c"],["/img/bing/20220802.jpg","2b6f4b0c23628b08515f728c1e708f0b"],["/img/bing/20220803.jpg","6e0a9cd1a3622db11e0383ac47c8e210"],["/img/bing/20220804.jpg","f86c09b8b145b5053c22c6451f8324f4"],["/img/bing/20220805.jpg","9edab558084b8d1b40c3cc50cd2a87d4"],["/img/bing/20220806.jpg","2496478ac9ffc2b1a3a9ad0eba0fc011"],["/img/bing/20220807.jpg","977f009f41a036388fcab612c8f8f800"],["/img/bing/20220808.jpg","3f7e54423dc6e9e8adbee6e0575e8c39"],["/img/bing/20220809.jpg","1682ca9ddb7faf4fc0b8b9e3aa9683e3"],["/img/bing/20220810.jpg","112e259ed2a738e07499284b2c8cc71e"],["/img/bing/20220811.jpg","f5d3109ad7977f9e9f9fe9137159d5ac"],["/img/bing/20220812.jpg","6373513b4ba60b9429f03bf7012b7184"],["/img/bing/20220813.jpg","d2956d1e65b700a2bf69bd4ddca1b004"],["/img/bing/20220814.jpg","6ae25813e762134767ea8f8c2619b223"],["/img/bing/20220815.jpg","b7f17b3ee43ab78737c899d7c93ad265"],["/img/bing/20220816.jpg","5e07bce953fdc890720749269ec9a030"],["/img/bing/20220817.jpg","32b6dd49100f15d8d37257fbc7470231"],["/img/bing/20220818.jpg","1a131ebb89e76393b5511c65d3cc126c"],["/img/bing/20220819.jpg","fa2f0906bec258b67301ed7702107098"],["/img/bing/20220820.jpg","f191f8dbdf4276461851415dc2001b02"],["/img/bing/20220821.jpg","926adc698639b10ca428aa0de5584e73"],["/img/bing/20220822.jpg","c9b380fa8198c0576db3c55d131399fa"],["/img/bing/20220823.jpg","015a70200e520fe120f53e3c05ecba50"],["/img/bing/20220824.jpg","02eae8952e7b0edbcd7ef8893bf511bc"],["/img/bing/20220825.jpg","20312bfe82da94747c3b4e38e124bea6"],["/img/bing/20220826.jpg","c25c2aa9253b6e28aa60c618cae7cd95"],["/img/bing/20220827.jpg","e39e3e1b9714d491a05718b0d400860e"],["/img/bing/20220828.jpg","2fe58758860e792289b44e9a157ada87"],["/img/bing/20220829.jpg","8627f373b05b2037d9e73c023ca6c6a6"],["/img/books/app-1.jpeg","2fa25545b56cd12488265106c47b451d"],["/img/books/app-2.jpeg","aab55eab15a4369de98a0dd3877013f9"],["/img/books/app-3.jpeg","2a3146520b5aee7377fab7d73716b657"],["/img/books/app-4.jpeg","090b4cac411e6abd1d0134b9e7a7cf7c"],["/img/books/app-5.jpeg","6fc48bfef4be0efdb472115ff490354a"],["/img/books/app-6.jpeg","3bad889f915c9a938741327db377a1f4"],["/img/books/app-7.jpeg","b5a44449bbaa411f065599f52e665bb0"],["/img/books/app-8.jpeg","463fc26c519920e0f47e82b012d5d71c"],["/img/books/best-weather.jpeg","fc8b5d2a2f80600dec331404b39b7ee5"],["/img/books/cartoon.jpeg","0eedd1bc35ac62876b60d6b44bcf746d"],["/img/books/first-book.jpeg","541f7d92f2e084eeb77c496c92ea86d7"],["/img/books/first-books.jpeg","8dd081248870f07b3c755404fc5f2572"],["/img/books/first-punch-2.jpeg","3c3ec7420d4674580036e55532578a19"],["/img/books/first-punch.jpeg","f063092afd09b734930f040e2bda9e88"],["/img/books/first-year.jpeg","424b3b74baa95f251fdff77e398c9fbb"],["/img/books/god-is-a-girl.jpeg","2deba7a4d7f141de6257de091d0a66bd"],["/img/books/grandmother.jpeg","13f126d7d741bcccdf41364a68933d0a"],["/img/books/green-hard.jpeg","a72f70456e29ec2af64fcf08431b0eee"],["/img/books/love-u-love-me.jpeg","d02b42d7f331dd1389af2d569f14f286"],["/img/books/new-book.jpeg","0becba82ec3b926f3df19f67f5d5ca10"],["/img/books/one-year.jpeg","e1b4db76c9ba51ed292f8e56850e5a88"],["/img/books/picture-secret.jpeg","a8898ad7c9a437d4831f95ca2ddc94c0"],["/img/books/punch-1.jpeg","7fa1a9685a48ce7ef5bb48f6aba6fb3a"],["/img/books/sister-1.jpeg","404ef853ed0afe1427b575c75d2cb41f"],["/img/books/sister-2.jpeg","98e79a118b203d25f9c4f84dc9be632f"],["/img/books/sister-3.jpeg","e87a851ed5da4abc7769f3a07025e83c"],["/img/books/snapshot.jpeg","940ce8727ed37392153764da7aa0a46d"],["/img/books/so-childhood-wrong.jpeg","45c996dbe56cb822b79d42f15beb0e7f"],["/img/books/tai-zai-zhi.jpeg","973c187140f3b776e1e415c84f26ed7c"],["/img/books/unsleep-1.jpeg","f1c802c0826e9a889ce10265310e04e5"],["/img/books/unsleep-2.jpeg","b76da2c3123057b2ac15dcc294bf4c94"],["/img/books/unsleep-3.jpeg","8a7d307dced043b9864f73f9ad91096e"],["/img/books/unsleep-4.jpeg","5710e84cc48ec1e081e106225950ec78"],["/img/books/unsleep-5.jpeg","89be55531b60140efe525b161a2da95c"],["/img/books/unsleep-6.jpeg","3e0dd9e696d7ef4a60f8eb9639807f81"],["/img/books/unsleep-7.jpeg","c54f302822f6e2d6b2f4ba2987f71345"],["/img/books/unsleep-8.jpeg","c2705d9075f3c60a777d2ec4c9b675c7"],["/img/books/unsleep-9.jpeg","fa069868a8a67ae2ffc2c37c02e3ebe6"],["/img/books/window.jpeg","3ef852de39fdd0b45c3e7b84d179e76a"],["/img/books/zheng-dou-fu.jpeg","025c24a83375a1fa5501757ec7d30931"],["/img/cat/dryer-1.jpeg","eb7ec7501c8694f6b1b7b24b3bef8795"],["/img/cat/dryer-2.jpeg","58727297cdf5319aed754e44e90b6c98"],["/img/cat/drying-1.jpeg","ec3f7a7e50422cc25f1d2765a85debdd"],["/img/cat/drying-2.jpeg","7fd5f8ac9a6e58e955ecfda2fefa3645"],["/img/cat/drying-3.jpeg","c8c7612dc434e0e2b9017f1e170b68df"],["/img/cat/lick.mp4","9d38fedfd9db116eb4342521089ae1cf"],["/img/cat/shelf-0.jpeg","4025838f8f2dc2ef1ddc36a47d85f3a2"],["/img/cat/shelf.jpeg","f5950b673ea02531212adc3daee29c70"],["/img/cat/shelf.mp4","06ca17765843cbb511ba6d9eb5a1244b"],["/img/cat/sleep.mp4","5d57b3bdc4d9e25b27cf7573a4e66486"],["/img/cookie/coke-chicken.jpeg","47d937dd7dfb3ee323ac1b99fdfd650b"],["/img/cookie/hong-shao-you.jpeg","09b03cd36d51b63fbb75a92d35c5d643"],["/img/cookie/kao-ji-xiong-you.jpeg","40284be116901805cf90563d04b73ff3"],["/img/cookie/zheng-dou-fu.jpeg","025c24a83375a1fa5501757ec7d30931"],["/img/cup-border.png","7225fdb1ca9b533e86b26ec22d807e1d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/math/math-1.jpeg","e3884e19573bb734ede8c05b5d659060"],["/img/math/math-10.jpeg","c573e4837d804b03f4c2e8f0ca4eedc6"],["/img/math/math-11.jpeg","f20fe5eba729785f4f388f9faa99fffa"],["/img/math/math-12.jpeg","9cca81c08f36e30fad2d776cfc624aad"],["/img/math/math-2.jpeg","818ab8a930af1dcc76478d3fc428e957"],["/img/math/math-3.jpeg","87123f2ed402a199ffb341ec074eb0a0"],["/img/math/math-4.jpeg","b5b0be7ec935de09c832d5ceba789eb1"],["/img/math/math-5.jpeg","b90742db2544f732d57c6936793a0eb0"],["/img/math/math-6.jpeg","57f8c8ad9f8a871a3483bb83aa1cde71"],["/img/math/math-7.jpeg","fb2f5bc68882f4ef074ff48fc1ac92ea"],["/img/math/math-8.jpeg","82ef7d7563a4af6a104ea74594061e6a"],["/img/math/math-9.jpeg","58aed1aacbca3826cf0b995f962dce34"],["/img/ps.jpeg","4e716c71826933bb3f15a23f865026f2"],["/img/pwa/README.html","9d751867bc6812a43fbaec8f87c50070"],["/img/pwa/android-chrome-144x144.png","ec2326283a9f06e5506a05ac0ccf6df2"],["/img/pwa/android-chrome-192x192.png","e908a1e11f9774c7d7f0bdadbe6e3062"],["/img/pwa/android-chrome-256x256.png","811b40f26c733d5a9af45b141fa44744"],["/img/pwa/android-chrome-36x36.png","726ef71fa73c833e49c04f4408224cb2"],["/img/pwa/android-chrome-384x384.png","d855ef67131f8b102e2086fcc960709a"],["/img/pwa/android-chrome-48x48.png","b379052fbaef55b8c1c6f0e0e7b7283c"],["/img/pwa/android-chrome-512x512.png","91e7b941a546a4eecee25acf2ce9bf50"],["/img/pwa/android-chrome-72x72.png","3782d7fac56df81f0e8577aac28236b0"],["/img/pwa/android-chrome-96x96.png","52ca25b3f9316b9d289b5f6ac8f154f3"],["/img/pwa/apple-touch-icon.png","ea37f5a2d17a7621b7d74e6ae02c7954"],["/img/pwa/browserconfig.xml","0c436f3d1d4ee9b27b122597a3fbc906"],["/img/pwa/favicon-16x16.png","9cad6a58e9b09be53771efe68296ef55"],["/img/pwa/favicon-32x32.png","3e07ca7a1868166115eea0607e651a93"],["/img/pwa/mstile-150x150.png","cf93ce3dd0dcd0b6bad69a0a75fe0104"],["/img/pwa/safari-pinned-tab.svg","da2a4cd0d33e6479f616636d2659dfc5"],["/img/restaurant/luxiaoge-1.jpeg","b6d52b95e295bfdad98d29e8692b0419"],["/img/restaurant/luxiaoge-2.jpeg","ec5be089c9ee1cd25a063ddea8898a4d"],["/img/restaurant/luxiaoge-3.jpeg","b9cd660b6ecbe0047dae81a8182b665d"],["/img/restaurant/luxiaoge-4.jpeg","b33db1b9ea1cfab23504aed0dc148e77"],["/img/restaurant/luxiaoge-5.jpeg","18a072099896636c496656472167c4b3"],["/img/restaurant/luxiaoge-6.jpeg","9f7873e05c95d965aaabc58835a8604c"],["/img/restaurant/luxiaoge-7.jpeg","81a449130148855fc048a6cea63de9c2"],["/img/restaurant/luxiaoge1.jpeg","ebb41b4376537d04798924ee53f168d0"],["/img/restaurant/luxiaoge2.jpeg","b0948ce9ae30c801bdb3a7cac5990fc4"],["/img/restaurant/luxiaoge3.jpeg","dae652625d911cbb61be688c3cf10c91"],["/img/restaurant/luxiaoge4.jpeg","3062a665025b13e975bce1ac67af389a"],["/img/restaurant/luxiaoge5.jpeg","a4c7ad5a37cd56aa4e34c1bd7c9ee6f0"],["/img/restaurant/luxiaoge6.jpeg","c0eeaeb622945eb6527019f406b59bba"],["/img/ski/ski-motor-2.jpeg","0141b9c5c5fa47ddf8eeec1c88f71542"],["/img/ski/ski-motor.jpeg","de7402f59e5ade55c9c92f7f7c224fbe"],["/img/wechat.jpeg","8a2a88e189277aeee82eb9a9a197d731"],["/index.html","6807f4271ba86af69279a9f848ea2526"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","c1065df610b5e2a2eae33c7c827fd111"],["/page/2/index.html","5ce4589f5722c0156e3635745a0f2998"],["/page/3/index.html","a72b5e29d1282e411130686aeea6664d"],["/page/4/index.html","5cf11c8f555f1c3cf839dab9b348e904"],["/page/5/index.html","dbddcf2c77383e145c97ad74699d1d50"],["/page/6/index.html","3ac52875fc96807036c8487c2e9eea22"],["/search.xml","04bc24c650d958d76bdde21c41f30578"],["/sw-register.js","4bb0a5fe2085d98afd2027259c2f4619"],["/tags/badminton/index.html","f593e8c815f5ca2f29f7cdc157942eb3"],["/tags/books/index.html","6ec313606e4759210378a225eab1ca36"],["/tags/books/page/2/index.html","16e55ab0a11b4e3ec572b78688108139"],["/tags/books/page/3/index.html","cbe9a6a38217e559d13a903531fb4319"],["/tags/cat/index.html","86de0137ad6aee4c58beb4f4a72d68e7"],["/tags/cookie/index.html","fd73dae2d27621d15fa661fd659928a3"],["/tags/daily/index.html","6bac8d1dea7bac953c808dcddd693638"],["/tags/git/index.html","0f1aab302e24d44956c963b1fa2a5a32"],["/tags/images/index.html","20620f33068720ba982e7bd0c636dc6c"],["/tags/index.html","937c09b3785517252db5155b8381d2b5"],["/tags/linux/index.html","252993fe3fb2e6a31a72bd7c56bc3d8b"],["/tags/math/index.html","7350596fdba7f27781127025e68de300"],["/tags/movies/index.html","d1df762568335f83882140718d4d5e40"],["/tags/musics/index.html","379904663c56a7430f3f60f2be6a419f"],["/tags/nginx/index.html","bb4e6e75beaa251e9f9c7718390350bb"],["/tags/ps/index.html","5c1b77c30f9a86acee723ccb24cff0c8"],["/tags/restaurant/index.html","ca92d301669646f9c2c353086b17ebaa"],["/tags/soft/index.html","328adeeb4381d77d6c7e0048b5627a5e"],["/tags/tattle/index.html","1dcb1ac8357a2118fa78ecb02044914f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"luckyu.com.cn"});





/* eslint-enable */
