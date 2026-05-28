/******************************
脚本功能：彩云天气-登陆后解锁会员
更新时间：2024-06-10
作者：Curtinp118
*******************************
[rewrite_local]
^https:\/\/biz\.cyapi\.cn\/ url script-response-body https://raw.githubusercontent.com/curtinp118/QuantumultX/refs/heads/main/scripts/caiyun.js
[mitm]
hostname = biz.cyapi.cn
*******************************/

const body = JSON.parse($response.body);

if ($request.url.indexOf("/v2/user") !== -1) {
  body.result.is_vip = true;
  body.result.vip_type = "s";
  body.result.svip_expired_at = 4070951226;
}

$done(JSON.stringify(body));
