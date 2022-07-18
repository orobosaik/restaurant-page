process.env.NODE_ENV = "production";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
	mode: "production",
	entry: {
		index: "./src/index.js",
	},
	// devtool: "inline-source-map",
	devServer: {
		static: "./dist",
	},
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin(),
			new TerserPlugin(),
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [
							["gifsicle", { interlaced: true }],
							["mozjpeg", { progressive: true, quality: 50 }],
							["pngquant", { optimizationLevel: 5 }],
							// Svgo configuration here https://github.com/svg/svgo#configuration
							[
								"svgo",
								{
									plugins: [
										{
											name: "removeViewBox",
											active: false,
										},
										{
											name: "addAttributesToSVGElement",
											params: {
												attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
											},
										},
									],
								},
							],
						],
					},
				},
			}),
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: "./src/index.html" }),
		new MiniCssExtractPlugin(),
	],
	performance: {
		hints: process.env.NODE_ENV === "production" ? "warning" : false,
	},
};
