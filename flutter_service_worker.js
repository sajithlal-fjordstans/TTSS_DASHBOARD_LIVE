'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5168a08510fcbc58649410dede1f09f3",
"index.html": "92fbdcf89e64499fa88ddaa72eeffea1",
"/": "92fbdcf89e64499fa88ddaa72eeffea1",
"main.dart.js": "7c8e2584ddb5531820374c3f6e09d5d2",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "6107a5c3159fc722ccc44a7887b2314d",
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
