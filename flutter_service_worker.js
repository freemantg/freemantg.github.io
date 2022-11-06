'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "262b819c5d2b61bfda6b8003f391f44c",
"assets/assets/fonts/Codec%2520Pro%2520Bold.ttf": "9ca00d77d0b18098a2f261a4ed04e8d6",
"assets/assets/fonts/Codec%2520Pro%2520News.ttf": "66d306d782472256abb2059f9594f1fb",
"assets/assets/projects/crackd/cover.png": "12ec17ad83826c1e295dec677cd1e02e",
"assets/assets/projects/crackd/crackd_0.png": "bf44b66e1e6d86a647b2d815a53c2e0b",
"assets/assets/projects/crackd/crackd_1.png": "12ec17ad83826c1e295dec677cd1e02e",
"assets/assets/projects/crackd/crackd_2.png": "a28d282017b96e90ae12a10cc993174e",
"assets/assets/projects/crackd/crackd_3.png": "0782df118657e272562fe5ac569ed5d6",
"assets/assets/projects/crackd/crackd_4.png": "05bb260973f1302cf52a8be3a6d338cc",
"assets/assets/projects/crackd/crackd_5.png": "a72212e21c7e83ed0a7052ad50f6f07f",
"assets/assets/projects/githubOAuth/cover.png": "64ef6be084b759ed0d83070f08dd564a",
"assets/assets/projects/githubOAuth/githuboauth_0.png": "afe37da9d8987db1a8317c956cb1e832",
"assets/assets/projects/githubOAuth/githuboauth_1.png": "c98540abca758960afe022b600fbbb7a",
"assets/assets/projects/githubOAuth/githuboauth_2.png": "e478aeed71fa8de06304febb7b50aab1",
"assets/assets/projects/githubOAuth/githuboauth_3.png": "872b25f9a0af265a98bc8f13226fb2cb",
"assets/assets/projects/githubOAuth/githuboauth_4.png": "d1e001ea9a19eef6c552d9ebef56197a",
"assets/assets/projects/githubOAuth/githuboauth_5.png": "4b15ae9bd9caad9f37c19ebdd146896b",
"assets/assets/projects/githubOAuth/githuboauth_6.png": "60f095d304aff594ae3efef69c893a5d",
"assets/assets/projects/githubOAuth/githuboauth_7.png": "336816d009e8b77afc5d4953635ecb56",
"assets/assets/projects/inky/cover.png": "460e52792d93cbac5cdce0bc8f7bd5d2",
"assets/assets/projects/inky/inky_0.png": "460e52792d93cbac5cdce0bc8f7bd5d2",
"assets/assets/projects/inky/inky_1.png": "e99a7c679b0bcd0638a55f934cb32fcb",
"assets/assets/projects/inky/inky_2.png": "a48c46c4252f4df5dd30c15b915ba895",
"assets/assets/projects/inky/inky_3.png": "e8f20ad206e55cea9fb2322b4a21831c",
"assets/assets/projects/inky/inky_4.png": "e23a5f9b1c3b949b2aa34259750cc440",
"assets/assets/projects/projects.json": "a33a3d8cfad7e07698a740a9d99d9d37",
"assets/FontManifest.json": "01e5372105e19d379ab924c28067672d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "9029a308b6581dffe6364cef62a056cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "8ae00b472ec3937a5bee52055d6bc8b4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5c4b5b79671b5ee7bb47ffd59e309962",
"/": "5c4b5b79671b5ee7bb47ffd59e309962",
"main.dart.js": "dfb2f81c44feb789e3c40e923d1a0165",
"manifest.json": "0a7c4d8657764b9b9a07b80adc5c0f85",
"version.json": "5b147a10ee09ed9c2c11bf5e15c57c52"
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
