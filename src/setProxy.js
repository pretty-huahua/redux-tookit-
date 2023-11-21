const proxySettings = {
  // 接口代理1
  '/api/': {
    target: 'http://127.0.0.1:7001', //后端请求地址
    // changeOrigin: true,// 加了这个属性，那后端收到的请求头中的host是目标地址 target
    pathRewrite: { '^/api': '' }, // 后台在转接的时候url中是没有 /api 的
  },
  // 接口代理2
  // '/api-2/': {
  //   target: 'http://198.168.111.111:3002',
  //   changeOrigin: true,
  // pathRewrite: {
  //   '^/api-2': '',
  // },
  // },
  // .....
}

module.exports = proxySettings
