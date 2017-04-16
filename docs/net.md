# 网络请求

react-native 实现了[fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)函数，用于网络请求

> fetch 函数是浏览器标准函数，用法完全一致

#### get请求

```js
fetch("/your/api")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
```

#### post请求

```js
fetch("/your/api",{
    headers:{
        'Content-Type': 'application/json'
    },
    method: "POST",
    body:JSON.stringify({a: 1, b: 2})
})
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
```
