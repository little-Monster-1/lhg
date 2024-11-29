/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/09/03/redis学习/index.html","1ad3f96d8d251f109fc59fcf710e0fa6"],["/2024/09/06/MybatisPlus/index.html","8ce0b5a0007956928b496711b3be3f20"],["/2024/09/07/vue3/index.html","c46ff4f0a96e33d2233bd247977b55a1"],["/2024/09/07/浅学Docker/index.html","5587c9c29b6a26ca58abaa61fa861ed3"],["/2024/09/10/微服务/index.html","4f1e5620fb8b4257066c60b6b020a9b4"],["/2024/09/23/RabbitMQ/index.html","9592ce6194db6da6b0701bda7318b202"],["/2024/09/28/uniapp/index.html","23f7f408233c75eefa950eacc7252e5b"],["/2024/10/17/软件设计师错题/index.html","1bbbc36d7ce894c27fd70646e1bf0879"],["/2024/11/11/AOP/index.html","60fe8a392652e21dfe4322ce6d7d3baf"],["/2024/11/16/MYSQL/index.html","3abf10d081b5f0fbdd74713a759b7481"],["/2024/11/19/HTML/index.html","ccf648a3381a56fc0ecaea4467e93a38"],["/2024/11/25/EasyChat/index.html","07e387688489224b9e8b0a1593c848df"],["/2024/11/28/拦截器/index.html","b6cd834e8638b0999408bb82c24a62b7"],["/archives/2024/09/index.html","56375441d554bc46b7f8ed894272970e"],["/archives/2024/10/index.html","fff681dc17875dea127f505730fa5642"],["/archives/2024/11/index.html","74c380fa3f754e60f7a9acf07866a403"],["/archives/2024/index.html","492eee7a1f750d944eecfe69f54a7484"],["/archives/2024/page/2/index.html","f09670e2c8ae60514d7b6c1128faf442"],["/archives/index.html","0b4b80608e9cbb461757796ddda0265e"],["/archives/page/2/index.html","4b9f2ca4bef8a4127df6ef14f9bc23c7"],["/categories/MQ/index.html","59f0f90b241963ec9dbe9693fbcdeedf"],["/categories/Mybatis/index.html","38a84bc0b1977543c1cc2f9a3ed487a7"],["/categories/Springboot/index.html","ce0d4ebac4ea845a80ad61e45a963e8b"],["/categories/index.html","28d3a3ad69a752b91727077206e84071"],["/categories/redis/index.html","58d27c8788900756e839fb2f7040e90e"],["/categories/springcloud/index.html","2847752db32440a4954e553a4d5464c8"],["/comments/index.html","ceed5db16d9278fe1ee8d6b0b4d0f292"],["/css/custom.css","368c276f4ff845a019b72e98b69f15ec"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","d5f208679a2689f7700582e753604aae"],["/css/twikoo_beautify.css","4bc0a53a36fd0e9649e987b627616557"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/font.css","f56bdf6e39d4562593e018d712175d96"],["/img/1.jpg","79e15110764673606842858a0ba6b856"],["/img/2.png","93ab4c370f54b2e45f904204f5156083"],["/img/3.jpg","4f06b33e1c3422c7a1e6173fa98e4d51"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Docker.png","80bcd3a601abbd6dbf0b3d8fcda3e90b"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/hly.jpg","3871d0f1e251eedede0e197ebe53f859"],["/img/zc/1.jpg","4a74c31fd522e893571e4b949099bd70"],["/img/zc/10.jpg","fc0626de0601cc70dc83365d43e5d806"],["/img/zc/11.jpg","7c726ab69003fcb451b990a5b2c1c60c"],["/img/zc/12.jpg","ac22e3d1c5e88a6be1d2c23953d8a287"],["/img/zc/13.jpg","1a85e8a76550b54cd5a732b7dc638a71"],["/img/zc/14.jpg","585da98c2953f192fc6451f592287857"],["/img/zc/2.jpg","2433e4809be49729082a8941626cefff"],["/img/zc/3.jpg","eea83fd66f7deb518aab1040324c4cc6"],["/img/zc/4.jpg","e003f737f7709c72035ddd9387b517b7"],["/img/zc/5.jpg","fca2af8ab9b472c7b7686a1bd63a34b7"],["/img/zc/6.jpg","4e58780172f74819dcc766c690890adf"],["/img/zc/7.jpg","2e44eed62d01b94cab1c043d339788d6"],["/img/zc/8.jpg","4df55e6f243264302ca4f034ff7ae5a3"],["/img/zc/9.jpg","077a804086f7b8121b479faf7fe12e7c"],["/img/zc/hua.jpg","2f20b677e8bfdf5e5691a6e142ec9daf"],["/img/zc/hua1.jpg","f1e046babee81733ddd9a68b5883c3b2"],["/index.html","ccce9c4b216c9940437017e358485f0d"],["/js/diytitle.js","405e65bc3a211b60fa56f7f578eb474b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","0ab1ff4028fa6be595b14897fce44917"],["/schedule/index.html","1ae749c93d10b8ad835e5157d5e22ac6"],["/schedule/notes.html","057b3056936ec2ad0bb9d6aa71f0c706"],["/static/css/custom.css","c4bbfc028141d111fb3c1f018249a8f0"],["/sw-register.js","ac638f492975b6c8de96f2c62f5474ce"],["/tags/AOP/index.html","778c72d00a5a67950ae64d76a4f87393"],["/tags/Docker/index.html","2bd758bfe63d106ba08bb41b177ad974"],["/tags/HTML/index.html","197d2acc4f486330d5cbda776c581c4e"],["/tags/MQ/index.html","bf0fcd3d7c382290450c260e1422bb9f"],["/tags/MYSQL/index.html","058e3c2097a5bc18eb03e080a2c500d0"],["/tags/MybatisPlus/index.html","89cc9428cd8b3abfda7f3e29da3dab65"],["/tags/Springboot/index.html","4cd9afea211438a31a2717eff1a047aa"],["/tags/VUE3/index.html","8db2aa9819396e954516bc6d5d2471a7"],["/tags/index.html","71152aaac93b5d9bcd34c996c122f3a5"],["/tags/redis/index.html","cc7a3ada34f248d53b123cee3fdde398"],["/tags/socket/index.html","2580a09c58eecbb48e449f77c5443220"],["/tags/springcloud/index.html","f6b9bad0ea95f7e9949a28ef7e8c7a05"],["/tags/uniapp/index.html","3eaaa1554b59f5d2ea915542d3f89814"],["/tags/拦截器/index.html","296a0d20b115b884ab64492cbbff9c48"],["/tags/软件设计师/index.html","aea47c96818f2922668f3cbb0a7cd2cf"],["/zc/index.html","3bd8d9f9c171d57f1e8a92601b3d2677"],["/zc/notes.html","bd3d39558ce16b4c8a46a48a827d6916"]];
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
