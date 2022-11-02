const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    ['/api'],
    createProxyMiddleware({
      target: 'http://3.38.108.228:8080',
      changeOrigin: true,
    }),
  );
};
