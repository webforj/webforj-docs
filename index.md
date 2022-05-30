# The DWCJ Dynamic Web Client for Java

The DWCJ project implements a Java API to implement modern, responsive HTML5 WebApps in Java (or Kotlin).
These apps plug into BBj's application server stack.

## What is this?

The [HelloWorldJava](https://github.com/DwcJava/HelloWorldJava) sample illustrated how to work
with DWCJ's Java API:

```java
package samples;
import org.dwcj.*;
import org.dwcj.controls.*;
import org.dwcj.events.ButtonPushEvent;
import org.dwcj.exceptions.DwcAppInitializeException;
import org.dwcj.panels.AppPanel;
import org.dwcj.controls.IExpansible.Expanse;
import org.dwcj.controls.IThemable.Theme;

public class HelloWorldJava extends App{
    @Override
    public void run() throws DwcAppInitializeException {
        AppPanel panel = new AppPanel();
        panel.setStyle("display","inline-grid");
        panel.setStyle("gap","20px");
        panel.setStyle("margin","20px");
        panel.setStyle("padding","20px");
        panel.setStyle("border","1px dotted");

        panel.add(new Label("Hello World"));

        Button btn = new Button("Say Hello");
        panel.add(btn);
        btn.setTheme(Theme.DANGER);
        btn.setExpanse(Expanse.MEDIUM);

        btn.onClick(this::onButtonPush);
    }

    private void onButtonPush(ButtonPushEvent buttonPushEvent) {
        App.msgbox("Hello World");
    }
}
```

The result is a modern, responsive HTML5 Web App.

![ScreenShotHelloWorld](https://user-images.githubusercontent.com/4833070/170955904-2eb3b3ac-eb42-428f-aa5a-d126067a4d4f.png)


## Components

The [DWCJ Engine](https://github.com/DwcJava/engine) is the core of the API. It exposes the core UI elements like Buttons, Labels,
Input Fields, Tree Control, Data Grid and most everything else you need for your WebApp.

The demos listed in the [DWCJ GitHub Organization](https://github.com/DwcJava) illustrate how to work with the API.

The Apps deploy on [BBj's Application Server](https://www.basis.cloud/download-product).
Use the [DWCJ Plug-In for BBj](https://github.com/BBj-Plugins/DWCJ) to configure and deploy your project.

(stay tuned for detailed setup instructions)

