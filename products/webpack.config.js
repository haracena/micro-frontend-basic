// nos permite linkear el file js resultante de webpack en nuestro index.html
// esto se hace porque no siempre el archivo resultante tiene un nombre en específico como para hacer el enlace estático
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")

module.exports = {
    mode: "development",
    devServer: {
        port: 8081
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "products",
            filename: "remoteEntry.js",
            exposes: {
                "./ProductsIndex": "./src/bootstrap"
            },
            shared: {
                faker: {
                    singleton: true
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}