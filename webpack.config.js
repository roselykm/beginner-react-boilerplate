import { resolve as _resolve } from "path";

export const entry = "./src/index.js";
export const mode = "development";
export const module = {
    rules: [
        {
            test: /\.(js|jsx)$/, // checks for .js or .jsx files
            exclude: /(node_modules)/,
            loader: "babel-loader",
            options: { presets: ["@babel/env"] },
        },
        {
            test: /\.css$/, //checks for .css files
            use: ["style-loader", "css-loader"],
        },
    ],
};
export const resolve = { extensions: ["*", ".js", ".jsx"] };
export const output = {
    path: _resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js",
};
