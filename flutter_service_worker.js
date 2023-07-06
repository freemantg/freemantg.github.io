'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "61a41d6433db824da4ead90c5d33ba4b",
"assets/AssetManifest.smcbin": "df8f2aa16b6a8bf9dc3dc484ef559b65",
"assets/assets/fonts/Codec%2520Pro%2520Bold.ttf": "9ca00d77d0b18098a2f261a4ed04e8d6",
"assets/assets/fonts/Codec%2520Pro%2520News.ttf": "66d306d782472256abb2059f9594f1fb",
"assets/assets/fonts/RilenoSans-Medium.otf": "d4e7a14ff3c1f51649e2a87aec835781",
"assets/assets/fonts/RilenoSans-Regular.otf": "16cd4b5d84e504ba805c089b524c8682",
"assets/assets/fonts/RilenoSans-SemiBold.otf": "8d0d2d7c84b5e6c7fb1a2f1284cc6597",
"assets/assets/projects/crack'd/cover.png": "36e85a1c65925592b325b6fb0e25ce46",
"assets/assets/projects/crack'd/crack'd_0.png": "9943cacdade2b8b76f619a4e8f4e22c3",
"assets/assets/projects/crack'd/crack'd_1.png": "c166d22cefffc849b2939691aa96e8ff",
"assets/assets/projects/crack'd/crack'd_2.png": "5a5e3829b873585ddf7e7721bc19812b",
"assets/assets/projects/crack'd/crack'd_3.png": "89879ebfa42b1394836f28d3cecb269d",
"assets/assets/projects/crack'd/crack'd_4.png": "878f2af1188da491bbc6503482a9a3f1",
"assets/assets/projects/flutterweb/cover.png": "1e3b1df61c7108a221ee9623a9e293ce",
"assets/assets/projects/flutterweb/flutterweb_0.png": "4c5c4396560775fb809b19304bdf63db",
"assets/assets/projects/flutterweb/flutterweb_1.png": "95677492c20e4e7535bf8c0f6828de08",
"assets/assets/projects/flutterweb/flutterweb_2.png": "8d4d27215ab9a52107e30662da31aa35",
"assets/assets/projects/flutterweb/flutterweb_3.png": "202e6baca994f90e1aead431cddd5c9f",
"assets/assets/projects/flutterweb/flutterweb_4.png": "2e376f6787ec4b7cfa7170ab4fdb52e7",
"assets/assets/projects/flutterweb/flutterweb_5.png": "666ec7b36376c98d91bc3c20bb3a11be",
"assets/assets/projects/glum/cover.png": "caf8f617f3e2b9e9c0ec29ccd597c598",
"assets/assets/projects/glum/glum_0.png": "a7b2f4dc5f19e5a0a036e4942080bc82",
"assets/assets/projects/glum/glum_1.png": "b270c19ef91b0023cf9132c9312fb90f",
"assets/assets/projects/glum/glum_2.png": "8afea8a88e57141bf23b0116822fd782",
"assets/assets/projects/glum/glum_3.png": "cc7b6ccf91f158f151f0e326b37f99a1",
"assets/assets/projects/glum/glum_4.png": "dc5b49d501311cf0983f21f6edd701d7",
"assets/assets/projects/glum/glum_5.png": "44df1c8694657b4d43a2961c94ec4b38",
"assets/assets/projects/glum/glum_6.png": "15ecf45d912c2e9f598cebcf39756b3e",
"assets/assets/projects/glum/glum_7.png": "5d383da51310f8088590a5b197dc1991",
"assets/assets/projects/inky/cover.png": "bb15d060a0ace0bf2e622d4327e71e4b",
"assets/assets/projects/inky/inky_0.png": "460e52792d93cbac5cdce0bc8f7bd5d2",
"assets/assets/projects/inky/inky_1.png": "e99a7c679b0bcd0638a55f934cb32fcb",
"assets/assets/projects/inky/inky_2.png": "a48c46c4252f4df5dd30c15b915ba895",
"assets/assets/projects/inky/inky_3.png": "e8f20ad206e55cea9fb2322b4a21831c",
"assets/assets/projects/inky/inky_4.png": "e23a5f9b1c3b949b2aa34259750cc440",
"assets/assets/projects/oauth2.0/cover.png": "6934b1a45330075d4e45cdb8cab2ec7d",
"assets/assets/projects/oauth2.0/oauth2.0_0.png": "afe37da9d8987db1a8317c956cb1e832",
"assets/assets/projects/oauth2.0/oauth2.0_1.png": "c98540abca758960afe022b600fbbb7a",
"assets/assets/projects/oauth2.0/oauth2.0_2.png": "e478aeed71fa8de06304febb7b50aab1",
"assets/assets/projects/oauth2.0/oauth2.0_3.png": "872b25f9a0af265a98bc8f13226fb2cb",
"assets/assets/projects/oauth2.0/oauth2.0_4.png": "d1e001ea9a19eef6c552d9ebef56197a",
"assets/assets/projects/oauth2.0/oauth2.0_5.png": "4b15ae9bd9caad9f37c19ebdd146896b",
"assets/assets/projects/oauth2.0/oauth2.0_6.png": "60f095d304aff594ae3efef69c893a5d",
"assets/assets/projects/oauth2.0/oauth2.0_7.png": "336816d009e8b77afc5d4953635ecb56",
"assets/assets/projects/projects.json": "469c805f5d4193a1a8166de3877fe04c",
"assets/assets/projects/ricedrop/cover.png": "8a79077dd616f52e657b2922bb35eb71",
"assets/assets/projects/ricedrop/ricedrop_0.png": "60e2b9bc20093def4e734dcffdffddd5",
"assets/assets/projects/ricedrop/ricedrop_1.png": "67577903b35290a9b5e92bab083e1a77",
"assets/assets/projects/ricedrop/ricedrop_10.png": "1d92b45d9ac46a45935c7f105ba4aa87",
"assets/assets/projects/ricedrop/ricedrop_2.png": "67e52a75be38846dd2ae0b99925a64a9",
"assets/assets/projects/ricedrop/ricedrop_3.png": "30762b26a1af41bfc77c98b5ac607139",
"assets/assets/projects/ricedrop/ricedrop_4.png": "5e8de06cc498a6fa3cf6bf921e2d359c",
"assets/assets/projects/ricedrop/ricedrop_5.png": "06c72f4bcc8a93bfcbbf474170b1f4c4",
"assets/assets/projects/ricedrop/ricedrop_6.png": "87b82162daa00fdc6ea312da819df766",
"assets/assets/projects/ricedrop/ricedrop_7.png": "7e3581355a5a9f14fe7239a5f2649bc8",
"assets/assets/projects/ricedrop/ricedrop_8.png": "5568b23ebee592f5b670191ab5e5de32",
"assets/assets/projects/ricedrop/ricedrop_9.png": "2cfebf139fb6e8fd9495ccab7a7c3b14",
"assets/FontManifest.json": "b952c3c43ef352bdec936e869231cb43",
"assets/fonts/MaterialIcons-Regular.otf": "b7feb26f3a968e1ec44f963d9110ed1b",
"assets/NOTICES": "a06d88621b67ef91ac2c24db3e0a4f01",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "59ed8478b398a8966eee147930f3d966",
"canvaskit/canvaskit.wasm": "641ba6d615314c42874bf914ef2d093e",
"canvaskit/chromium/canvaskit.js": "853c6cebea386c05aa9d954f11b2c1ca",
"canvaskit/chromium/canvaskit.wasm": "ffc522e9ff0a7bbe6bfd2a6f54f974e4",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "0d7c2e198fc5420d3940de2d44c19023",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "4a214dee152e5377e04605801b7dca9c",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f02a72e33c08328e3c0b91d5d3c36ff4",
"/": "f02a72e33c08328e3c0b91d5d3c36ff4",
"main.dart.js": "9c29a8df237b360091b59b5d38c4c794",
"manifest.json": "0a7c4d8657764b9b9a07b80adc5c0f85",
"version.json": "5b147a10ee09ed9c2c11bf5e15c57c52"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
