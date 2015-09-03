/*!
 * JavaScript Cookie v2.0.0-pre
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl
 * Released under the MIT license
 */
(function(factory) {
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		var _OldCookies = window.Cookies;
		var api = window.Cookies = factory(window.jQuery);
		api.noConflict = function() {
			window.Cookies = _OldCookies;
			return api;
		};
	}
}

(function() {
	function extend() {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[i];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init(converter) {
		function api(key, value, attributes) {
			var result;

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				value = encodeURIComponent(String(value));
				value = value.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				return (document.cookie = [
					key, '=', value,
					attributes.expires && '; expires=' + attributes.expires.toUTCString(), // use expires attribute, max-age is not supported by IE
					attributes.path && '; path=' + attributes.path,
					attributes.domain && '; domain=' + attributes.domain,
					attributes.secure && '; secure'
				].join(''));
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var name = parts[0].replace(rdecode, decodeURIComponent);
				var cookie = parts.slice(1).join('=');

				if (cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				cookie = converter && converter(cookie, name) || cookie.replace(rdecode, decodeURIComponent);

				if (this.json) {
					try {
						cookie = JSON.parse(cookie);
					} catch (e) {}
				}

				if (key === name) {
					result = cookie;
					break;
				}

				if (!key) {
					result[name] = cookie;
				}
			}

			return result;
		}

		api.get = api.set = api;
		api.getJSON = function() {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function(key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init();
}));

(function() {
	//需缓存的数据
	var Cache = {
		phone: ''
	};
	var Data = {
		errmsg: '',
		map: {
			//正常返回
			0: {
				type: 'input-phone',
				topmsg: 'index_msg',
				render: function() {
					var msg = Data && Data.data && Data.data.brand || {};
					document.querySelector('.input-phone .bag-desc').innerHTML = msg.index_ad_1 || '百元大礼包任性送';
					//    document.querySelector('#fetche-voucher-form .text').innerHTML = msg.index_ad_2 || '全力以赴的你，今年回家坐好一点';
					document.querySelector('.bag-text').innerHTML = msg.index_ad_2 || '输入手机号，礼包自动放入滴滴账户';

					document.querySelector('.arrow-wrapper').style.display = 'block';
					var link = document.querySelector('.activity-details');
					Render.slip(link);
					//           Render.coverSlip(link);
					Render.renderPhone('phone');
				}
			},
			'9999': {
				type: 'download',
				topmsg: 'result_success_msg',
				render: function(data) {

					Render.voucherList(data.coupon_list || []);
					document.querySelector('.arrow-wrapper').style.display = 'block';
					var link = document.querySelector('#activity-details-already');
					//					document.querySelector('.img-responsive').src = baseUrl + 'image/voucher_bg_download.png'
					document.querySelector('#amount-box-title').innerHTML = "恭喜获得";
					document.querySelector('.voucher-count').innerHTML = Data.data.brand.result_success_msg;

					Render.slip(link);
					//                    Render.coverSlip(link);

				}
			},
			//签名错误
			1: {
				type: 'errmsg',
				topmsg: 'errmsg',
				render: function() {
					var msg = Data.data.brand.errmsg;
					Render.showOther(msg);
				}
			},
			//签名过期
			2: {
				type: 'errmsg',
				topmsg: 'errmsg',
				render: function() {
					var msg = Data.data.brand.errmsg;
					Render.showOther(msg);
				}
			},
			//已结束
			3: {
				type: 'errmsg',
				topmsg: 'errmsg',
				render: function() {
					Render.showException();
				}
			},
			//礼包已领完
			4: {
				//type : 'gameover',
				//topmsg : 'gameover',
				type: 'expired',
				topmsg: 'over_msg',
				render: function() {
					var msg = Data.data.brand.gameover;
					Render.showFetched(msg);
				}
			},
			//手机号错误
			5: {
				type: 'errmsg',
				topmsg: 'errmsg',
				render: function() {
					var msg = Data.data.brand.errmsg;
					Render.showOther(msg);
				}
			},
			//找不到渠道号
			6: {
				type: 'errmsg',
				topmsg: 'errmsg',
				render: function() {
					Render.showException();
				}
			},
			//你已经领过了
			7: {
				type: 'fetched',
				topmsg: 'robbed_msg',
				render: function(data) {
					var $count = document.querySelector('.voucher-count');
					$count && ($count.innerHTML = '这是您已领过的大礼包');
					Render.voucherList(data.coupon_list || []);
					document.querySelector('.arrow-wrapper').style.display = 'block';
					var link = document.querySelector('#activity-details-already');
					document.querySelector('#amount-box-title').innerHTML = "";
					document.querySelector('.unit').innerHTML = '';
					document.querySelector('.voucher-count').innerHTML = Data.data.brand.result_success_msg;
					Render.slip(link);
					//                Render.coverSlip(link);
				}
			},
			//系统错误*默认的配置
			11: {
				type: 'errmsg',
				render: function() {
					Render.showErrmsg();
				}
			},
			//请求超时
			12: {
				type: 'errmsg',
				render: function() {
					Render.showErrmsg();
				}
			},
			//用户限制领取
			13: {
				type: 'errmsg',
				topmsg: 'errmsg',
				render: function() {
					var msg = Data.data.brand.errmsg;
					Render.showUserLimit(msg);
				}
			},
			//活动未开始
			14: {
				type: 'errmsg',
				topmsg: 'errmsg',
				render: function() {
					Render.showException();
				}
			}

		},
		data: {
			/**
              input-phone:输入用户手机号
download : 输入手机号后，显示下载
last-use-info : 剩余
expired 过期
fetched 已领过
gameover 领完了
errmsg:错误提示
*/
			/*
               'status': 'fetched',
               'topimg': 'http://y0.ifengimg.com/tech_spider/dci_2012/07/4282b5cc398f4f67f3feb8a7dd3bdd24.jpg',
               'topmsg': '恭喜你抢到了我的滴滴专车券!!滴滴一下,专车接驾，快去体验吧!!',
               'msg_1': '30元',
               'msg_2': '专车券已放入滴滴账户18601367665，下载滴滴打车到“我的打车券”查看',
               'showToolBar': 1,
               'share': {
appid: '123',
img_url: 'http://img3.imgtn.bdimg.com/it/u=3822840563,1901297030&fm=23&gp=0.jpg',
link: 'http://www.baidu.com/',
title: '测试标题',
desc: '随便写点什么吧'
},
*/
		},
		//向服务器端请求券结果
		getVoucher: function(url) {
			var fn = arguments.callee,
				_data = Data.data,
				baseUrl = _data.promo_ip,
				phone = document.querySelector('#user-phone').value;

			//缓存手机号
			Cache.phone = phone;
			Cookies.set('didiVoucher', Cache);

			if (!url) {
				url = _data.open_url || '';
				if (!url) {
					//console.error('没有拿到url');
					return false;
				};

				url += '&phone=' + phone;
			}

			Tool.ajax({
				method: 'get',
				url: url,
				timeout: {
					millisecond: 15000,
					callback: function() {
						Render.loading.lastStatus();
					}
				},
				success: function(ret) {
					if (!ret) {
						ret = "{}";
					}

					ret = eval("(" + ret + ")");

					var errno = ret.errno * 1;
					_data.brand.errmsg = ret.errmsg || '';
					console.log('errmsg:', ret.errmsg)

					Data.errmsg = ret.errmsg;
					//                    console.log(_data);

					var next = ret.next * 1 || 2,
						url = ret.result_url,
						amount = ret.amount || 0;

					var delay = 50;
					console.log('errno:', errno);
					if ((errno || ret.data == "") && errno != 7) {
						//超时退出
						if (errno == '12') {
							Render.loading.lastStatus();
							errno = 0;
							delay = 2000;
						}
						//已抢过，或者其他错误提示
						setTimeout(function() {
							Render.loading.hide();
							_data.errno = errno;
							_data.msg_1 = amount || 0;
							Render.switchStatus();
							Render.loading.hide();
							return;
						}, delay);
					}

					//按照服务端提示，继续
					if (url) {
						//继续等等
						Render.loading.secStatus();
						setTimeout(function() {
							fn(url);
						}, next * 1000);
						return;
					}


					if (amount) {
						Render.loading.hide();
						_data.msg_1 = amount || 0;
						//_data.msg_2 = '已放入滴滴账户'+ phone  +'，下载滴滴打车到“我的打车券”查看';
						//        _data.msg_2 = '已放入滴滴账号'+ phone ;
						_data.msg_2 = phone;
						_data.errno = errno || 9999;
						_data.coupon_list = ret.coupon_list;
						Render.switchStatus();
						return;
					};

					if (errno == 7) {
						_data.msg1 = "您已领过的大礼包";
					}

				},
				error: function(ret) {
					console.log('ajax error');
					Data.data.errno = 11;
					Render.switchStatus();
					Render.loading.hide();
				}
			});
		},
		os: null,
		downloadApp: {
			/* 'android': 'http://dldir1.qq.com/diditaxi/apk/didi_psngr.apk',
			 'apple': 'http://diditaxi.com.cn/cdown.html'*/
			ios: {
				"packageName": "com.xiaojukeji.didi",
				"packageUrl": "diditaxi:passenger",
				"downloadUrl": "https://itunes.apple.com/cn/app/di-di-da-che-zhi-jian-shang/id554499054?ls=1&mt=8"
			},
			android: {
				"packageName": "com.sdu.didi.psnger",
				"packageUrl": "didipasnger://didi_apk_intalled_scheme",
				"downloadUrl": "http://dldir1.qq.com/diditaxi/apk/didi_psngr.apk"
			}
		},

		setShareData: function() {
			var data = Data.data || {},
				baseUrl = 'http://static.udache.com/gulfstream/webapp/pages/activity/big-gift-package/image/',
				brand = data.brand || {},
				isShowToolBar = parseInt(brand.is_show_toolbar);
			isShowToolBar = isNaN(isShowToolBar) ? 1 : isShowToolBar,
				imgUrl = ((brand.share_logo_url || '') + '').toLowerCase();
			imgUrl = imgUrl.substr(0, 7) == 'http://' ? imgUrl : (baseUrl + imgUrl);

			data.share = {
				showToolBar: isShowToolBar,
				appid: data.appid,
				img_url: imgUrl,
				link: data.share_link,
				title: brand.share_title,
				desc: brand.share_msg
			}
		},
		setParam: function(param) {
			if (!param) {
				return '';
			}

			var search = [];
			for (var i in param) {
				search.push(i + '=' + encodeURIComponent(param[i]));
			}

			return search.join('&');
		},
		setDefault: function() {
			console.log('设置默认数据');
			var cache = Cookies.getJSON('didiVoucher');

			//设置用户默认手机号
			if (!(cache && cache.phone)) {
				return false;
			}

			//设置默认手机号
			document.querySelector('#user-phone').value = cache.phone;
			//去掉placeholder默认提示
			document.querySelector('.input-text').style.visibility = 'hidden';
			//去掉提交按钮的disabled
			document.querySelector('#submit').removeAttribute('disabled');

		},
		init: function() {
			//获取所需参数
			//Data.getParam();
			//设置分享数据
			Data.setShareData();
			//渲染数据
			Render.init();
			//初始化事件
			Event.init();
			//Render.loading.show();
			//设置默认数据
			Data.setDefault();
		}
	};

	var Tool = {
		ajax: function(opts) {
			var helper = {
				createXhr: function() {
					var xhr;
					if (window.XMLHttpRequest) {
						xhr = new XMLHttpRequest();
					} else {
						try {
							xhr = new ActiveXObject('Microsoft.XMLHTTP');
						} catch (e) {
							try {
								xhr = new ActiveXObject("Msxml2.XMLHTTP");
							} catch (err) {}
						}
					}
					return xhr;
				},
				obj2Body: function(obj) {
					var res = '';
					if (obj) {
						for (var p in obj) {
							if (obj.hasOwnProperty(p)) {
								res += '&' + p + '=' + obj[p] + '';
							} else {}
						}
					} else {}
					return res.replace(/^\&/, "");
				},
				abortReq: function(xhr) {
					if (xhr) {
						xhr.abort();
					}
				}
			};

			var xhr = helper.createXhr();
			var _timeout = null;
			if (xhr) {
				xhr.open(opts.method, opts.url, true); //true表示异步
				xhr.onreadystatechange = function() {
					if (xhr.readyState === 4) {
						if (_timeout) {
							clearTimeout(_timeout);
						}
						if (xhr.status === 200) {
							opts.success(xhr.responseText);
						} else {
							opts.error(xhr.responseText);
						}
					} else if (xhr.readyState === 3) {} else {}
				};
				if (opts.method.toUpperCase() === 'GET') {
					xhr.send(null);
				} else if (opts.method.toUpperCase() === 'POST') {
					var body = opts.data ? helper.obj2Body(opts.data) : "";
					xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					xhr.send(body);
				} else {}

				if (opts.timeout) {
					var _millisecond = opts.timeout.millisecond || 300,
						_callback = opts.timeout.callback || function() {};
					_timeout = setTimeout(function() {
							helper.abortReq(xhr);
							_callback();
						},
						_millisecond);
				}
			}
		},

		getParam: function(key, def, url) {
			var url = url || location.search,
				svalue = url.match(new RegExp('[\?\&]' + key + '=([^\&]*)(\&?)', 'i')),
				val = svalue ? svalue[1] : svalue;
			val = (val === null) ? '' : val;
			val = decodeURIComponent(val);
			return val || def || "";
		},
		hasClass: function(obj, cls) {
			if (!obj) return;
			return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
		},

		addClass: function(obj, cls) {
			if (!obj) {
				return;
			}
			if (obj.length) {
				for (var i = 0; i < obj.length; i++) {
					if (!Tool.hasClass(obj[i], cls)) obj[i].className += " " + cls;
				}
				return;
			}
			if (!Tool.hasClass(obj, cls)) obj.className += " " + cls;
		},

		removeClass: function(obj, cls) {
			if (!obj) return;
			if (obj.length) {
				for (var i = 0; i < obj.length; i++) {
					if (Tool.hasClass(obj[i], cls)) {
						var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
						obj[i].className = obj[i].className.replace(reg, ' ');
					}
				}
				return;
			}

			if (Tool.hasClass(obj, cls)) {
				var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
				obj.className = obj.className.replace(reg, ' ');
			}
		},

		toggleClass: function(obj, cls) {
			if (Tool.hasClass(obj, cls)) {
				Tool.removeClass(obj, cls);
			} else {
				Tool.addClass(obj, cls);
			}
		},
		getParam: function(key) {
			var searchString = document.location.search.toString();
			var returnValue = '';
			if (searchString.substr(0, 1) == '?' && searchString.length > 1) {
				var queryString = searchString.substring(1, searchString.length)
				var queryList = queryString.split('&');
				for (var i = 0; i < queryList.length; i++) {
					var oneQuery = queryList[i].split('=');
					if (oneQuery[0] == key && oneQuery.length == 2) {
						returnValue = oneQuery[1];
					}
				}
			}
			return returnValue;
		}
	}

	var Render = {
		renderPhone: function(name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var url = window.location.search.substr(1).match(reg);
			if (url != null) {
				$('#user-phone').val(unescape(url[2]));
				$('.input-text').hide();
				$('#submit').removeAttr('disabled');
				Render.loading.show();
				Data.getVoucher();
				//			return unescape(url[2]);
			} else {
				return;
			}
		},
		/*
		        coverSlip : function(link){
		            var start=0 , end=0, move=0,distance=0;

		            
		            link.addEventListener('touchstart',function(e){
		                 
		                var touch = e.touches[0];
		                start = move = parseInt(touch.pageY);
		            },false);
		            link.addEventListener('touchmove',function(e){
		                var touch = e.touches[0];
		                move = parseInt(touch.pageY);
		            },false);
		            link.addEventListener('touchend',function(e){
		                end = move;
		                distance = Math.abs(end-start);
		                if(distance <= 10){
		                      document.querySelector('.activity-details-cover').style.display = "block";
		                }
		                else{
		                    Render.slip(link);
		                }
		            },false);

		            var close = document.querySelector('.activity-details-cover-close');
		            close.addEventListener('touchend',function(e){
		                document.querySelector(".activity-details-cover").style.display = "none";
		              //  Tool.removeClass(document.querySelector('body'),'over_main');
		            },false);
		            
		        },
			*/
		//上下滑动箭头显示隐藏
		slip: function(link) {
			var startY = 0,
				endY = 0,
				move = 0,
				distance = 0,
				pageY = 0;
			var oArrow = document.querySelector('.arrow');
			var height = window.screen.height;
			var lengthY = 0;
			var container = document.querySelector('.container-content');

			setInterval(function() {

				pageY = window.pageYOffset;
				if (pageY <= 80) {
					Tool.removeClass(oArrow, 'arrow_none');
				} else {
					Tool.addClass(oArrow, 'arrow_none');
				}
			}, 500);

		},
		loading: function() {
			var $loading = document.querySelector('.loading-box'),
				$bg = document.querySelector('.loading-bg-img>.loading-bg'),
				$status = document.querySelector('.loading-bg-img>.loading');
			$text = document.querySelector('.loading-bg-img>span.text');

			//
			var $progress = document.querySelector('.progress');
			var $bar = document.querySelector('.progress-bar');
			var tId;
			var progress = {
				timeout: 10, //计时器时间，单位：秒
				defaultWidth: 5, //默认长度
				maxWidth: 98, //最大长度
				per: 0.5 //每隔X秒动画前进一次 
			}

			return {
				//显示loading，正在获取礼包
				show: function() {
					var data = Data.data,
						baseUrl = data.promo_ip;
					Tool.removeClass($loading, 'hide');
					$bg.src = baseUrl + 'image/loading_bg.png';
					$status.src = baseUrl + 'image/loading.gif';
					$text.src = baseUrl + 'image/get_0.png';
					//
					Render.loading.progressShow();


					//隐藏金钱图
					Tool.addClass(document.querySelector('.img-money-input'), 'hide');
					var $bag = document.querySelector('.img-bag-top'),
						bagImg = $bag.src;
					$bag.src = bagImg.replace('bag-1', 'bag-1-fetched');
				},
				hide: function() {
					Tool.addClass($loading, 'hide');
					Render.loading.progressHide();
				},
				secStatus: function() {
					var data = Data.data,
						baseUrl = data.promo_ip;
					$text.src = baseUrl + 'image/get_1.png';
				},
				lastStatus: function() {
					var data = Data.data,
						baseUrl = data.promo_ip;
					//$text.src = baseUrl + 'image/get_empty.png';
					$text.innerHTML = '抱歉，没有拿到礼包<br />请一会再来吧';
					//$status.src = baseUrl + 'image/loading_empty.png';
					$status.className = 'loading empty';
					//隐藏进度条
					Render.loading.progressHide();
				},
				progressShow: function() {
					var timeline,
						per = timeline = progress.per,
						bar = progress.defaultWidth,
						timeout = progress.timeout,
						step = (progress.maxWidth - bar) / (timeout / per);
					$bar.style.width = bar + '%';

					Tool.removeClass($progress, 'hide');
					tId = setInterval(function() {
						bar += step;
						$bar.style.width = bar + '%';
						timeline += per;
						if (timeline > timeout) {
							clearInterval(tId);
						}
					}, per * 1000);

				},
				progressHide: function() {
					clearInterval(tId);
					Tool.addClass($progress, 'hide');
				}
			}
		}(),
		init: function() {
			var data = Data.data,
				status = data.status;
			//渲染用户用户头像
			Render.headImg();
			//切换对应状态
			Render.switchStatus();
			//获取系统类型
			Render.downloadApp();
			Render.weixin();

			//	Render.qq();
		},


		partnerLinkBtn: function(content) {
			content = content || document;
			var btn = content.querySelector('.partner-link');

			if (Data.data.brand.is_show_partner == 0 || typeof(Data.data.brand.is_show_partner) == 'undefined') {
				Tool.addClass(btn, 'hide');
			} else if (Data.data.brand.is_show_partner == 1) {
				btn.innerHTML = partner.name;

				btn.addEventListener('touchend', function() {
					location.href = partner.link;
				});
			}

		},

		switchStatus: function() {
			console.log(Data.data.errno);
			//渲染用户提示信息，引号内数据
			var data = Data.data,
				errno = data.errno != undefined ? data.errno : 11,
				brand = data.brand || {},
				partner = brand.partner || {},
				$partnerLogo = document.querySelector('.logo-box .partner'),
				partnerLogo = partner.logo || '',
				isShowBanner = parseInt(brand.is_show_banner) || 0,
				map = Data.map[errno],
				status = (map && map.type != undefined) ? map.type : 'errmsg',
				msg = data.brand || {},
				topmsg = msg && map && map.topmsg && msg[map.topmsg] || '操作太频繁啦！！！',
				$tipsContent = document.querySelector('.tips-content'),
				$container = document.querySelector('.container-content'),
				defaultContainerBg = 'http://static.udache.com/gulfstream/webapp/pages/activity/big-gift-package-2/image/light-new.png';
			baseUrl = data.promo_ip,
				$share = document.querySelector('.share-to-friend'),
				$company = document.querySelector('.external-company'),
				$app = document.querySelector('.download-app'),
				ifShare = parseInt(brand.show_toobar),
				ifShare = isNaN(ifShare) ? 1 : ifShare;
			var $logo = document.querySelector('.logo'),
				$titleImg = document.querySelector('.img-title img');
			//设置页面标题
			if (msg.pageTitle) {
				document.title = msg.pageTitle;
			}

			//设置logo，若传值为合作方logo否则为空
			if (msg.index_logo_url) {
				$logo.querySelector('.img-responsive').src = msg.index_logo_url;
			} else {
				//$logo.querySelector('.img-responsive').src = baseUrl + 'image/logo_new.png';
				$logo && ($logo.parentNode.innerHTML = '');
			}

			//设置banner，若没传值，则设置为空
			if (msg.index_banner_url) {
				$titleImg.src = msg.index_banner_url;
			} else {
				//$titleImg.src = baseUrl + 'image/title.png';	
				$titleImg && ($titleImg.parentNode.innerHTML = '');
			}

			//设置默认背景图片
			if (status == 'download' || status == 'fetched') {
				$container.style.backgroundImage = 'url(' + (msg.downloadBanner || msg.inputBanner || defaultContainerBg) + ')';
			} else {
				$container.style.backgroundImage = 'url(' + (msg.inputBanner || msg.downloadBanner || defaultContainerBg) + ')';
			}

			Tool.addClass(document.querySelector('.voucher-content'), 'hide');
			Tool.removeClass(document.querySelector('.' + status), 'hide');

			//判断上方气泡文案长度
			if (topmsg.length <= 17) {
				$tipsContent.style.textAlign = 'center';
			} else {
				$tipsContent.style.textAlign = 'left';
			}

			$tipsContent.innerHTML = topmsg;

			//底部文案
			if (footMsg = msg.foot_msg) {
				document.querySelector('.activity-desc p').innerHTML = footMsg;
				//document.querySelector('.activity-desc p').style.color='#9e9e9e';
			}

			//分享按钮及右上角的分享是否显示
			if (ifShare == 0) {
				Tool.addClass($share, 'hide');
				data.share.showToolBar = false;
			} else if (ifShare == 1) {
				Tool.removeClass($share, 'hide');
				data.share.showToolBar = true;
			}

			//商家按钮是否显示 
			Render.companyBtn();
			//渲染荣誉框
			Render.voucherContent();
			map ? map.render && map.render(data) : Data.map[11].render(data);
		},
		voucherList: function(data) {
			if (!(data && data.length)) {
				return false;
			}


			//设置logo
			Tool.addClass(document.querySelector('.img-title'), 'active')

			var $voucherList = document.querySelector('.voucher-list');
			var html = [],
				temp = '<div class="{type} clearfix">' +
				'     <div class="amount"> ' +
				//       '         <span class="unit">￥</span>' + 
				'         <span class="zhengshu">{amount}<span class="zhekou">{zhekou}</span></span>' +
				'         <span class="unit">{unit}</span>' +
				'     </div>' +
				'     <div class="desc">' +
				'         <p>{remark}</p>' +
				'         <p>{deadline}到期</p>' +
				'     </div>' +
				' </div>';

			var str, item, type, amount;
			var typeConf = {
				'100': 'taxi',
				'200': 'zhuanche',
				'210': 'kuaiche',
				'150': 'shunfengche',
				'160': 'pinche'
			};

			if (!$voucherList) {
				console.error('未能找到券列表容器');
				return;
			}

			for (var i in data) {
				str = temp;
				item = data[i];
				type = typeConf[item.productid] || '';
				amount = item.amount || '';
				if (!type || amount.length > 2) {
					continue;
				}


				//        str = str.replace(/\{amount\}/g,item.amount || 0);
				//        str = str.replace(/\{remark\}/g,item.remark || item.name || '通用券' );
				str = str.replace(/\{deadline\}/g, item.deadline || '');
				str = str.replace(/\{type\}/g, type || '');

				if (item.discount && item.discount > 0) {
					item.discount = item.discount / 10;
					var money = (item.discount).toString().split('.');
					str = str.replace(/\{amount\}/g, money[0] || 0);
					str = str.replace(/\{zhekou\}/g, '.' + (money[1] || 0));
					str = str.replace(/\{unit\}/g, '折');
					str = str.replace(/\{remark\}/g, '最高抵扣' + item.amount + '元' || '折扣券');
				} else {
					str = str.replace(/\{amount\}/g, item.amount || 0);
					str = str.replace(/\{zhekou\}/g, '');
					str = str.replace(/\{unit\}/g, '元');
					str = str.replace(/\{remark\}/g, item.remark || item.name || '通用券');
				}

				html.push(str);
			}

			$voucherList.innerHTML = html.join('');

			var $count = document.querySelector('.voucher-count span');
			$count && ($count.innerHTML = html.length);

			//设置动画
			document.body.scrollTop = 0;
			setTimeout(function() {
				Tool.addClass(document.querySelector('.container-content'), 'fetched-active');
			}, 500)
		},
		//显示错误信息
		showErrmsg: function() {
			console.log('showErrmsg');
			if (document.querySelector('#errmsg-desc')) {
				document.querySelector('#errmsg-desc').innerHTML = '稍等一下，再来领取哦';
			} else {
				var div = document.createElement('div');
				div.id = 'errmsg-desc';
				div.style.cssText = 'font-size:15px; color:#fff;';
				div.innerHTML = '稍等一下，再来领取哦';
				document.querySelector('#errmsg-text').parentNode.appendChild(div);
			}
			//    document.querySelector('#errmsg-text').innerHTML = '操作太频繁啦';
			document.querySelector('#errmsg-text').innerHTML = Data.errmsg;

		},
		//显示已领完
		showFetched: function(msg) {
			console.log('showFetched');
			document.querySelector('.expired .tip').innerHTML = '你来晚了，下次早点来哦';
			document.querySelector('.expired .text').innerHTML = msg;
		},
		//显示点击领取红包前出现的异常页
		showException: function(msg) {
			console.log('showException');
			var errno = Data.data.errno || null;
			var tips = '';
			if (!msg) {
				switch (errno) {
					//活动已结束
					case 3:
						msg = Data.data.errmsg || '活动已经结束啦';
						tips = '你来晚了，下次早点来哦';
						break;
						//渠道号错误
					case 6:
						msg = Data.data.errmsg || '领取太频繁啦';
						tips = '稍等一下，再来领取哦';
						break;
						//活动未开始
					case 14:
						msg = Data.data.errmsg || '活动还没有开始哦';
						tips = '亲，请保持关注哟';
						break;
					default:
						msg = '领取太频繁啦';
						tips = '稍等一下，再来领取哦';
						break;
				}
			}
			if (document.querySelector('#errmsg-desc')) {
				document.querySelector('#errmsg-desc').innerHTML = tips;
			} else {
				var div = document.createElement('div');
				div.id = 'errmsg-desc';
				div.style.cssText = 'font-size:15px; color:#fff;';
				div.innerHTML = tips;
				document.querySelector('#errmsg-text').parentNode.appendChild(div);
			}
			document.querySelector('#errmsg-text').innerHTML = msg;

		},
		//显示其他错误
		showOther: function(msg) {
			console.log('showOther');
			if (document.querySelector('#errmsg-desc')) {
				document.querySelector('#errmsg-desc').innerHTML = '稍等一下，再来领取哦';
			} else {
				var div = document.createElement('div');
				div.id = 'errmsg-desc';
				div.style.cssText = 'font-size:15px; color:#fff;';
				div.innerHTML = '稍等一下，再来领取哦';
				document.querySelector('#errmsg-text').parentNode.appendChild(div);
			}
			document.querySelector('#errmsg-text').innerHTML = msg;

		},
		//显示用户限制领取
		showUserLimit: function(msg) {
			console.log('showUserLimit');
			if (document.querySelector('#errmsg-desc')) {
				document.querySelector('#errmsg-desc').innerHTML = '滴滴一下，美好出行';
			} else {
				var div = document.createElement('div');
				div.id = 'errmsg-desc';
				div.style.cssText = 'font-size:15px; color:#fff;';
				div.innerHTML = '滴滴一下，美好出行';
				document.querySelector('#errmsg-text').parentNode.appendChild(div);
			}
			document.querySelector('#errmsg-text').innerHTML = msg;

		},
		companyBtn: function() {
			var data = Data.data,
				msg = data.brand || {},
				partner = msg.partner || {},
				baseUrl = data.promo_ip;
			$company = document.querySelectorAll('.external-company'),
				$app = document.querySelector('.download-app'),
				ifCompany = partner.link ? 1 : 0;

			if (msg.is_show_partner == 0 || typeof(msg.is_show_partner) == 'undefined') {
				Tool.addClass($company, 'hide');
				$app.style.width = '100%';
				$app.style.color = '#fff';
				$app.style.backgroundColor = '#ff8a01';
				$app.style.border = 'none';
			} else if (msg.is_show_partner == 1) {

				for (var i = 0; i < $company.length; i++) {
					$company[i].innerHTML = partner.name || '合作商家';
				}
				document.querySelector('body').addEventListener('click', function(e) {
					if (Tool.hasClass(e.target, 'external-company')) {
						location.href = partner.link || '#';
						return false;
					}
				});
			}
		},
		//渲染荣誉框
		voucherContent: function() {
			var data = Data.data,
				errno = data.errno,
				map = Data.map,
				status = map && map[errno] !== undefined && map[errno].type || 'errmsg';

			var $content = document.querySelector('.' + status);

			Tool.removeClass($content, 'hide');
			if (errno == 7) {
				data.msg_1 = '您已领过大礼包';
				$content.querySelector('.msg_1 .amount').style.fontSize = '14px';
				$content.querySelector('.msg_1 .amount').style.display = 'block';
				$content.querySelector('.msg_1 .amount').style.marginBottom = '0';
				$content.querySelector('.msg_1 .unit').style.display = 'none';
			}
			$content.querySelector('.msg_1 .amount') && ($content.querySelector('.msg_1 .amount').innerHTML = data.msg_1 || '');

			$content.querySelector('.msg_2') && ($content.querySelector('.msg_2').innerHTML = data.msg_2 || '');

		},
		//渲染用户头像
		headImg: function() {
			var data = Data.data,
				baseUrl = data.promo_ip,
				img = '';
			if (!data.brand.index_logo_url || data.brand.index_logo_url == '') {
				img = 'http://static.udache.com/gulfstream/webapp/pages/activity/big-gift-package-2/image/logo_new.png';
			} else {
				img = /http:\/\//.test(data.brand.index_logo_url) ? data.brand.index_logo_url : (baseUrl + 'image/' + data.brand.index_logo_url);
			}
			$topImg = document.querySelector('.top-img');
			$topImg.src = img;
		},
		//设置微信显示，隐藏，分享
		weixin: function(fn) {
			//微信相关
			var onBridgeReady = function() {
				if (!WeixinJSBridge) {
					return; // 保证WeixinJSBridge存在
				}
				if (!Data.data.share.showToolBar) {
					WeixinJSBridge.call('hideToolbar'); //隐藏底部工具栏
					WeixinJSBridge.call('hideOptionMenu'); //隐藏右上角分享按钮  
				}
				//  WeixinJSBridge.call('hideAllNonBaseMenuItem');
				// WeixinJSBridge.invoke('getNetworkType',{},function(e){alert(e.err_msg);});
				WeixinJSBridge.invoke('hideMenuItems', {
					"menuList": ['menuItem:copyUrl']
				}, function(res) {});
				if (fn) {
					fn();
				} else {

					define_wx_share(WeixinJSBridge);
				}
			};

			//微信控制
			if (typeof WeixinJSBridge === "undefined") {
				document.addEventListener('WeixinJSBridgeReady', onBridgeReady);
				return;
			} else {
				onBridgeReady();
			}
			/*if(!Data.data.share.showToolBar){
                 WeixinJSBridge.call('hideToolbar'); //隐藏底部工具栏
                 WeixinJSBridge.call('hideOptionMenu'); //隐藏右上角分享按钮
                 return;
        }*/

		},

		/*
			qq: function(){
				wx.onMenuShareQQ({
					title: "12345",
					desc: "aaaaa",		
				})	
				
			},
		*/
		//初始化下载按钮对应的链接
		downloadApp: function() {
			var os = '';
			if ((navigator.userAgent.match(/(Android)/i))) {
				os = 'android';
			} else if ((navigator.userAgent.match(/(iPhone|iPod|ios|iPad)/i))) {
				os = 'ios';
			}
			Data.os = Data.downloadApp[os];

		}
	}

	var Event = {
		//初始化
		init: function() {
			Event.bindEvent();
			Event.downloadApp();
			Event.shareToFriend();
			Event.makePoster();
			Event.setShare();
		},

		setShare: function() {
			if (didi.is('weixin')) {
				//微信环境暂时使用老的didiJsBridge对接分享
				return;
			}
			var data = didiActivityData.share;

			if (!Data.data.share.showToolBar) {
				// 端上配置了隐藏分享的话就隐藏入口
				didi.setShare(false);

			} else {

				didi.setShare({
					url: data.link,
					icon: data.img_url,
					title: data.title,
					content: data.desc,
				});
			}
		},

		bindEvent: function() {
			//验证用户的手机号码

			document.querySelector('#user-phone').addEventListener('focus', function() {
				document.querySelector('.input-text').style.visibility = 'hidden';
			});
			document.querySelector('#user-phone').addEventListener('blur', function() {
				if (this.value.length == 0) {
					document.querySelector('.input-text').style.visibility = 'visible';
				} else {
					document.querySelector('.input-text').style.visibility = 'hidden';
				}
			});
			document.querySelector('#user-phone').addEventListener('input', function() {
				var phone = this.value.replace(/\s/ig, ''),
					$submit = document.querySelector('#submit');
				if (/\d{11}/.test(phone)) {
					$submit.removeAttribute('disabled');
				} else {
					$submit.style = {};
					$submit.setAttribute('disabled', true);
				}
			});
			document.querySelector('#submit').addEventListener('touchstart', function() {
				if (this.disabled) {
					return;
				}
				this.style.backgroundColor = '#cd6600';
			});
			document.querySelector('#submit').addEventListener('touchend', function() {
				if (this.disabled) {
					return;
				}
				this.style.backgroundColor = '#ff8a01';
			});
			//提交表单，获取礼包
			document.querySelector('#fetche-voucher-form').addEventListener('submit', function(e) {
				Render.loading.show();
				Data.getVoucher();
				e.preventDefault();

			});
		},
		shareToFriend: function() {

			return false;

			var $div = document.querySelector('#dv-cover');
			var data = Data.data,
				baseUrl = data.promo_ip;
			document.querySelector('.voucher-content .share-to-friend').addEventListener('click', function(e) {
				//document.querySelector('#btn-hide-cover').src = baseUrl+"image/share-bg-btn.png";
				$div && Tool.removeClass($div, 'hide');

			});

			document.querySelector('#btn-hide-cover').addEventListener('click', function(e) {
				$div && Tool.addClass($div, 'hide');
			});

		},
		//下载客户端
		downloadApp: function() {
			/* var data = Data.data,
			  $button = document.querySelector('.voucher-content .download-app'),
			  os = Data.os;

			  if (!os) {
			      $button.innerHTML = '系统APP不支持';
			      Tool.addClass($button, 'no-app');
			      return;
			  }

			  document.querySelector('body').addEventListener('click', function(e) {
			      if (Tool.hasClass(e.target, 'download-app')) {
			          location.href = Data.downloadApp[os];
			      }
			      return false;
			  });*/
			var data = Data.data,
				os = Data.os;

			var goto = function(type) {

				if (type == "download") {
					url = os.downloadUrl;
					document.querySelector('.download-app').innerHTML = '下载滴滴客户端';
				} else {
					url = os.packageUrl;
					document.querySelector('.download-app').innerHTML = '立即试用';
				}

				document.querySelector('.download-app').addEventListener('click', function(e) {
					location.href = url;
				}, false);
			}

			var fn = function() {};

			console.log(os);
			if (navigator.userAgent.match(/(micromessenger)/i)) {
				Render.weixin(function() {
					setTimeout(function() {
						WeixinJSBridge.invoke('getInstallState', os, function(e) {
							// WeixinJSBridge.invoke('getInstallState', {packageName:"com.sdu.didi.psnger",packageUrl:"didipasnger://didi_apk_intalled_scheme"}, function(e) {
							var msg = e.err_msg;
							var url;
							if (msg.indexOf("get_install_state:yes") > -1) {
								goto("app");
							} else {
								goto("download");
							}
						});
					}, 200);
				});
			} else if (os) {
				goto("download");
			} else {
				document.querySelector('.download-app').style.opacity = 0;
			}


		},
		makePoster: function() {
			//如果PC则不显示制作按钮,
			$btnBox = document.querySelector('.download .btn-box');

			//仅仅手机端允许
			if (navigator.userAgent.match(/(Android|iPhone|iPod|ios|iPad)/i)) {
				//允许制做海报
				//去掉边框，允许滚动
				Tool.addClass(document.querySelector('.container'), 'mobile');
			}

			if (navigator.userAgent.match(/(micromessenger)/i)) {
				Tool.removeClass($btnBox, 'hide');
			}

		}
	}

	/**
	 * 定义微信分享接口
	 * @param  {[type]} WeixinJSBridge [description]
	 * @return {[type]}                [description]
	 */
	function define_wx_share(WeixinJSBridge) {
		var share = Data.data.share;

		//WeixinJSBridge.call('hideToolbar'); //隐藏底部工具栏
		//WeixinJSBridge.call('hideOptionMenu'); //隐藏右上角分享按钮
		//WeixinJSBridge.call("showOptionMenu");
		// WeixinJSBridge.call('hideToolbar');
		// WeixinJSBridge.call('hideToolbar');
		/**
		 * 分享给好友
		 * @param  {[type]} argv [description]
		 * @return {[type]}      [description]
		 */
		WeixinJSBridge.on('menu:share:appmessage', function() {
			WeixinJSBridge.invoke('sendAppMessage', {
					"appid": share.appid,
					"img_url": share.img_url,
					"link": share.link,
					"title": share.title,
					"desc": share.desc,
				},
				function(res) {});
		});

		/**
		 * 分享到朋友圈
		 * @param  {[type]} argv [description]
		 * @return {[type]}      [description]
		 */
		WeixinJSBridge.on('menu:share:timeline', function() {
			WeixinJSBridge.invoke('shareTimeline', {
					"img_url": share.img_url,
					"link": share.link,
					"title": share.title,
					"desc": share.desc,
				},
				function(res) {});
		});
	}

	document.addEventListener("DOMContentLoaded", function(ev) {
			//设置默认数据
			Data.data = didiActivityData;
			console.log(Data.data);

			Data.init();
		},
		false);
})();