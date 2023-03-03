---
sidebar_position: 1
displayed_sidebar: documentationSidebar
---

# Styling

## Application Theme

The DWCJ ships three themes by default, as well as with the ability to create your own, custom theme. The default themes are light, dark and dark-pure. 

### Default Themes

To change the theme of your application, you can use the `@AppTheme` annotation. When using this annotation, the theme name should be one of the following: `system`, `light`, `dark`, `dark-pure` or the name of a custom theme.

```java
@AppTheme("dark-pure")
```

### System Theme

The `system` theme option allows for a theme to be set based on the operating system user preferences. Operating systems that support a dark mode or dark theme typically have an option to activate it somewhere in the settings. 

- **On Windows 10:** The theme option can be found within the "Colors" section under "Choose your Color". For a more detailed guide, see [this resource.](https://blogs.windows.com/windowsexperience/2016/08/08/windows-10-tip-personalize-your-pc-by-enabling-the-dark-theme/)

- **On macOS:** In the "System Preferences" section under "General", there are options to change the appearance. For more details, see [this resource.](https://support.apple.com/en-us/HT208976)

- **On iOS:** Change the "Appearance" selection within the "Display & Brightness" option in the settings menu.

- **On Android:** Toggle the "Dark Theme" switch under the "Display" option within the settings menu

If the system's themes have been customized and your application is set to use the system theme, it will be necessary to inform your application of the customized theme names. To do this, use the `@AppLightTheme` and `@AppDarkTheme` annotations:

```java
@AppLightTheme("my-light-theme")
@AppDarkTheme("my-dark-theme")
```

## Using Custom CSS

Styling your DWCJ application can be accomplished in various ways, which include:

- Using the `setStyle()` method on various elements in the DWCJ API

- Using `App` class API methods to apply a stylesheet for your class

- Using annotations

### Using the `setStyle()` method

DWCJ core controls will have access to the `setStyle()` method, which takes two strings: the desired style attribute to be changed, and the desired value. 

```java
Button exampleButton = new Button();
exampleButton.setStyle("width","50px");
```

### Using the `App` class's methods

The DWCJ's App class contains functionality to allow stylesheets to be applied to the application: `addStyleSheet()` and `addInlineStyleSheet()`.

The `addStyleSheet()` method will inject an external style sheet from a URL into a page, such as stylesheets hosted on CDNs. 

```java
App.addStyleSheet("https://www.w3schools.com/w3css/4/w3.css")
```

The `addInlineStyleSheet()` method is used when a developer wants to include a local stylesheet. When this method is chosen, it is required to use the `Assets.contentOf()` method to resolve the path to the stylesheet. By default, the resources directory of a project will be used. For example, a file called `styles.css` located in `src/resources/css` would by loaded by the following code:

```java
App.addInlineStyleSheet(Assets.contentOf("css/styles.css"));
```

### Using annotations

Similar to the App class's methods, the DWCJ contains annotations which allow for the use of external and local stylesheets as well. 

To annotate the injection of an external CSS file, use the `@StyleSheet()` annotation.

```java
@StyleSheet(url = "https://www.w3schools.com/w3css/4/w3.css")
```

It is also possible to apply local stylesheets with annotations. Use the `@InlineStyleSheet()` annotation to include an external file. As with the App's API method, the root directory used by this annotation will be the resources directory of a project. Ensure to add the `local = true` parameter in the annotation for a local stylesheet. A file called `styles.css` located in `src/resources/css` would by loaded by the following code:

```java
@InlineStyleSheet(value = "css/style.css", local = true)
```

### Java Text Block Styling

It is also possible to use Java Text Blocks to create chunks of CSS that can be applied via HTML class attribute to the class itself. This styling can be applied with either the App API method or using annotations. 

```java
@InlineStyleSheet(value = /* css */ """
   .panel{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 2rem;
        height: inherit;
   } 
""")

public class Demo extends App{
    @Override
    public void run() throws DwcException{
        AppPanel panel = new AppPanel();
        panel.addClassName("panel");
    }
}
```


If you're using VS code, an extension that provides syntax highlighting [can be found here](https://marketplace.visualstudio.com/items?itemName=BEU.vscode-java-html):

<img src='https://github.com/DwcJava/vscode-java-html/raw/HEAD/docs/demo.png'/>



## Control Theme and Expanse

Many core DWCJ controls come packaged with various Themes and Expanses for easy styling. More about the specific control Themes and Expanses can be found in the [DWCJ Controls](/docs/category/dwcj-controls) section.