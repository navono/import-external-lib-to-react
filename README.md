# import-external-lib-to-react
在`React`工程中，导入其他工程的`UMD`风格的`bundle`文件。

# dev
`react-host`和`react-ts-host`均由`create-react-app`产生。因此如果要从外部导入文件，需要修改其`webpack`配置。首先`host`工程中：
> yarn eject

然后修改`webpack.config.dev.js`和`webpack.config.prod.js`，将其中的
> new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),

注释掉。

然后使用`import()`即可动态加载，详细参考`App.js`或者`App.tsx`。

## react-ts-host
`yarn build` 先编译产生结果文件。然后将 `lib` 拷贝到 `build` 文件夹。执行以下命令：
```js
npx http-server ./build/
```

访问 `http://localhost:8080`。

## 注意
对于`typescript`的工程，需要额外添加`*.d.ts`声明文件。
