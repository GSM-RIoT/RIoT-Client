const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        "/manual",
        createProxyMiddleware({
            target: "http://10.120.75.224:3000/manual",
            changeOrigin: true,
        })
    )
}