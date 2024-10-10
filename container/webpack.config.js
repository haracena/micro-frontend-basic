// nos permite linkear el file js resultante de webpack en nuestro index.html
// esto se hace porque no siempre el archivo resultante tiene un nombre en específico como para hacer el enlace estático
const HtmlWebpackPlugin = require("html-webpack-plugin");

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container", // no es necesaria la prop name en el container, pero se usa por convención
            remotes: {
                products: "products@http://localhost:8081/remoteEntry.js",
                cart: "cart@http://localhost:8082/remoteEntry.js"
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}