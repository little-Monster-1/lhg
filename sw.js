/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/09/03/redis学习/index.html","944b1e2565485872023deeed42d35c3d"],["/2024/09/06/MybatisPlus/index.html","7efcff71f60746bb0d01d9cac72553cc"],["/2024/09/07/vue3/index.html","e113b1d98bb3eea64ca0c88930105e5b"],["/2024/09/07/浅学Docker/index.html","d7ed6d5ab94c50e53e718f8c8c3e95fd"],["/2024/09/10/微服务/index.html","f8e16cc8191c71279af9e7306a4e1551"],["/2024/09/23/RabbitMQ/index.html","3362acc291a25e033470782993971538"],["/2024/09/28/uniapp/index.html","74b57fd3cdd311dcc262dc91fc923fa9"],["/2024/10/17/软件设计师错题/index.html","652f75e7bf4fdc9fffa2626719196d65"],["/2024/11/11/AOP/index.html","7812120c54db06a920dad0a3ac30b2f4"],["/2024/11/16/MYSQL/index.html","b6bef47fdfee6b7e475387d5a09df735"],["/2024/11/19/HTML/index.html","afc7e8f8bdd957a30955c781d9d0ee55"],["/2024/11/25/EasyChat/index.html","a03836481f9270a894de8575514852f3"],["/2024/11/28/拦截器/index.html","42d1ea248c0d141035972c256b2910ae"],["/archives/2024/09/index.html","668a09cda04bd380cc249fc687c894f1"],["/archives/2024/10/index.html","2615908f207fcd8e78d9db83f5b0128d"],["/archives/2024/11/index.html","8bc5d289d54547c6a25b0e1fed0893c8"],["/archives/2024/index.html","1d7670a35aa1df1b84b1e022487a28af"],["/archives/2024/page/2/index.html","d3a9c688b605bc961af1dc52dd11a5d4"],["/archives/index.html","7e0d7d4305b50f22ec8de38f9ea97d4f"],["/archives/page/2/index.html","91226bc4b7643d4b85a517364afd681c"],["/categories/MQ/index.html","9951d36f659c5fd6e5c9e5d12a42ab36"],["/categories/Mybatis/index.html","ba31f0da51c0f4e7ffbc7e2ea96c9fcd"],["/categories/Springboot/index.html","a343fb97f0718ae3450b08256aad0099"],["/categories/index.html","cbaba32d38ae0b87ff0257489bd083c6"],["/categories/redis/index.html","d438666180ad70e9e68ea908eb4e6e73"],["/categories/springcloud/index.html","3e1b2ede59de33fd7145f8ee946adc73"],["/comments/index.html","01113df4f527ea9b64351e4879040e3a"],["/css/custom.css","368c276f4ff845a019b72e98b69f15ec"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","d5f208679a2689f7700582e753604aae"],["/css/twikoo_beautify.css","4bc0a53a36fd0e9649e987b627616557"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/font.css","f56bdf6e39d4562593e018d712175d96"],["/img/1.jpg","79e15110764673606842858a0ba6b856"],["/img/2.png","93ab4c370f54b2e45f904204f5156083"],["/img/3.jpg","4f06b33e1c3422c7a1e6173fa98e4d51"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/Docker.png","80bcd3a601abbd6dbf0b3d8fcda3e90b"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/hly.jpg","3871d0f1e251eedede0e197ebe53f859"],["/img/zc/1.jpg","4a74c31fd522e893571e4b949099bd70"],["/img/zc/10.jpg","fc0626de0601cc70dc83365d43e5d806"],["/img/zc/11.jpg","7c726ab69003fcb451b990a5b2c1c60c"],["/img/zc/12.jpg","ac22e3d1c5e88a6be1d2c23953d8a287"],["/img/zc/13.jpg","1a85e8a76550b54cd5a732b7dc638a71"],["/img/zc/14.jpg","585da98c2953f192fc6451f592287857"],["/img/zc/2.jpg","2433e4809be49729082a8941626cefff"],["/img/zc/3.jpg","eea83fd66f7deb518aab1040324c4cc6"],["/img/zc/4.jpg","e003f737f7709c72035ddd9387b517b7"],["/img/zc/5.jpg","fca2af8ab9b472c7b7686a1bd63a34b7"],["/img/zc/6.jpg","4e58780172f74819dcc766c690890adf"],["/img/zc/7.jpg","2e44eed62d01b94cab1c043d339788d6"],["/img/zc/8.jpg","4df55e6f243264302ca4f034ff7ae5a3"],["/img/zc/9.jpg","077a804086f7b8121b479faf7fe12e7c"],["/img/zc/hua.jpg","2f20b677e8bfdf5e5691a6e142ec9daf"],["/img/zc/hua1.jpg","f1e046babee81733ddd9a68b5883c3b2"],["/index.html","10c9d03c16ff8631e2f68e1d7bccd2fc"],["/js/diytitle.js","405e65bc3a211b60fa56f7f578eb474b"],["/js/main.js","960297fafacb19dff1246d71f6dfcf6f"],["/js/search/algolia.js","4491ac1d470a1693a502a9d09034aa21"],["/js/search/local-search.js","9da6b76672a143c8c8449770a8d259f3"],["/js/tw_cn.js","fb4da68124bbafbd2d3da537c80e27ce"],["/js/utils.js","420a15cf446b5670244a9ea05b2bccf0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/live2dw/assets/moc/koharu.2048/texture_00.png","495eea8d906c2b03abfe3fa9de2f2a8b"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","4e90921d6c2d444c035d0452895e40d3"],["/schedule/index.html","f2afd1ec73c7c573438db0fdfca18ada"],["/schedule/notes.html","22a0c5147c62c5a84fe3d693b9a1df55"],["/static/css/custom.css","c4bbfc028141d111fb3c1f018249a8f0"],["/sw-register.js","1665218c9200e822816ee50b78bd3cf9"],["/tags/AOP/index.html","f4856399553d6af309b07a06b12d1021"],["/tags/Docker/index.html","f40a7d1afb73934c8200423a9a76c1fa"],["/tags/HTML/index.html","f10304f8c29be904eb34d593aa566dc6"],["/tags/MQ/index.html","607d0f8ab853a448b7b7d85c8f372234"],["/tags/MYSQL/index.html","0dc6dbfd8cd73211a092148f283b7e6e"],["/tags/MybatisPlus/index.html","da0c3ecee736307ce06d307d93b0d553"],["/tags/Springboot/index.html","ad82686ffe42adedaebd6c2c691c9c4a"],["/tags/VUE3/index.html","cf610ba23d9749e4875f3f078a53abdc"],["/tags/index.html","67f98d16f23fddfc140464af8c64c7a5"],["/tags/redis/index.html","cd555f3d90c56870d3b4748ae5bf264f"],["/tags/socket/index.html","08fedadaba87210ad17234fe8842d27f"],["/tags/springcloud/index.html","7e2fc3533f36ba124c64622ad813994c"],["/tags/uniapp/index.html","aececd0001a5da653572eb32d00a39b4"],["/tags/拦截器/index.html","97fb080bc9a91c26587aaccd4ba16734"],["/tags/软件设计师/index.html","07cedb8bc24112f4e558de965d659360"],["/zc/index.html","5f05a7a09043a9657c8d4e05887776e6"],["/zc/notes.html","07559c43b647bf52dcf7628d50a3df7a"]];
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
