'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "99a7f14ee2e3710738a3b51d2c0867b9",
"assets/assets/page-1/images/arrow-icon.png": "099abf13e57f670285bfa03fcefbbbf5",
"assets/assets/page-1/images/arrow-right.png": "31291064998d3bc7dc656fd9c777118e",
"assets/assets/page-1/images/auto-group-x52d.png": "71f319ab1d575cf0d8ce4944122c2674",
"assets/assets/page-1/images/call.png": "0b7b516aff44af6c14ac4886d5800c11",
"assets/assets/page-1/images/carbon-phone-3DX.png": "67f94356b195a5c143a6e02a8bac3efc",
"assets/assets/page-1/images/carbon-phone-G1b.png": "67f94356b195a5c143a6e02a8bac3efc",
"assets/assets/page-1/images/carbon-phone-V1X.png": "67f94356b195a5c143a6e02a8bac3efc",
"assets/assets/page-1/images/carbon-phone.png": "67f94356b195a5c143a6e02a8bac3efc",
"assets/assets/page-1/images/coche-azul-movimiento-velocidad-estilo-estiramiento-removebg-preview-1.png": "b30fc80ba2bf7cad343e515aca63d98a",
"assets/assets/page-1/images/default-marker-component-WaR.png": "4b8ddd61b82bbe673afbd7d5ae7ccc56",
"assets/assets/page-1/images/default-marker-component.png": "4b8ddd61b82bbe673afbd7d5ae7ccc56",
"assets/assets/page-1/images/estrella-lorena.png": "fbf7ebc59a4dc79563c725423d42cdfa",
"assets/assets/page-1/images/facebook-5Df.png": "a479390b29c2cd1655a34a028895a8ef",
"assets/assets/page-1/images/facebook-CT7.png": "530fc264e543ae387598d68e3cf93d7a",
"assets/assets/page-1/images/facebook-s5P.png": "27bfca16e4171fed9a48baed2e12ef18",
"assets/assets/page-1/images/facebook-Tvd.png": "530fc264e543ae387598d68e3cf93d7a",
"assets/assets/page-1/images/facebook-uHX.png": "27bfca16e4171fed9a48baed2e12ef18",
"assets/assets/page-1/images/facebook-vqb.png": "27bfca16e4171fed9a48baed2e12ef18",
"assets/assets/page-1/images/facebook-WwX.png": "530fc264e543ae387598d68e3cf93d7a",
"assets/assets/page-1/images/facebook.png": "27bfca16e4171fed9a48baed2e12ef18",
"assets/assets/page-1/images/icon-calendar-check.png": "eb8c4a7d473513379b78484693f26076",
"assets/assets/page-1/images/icon-hand-holding-heart.png": "cf43ca4a22ea7ce0642918339853a5fb",
"assets/assets/page-1/images/icon-handshake.png": "872b74c642098ea6b069cb8bd8eadd12",
"assets/assets/page-1/images/icon-paper-hand.png": "c4376d30a10b4763df96f1d5a14fe920",
"assets/assets/page-1/images/icon-user-clock.png": "1eb2da1543be6de21a52d69e6d840ee7",
"assets/assets/page-1/images/image-29-3cZ.png": "4270401d5ee1dc3b8f63c9999f63b8a2",
"assets/assets/page-1/images/image-29-7yo.png": "4270401d5ee1dc3b8f63c9999f63b8a2",
"assets/assets/page-1/images/image-29-AUd.png": "4270401d5ee1dc3b8f63c9999f63b8a2",
"assets/assets/page-1/images/image-29.png": "4270401d5ee1dc3b8f63c9999f63b8a2",
"assets/assets/page-1/images/image-31.png": "3d5d61475181c50c8d11552717fe8349",
"assets/assets/page-1/images/image-32.png": "945b378cbf44aa48e93b6ed8d4ff8e3f",
"assets/assets/page-1/images/image-33.png": "76588925778920548c608ed6017a74d6",
"assets/assets/page-1/images/image-34.png": "9277186ece0566d8cb09f40f99b6be0b",
"assets/assets/page-1/images/image-35.png": "504dacd1acc3c59053c706d2797b9693",
"assets/assets/page-1/images/image-36.png": "b7d7265a56fba2239159992f97caee45",
"assets/assets/page-1/images/image-37.png": "8b6cb1c86fa90d3170da4fbf949139ae",
"assets/assets/page-1/images/image-38.png": "8a65c81d6d0b57d52d377af86a996491",
"assets/assets/page-1/images/image-39.png": "baaf5bd6adb2b1344b13d9499cc8fa9c",
"assets/assets/page-1/images/image-40.png": "73f8a999c1077c10421a696a21065801",
"assets/assets/page-1/images/image-41.png": "de3d214b5ff3b874899f2db1dfb0cace",
"assets/assets/page-1/images/image-42.png": "270bfdbc4e180809566d6e2e5b2107dd",
"assets/assets/page-1/images/image-43.png": "22d451c471db438e2381714987da0245",
"assets/assets/page-1/images/image-44.png": "c3b27e276073e172309b14fdca608d2e",
"assets/assets/page-1/images/image-45.png": "30c522aca4428f65e27c9098a5df89c4",
"assets/assets/page-1/images/image-46.png": "544f04ad9d99c71657ca507ffa3bce77",
"assets/assets/page-1/images/image-47.png": "82e175d3d5a4f9c2dd6007585e2632b5",
"assets/assets/page-1/images/image-49.png": "e4e9544abe7826d28c7dffb13e9faad6",
"assets/assets/page-1/images/image-50.png": "6004aaaad255a97a7b6198aa3935590e",
"assets/assets/page-1/images/image-51.png": "d2c0b824fdf1216cb51ea394d2e892be",
"assets/assets/page-1/images/image-52.png": "a56c3a3fa74712dd80e317897712a99e",
"assets/assets/page-1/images/image-53.png": "9606b9471ee254dd5663b3f081861491",
"assets/assets/page-1/images/image-54.png": "e8c00a72a99db8b4f0b8f391189021c9",
"assets/assets/page-1/images/image-56.png": "e621a492454b3a11bbade0cf77d6292c",
"assets/assets/page-1/images/image-6.png": "5bd0ae98bb8563aace2ef256365dfaec",
"assets/assets/page-1/images/instagram-bHP.png": "d59b14651492ce5bf9f74838146b5d19",
"assets/assets/page-1/images/instagram-h8y.png": "0c0b187313ecad108b3471a45b542aaf",
"assets/assets/page-1/images/instagram-jch.png": "9bef6edf31a8eaaa4ff253d76cfa22a4",
"assets/assets/page-1/images/instagram-QKw.png": "56e3169281c129272b532ee293ff4607",
"assets/assets/page-1/images/instagram-rjF.png": "515b5d9bc3389234f18ab10c242ae0d3",
"assets/assets/page-1/images/instagram-wXB.png": "d59b14651492ce5bf9f74838146b5d19",
"assets/assets/page-1/images/instagram-zzq.png": "d59b14651492ce5bf9f74838146b5d19",
"assets/assets/page-1/images/instagram.png": "515b5d9bc3389234f18ab10c242ae0d3",
"assets/assets/page-1/images/linkedin-wPK.png": "83b994da5b5bd05c11e54f0545f9d30f",
"assets/assets/page-1/images/linkedin-xC5.png": "83b994da5b5bd05c11e54f0545f9d30f",
"assets/assets/page-1/images/linkedin.png": "83b994da5b5bd05c11e54f0545f9d30f",
"assets/assets/page-1/images/logo-EwF.png": "42aafacc3f980ae05c4f38507280b094",
"assets/assets/page-1/images/logo-i3w.png": "42aafacc3f980ae05c4f38507280b094",
"assets/assets/page-1/images/logo-q5X.png": "42aafacc3f980ae05c4f38507280b094",
"assets/assets/page-1/images/logo.png": "42aafacc3f980ae05c4f38507280b094",
"assets/assets/page-1/images/mail-3Am.png": "5c101ae528e358d5d9cd3ea07522529e",
"assets/assets/page-1/images/mail-bNd.png": "5c101ae528e358d5d9cd3ea07522529e",
"assets/assets/page-1/images/mail-Jhb.png": "5c101ae528e358d5d9cd3ea07522529e",
"assets/assets/page-1/images/mail.png": "5c101ae528e358d5d9cd3ea07522529e",
"assets/assets/page-1/images/mailoutline.png": "8594f0bb339f7b55c936e4589eafc4bd",
"assets/assets/page-1/images/map-pin-Bho.png": "debcd439bb09b3827a13edf934a54eb0",
"assets/assets/page-1/images/map-pin-dhf.png": "debcd439bb09b3827a13edf934a54eb0",
"assets/assets/page-1/images/map-pin-iRj.png": "debcd439bb09b3827a13edf934a54eb0",
"assets/assets/page-1/images/map-pin.png": "debcd439bb09b3827a13edf934a54eb0",
"assets/assets/page-1/images/phone-call-4Ld.png": "009f0ac861eed8adab8eed99654cb65e",
"assets/assets/page-1/images/phone-call-a69.png": "009f0ac861eed8adab8eed99654cb65e",
"assets/assets/page-1/images/phone-call-k3F.png": "009f0ac861eed8adab8eed99654cb65e",
"assets/assets/page-1/images/phone-call.png": "009f0ac861eed8adab8eed99654cb65e",
"assets/assets/page-1/images/rectangle-45.png": "a3d083075ffd0d5f43317ec18c7e76ea",
"assets/assets/page-1/images/rectangle-46.png": "9f56d7da77b949833b164fcc89e6bfd4",
"assets/assets/page-1/images/rectangle-47.png": "9f56d7da77b949833b164fcc89e6bfd4",
"assets/assets/page-1/images/rectangle-48.png": "224aec0dfd0655a9472b59a0ea8760d9",
"assets/assets/page-1/images/rectangle-49.png": "6aab8af4938d3ea425ecde6ec6dfde7b",
"assets/assets/page-1/images/rectangle-50-4Jh.png": "6c9c8c2446441695a17900373136b685",
"assets/assets/page-1/images/rectangle-50-YHT.png": "62c1a23a034f51e034abdc0afceab326",
"assets/assets/page-1/images/rectangle-50.png": "e1745ae9f59f4284e733b2f08f8b654b",
"assets/assets/page-1/images/rectangle-51-BWM.png": "a209ee1cf4478649860201a3b492e2ff",
"assets/assets/page-1/images/rectangle-51-CwX.png": "7c95b232fb84bead1937035babbfc814",
"assets/assets/page-1/images/rectangle-51-GYM.png": "73bb4eceff1cb4e6805d38c758d3cdfe",
"assets/assets/page-1/images/rectangle-51-H73.png": "a61c3496de6820497e33a5dee31500de",
"assets/assets/page-1/images/rectangle-51-ijw.png": "a61c3496de6820497e33a5dee31500de",
"assets/assets/page-1/images/rectangle-51-LLM.png": "97dedc0ff1447958bf46c6562d8224fe",
"assets/assets/page-1/images/rectangle-51-NEy.png": "97dedc0ff1447958bf46c6562d8224fe",
"assets/assets/page-1/images/rectangle-51-NTF.png": "a61c3496de6820497e33a5dee31500de",
"assets/assets/page-1/images/rectangle-51-Q93.png": "7c95b232fb84bead1937035babbfc814",
"assets/assets/page-1/images/rectangle-51-rqb.png": "a61c3496de6820497e33a5dee31500de",
"assets/assets/page-1/images/rectangle-51-RZo.png": "73bb4eceff1cb4e6805d38c758d3cdfe",
"assets/assets/page-1/images/rectangle-51-sXs.png": "7c95b232fb84bead1937035babbfc814",
"assets/assets/page-1/images/rectangle-51-Uow.png": "acfaccb9ef11be8dc3b80a63219fb2de",
"assets/assets/page-1/images/rectangle-51-WKF.png": "7c95b232fb84bead1937035babbfc814",
"assets/assets/page-1/images/rectangle-51-X4Z.png": "a209ee1cf4478649860201a3b492e2ff",
"assets/assets/page-1/images/rectangle-51.png": "73bb4eceff1cb4e6805d38c758d3cdfe",
"assets/assets/page-1/images/rectangle-52-1XB.png": "28374a3034f4ab8b8aea6bce28e1c7ac",
"assets/assets/page-1/images/rectangle-52-Ecd.png": "2844a1b267ef61ad74114c2295e1b34c",
"assets/assets/page-1/images/rectangle-52-ehs.png": "39e01f0ac84d335b2a4129c0e29fbc26",
"assets/assets/page-1/images/rectangle-52-ez9.png": "35ace43582b1e898c1fb8c83b51ba201",
"assets/assets/page-1/images/rectangle-52-H5F.png": "def1ba17d21b026b949e32f276736cf7",
"assets/assets/page-1/images/rectangle-52-HE5.png": "fdb4d758ee9a8a3efee4aadb436f7c88",
"assets/assets/page-1/images/rectangle-52-qbj.png": "43626c637bff56723032c160bbc5f0c5",
"assets/assets/page-1/images/rectangle-52.png": "8ee0db883139ef84c86366b37d83f130",
"assets/assets/page-1/images/rectangle-53.png": "393d94bdf4c2504068464d9e4adcc939",
"assets/assets/page-1/images/rectangle-54-X2M.png": "151db038489bb1f5f6e95e39f93d6852",
"assets/assets/page-1/images/rectangle-54.png": "88205b7fd09b9c12069a84d77459b682",
"assets/assets/page-1/images/rectangle-55.png": "408c9b62c70779dce2290bb282fddf96",
"assets/assets/page-1/images/rectangle-56.png": "4ca73eed11e7aa1f40b102c7e9376c75",
"assets/assets/page-1/images/send.png": "3e5775623fcdd859b81ce011d8a3c9d1",
"assets/assets/page-1/images/star-1-yPB.png": "99ba2c46dcdb22f44630d0e5d3d1f98d",
"assets/assets/page-1/images/star-1.png": "99ba2c46dcdb22f44630d0e5d3d1f98d",
"assets/assets/page-1/images/star-2-D57.png": "99ba2c46dcdb22f44630d0e5d3d1f98d",
"assets/assets/page-1/images/star-2.png": "99ba2c46dcdb22f44630d0e5d3d1f98d",
"assets/assets/page-1/images/star-3-sQR.png": "99ba2c46dcdb22f44630d0e5d3d1f98d",
"assets/assets/page-1/images/star-3.png": "99ba2c46dcdb22f44630d0e5d3d1f98d",
"assets/assets/page-1/images/star-4-iH3.png": "99ba2c46dcdb22f44630d0e5d3d1f98d",
"assets/assets/page-1/images/star-4.png": "99ba2c46dcdb22f44630d0e5d3d1f98d",
"assets/assets/page-1/images/star-5-Wc5.png": "99ba2c46dcdb22f44630d0e5d3d1f98d",
"assets/assets/page-1/images/star-5.png": "99ba2c46dcdb22f44630d0e5d3d1f98d",
"assets/assets/page-1/images/twitter-LM3.png": "6f96a5bd74c26020b00b539390057cb1",
"assets/assets/page-1/images/twitter-Qk5.png": "6f96a5bd74c26020b00b539390057cb1",
"assets/assets/page-1/images/twitter-Y3f.png": "3c066b44d1c641aa4887ce127ddfacdd",
"assets/assets/page-1/images/twitter-ZFK.png": "6f96a5bd74c26020b00b539390057cb1",
"assets/assets/page-1/images/twitter.png": "6f96a5bd74c26020b00b539390057cb1",
"assets/assets/page-1/images/vector-left.png": "41c9e436fc055184a553455c634a2e39",
"assets/assets/page-1/images/vector-right.png": "29e8b1ed1d0839606013ace606dc4eb3",
"assets/assets/page-1/images/vectores-de-cable-FYy.png": "a5aad3102734ea1f9847e836e9c23687",
"assets/assets/page-1/images/vectores-de-cable.png": "a5aad3102734ea1f9847e836e9c23687",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "6b6a7ad932a660f460cb78496ef9e1c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "62455c15ef791c33220a924e2a232ce8",
"/": "62455c15ef791c33220a924e2a232ce8",
"main.dart.js": "9d850cc7d8c434bbdd23899eab8f29c0",
"manifest.json": "4137147246a11ba2148318bc696c4202",
"version.json": "389a6e6e6f34312743ca5f36467c84b5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
