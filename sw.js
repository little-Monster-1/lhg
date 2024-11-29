/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/09/03/redis学习/index.html","2b4cc78ea05c7030275bad3742a459f2"],["/2024/09/06/MybatisPlus/index.html","306746d28111861dd8ec57ddf38d3929"],["/2024/09/07/vue3/index.html","f2b6b9c7323a5c4761c12e5e374b8ba0"],["/2024/09/07/浅学Docker/index.html","84ecbf54bc671e81ffd031ed18d732fb"],["/2024/09/10/微服务/index.html","a1870c1c82f186a9f906ce99dec0e54c"],["/2024/09/23/RabbitMQ/index.html","19952734bbfbacf8948b7c6b61ddbd2a"],["/2024/09/28/uniapp/index.html","f67f7b28e90698efa06cb20079da0bce"],["/2024/10/17/软件设计师错题/index.html","8781bbd6636ed794d58bd74553f2a88d"],["/2024/11/11/AOP/index.html","48b23dcdac2172b0b2d6af00c751201a"],["/2024/11/16/MYSQL/index.html","5ec18d89bde7b4b1c2e490217c6a973b"],["/2024/11/19/HTML/index.html","f26d55a2146d85f5d10b393aaba217b0"],["/2024/11/25/EasyChat/index.html","7f7e8c98d65f07af20be3c49d23a32f2"],["/2024/11/28/拦截器/index.html","d9dca53f192a07bed204dbe18c9324fc"],["/archives/2024/09/index.html","8251bd7cbec121d3d6659009004de334"],["/archives/2024/10/index.html","5bfe4a16a3c17e7b8b387d840e1e766c"],["/archives/2024/11/index.html","147f5f155adc2ce4902724ea1b1e35bb"],["/archives/2024/index.html","4e3616849940fc410c188cd685901f26"],["/archives/2024/page/2/index.html","fb233b17914cfb019957655557cc5880"],["/archives/index.html","fa158ff53b75775b9a4f4550f5b6c004"],["/archives/page/2/index.html","c6742f213a5b89928118be1fb565337c"],["/categories/MQ/index.html","25ec8b50080ede6319b530c2374a0a9f"],["/categories/Mybatis/index.html","366750b0eb56db705f7b9a54ba442f5b"],["/categories/Springboot/index.html","5bcf5aa02eaf3869727cb0b5cce98c34"],["/categories/index.html","acffe5cc36e43786313327e85a02ca3e"],["/categories/redis/index.html","ec2f31f0256b75d3330bb39377418a29"],["/categories/springcloud/index.html","45e199035cc4d3edbdc8f032d9b44f90"],["/comments/index.html","d7d285180a175abf16aae533469edae3"],["/css/custom.css","368c276f4ff845a019b72e98b69f15ec"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","d5f208679a2689f7700582e753604aae"],["/css/twikoo_beautify.css","4bc0a53a36fd0e9649e987b627616557"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/font.css","f56bdf6e39d4562593e018d712175d96"],["/img/1.jpg","79e15110764673606842858a0ba6b856"],["/img/2.png","93ab4c370f54b2e45f904204f5156083"],["/img/3.jpg","4f06b33e1c3422c7a1e6173fa98e4d51"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Docker.png","80bcd3a601abbd6dbf0b3d8fcda3e90b"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/hly.jpg","3871d0f1e251eedede0e197ebe53f859"],["/img/zc/1.jpg","4a74c31fd522e893571e4b949099bd70"],["/img/zc/10.jpg","fc0626de0601cc70dc83365d43e5d806"],["/img/zc/11.jpg","7c726ab69003fcb451b990a5b2c1c60c"],["/img/zc/12.jpg","ac22e3d1c5e88a6be1d2c23953d8a287"],["/img/zc/13.jpg","1a85e8a76550b54cd5a732b7dc638a71"],["/img/zc/14.jpg","585da98c2953f192fc6451f592287857"],["/img/zc/2.jpg","2433e4809be49729082a8941626cefff"],["/img/zc/3.jpg","eea83fd66f7deb518aab1040324c4cc6"],["/img/zc/4.jpg","e003f737f7709c72035ddd9387b517b7"],["/img/zc/5.jpg","fca2af8ab9b472c7b7686a1bd63a34b7"],["/img/zc/6.jpg","4e58780172f74819dcc766c690890adf"],["/img/zc/7.jpg","2e44eed62d01b94cab1c043d339788d6"],["/img/zc/8.jpg","4df55e6f243264302ca4f034ff7ae5a3"],["/img/zc/9.jpg","077a804086f7b8121b479faf7fe12e7c"],["/img/zc/hua.jpg","2f20b677e8bfdf5e5691a6e142ec9daf"],["/img/zc/hua1.jpg","f1e046babee81733ddd9a68b5883c3b2"],["/index.html","b25cf953437b2005049c5203b7ff163f"],["/js/diytitle.js","405e65bc3a211b60fa56f7f578eb474b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","0f6b8a02f6c8d3c5f92437cb9fb7f075"],["/schedule/index.html","ae5691d52112d6af7dcdece29293cf2b"],["/schedule/notes.html","118cc8ae8f12ca243570f02f4661d8d5"],["/static/css/custom.css","c4bbfc028141d111fb3c1f018249a8f0"],["/sw-register.js","acbf193223dd3e56181f169ac61068fb"],["/tags/AOP/index.html","fd7417cd304bc6961395d9820dfc484b"],["/tags/Docker/index.html","bb0dc2a1377fbe39b163c21a691a8bf2"],["/tags/HTML/index.html","92f953ed03d60bfd44c1e16edd45ca14"],["/tags/MQ/index.html","d6d837f76e83bc5e4328bba9405ee9a2"],["/tags/MYSQL/index.html","f98a481d164823952c04fa6d84260f2f"],["/tags/MybatisPlus/index.html","26d1abb8b8c4815702f222466d9bdd41"],["/tags/Springboot/index.html","18d4f6e321e3828da7b604356603335a"],["/tags/VUE3/index.html","92b8f16c9983f00d1c5b87df7a3794ea"],["/tags/index.html","b8bde949dad0ffb8527ee5f7dd45e5d5"],["/tags/redis/index.html","c9912a60831251c381687c38f5ab1eaf"],["/tags/socket/index.html","9a891b82c6f0d4d92a979b2fd9f28553"],["/tags/springcloud/index.html","2d9ed40f34da50b3b75274f8e48ea9df"],["/tags/uniapp/index.html","33173f2cd2313c4875f792ecb00a02e0"],["/tags/拦截器/index.html","b9b19158aa843e5ab5583e64b6a03090"],["/tags/软件设计师/index.html","0c9c404536b82104cf957b37627bf9d0"],["/zc/index.html","a3073525631c8389e52136b1ebadb5f1"],["/zc/notes.html","bef987417968491985603c295d3c6321"]];
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









/* eslint-enable */
