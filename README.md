This is a sample React-native project shows how to use instabug-reactnative plugin in your React-native app
 
You could create this project by following these steps:

`react-native init InstabugReactNativeSample`

`cd InstabugReactNativeSample`

`react-native run-android`

`npm i instabug-reactnative`

`react-native link instabug-reactnative`

open up index.android.js

add this line before your component class

```js
import Instabug from'instabug-reactnative';
```

and then add use `startWithToken` API in your constructor

```js
  constructor() {
    super();
    Instabug.startWithToken(`Your-Android-Token-Here`, Instabug.invocationEvent.shake);
  }

``` 

You can find your app token by selecting the SDK tab from your [Instabug dashboard]("https://dashboard.instabug.com/app/sdk/")
.
