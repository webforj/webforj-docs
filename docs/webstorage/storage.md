---
sidebar_position: 2
displayed_sidebar: documentationSidebar
title: Storage
---

All `Storage` classes are subclasses of `WebStorage` in `org.dwcj.webstorage` provide the 3 Storage types within the context of a DWCJ Application



### Cookie

The `CookieStorage` class provides an interface to interact with cookies 
similar to how you would with browser APIs. 

```java
WebStorage cookieStorage = CookieStorage.getStorage();
cookieStorage.setItem("myCookie", "cookieValue", "path=/; domain=.sample.com;");
String value = storage.get("myCookie");
```

### Local
The `LocalStorage` class provides an interface for interacting with the local storage of the browser 
```java
WebStorage localStorage = LocalStorage.getStorage();
//alias to add("", "")
storage.setItem("username", "demoUser");
String username = storage.getItem("username");
```


### Session
The  `SessionStorage` class to manage data stored for the duration of the session. Similar to web browser session storage, this class provides a way to store data that should only persist while the application is active.

```java
WebStorage sessionStorage = SessionStorage.getStorage() 
sessionStorage.setItem("login", "enabled");
String loginstate = sessionStorage.getItem("login");
//remove login-state
sessionStorage.remove("login);
```