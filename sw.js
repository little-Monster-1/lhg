/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/09/03/redis学习/index.html","190996ed60f2d20aca08e87745c08e3c"],["/2024/09/06/MybatisPlus/index.html","6e921a3c6f49387cc2043e4851e49464"],["/2024/09/07/vue3/index.html","8a376926355406ab314a1b2352b449f5"],["/2024/09/07/浅学Docker/index.html","a982202f4a861acf9d2224cf16a37712"],["/2024/09/10/微服务/index.html","77764de57fcdaee038bdb497269ffeb3"],["/2024/09/23/RabbitMQ/index.html","8fd03d7663774fbb57dd5dc995d47e1c"],["/2024/09/28/uniapp/index.html","6ec9b10c3f38a84129377d73254570b9"],["/2024/10/17/软件设计师错题/index.html","1bdcd3307024045f71b46e9201cff03c"],["/2024/11/11/AOP/index.html","39d3d739545a67fdd2aae270d8ad78d4"],["/2024/11/16/MYSQL/index.html","663e04b7c55f618733cf2acc9b5d68b0"],["/2024/11/19/HTML/index.html","a3897d21e99af7009ca92cc2443606e7"],["/2024/11/25/EasyChat/index.html","8a44202f3af4687f15d76f8e9528d642"],["/2024/11/28/拦截器/index.html","ba6f3339f7b0bbda812dc6f8321b3f51"],["/archives/2024/09/index.html","47c7138dcf42c7bba0fe28eaf6b92156"],["/archives/2024/10/index.html","0920491aa4bd438003604e7e219d871c"],["/archives/2024/11/index.html","08d9b05ec527eff7a27ece03ad6b6005"],["/archives/2024/index.html","0ea8e347a06dfa0574a4859af09f2207"],["/archives/2024/page/2/index.html","ac7c929ccc72661fa3e3b1efde154872"],["/archives/index.html","57cbbb76ce9b6371168c83d83dc153df"],["/archives/page/2/index.html","6c4dd45aede5c70f681a6e5ef91834b3"],["/categories/MQ/index.html","8f021ec94a7433afc4c664d1bdef541f"],["/categories/Mybatis/index.html","58f4e0c69743c28387ddb5288d69aa2e"],["/categories/Springboot/index.html","a96e6018554b88034f1ffaeec927eb93"],["/categories/index.html","7f25166a3a21d8376512257bd11fcea9"],["/categories/redis/index.html","caf300891d03ae9505e4da01223c3179"],["/categories/springcloud/index.html","06089104d3944f215496cb46998504d6"],["/comments/index.html","302e94ad0f3d1d2c8d1fde15426a656e"],["/css/custom.css","368c276f4ff845a019b72e98b69f15ec"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","d5f208679a2689f7700582e753604aae"],["/css/twikoo_beautify.css","4bc0a53a36fd0e9649e987b627616557"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/font.css","f56bdf6e39d4562593e018d712175d96"],["/img/1.jpg","79e15110764673606842858a0ba6b856"],["/img/2.png","93ab4c370f54b2e45f904204f5156083"],["/img/3.jpg","4f06b33e1c3422c7a1e6173fa98e4d51"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Docker.png","80bcd3a601abbd6dbf0b3d8fcda3e90b"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/hly.jpg","3871d0f1e251eedede0e197ebe53f859"],["/img/zc/1.jpg","4a74c31fd522e893571e4b949099bd70"],["/img/zc/10.jpg","fc0626de0601cc70dc83365d43e5d806"],["/img/zc/11.jpg","7c726ab69003fcb451b990a5b2c1c60c"],["/img/zc/12.jpg","ac22e3d1c5e88a6be1d2c23953d8a287"],["/img/zc/13.jpg","1a85e8a76550b54cd5a732b7dc638a71"],["/img/zc/14.jpg","585da98c2953f192fc6451f592287857"],["/img/zc/2.jpg","2433e4809be49729082a8941626cefff"],["/img/zc/3.jpg","eea83fd66f7deb518aab1040324c4cc6"],["/img/zc/4.jpg","e003f737f7709c72035ddd9387b517b7"],["/img/zc/5.jpg","fca2af8ab9b472c7b7686a1bd63a34b7"],["/img/zc/6.jpg","4e58780172f74819dcc766c690890adf"],["/img/zc/7.jpg","2e44eed62d01b94cab1c043d339788d6"],["/img/zc/8.jpg","4df55e6f243264302ca4f034ff7ae5a3"],["/img/zc/9.jpg","077a804086f7b8121b479faf7fe12e7c"],["/img/zc/hua.jpg","2f20b677e8bfdf5e5691a6e142ec9daf"],["/img/zc/hua1.jpg","f1e046babee81733ddd9a68b5883c3b2"],["/index.html","d0e7b0817c9dee067f227d1df1e68bf5"],["/js/diytitle.js","405e65bc3a211b60fa56f7f578eb474b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","39451f47f0b5554bdae60289e7cf4564"],["/schedule/index.html","8fe9144b39cebd291653cd80ff888ff7"],["/schedule/notes.html","d035185814e0f435673a9116d4068cc9"],["/static/css/custom.css","c4bbfc028141d111fb3c1f018249a8f0"],["/sw-register.js","143af105dc30889f6da206f149c14f02"],["/tags/AOP/index.html","56ee048ccddc8e6b2196ad6a2c300c7d"],["/tags/Docker/index.html","9c60850181aa4e2ffc4e2d0ec044f062"],["/tags/HTML/index.html","4ae5e008b2ca571e4a91dcbfcd6e61fa"],["/tags/MQ/index.html","912d7b888eec6db1e2f1ffc76427bcd5"],["/tags/MYSQL/index.html","61991bd13c2de54c429b79a4b6d9f9a6"],["/tags/MybatisPlus/index.html","315a2b4b20c9eb654604daf88b8477d1"],["/tags/Springboot/index.html","281f3657ee6877a25bdf96a7b184c90b"],["/tags/VUE3/index.html","ac92098240ead80a0ea59adf0a91aab4"],["/tags/index.html","0442d0afd4565225d54aba8445490821"],["/tags/redis/index.html","f5855f86cbfb928b0cf04f1a5ae58d06"],["/tags/socket/index.html","adf31ebdf3213ad87404276a18aefb8a"],["/tags/springcloud/index.html","457d4af2bbb2f2a09948e99ec535dbc2"],["/tags/uniapp/index.html","9c420e3f3c05a9a04bd7b7b70fa62897"],["/tags/拦截器/index.html","80a830a591b0e773e07b852e7eeab252"],["/tags/软件设计师/index.html","177296f569ff5454eccebad900af1311"],["/zc/index.html","4f909bcd4bfa091a58d73acd4f9a15a7"],["/zc/notes.html","23c638f14c40c386cca5a4a9b5ae8e16"]];
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
