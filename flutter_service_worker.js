'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5168a08510fcbc58649410dede1f09f3",
"index.html": "6eb95348b47c63073c432f671b9d6381",
"/": "6eb95348b47c63073c432f671b9d6381",
"main.dart.js": "7c8e2584ddb5531820374c3f6e09d5d2",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6107a5c3159fc722ccc44a7887b2314d",
".git/config": "e4172085f31e4e3babcbcb18a4444afc",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/952f980343c12a5b257c2afdad3f334ee7d787": "116aa0f958c0d3e0ee283643e0d35b2c",
".git/objects/59/a8fd789dbd809408bb607bedffe075c05e5c0a": "7705a58f3e891c1a8cdf27f4e76a2661",
".git/objects/59/664c57232dff7234d6f5ec48bd7075f55f314e": "a79a31bcfb5904c124e683e44dd3fc65",
".git/objects/59/3d65280c448c9b4b252dce4f94f5eb9e8f84fc": "3b5ebed3f3e8801a5e34a8e18a1a84f7",
".git/objects/92/98e5ea6ad91278170130a9ffd34ec51da9bcc1": "f8af7d0cde84ae4198a6b542e6d54c94",
".git/objects/3e/6c4d21dde237d284758e5b7a21b3b7d7438f39": "a916c0933d1eafa5811808bbf41f3b21",
".git/objects/50/387e3aa432bbda9a5ceba10e1ef2202d4ab741": "d4d0f64e76f9329e249b0e1852daa7a1",
".git/objects/03/f27c7e779968e666cef7fccf9d981e0224d298": "56dfba7470002c0a9a9a187eedc09308",
".git/objects/04/833b1a8b161fac13eea5e1c70e8eea8262900c": "4f0b96556b4ec850495902476cf92aef",
".git/objects/04/5f8779927cfc14edf98498352408ed285c6f36": "5d7d9e4eb1ceed18f54ad3ab3c450962",
".git/objects/6a/e2033e0f95cc0b24ddfab0d083233ac5ce2506": "86e3796354cd7b0916e70050ae01cf0a",
".git/objects/32/b65dcef2c404cd5396c0b8800bf6ef51ae71f1": "ce85c538a487b715b8534626f4a18db7",
".git/objects/32/b12ec2834f5285a0a694c6e61baf6bdf882d93": "545e97371681ac5fa50d06be08f90ce9",
".git/objects/35/232378bae1785b046655d378b4cf2ac44d2d25": "df2a3a8666b966361ccac2581412c557",
".git/objects/35/626d6ee50dd085053b311a80409c8698cb1851": "18282ea93e23fb1a27841a1bcd285643",
".git/objects/69/3ef4b69bd2163e987fa414f58df2a9234a1c0b": "ef7d1ff8206d5083f804f4c7763a30fb",
".git/objects/56/b15f7d3f6f1fa10032074a550df66c709eb6a1": "fa1a825ec41ebb6942634c769dbc078e",
".git/objects/3d/b20eee41006042873873706ba5a253c160572a": "6b2431b8fd2f1b9d700e826d1365007c",
".git/objects/58/e0fe71f1e755d5993ec1c571197277b9a4230b": "74b2815d82fec9ab33ef85bc268170fe",
".git/objects/60/dd06f1be2bf013a5e758c4e94a8569a27df8ab": "7013d9a504e89b70854e572a42490d5b",
".git/objects/60/4c6d465dec6d647bac55894686bdad60deca56": "815b7875cd4a39cf6f62eb89cb0e074f",
".git/objects/60/841a61cb998de2367a4291b3598a0ff1e55b94": "c5d5ae4b9183bcee3262b49f8887d694",
".git/objects/60/95a89260f8a316ed54322dca852207cc802499": "bcf41b4c48a1f0f79c0ad742ec99e12f",
".git/objects/60/aa1849b44c8b3efc12ca929b814055809589ad": "e60eeb66006734ad0fa46517df9e1d19",
".git/objects/5a/5acd1c0e88206cbc68a10ebcc583b3f6aeefff": "c9021e238139965ace4a28ce742857c8",
".git/objects/5f/726d82d4bde1045990aa4ead214dd60fc81509": "94a3a761b39de2cc4d25f03bcb81f7ba",
".git/objects/9d/c8e1e6be688f3da344316a84b00e5d92452b91": "e230ffe8d2743d64513c781a3a3ac150",
".git/objects/9d/62c453daaf4b21fb2dc25ebc235fcc37877b52": "613fd1d0262a5a5a04b11539c2dc0604",
".git/objects/9c/e4109176e9aa1ea54acec6d78dff4220175797": "5c7b9cb6d9c23e1418864e741d465c41",
".git/objects/9c/92f9b3d962852592bfe5c03cf3eeca86eed5cb": "530727c8f58ac315653271ba1d2dc93e",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/a3/be897ca0d0c99ebf298e08932db4b4a682b0a9": "f7e75d825bfa20e8085271709c16f5e8",
".git/objects/b2/cba1039e1cad4460fff6a261bbaea53278349f": "b8e6a15e80354838a1cb386b07ea6011",
".git/objects/b2/4903e7a20a3a30daf115bf7f0f6dd102865c3f": "e3e304580120a0427c4ecdd7f7e0637d",
".git/objects/ad/5a3203203a036707eddd381588772481084bf5": "7654754904fccf3671f02e35d67e7357",
".git/objects/bb/7100661753a9741379c63ba73e53bfbb950d04": "f574aeb67bb673fecc618beac483f0fb",
".git/objects/bb/47fe774fde019302b5dd47df3177ea60054023": "138a4d9458914339d29b9cc6b5f9061a",
".git/objects/da/fe64b48177471e3c287e9ca6a27c0421c7d639": "134b9234ea11a03e6919987c3136ce2b",
".git/objects/da/367917b24d2a37b93e31de24904bf27e99b21a": "1c69c8ddf13a5793c0f8290437179346",
".git/objects/b4/1b4b876f91cf5a58118652331768d0e79e91f4": "99b0281bc7c96d6a1a98d83622dab28b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/09c10687a753ec52b4d5877bc65f90574d4bcd": "7e3442910abee1ba688bd026f65c322b",
".git/objects/d6/26c01a2f71cf5574f70210e7726be4851fe1b2": "3e67a794ccfe709e63fe0ae8a8a3a32c",
".git/objects/d6/5a84fcafcaa5716d21895f4586380ae569e71b": "30f2db53af2f3681c62c8d9691876b6a",
".git/objects/ae/6c3139bd580c85c338e50d76ebe90e2f698fa5": "741bf4ddd9dcca86daedec546303e7f4",
".git/objects/d8/17b411386be2f1734fd407ad09cda6b97a5b56": "a3dfd2d876c61052dda1cd6d90ab6114",
".git/objects/d8/29b6a80470cbc73b0e9048be2be9e2ebf3895b": "453385a2c3fe0ca6d2f09aab6e1e6977",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/09d81826e68753356d758fd49d48bd0a6ff667": "0546996133173f46ac0a3b7e8671df05",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/3ae5321bced9f6af1ae2be9fb54bd2056d658a": "5f6b6c1623e0be9973327ce33dcd79c5",
".git/objects/eb/6e57937b577f118cd5536c95542062befdc862": "2383f4ec2833d235238167f4da124c11",
".git/objects/c7/e890cfdb1a057b03e62409820da6818b456d76": "fadc5ca93bd57213e6ac65ecd945f8a5",
".git/objects/ee/03e891781dfb34943f357638d3ae32c1e901b1": "6350fee8b5523bcc90b6488a6e7996e1",
".git/objects/fc/ae43f40bc264e495789b61715d30b86b820857": "0619626b58bb08c009e80d470df8d35d",
".git/objects/fc/a9ca47d57862e879eb354c98e6e75e06387ad7": "e2ec835388796989acc93e982caed3c9",
".git/objects/f5/4271e5667090c1c9660c2ca9220c792c34a0b9": "5d17e8e54278754875e1ddd48e914aa6",
".git/objects/e3/3b50f5e52d08ef15d313ea3efa6ae13f945755": "94a4307255364ebb793a8e9cc8e020fa",
".git/objects/ca/3d8fc207a01b1001ea6dc6fe6d708f5995c33f": "1977286dcd21b5a5fccda72a4da35008",
".git/objects/ca/bf4813b2882806e44e1b51868b0756aafe8234": "acaafffd644bf2bce91a080841e9d99e",
".git/objects/ed/3127ff096bc05bb4b66034227b3af17c839c0b": "dc41a0a12673e01f3225bc39e7b2e400",
".git/objects/c1/65caa4fac3673ff093a1b8a7ab638569af4446": "86e3f8e17a605b08387861b5deee810d",
".git/objects/c1/86778e08f17d795c10fb37271a69ffdd3aa0be": "e515dea6a1a248e439eb8adc0a069975",
".git/objects/c6/17e9ba7bbba4ff6cebacadba7db82e858afea9": "dcbeb6631e8fef8d63449331b8d2faa2",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/94e608b8107fbd9ccb5ee99f4b8ba37b8e1d29": "eb79720d5a3af6ac20b19797b753262a",
".git/objects/4e/33b3ffa454512c9139ed8e6737544145eace5a": "47b32b2453d09be26c5728de55e831f4",
".git/objects/18/890a591c78b38b49752e9eecd48612d6ce0413": "c3b3bed196deb66fe50ab0adc09ac557",
".git/objects/27/f14dd16c920c965f69cf01714b6a2c0b1b6e83": "2c5d2ca29209b5495c3acbdfa92a24e2",
".git/objects/27/376dab059f91422db0c78f433559b6c159c41e": "635318ed5f8fc8ff5b764b0e9c67ba04",
".git/objects/4b/9f7a2c69382b97375e0e46bb3780bd0b269e1d": "1c22c5e84d2966a233f4509524fdf4bf",
".git/objects/7d/9043aba2cc0374439df3d1e1a35ef6e419d99b": "b2028d2ffe890016c2aaaedffae5cc6c",
".git/objects/29/c5bbb9d77aad7018788451d7f83e7b62b02f9d": "0a4d6701fca28d0da1a978f20c6edce5",
".git/objects/29/36c632b9f916ecce9602ff3a458099c8503c30": "d57509220004c879f444193d95e80bcd",
".git/objects/7c/e199bbc3a34c054c0d541eda571ef20fefdbc5": "fe22d1049132c06eeec35ce507be9374",
".git/objects/16/709c937b79fab5b4f8d37c49e9a2b46e452567": "77539a54b50ad01f3108eab1d15ee0e4",
".git/objects/16/52df66e443028d4476af3159b842a15e900d5e": "8b9e42fbd37aed73105ef1fb563b0e0b",
".git/objects/45/6707c99642181b38c358e4c55d7761861fdacf": "072a96ffd2a74480096b36b84c10ce3d",
".git/objects/45/2d02107dacfbf59d877a19eca839e46b9770af": "eadac35f8177a9b5a87687591e8d2817",
".git/objects/80/d448697a9f857778e811afcccdb4388949c0a3": "0932e40e201aba035eebb99bf7b182b5",
".git/objects/74/8f301996cf0ad2c8c283b92035a5c89c92a89b": "68fc09bc0c752b47f906fa8808a4d5ff",
".git/objects/74/d4d72851986a22b285060ebfed413732cd29f6": "d7dbbbb1c45eb10d814ba4ee2bc20673",
".git/objects/1a/80d17605c50323f85e17f657549401f783964b": "662503d56b6672792c04eb37d028b256",
".git/objects/17/e9440cbf06a8ba02312383fd8e965a1014b7e9": "1ee5041f7bdc8bb22d35a326dc0c5b56",
".git/objects/17/a056e8157f1794c29920c0a43c550bdde06f30": "d6b896b9b2ece3328ab103d2beaa46fe",
".git/objects/8a/e183fe7988c105f971dcfc1e95300945cc3bd8": "a8e0cc292c69ae0ff8aa9e051c7df30f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/b2c30694eb657c4a8fbb1535ddf0dbeca6533a": "321af173acd46da757ec02b868ae84c8",
".git/objects/4c/eb2271b8e2a11b60299fa8451a45259961fd53": "0d99a4c00b2ba8c7fb7d11e9b84fccc4",
".git/objects/4d/eba0c790fb02fe8313be93379d22e8f7b39595": "cb2ad39953f1add1e348adb274310bbe",
".git/objects/75/aea52282b1efc5d62aede07c7a326fa6e746b1": "5cb8aedde7c93e462b0775e810f8e740",
".git/objects/72/daf84e2429b27d9b209bdc87a67f118d894765": "6d7b161c5c51d5a904cdd37bde7cf60c",
".git/objects/2f/9aa709ba4584646374608564c3d835d82ccdae": "cb394b92276228688382f1b5e90dfc82",
".git/objects/43/4943311b82d0f30771e8b717c6b23f16cd2e3b": "83f71f96b46102ccc9acaba214a09a11",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/f6b9febee87f2f003822eadf7c252c16fb5660": "23a0f0a97616376daf8e89c7a79313fc",
".git/objects/07/218ef37475357efd5ec4518333324e53d6c2f5": "3e12aae6521915e0c2e23eaaab5e4475",
".git/objects/07/9bad6e3f3d38618869c7a6239bbd2195d8a824": "cf83db1e369ece63eb48a200e77bd8d3",
".git/objects/38/33f662a57d208f1df1fc18d3814b60de46aa45": "6c0e50924b9ca4cd2e40d7ec1d7517f1",
".git/objects/38/5822c7af8766f55e6f2d63af495fe5d25cd39b": "b3884ea2a8df54f11b263702b032b803",
".git/objects/6e/d247319514a8be55d9f17c96f9d65e6198ac96": "5df607df93eaa4b307307a575d0ed778",
".git/objects/9a/6710a7c4680a401ebe6fc5427222c0f48fab55": "9eb6d72487babb857cbb9c3a5967c3e6",
".git/objects/36/ae61663763b8ffb10e22d22103b87983ed42d6": "2721d9f7448c727ea394848587859126",
".git/objects/5c/589e89cbcc60c1f3e67381c41c300041c7724f": "d5a3f1397f68e6041ba067a481874db6",
".git/objects/09/34a22a1a4837159e75383bf4bcd2313f6749f5": "86f99f142fca601f982559c58227bc31",
".git/objects/09/6ea220a9c7562be3cb1eb0b5616459b06a62d8": "036863578d58f2c5975b357c65e0f272",
".git/objects/5d/509b3784454e254e70d8ff72d9079749e00f3e": "2fec3397b07c02af0309824dcdfd8a46",
".git/objects/31/7f01215d8a203acbefc5befc232afc803cd87c": "a510a89f8e77f231dd6c1fd0ae311591",
".git/objects/91/0680a3b961570d1ad54c8139b1c7ac53526619": "97d69d24d5a629eed1e2f18d15528b40",
".git/objects/91/c7f7545206e997225e35ef1ca658dc327ef110": "eaf59c2390ff1473a5d0a26bd8f88f9e",
".git/objects/62/a0cac72a302b2edc42a7f305e777b780955615": "d02fc135d1a709a9724814efc0c567fe",
".git/objects/96/4cf8430dbbaa279cd96eeae8c39ce953935dac": "f623447b86376d4ba7ea63bb4d964f77",
".git/objects/5b/426765906c07d54cb39e1a46e4d18780822a2b": "f51bc8efd29c6aa48c7c73d95468200a",
".git/objects/37/8bfd0511dd8444556baf1c1b809c6b31b3b727": "b1201e48c274dd9f56c99c36db08d6ad",
".git/objects/6d/6ae06d099521469ca146c8051bb289afe0e431": "6dc31f6454311824343383e5e6446aab",
".git/objects/01/aa1a8dd9bf99e01a9f78eebbd7aed9b6e63f7f": "e23c43296fecd89c1040de2289c79008",
".git/objects/6c/6e22b5b31b128aa46351bc485b7b2c71fb4aee": "d0140a36b2923810255c9e9b64aedf84",
".git/objects/6c/0e9d67d8a7e6b7bea7f5aa6cb510f49725d06c": "71efda6a331dcae0c49393aea35c7d86",
".git/objects/39/a76acc9afb3278ae26a0ea3d23731ccc251b3d": "d0b725dfc86d0871983f018170b6e175",
".git/objects/99/83fb899a8c40fceaf854ca804cb55e794ebc6e": "fcfb4d6722b2b69e4964dad2b88325e8",
".git/objects/52/42a52162c3cec8ca79c5057c1695f2920740c3": "63109612e38d4b74ceb073e1065e89ef",
".git/objects/0f/ca17b3ff77498ec56af1e353b8357b92a6994b": "89887679864d83ac1c528b3977bf7b77",
".git/objects/90/9cf8b6ca481c427d12e41fcc6edede25db8ea5": "d73f7d31050178713296520b5e9f0583",
".git/objects/bf/cafdacdcff6736d9dfc4c32bdccda946e0bd50": "6703a5b1526fcdb953bced7c500454b7",
".git/objects/bf/16c61aa0e35bb1af784a1e251b3e3662ec0a6d": "c605f2dbf9e41574648c6f1bf30cf6d7",
".git/objects/d3/994bdbbf623fc992fb0a87aad3593a648bcf74": "98e7fdb4ca3c40d9dd2b6284b0d952f8",
".git/objects/d4/7265cc747483098c7856949cf37d5b01324da2": "fb8d6079aa3abf280bede6f44712892a",
".git/objects/ba/cd45a3166d1401cd8d146ad76db4b6f4c53655": "9bebf9bc72200dcc3913dfff38553328",
".git/objects/a0/fa07fcc926f167e6c2b512a06fc869c8db8ac9": "4136978e9328445eb93479bac138492f",
".git/objects/a0/10b4cc0fb7904d74702458c825047fbcc05d1a": "679dc7a881918e66a7d1fd33fc30d5a2",
".git/objects/a7/cae4386ce4b6b8a50a1c5e82040e274b416157": "698f0b9241d6c451334ba275697244e2",
".git/objects/a7/a9040ee4d2dcd40e607a9b8dbe700fcb0f3fa3": "2240bd378f137e4519fde355e654338e",
".git/objects/b8/4df98570b014b3d56f47a366ed9a8c9451b93c": "9210ce6b9a3c9519f28467b4365d6564",
".git/objects/b8/e91272cc56e20762d5fd9531ad51bdff847e10": "31cf7271544dd2d32ffede3d93e4d945",
".git/objects/b8/e2cce2cf67d0beb82eefbfcbdb276d826c5d23": "7783c87a23c86c3aa3fa11d5f7fc98a4",
".git/objects/b8/e0d109ff605a6be858caf7478026de2c7337b2": "39edf64cecaf91c00ec3afcf1c7060ca",
".git/objects/b8/fcdd3527bc42ea90a52246a3c3f4027a745d6b": "76e1708e4ad028acfe1b1af454395e09",
".git/objects/b1/2809081dbaa9f0a80c8bf27a9ce1e85548d80a": "6283bf977cf44c2ff604f42bb494b324",
".git/objects/b1/191d38171c9464fc756472e86052bd06c72c29": "3e169e925e033355f4b9eafeada57b89",
".git/objects/b6/5b8ec80da41aff23d100bf54fa6f1e3c2236f6": "d4de29cca82c3e9df1bc762ef9669383",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/e80fb40f8b19d77b4f85a2c94b5440a3bfd116": "0217fd34efb26e2cddbb59c466ec8277",
".git/objects/b7/d6ce72ba2aa52770ae33c0ec9ca38edee5531c": "828aac390216dde1c05bd87d13d18357",
".git/objects/db/9f1ae174fc6277e610d7b5fc1c24914c09dbed": "c027c577343bf21beaa672b9705033a8",
".git/objects/db/f559efb1a8962b4d86d94bd57d60201f7bc577": "6880b53ff99d350c1f76b4f321f14a02",
".git/objects/a8/92072976fa7555f9043f31d77b6ad2b08d22c1": "ac8a7447ef6c58325d2eab53cff5851f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b0/e7f9ef89bfd3c8b7e389bd13c47a1400c8c4e5": "5950ff85a0118635c434643cd0d84324",
".git/objects/b0/0e4ef9653bf6d5cae684394ddd3b8e58076378": "4f01d36c1129e5a4f309c91ab2a81db2",
".git/objects/a6/49e6fc5188b327e0415b6aa7aa125c536b57c1": "54180bcacc4aec0cc146304d0f8bb5fa",
".git/objects/a6/758e61600005c50d8d20f08312a5700cf1a16e": "613f32c222d3350dae9e9b1387ddcdad",
".git/objects/a6/7577c387e471bbc280e4cc45f0fe7303051705": "2b81d8825b2bcce6c549dc925e6793e3",
".git/objects/a6/ba9fa6a2871d3fe9ad40ff013ffb1b799a5ac2": "53eda1d76fcba8760b0076b624a13e18",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/9ffb5320dfae38daefce60822fa85688019d9e": "a8da6271a33a85957f6281d954526fd9",
".git/objects/a1/8c6a45d634c706be2182eec90c8688f4157201": "ad940286659d5c0476c08b67b3f6c6ff",
".git/objects/c3/d4c9481c9151b498ca43a2ff4a35dbd8226e79": "a2e6a8b9ae94be6cb6c22fcddb4e158a",
".git/objects/ea/95bc7a5943e4952492706367414fe92b9804a4": "2ecef465e22b854f5bbd5490599d96a3",
".git/objects/cd/9cc1f760c764228acf35398c6b620d40bb68ef": "7bbfd1f104db79e463d673c915cfde6e",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/f0/6586badc8f3cbbca07aa2fd9ce06f014282ad6": "dd874be0d9710b011cb66e2a74de75bf",
".git/objects/f7/83dde038f257508562a53a07954a7841e2f0f2": "9d04eda91466d7192f18be21bd10ed01",
".git/objects/f7/b3d040e0bedfa265371df8baa3a9bd1ac37f3d": "0b7e01480a649671fead541a5241da19",
".git/objects/f7/88b74e31b877bd57b6c65e3769be37cb109a32": "133d1ba6bd147acb243f34323b6540e2",
".git/objects/e8/c5b4cff099ec6d2ffafeee797a8fdc584b6571": "923ca37adf5922606cf5a1cf3a565722",
".git/objects/ff/0a8d358f529661e59bc97a0119af5165bdad6c": "484f0c8702a97dbcbfc24813bf72c9e5",
".git/objects/f6/defdc5a289f92af855320abfe79628bfff499f": "0d1bac91bd01068068259e0c255fbf34",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e9/f80b035f25ed4e7d3e397ba6c8a08086e2db0d": "34dd0fb63050a84b7001eb43b4624d70",
".git/objects/f1/b0e5ee32689433efb3a7aa779e68eb6fbab3b7": "662ceb31376e5154d4ac486470ae0fdd",
".git/objects/e7/15dd208c091e9cfbfcc7cac09549a1fbc18c4c": "e1811ddcd2112f549ea86d7a7a9e4c30",
".git/objects/cb/3d244d9ebd59532914ee3cc639a94376113c80": "7e19e02899381d0cd35b28b466baff2b",
".git/objects/f8/5c36160c5fe8bb97469e163b9df55ce6f94fbf": "cdbb05845984c65660f24fb2f0fe37dd",
".git/objects/ce/41567a0e89ea6bbb753f386fe3150712580bbf": "05623931325d916a8eb243ecd7eed99b",
".git/objects/ce/eb0bcc030260883d0433230ec57e177b5d6f44": "19e2a23a487de6a1c831e2bc9c6919c0",
".git/objects/46/8f0beda04714b37938e170268066c93801f35f": "36b190e2df521bc978173b5cf85c35be",
".git/objects/46/4ca06cce82b354605dd931747e5c895f0f9ae1": "9ab5665676288dc9eceff4de7a843757",
".git/objects/2c/7ecc77b22d32317d158fdd66cef512e173c940": "1512f853a3a7fd3318aec7c1ad209c75",
".git/objects/2c/11eb8eda61d79fea092f3c3ae307253cc81820": "0c67731d313b8f7f453247e9a1d2573f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/eec7e9f2b6277e6d33d417426373131704892b": "484c127e743b20abd00b4df658a595a7",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/32dfaccd5d2397d944999a8cd08ef3f6f16c90": "cff43af665d01ea37dbdd1a942efda80",
".git/objects/41/9d6b15dce8b4a771d5a2592715347ce929bd7b": "61019cb4f16e454276816fcd78ec1825",
".git/objects/41/f4d7d033279c6596164dbe9fea27fe8619bd49": "96e2c936ae2ee1aed20f3ed7394c1e00",
".git/objects/83/98a1b7792f1d8fd8dc87606a4862610c26c28d": "136e2532ca610ccb08caf7af284a268c",
".git/objects/1b/b5bd66603feef2cc2563d41bf4846e7be3f2e6": "f66a28c8c7b9c5d14136569c969901d1",
".git/objects/77/65b05bd0dfde9a4f736a6ffc60228aa97fc927": "df151434cea7064d756c9f8bb012c47c",
".git/objects/48/9e5416e6cca629d529f8ceffe38cf198cef45e": "eee7d17f7bb8f08d9d863eccd2cbd993",
".git/objects/70/9ecba3cc15b5934301282c1933826d8549c8c4": "2f1cbcaa76e29a5055b8d1b653eda340",
".git/objects/70/2a2d63daef490163eb4645e9ce072bdcad971a": "6a50c609e499be798c93bf3233f92b95",
".git/objects/70/c57457440fefc0c94763f5ed16681e025a6a0a": "7228e61baa8e63605802f6443b224a75",
".git/objects/84/7974c074406986976ebe91df5bedbbbcee9b2d": "cfc6a49b451c6bd1039f0a11c65cf4c9",
".git/objects/4a/137b5726f8c4837c41ddd17ff6e145d86b1692": "68831d0dcd57f43a1b1dbb2a9d77383e",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/8857814598b5fa3e5b4bb971c0352046a24b24": "f713243bec7f98474748929ca12578fb",
".git/objects/23/a7dfee285e44c3e48b00a0cddd85569bc8c3c1": "2132e8938012e1234e56e926b966572e",
".git/objects/23/d706c9b05e57a771fee495668d6db6f7436db6": "6e586f9a024001cab8adedf5f7ae80c5",
".git/objects/85/0b915a0187ace447cad6b508bf6115a427d213": "4a9fa4ab14d135b5e68ea1716ccd9fb7",
".git/objects/1d/5ae534a7ab6c48c7c055e9eca764d778dd604e": "2cb8cbc51343c2df990a295068eb5934",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/1c/25a92c68c65397a2a1af61812656afe77b9dd1": "65dc3810202637adff382586ac207385",
".git/objects/1c/318a7873b057ed1c6b2b6daa66a95c23ed1782": "9f95d53f05df156cc8699c8109bb86ca",
".git/objects/1c/72cec014cfb233aaa7a9ce83638696e382002b": "b0c9c1cc4282f1e5a5a4412222f11ad9",
".git/objects/82/cb238e33332f1637edd3f5fb8c800778cc4976": "04537472f6117fa600ac2242fe33214d",
".git/objects/49/e747c4fa7cfe22bbdd0fb780118680fc355a34": "fc9c8a9aa2ce7df6e863ab71889d305f",
".git/objects/2e/c6bde03d0c442d088bc04fa872aa880b09f2f5": "d451c5b84d10394f0ad9874bb9a8a18e",
".git/objects/2e/a23a5926cf26a1853b1f5bb02aba84f4388145": "a3b3f961632b8e9f13afc7d243ae2941",
".git/objects/2e/aa90bd935d941bb7ac28f851928695fa64aa4a": "b9140e64b33d5d3b5fd5a10a3044d6c4",
".git/objects/2b/676c0e9439da2e9c8fae05e7649a891b4ffee2": "af33cb63b2688b128f99cc73abde5e87",
".git/objects/47/c6cbb0f4f634d022de8c295feb74a48b5cb4d2": "489b58d8ca11ea9631b873f579bb1a89",
".git/objects/78/8c5d6b19d1b8884a4ba2483a4b9b8f3b3027a2": "e981474dbd7114b709fb1de1a0b69458",
".git/objects/13/e2578e4bc13ccdc7861023b222d79f0d7a07a3": "da41a20e975138a44e147c7d1ee277be",
".git/objects/7f/d51983cf2c3906bc7855109a1ae2f6a82b7a74": "219afd3ad627e198c00c178cb5676dbb",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2d7b3b34ad5755c975481cb4f6e53212",
".git/logs/refs/heads/development": "52061e9525ca9cdb9e2385ead6d792c5",
".git/logs/refs/heads/master": "cbaad03da8ed02efb0962fb431c21ca0",
".git/logs/refs/remotes/origin/master": "a8c1aad5943614f94cebb3686458e26d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/development": "65f0d7d520099a9a2e771f973f50bf4a",
".git/refs/heads/master": "65f0d7d520099a9a2e771f973f50bf4a",
".git/refs/remotes/origin/master": "65f0d7d520099a9a2e771f973f50bf4a",
".git/index": "753c1ecedd0648bf2aa771db28b52a6a",
".git/COMMIT_EDITMSG": "aa1066d729fce2bb8798336cc1007bae",
"assets/AssetManifest.json": "03e982a92d01608cd2d98c09ceb479a1",
"assets/NOTICES": "41bcfe20f1791b14d494bb81fd6f5c0c",
"assets/FontManifest.json": "1779567f4249c01d44a589b73b9ab570",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/icons/user_id.png": "a149cc757af2ee0206ef900bf183353a",
"assets/assets/icons/login_background.jpg": "0808e3df480b692c4524ab69f634563e",
"assets/assets/icons/ad.png": "93638c46b987022ccc8dd47371c014d3",
"assets/assets/icons/download.png": "75c7c0595d1d0eaa79e05109d0746f62",
"assets/assets/icons/ttss_logo.png": "1c00b9fd24a007867eab3e574f154096",
"assets/assets/icons/mail.png": "6a2522c9dabe030ced91919e00055883",
"assets/assets/icons/created_by.png": "19122efeb6461acb926bf8b861191ee9",
"assets/assets/icons/ttsb_logo2.png": "df280e3022683eae308f1a24d127da02",
"assets/assets/icons/plans.png": "326dd53b5314777a9f0a57f3ae4a94d7",
"assets/assets/icons/purchase.png": "bf21f371e5dba77c15fb84cd1db22880",
"assets/assets/icons/account_created.png": "9bd8525c01913547373d0c0b797c2faa",
"assets/assets/icons/2.0x/user_id.png": "5655466752a6b085e3b3f18b2af0396a",
"assets/assets/icons/2.0x/login_background.jpg": "8a41cbbd96770b477ef3756b7af692ad",
"assets/assets/icons/2.0x/ad.png": "7262632431a2c618a5224be2660ae9cf",
"assets/assets/icons/2.0x/download.png": "4a3e23acaf15c7f61cb91dc567aace29",
"assets/assets/icons/2.0x/ttss_logo.png": "c8babe5b96f761dc7a18c97761c34f6b",
"assets/assets/icons/2.0x/mail.png": "0584e2e2edaf95377ae008597954548a",
"assets/assets/icons/2.0x/created_by.png": "850a0a3097310fe2bd33dc102609a9e7",
"assets/assets/icons/2.0x/ttsb_logo2.png": "7a46174e1afd03a1cd9a333a6c757da0",
"assets/assets/icons/2.0x/plans.png": "03b6a5c6ab108fbd7fa36e4aa5d37f3b",
"assets/assets/icons/2.0x/purchase.png": "34ed45b14c6d72aacf5ff965532e05dc",
"assets/assets/icons/2.0x/account_created.png": "11a6841224295d14b326e23afacddd02",
"assets/assets/icons/2.0x/ts_logo2.png": "afc9847c3f84387a426fad5cd76200e0",
"assets/assets/icons/2.0x/produced_by.png": "e28804589fa514e8ab2ac2cefe5cf95a",
"assets/assets/icons/2.0x/artwork_by.png": "0f8c10a419aa11a9647d652e1aacd025",
"assets/assets/icons/2.0x/user.png": "325d25af4cba17b2974a94c649a650a1",
"assets/assets/icons/2.0x/track.png": "51605a825f7f018c21aa8503f5632820",
"assets/assets/icons/2.0x/subscribed_on.png": "e2db9a3f3a34649c8e96781c4f8b7540",
"assets/assets/icons/2.0x/mystories.png": "20f02d3e5964355d99dd61efb13b0933",
"assets/assets/icons/2.0x/users.png": "c23dd5dd4501d530b977b0fc544fd04a",
"assets/assets/icons/2.0x/price.png": "72bf39f8cb8bc7639869e148d0ecc92d",
"assets/assets/icons/2.0x/ttss_logo2.png": "af71a02b491f2478f96c3a5b9be24ff6",
"assets/assets/icons/2.0x/subscription_status.png": "e6d8042702dae623422c05d56bebdd17",
"assets/assets/icons/2.0x/pause.png": "af401f8fb42db978dfd501f380a8ed2d",
"assets/assets/icons/2.0x/expire_on.png": "432a4465812f3dd09f0cd969e6ce27c8",
"assets/assets/icons/2.0x/narrated_by.png": "7a5549407d93e68c589a5e5c1345c629",
"assets/assets/icons/2.0x/stories.png": "59db4d6880622c3485f762395489c7d6",
"assets/assets/icons/2.0x/description.png": "938c90e1504c7769fb83dff59cc998a8",
"assets/assets/icons/2.0x/filter.png": "1f950a0dd20cb9fb317dd27f12a56cc3",
"assets/assets/icons/2.0x/marketing.png": "7ef723912656c99f8893e8240e56519a",
"assets/assets/icons/2.0x/privacy_policy.png": "e6402e114d9d70273f80f16812280bdb",
"assets/assets/icons/2.0x/composed_by.png": "d1d58a09a51e303e080741b652cbaebb",
"assets/assets/icons/2.0x/sort.png": "be493c8ca98f657234cab09543a497aa",
"assets/assets/icons/2.0x/pending_otp.png": "7e1d013d0c621f22c6ed9cd7bc9df789",
"assets/assets/icons/2.0x/phone.png": "d547ff0f5dbafd62ebd7778e310e6289",
"assets/assets/icons/2.0x/upload_image.png": "0fa994e763977c8162f872b58269f44e",
"assets/assets/icons/2.0x/account_modified.png": "72d0167957c413e4c8087ef9fcbb6f3d",
"assets/assets/icons/2.0x/ts_logo.png": "4514f400252c13adb7afdb60a049f864",
"assets/assets/icons/2.0x/purchases.png": "7673f6b93a55753345334141809177bb",
"assets/assets/icons/2.0x/contacts.png": "2b43421bd428f4a534572c0712e0d43a",
"assets/assets/icons/2.0x/ttsb_logo.png": "afa82ea740b25d3d761b73166df81506",
"assets/assets/icons/2.0x/play.png": "95ad53021d1410e8e2cf226bb2423ddb",
"assets/assets/icons/2.0x/countries.png": "068d2aa28843d03650d5ffcf1fd93a37",
"assets/assets/icons/2.0x/subscibed_plan.png": "ea03e72969a7c73a67c3d5122981830b",
"assets/assets/icons/2.0x/duration.png": "5b84197347e44f354dc10aaba32481f8",
"assets/assets/icons/2.0x/release_date.png": "50056754f4da67151db29b32f22b72f0",
"assets/assets/icons/ts_logo2.png": "968a8f1c413c47fbc62566609e7aeb20",
"assets/assets/icons/produced_by.png": "5cb1145279a70b4fbcd91984a3a2068c",
"assets/assets/icons/artwork_by.png": "d899bbacf061b52fac4f618e63d801c2",
"assets/assets/icons/user.png": "44f44b799b1ee9355927fc459ee8977c",
"assets/assets/icons/track.png": "e3f6bd8dee61d4ceb8d8eac611a7297a",
"assets/assets/icons/subscribed_on.png": "3fba12d9d7587fa5b7c11e59bc6e97d8",
"assets/assets/icons/3.0x/user_id.png": "6b44bdd4deca2e147f8f88a6fdf3c7dd",
"assets/assets/icons/3.0x/login_background.jpg": "b2192f7d9694a4874e5225003c67effe",
"assets/assets/icons/3.0x/ad.png": "e3abe7fe41ed86a9ec0a296fbc3e9e00",
"assets/assets/icons/3.0x/download.png": "544b15d5e14033fc4e1183821a8187fb",
"assets/assets/icons/3.0x/ttss_logo.png": "cb097c960076e4793cdba4d68537137e",
"assets/assets/icons/3.0x/mail.png": "77f4971a07792f7878f4de7dc7d07161",
"assets/assets/icons/3.0x/created_by.png": "b618ff8474e926a77da525ce2b6b204c",
"assets/assets/icons/3.0x/ttsb_logo2.png": "70a40812ac2731d4765e058f01774c9a",
"assets/assets/icons/3.0x/plans.png": "22cf895ba3871b30cb6c8e17273f83b3",
"assets/assets/icons/3.0x/purchase.png": "6cc56b45a4f7c61ec54e494ec3bbd23a",
"assets/assets/icons/3.0x/account_created.png": "00739c88b49643d1193035c8978bb433",
"assets/assets/icons/3.0x/ts_logo2.png": "b90dbd4354d1998096b21fdb0077f1ea",
"assets/assets/icons/3.0x/produced_by.png": "2314fb779bba5f3f267496a2679a3c8e",
"assets/assets/icons/3.0x/artwork_by.png": "805d62ae775dc1f3b792037d3d0917bf",
"assets/assets/icons/3.0x/user.png": "6dab38a047576ef1820be28876092caa",
"assets/assets/icons/3.0x/track.png": "8e883ea8e971828144f5b89c0c1e2d20",
"assets/assets/icons/3.0x/subscribed_on.png": "309ddeb9a1a54732ac6322b530b4d443",
"assets/assets/icons/3.0x/mystories.png": "ba0e2c868fc25f057d861e8e579e1826",
"assets/assets/icons/3.0x/users.png": "85521d88278d67394fa0ec945f488faf",
"assets/assets/icons/3.0x/price.png": "b25f5c1d23072a36dea5570c669af330",
"assets/assets/icons/3.0x/ttss_logo2.png": "f1877055555bec4efbe51580a08d35bd",
"assets/assets/icons/3.0x/subscription_status.png": "9b9cb47b7425e707141d5a1610f9306c",
"assets/assets/icons/3.0x/pause.png": "ad350829cbe49d1a03572d128ddd1734",
"assets/assets/icons/3.0x/expire_on.png": "b3a3c67e59f87a8f4ea72d83907b4307",
"assets/assets/icons/3.0x/narrated_by.png": "09b56aa14deaa4671596378627147453",
"assets/assets/icons/3.0x/stories.png": "385aa07a31be368ae23e707c2182a1c5",
"assets/assets/icons/3.0x/description.png": "2d62fe935ef582577ecd082d9f04e7cf",
"assets/assets/icons/3.0x/filter.png": "5712b9fb9647e9a1dbefc7a4f1ac4326",
"assets/assets/icons/3.0x/marketing.png": "eede8819566e78cfea81d25ac2bb4550",
"assets/assets/icons/3.0x/privacy_policy.png": "1eb2f9a04a8aff25d4b3937229c827b5",
"assets/assets/icons/3.0x/composed_by.png": "23a8b465c33629bc1805049e854a056b",
"assets/assets/icons/3.0x/sort.png": "2ae947c1651de533af39c00525a98201",
"assets/assets/icons/3.0x/pending_otp.png": "a8e1501f7e421d4ccb2abd6cdc61d799",
"assets/assets/icons/3.0x/phone.png": "3df0dddc3457471431884894e17ff840",
"assets/assets/icons/3.0x/upload_image.png": "cb6b8e2e265dba5639af23f428a60278",
"assets/assets/icons/3.0x/account_modified.png": "4beef9998a04858ad85b3425b8a675f1",
"assets/assets/icons/3.0x/ts_logo.png": "d800d301c6f5bf2a7526b10c274a149a",
"assets/assets/icons/3.0x/purchases.png": "9d495bdd988ca59f10547c672adf13d8",
"assets/assets/icons/3.0x/contacts.png": "5ffb43f5cc9106b74c8002bd7885afcd",
"assets/assets/icons/3.0x/ttsb_logo.png": "742309bb3be4ed10d0863a07c7419f1d",
"assets/assets/icons/3.0x/play.png": "7db801fc4f39e8da4bb42732858124aa",
"assets/assets/icons/3.0x/countries.png": "ed09c3895a02b4f4fe5299b10984111d",
"assets/assets/icons/3.0x/subscibed_plan.png": "4ac04b67beef77a412896c57a240664f",
"assets/assets/icons/3.0x/duration.png": "1fa3aa98625645a11941088361e3a198",
"assets/assets/icons/3.0x/release_date.png": "599060e56ade0d8e4d7843f5b35cd288",
"assets/assets/icons/mystories.png": "64dfe9b7819320c5cd37f3bf5644f27f",
"assets/assets/icons/4.0x/login_background.jpg": "2da82bbfb54f8f8b99835f764a30d4da",
"assets/assets/icons/4.0x/ad.png": "956ca7a40f59d1f58eaf1965ea5e7f46",
"assets/assets/icons/4.0x/download.png": "2ee5b90e57abf5ac1cd63a64ffbb0f8e",
"assets/assets/icons/4.0x/ttss_logo.png": "eade27a092a48ba5ef8ef64194a4b5bd",
"assets/assets/icons/4.0x/created_by.png": "af9f5a9aa14faed7b0e64b0c6daec456",
"assets/assets/icons/4.0x/ttsb_logo2.png": "6ab3ca8729b772f1167e8c1d34017da5",
"assets/assets/icons/4.0x/plans.png": "4f4b0f843b1f82655eda4f65f3eebf96",
"assets/assets/icons/4.0x/purchase.png": "33e19240054c85c20fcace293696baa3",
"assets/assets/icons/4.0x/ts_logo2.png": "1b894eaec08ea254f8bb27d7e0f2df37",
"assets/assets/icons/4.0x/produced_by.png": "9bf906b63a67f16c3e05cf95a915c03b",
"assets/assets/icons/4.0x/artwork_by.png": "c3ed4985ca8d1511fb8ba58bd01019fe",
"assets/assets/icons/4.0x/user.png": "d130534692a86a7d65a8660811d912ca",
"assets/assets/icons/4.0x/track.png": "7ba0826e10428019a6ca751348ab1fdf",
"assets/assets/icons/4.0x/users.png": "25f29290259b7fc1de0a548d9d777f9f",
"assets/assets/icons/4.0x/price.png": "0a15f4bcfed4581004dca8050ed9829a",
"assets/assets/icons/4.0x/ttss_logo2.png": "e00accd6b621897288ed2e03a4dbc859",
"assets/assets/icons/4.0x/pause.png": "db94d93babbf6ebd5a3a02fd14cf20d9",
"assets/assets/icons/4.0x/narrated_by.png": "78cb8e8665a09110eb5911e809bfb7cc",
"assets/assets/icons/4.0x/stories.png": "c4845182062af9dafa750a5c7655088e",
"assets/assets/icons/4.0x/description.png": "ac711198625a69acd6b40478fd95cf28",
"assets/assets/icons/4.0x/filter.png": "4f54845e2dac91f598802f46c2cf2cfa",
"assets/assets/icons/4.0x/composed_by.png": "92fd01ab97881497392cf170dbcbd613",
"assets/assets/icons/4.0x/sort.png": "be4a1cf8f82357d176fb33fbc2dda339",
"assets/assets/icons/4.0x/pending_otp.png": "37b437d14e0b72efe703826d986a74d3",
"assets/assets/icons/4.0x/upload_image.png": "34686b3db265fcbaeb4ca6efb0238778",
"assets/assets/icons/4.0x/ts_logo.png": "70ad17f8808c1fef7001a9cf1527c589",
"assets/assets/icons/4.0x/purchases.png": "a7056305c38b16c556e9d9931668dfb2",
"assets/assets/icons/4.0x/contacts.png": "218b10157775baad8d8770e0cfbf4ff4",
"assets/assets/icons/4.0x/ttsb_logo.png": "a7d9c9ff4ed61c25f2eda6e4e47eef73",
"assets/assets/icons/4.0x/play.png": "09532a2312e15a95a30b544516d87dde",
"assets/assets/icons/4.0x/countries.png": "7dcb74eb9fdefd1c24ad32f7a6cb390d",
"assets/assets/icons/4.0x/duration.png": "99bcfdd0d67fb9c142c3a874ec748415",
"assets/assets/icons/4.0x/release_date.png": "205725ab391baaaf7b11bc68ab9917f9",
"assets/assets/icons/users.png": "204611c0f49f2a8c85c081be180411d8",
"assets/assets/icons/price.png": "c94850c0e87299ec1d673a9539480bf7",
"assets/assets/icons/ttss_logo2.png": "d438f469e66e92d83f05bcd977282cbb",
"assets/assets/icons/subscription_status.png": "92ebf78e9a18c568f553004d0916c001",
"assets/assets/icons/pause.png": "37f5da77199d1537c88aee432cc654b8",
"assets/assets/icons/expire_on.png": "b29d4b39131bdf21094641e6a739cf30",
"assets/assets/icons/narrated_by.png": "244e7295bd5bcd5b0050d9b961178a98",
"assets/assets/icons/stories.png": "71914722af145d263f019e3ed894325e",
"assets/assets/icons/description.png": "fcebee0c1ed09d292303bae7d660a0ed",
"assets/assets/icons/filter.png": "8a23b1303be6f71ada0804e8777446d0",
"assets/assets/icons/marketing.png": "b1849cecc60a18c65c43aa9a30f9f733",
"assets/assets/icons/privacy_policy.png": "3bdf5fa630d53474d7b76c0a77f60554",
"assets/assets/icons/composed_by.png": "e623cb8f89ac516d4c06c4af7f6c2795",
"assets/assets/icons/sort.png": "0e9244b110d4b556ede8943a15bfa649",
"assets/assets/icons/pending_otp.png": "9ea7d0d0dd802174418e014fce254149",
"assets/assets/icons/phone.png": "6a4c94675c5198fb7ccd3838db05f956",
"assets/assets/icons/upload_image.png": "3c3501c5e5468888f875fe20723e8ea3",
"assets/assets/icons/account_modified.png": "31f04af86d94ae52890ae8f437996b01",
"assets/assets/icons/ts_logo.png": "c903950f695aef7942902b16644d2ed0",
"assets/assets/icons/purchases.png": "c9912fc186f58c66d9d4e43736cb5a80",
"assets/assets/icons/contacts.png": "c2727e1c38c53b49dd4452d50c55daa0",
"assets/assets/icons/ttsb_logo.png": "d6c61ba6ebf3e00c7300be9f43d83bda",
"assets/assets/icons/play.png": "e925a16df27c39ea2b6f4d25866a80d9",
"assets/assets/icons/countries.png": "13b49b48a4b4abe3a878ad38b81b7303",
"assets/assets/icons/subscibed_plan.png": "4f1f396d5609bcf82953ab93f57fc1b8",
"assets/assets/icons/duration.png": "552b5435c1d62b9679c860f6a154a96c",
"assets/assets/icons/release_date.png": "7816513cc539eade5e1edd5cc9d7c5df",
"assets/assets/fonts/Circular%2520Std-Regular.ttf": "860c3ec7bbc5da3e97233ccecafe512e",
"assets/assets/fonts/Circular%2520Std-Bold.ttf": "961a181da27e7cbc072ec2fb5bbfe2a9",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
