---
sidebar_position: 16
title: WebStorage
---

webforJ  offers the APIs for WebStorage i.e. Cookie, Local and Session . These implement standard storages as per https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

All `Storage` classes are subclasses of `WebStorage` in `org.webforJ.webstorage` which provide the 3 Storage types within the context of a webforJ Application
`WebStorage` uses internally a map to store the keys and values pairs


- Add a key to the storage
``` java 
//add single value
add(String key, String value);

//or use alias method
setItem(String key, String value)

```

- Add multiple keys to the storage
``` java 
//add one one or more values 
add(Map<String, String> values);
```
- Retrieve a single value for a given key from the storage

``` java 
//get a single value  
String get(String key)
```
- Retrieve a multiple values for a given list of keys from the storage
``` java 
//get multiple values
public Map<String, String> get(List<String> keys)


```
- Remove a value for a give key
``` java 
//get multiple values
public void remove(String key)

```


### CookieStorage

The `CookieStorage` class provides an interface to interact with cookies 
similar to how you would with browser APIs. They come with an expiration date (default 30 days) and can hold data accessible over several browsing sessions. This data might include login details, language preferences, and other personalized settings.

```java
WebStorage cookieStorage = CookieStorage.getStorage();
cookieStorage.setItem("cookie.webforJ", "cookie_set");
String value = cookieStorage.get("cookie.webforJ");

//clear cookie value 
cookieStrorage.remove("cookie.webforJ");

//update the cookie, use the same key used to set the value. e.g.
cookieStorage.setItem("cookie.webforJ", "cookie_update");

//Add multiple values
Map<String, String> cookies = Map.of("cookie1","value1" ,"cookie2","value2");
cookieStorage.add(cookies);

//get multiple values for a list of keys 
List<String> keys = List.of("cookie1","cookie2");
cookies =cookieStrorage.get(keys);

//clear all Cookie-Storage
cookieStrorage.clear();


```

`CookieStorage` should not be used to store sensitive data, which can be a security risk if the cookie is accessed by an unauthorized party


### LocalStorage
`LocalStorage` data persists even after the browser window is closed, making LocalStorage a useful tool for saving information across browser sessions.

```java
WebStorage localStorage = LocalStorage.getStorage();
//alias to add("", "")
localStorage.setItem("fullname", "John Smith");
String username = localStorage.getItem("fullname");
localStorage.remove("fullname");
//use same methods as demostrated in cookie-storage to update ,clear,  create multiple values, 
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

>- ***Limited Lifetime:*** Since the data is only available for the duration of the session, it is not suitable for any long-term storage needs.
>- ***Limited Scope:*** Data stored in sessionStorage is not shared across tabs or windows, which could be a limitation if a site needs to maintain a consistent state across multiple tabs.
>- ***Security Considerations::*** While data is cleared at session end, it's still vulnerable to cross-site scripting (XSS) attacks during the session, similar to localStorage.

:::success **Important**
Also note laws governing usage of webstorage e.g. GDPR Cookie Consent - GDPR Compliance , these may affect application usage if user decides to deny access
:::