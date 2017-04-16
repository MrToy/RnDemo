# react-native 入门简介

## 1. 介绍

* [react 使用文档](https://facebook.github.io/react/docs/hello-world.html)

* [react-native 使用文档](https://facebook.github.io/react-native/docs/getting-started.html)

## 2. 依赖环境

* [nodejs](https://nodejs.org/)

* react-native 命令行工具

        npm install -g react-native-cli

* android
    * [Android Studio](https://developer.android.com/studio/index.html)  (非必须)

    * [jdk](http://www.oracle.com/technetwork/java/javase/downloads/index.html) >= 1.8
* ios
    * [Xcode](https://developer.apple.com/xcode/)




## 3. 如何开始

#### Step1

> 在你的工作目录新建一个项目

    react-native init RnDemo

#### Step2

> 启动react-native

    cd RnDemo
    npm start


#### Step3

> 预览你的应用 （android）

1. 使用android studio 打开 **RnDemo/android** 目录
2. 配置虚拟机调试或真机调试
3. 点击启动按钮

#### Step4

> 编辑你的代码

* 入口文件:  
**RnDemo/index.android.js**  (android)  
**RnDemo/index.ios.js**  (ios)  
* 自动刷新：调试菜单中开启live reload
* 真机调试： 摇一摇手机，打开调试菜单
* 模拟器调试:
> 快捷键 (ios)  
> ⌘ + R  刷新  
> ⌘ + D  打开调试菜单


#### Step5

> 打包发布 (android)

    cd RnDemo/android
    ./gradlew assembleRelease

然后使用android studio >> build >> Generate Signed APk

配置好密钥

然后build得到 app-release.apk
