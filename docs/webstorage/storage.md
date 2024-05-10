---
sidebar_position: 2
displayed_sidebar: documentationSidebar
title: Storage
---

All `Storage` classes are subclasses of `WebStorage` in `org.dwcj.webstorage` which provide the 3 Storage types within the context of a DWCJ Application
`WebStorage` uses internally a map to store the keys and values pairs

``` java 
//add single value
add(String key, String value);

//or use alias method
setItem(String key, String value)

//add one one or more values 
add(Map<String, String> values);

//get a single value  
String get(String key)

//get multiple values
public Map<String, String> get(List<String> keys)

```



### CookieStorage

The `CookieStorage` class provides an interface to interact with cookies 
similar to how you would with browser APIs. They come with an expiration date(default 30days) and can hold data accessible over several browsing sessions. This data might include login details, language preferences, and other personalized settings.

```java
WebStorage cookieStorage = CookieStorage.getStorage();
cookieStorage.setItem("cookie.dwcj", "cookie_set");
String value = cookieStorage.get("cookie.dwcj");

//clear cookie value 
cookieStrorage.remove("cookie.dwcj");
```

`CookieStorage` should not be used to store sensitive data, which can be a security risk if the cookie is accessed by an unauthorized party


### LocalStorage
`LocalStorage` allows the application to store data in the form of key-value pairs on a user's device. This data persists even after the browser window is closed, making LocalStorage a useful tool for saving information across browser sessions.

```java
WebStorage localStorage = LocalStorage.getStorage();
//alias to add("", "")
localStorage.setItem("fullname", "John Smith");
String username = localStorage.getItem("fullname");
localStorage.remove("fullname");
```
**Advantages of LocalStorage**

>- ***No Server Load:*** Since the data is stored on the user's device, it does not add any load to the server beyond the initial download.
>- ***Persistent Storage:*** Data does not expire and is available across multiple sessions, which is especially useful for long-term storage.

**Limitations of LocalStorage**

   >- ***Limited Storage Capacity:*** While 5MB may be sufficient for many applications, it might not be enough for more data-intensive uses.
    >- ***Lack of Synchronization:*** Data stored in LocalStorage is not synchronized across different browsers or devices; it is only available on the browser it was stored in.
    >- ***Security Risks:*** If not properly secured, data stored in LocalStorage can be accessed by any scripts running on the same domain, potentially exposing sensitive information to XSS (cross-site scripting) attacks.
    >- ***No Built-in Expiration:*** Data in LocalStorage doesn’t expire automatically, which means it needs manual management to prevent it from growing indefinitely and potentially degrading the performance of the website.

### SessionStorage
- Data stored in `SessionStorage` is maintained only for the duration of the page session. This means the data persists across reloads and restores of the tab but is cleared when the tab or browser is closed.
- Like `LocalStorage`, `SessionStorage` can store about 5MB of data per origin, sufficient for most typical uses.
- Each browser tab has its own isolated instance of `SessionStorage`. This means that data stored in one tab is not shared with another tab, even if both tabs are visiting the same website.

```java
WebStorage sessionStorage = SessionStorage.getCurrent();
sessionStorage.setItem("login", "enabled");
String loginstate = sessionStorage.getItem("login");

// delete session key when no longer needed e.g. remove login state
loginstate.remove("login");

```

**Limitations of `SessionStorage`**

- ***Limited Lifetime:*** Since the data is only available for the duration of the session, it is not suitable for any long-term storage needs.
- ***Limited Scope:*** Data stored in sessionStorage is not shared across tabs or windows, which could be a limitation if a site needs to maintain a consistent state across multiple tabs.
- ***Security Considerations::*** While data is cleared at session end, it's still vulnerable to cross-site scripting (XSS) attacks during the session, similar to localStorage.