const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    //donde vivira el projecto =>
    output: {
        path: path.resolve(__dirname, 'dist'),
        //nombre del enpaquetado que se va a crear
        filename: 'bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    //que extensiones se van a usar
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
            '@context' : path.resolve(__dirname, 'src/context/'),
            '@hooks' : path.resolve(__dirname, 'src/hooks/'),
        }
    },
    //Aqui trabajaremos las reglas que se crearan con los loaders y los plugins que agreguemos
    module: {
        rules: [
            //configuraciones necesarias dentro de objetos
            {
                //aqui le decimos con que tiene que trabajar
                test: /\.(js|jsx)$/,
                //aqui le decimos que no queremos que lea en este proyecto
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                //le decimos que trabaje con html
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',

                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset',
            }
        ]
    },
    //nos permite agregar plugins que queremos usar
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
     devServer: {
         historyApiFallback: true,
     }
}