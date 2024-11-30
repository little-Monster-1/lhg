/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/09/03/redis学习/index.html","a0550f42fad0dbfff2c715292e13b6ca"],["/2024/09/06/MybatisPlus/index.html","f547b7d4a002d7178f47e648cb9b5cae"],["/2024/09/07/vue3/index.html","a682fa201fb72415a78121b079e342c7"],["/2024/09/07/浅学Docker/index.html","28d74a530bc46d4effc471e753aa705d"],["/2024/09/10/微服务/index.html","9af34b6925f76506afce06feca5be433"],["/2024/09/23/RabbitMQ/index.html","db5cf298e4c210e9b416089b04ba4aa5"],["/2024/09/28/uniapp/index.html","b6d70caf7facd1801f6242ec48e91cb7"],["/2024/10/17/软件设计师错题/index.html","946ef5b47e78158dc78dbe6c60319340"],["/2024/11/11/AOP/index.html","f440767c0d3bb1ae0334f34c2a73b82f"],["/2024/11/16/MYSQL/index.html","64b0e6eb060b2c8cfbf274c814b5191c"],["/2024/11/19/HTML/index.html","0bb3e537ba38b0067df61ae9dc9d4bbb"],["/2024/11/25/EasyChat/index.html","16e338a955a4285e198da20cb506c23a"],["/2024/11/28/拦截器/index.html","c7143798013dec7f3382af611c442e64"],["/archives/2024/09/index.html","9bb11d9c3fa347a601d00d2f1b0616ef"],["/archives/2024/10/index.html","2e0eb81d3005cce8aea5f2a914dbe38e"],["/archives/2024/11/index.html","14235cc6b65882dcd4f06b128be1adf0"],["/archives/2024/index.html","d620c34d1bc82195468415baa8959ac7"],["/archives/2024/page/2/index.html","2c1533a4762f5e54ca3f043e76799210"],["/archives/index.html","b04cda9040667c8c6755a661b765855b"],["/archives/page/2/index.html","3da28f1b7686b5478ad7e432eb191a5c"],["/categories/MQ/index.html","8396149cd10fccf5e801ad12c2e8b0c5"],["/categories/Mybatis/index.html","edc1ef16e1fe1d65da65f794baeb2dcc"],["/categories/Springboot/index.html","ae93724fd52733e57375633c17bab83f"],["/categories/index.html","6335d9d61e6bc064ce15255fe221db4b"],["/categories/redis/index.html","a9456641c663d9c295d0b8ea7d37f6ea"],["/categories/springcloud/index.html","6e0737b22292852204c07169f97cd257"],["/comments/index.html","5efb9c82a8cae3956bdbaa64b0f49a52"],["/css/custom.css","67cd43962b37f446e67b90b79b1936f1"],["/css/hbe.style.css","ce0a458b6876707a8b522b290e540409"],["/css/index.css","b09e58172be0442235ad5550380e56ed"],["/css/twikoo_beautify.css","f2e1f66553771ae335d52729c946399a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/font.css","bfb2085ef4b01e39aecdff34a9a07505"],["/img/1.jpg","79e15110764673606842858a0ba6b856"],["/img/2.png","93ab4c370f54b2e45f904204f5156083"],["/img/3.jpg","4f06b33e1c3422c7a1e6173fa98e4d51"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Docker.png","80bcd3a601abbd6dbf0b3d8fcda3e90b"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/hly.jpg","3871d0f1e251eedede0e197ebe53f859"],["/img/zc/1.jpg","4a74c31fd522e893571e4b949099bd70"],["/img/zc/10.jpg","fc0626de0601cc70dc83365d43e5d806"],["/img/zc/11.jpg","7c726ab69003fcb451b990a5b2c1c60c"],["/img/zc/12.jpg","ac22e3d1c5e88a6be1d2c23953d8a287"],["/img/zc/13.jpg","1a85e8a76550b54cd5a732b7dc638a71"],["/img/zc/14.jpg","585da98c2953f192fc6451f592287857"],["/img/zc/2.jpg","2433e4809be49729082a8941626cefff"],["/img/zc/3.jpg","eea83fd66f7deb518aab1040324c4cc6"],["/img/zc/4.jpg","e003f737f7709c72035ddd9387b517b7"],["/img/zc/5.jpg","fca2af8ab9b472c7b7686a1bd63a34b7"],["/img/zc/6.jpg","4e58780172f74819dcc766c690890adf"],["/img/zc/7.jpg","2e44eed62d01b94cab1c043d339788d6"],["/img/zc/8.jpg","4df55e6f243264302ca4f034ff7ae5a3"],["/img/zc/9.jpg","077a804086f7b8121b479faf7fe12e7c"],["/img/zc/hua.jpg","2f20b677e8bfdf5e5691a6e142ec9daf"],["/img/zc/hua1.jpg","f1e046babee81733ddd9a68b5883c3b2"],["/index.html","17efa8a8c1c7b9123dcbc58e94ecf00d"],["/js/diytitle.js","d5dd959956a4c6318b3f0150c7f2c746"],["/js/main.js","cb1293dd47e361d4784be03a6788eaf7"],["/js/search/algolia.js","c361589555f3c5138d4a7cd5f71b889a"],["/js/search/local-search.js","067bcc51ed4388f87040ab516569f9e6"],["/js/tw_cn.js","fd2faf7f2f71df78dd71f5e441819b9c"],["/js/utils.js","9721f1043e5ae1c4596d19ca1f36c1da"],["/lib/hbe.js","1f647b0585aa9251cfc27b6731507860"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","5ccaa545126e8d7c689670d7a8c331b2"],["/schedule/index.html","5b8eed73b6cacd034a382f1da6015fa2"],["/schedule/notes.html","add180d63973dc547c37daaef47afb82"],["/static/css/custom.css","9dacb0008df9fe126ec5e507b7d79c8f"],["/sw-register.js","e89eb5438af1604b96117d27bf39e09d"],["/tags/AOP/index.html","753a22f296c8a4f7e3814babd038da8f"],["/tags/Docker/index.html","8966aae8de94fbdf94b474922a756a61"],["/tags/HTML/index.html","13e48f9627c51a90e3dd02b04d5d1d0e"],["/tags/MQ/index.html","00ce0f803e573d6c30b8484d5dc4949f"],["/tags/MYSQL/index.html","3d33e925f3486f3121a83fa32c092bbf"],["/tags/MybatisPlus/index.html","53d62b17fb55aa32b48dffca30a6cdf5"],["/tags/Springboot/index.html","bdc9a20de8f5377c30c475e2613440d1"],["/tags/VUE3/index.html","0c1bccf88a66979afddc012c4b4d6db7"],["/tags/index.html","678bef4416d70c18da42014c44b83a93"],["/tags/redis/index.html","b7b3239023889a3b1f6be93dab3fc0e3"],["/tags/socket/index.html","d5e15cb896d0c96c6cfa957b162db5f4"],["/tags/springcloud/index.html","0c8e11796ba545ee6a70fac21e9ca856"],["/tags/uniapp/index.html","9b7bbde9697d57c3a5a14b71fc6a76fd"],["/tags/拦截器/index.html","468cc6e6fd20b372ddd86380d923b171"],["/tags/软件设计师/index.html","fdb274241eea35a71ae68d30dec0d51d"],["/zc/index.html","cf385f41bb360dffa1ad02c862a02424"],["/zc/notes.html","6f2ff9e93cd5d6502cb255bd548169e9"]];
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
