---
sidebar_position: 10
title: Updating Frame Title
---

The frame title of a route can be set both statically via annotations or dynamically through code during runtime. This flexibility allows developers to define titles that reflect the purpose of a view and adapt to specific contexts when necessary.

## Frame title with annotations

The simplest way to set the title of a frame in view is by using the `@FrameTitle` annotation. This annotation allows you to define a static title for any route component, which is then applied to the frame when the component is rendered.

### Using the `@FrameTitle` annotation

The `@FrameTitle` annotation is applied at the class level and allows you to specify a string value that represents the title of the page. When the router navigates to a component with this annotation, the specified title will be automatically set for the browser window.

Here’s an example:

```java
@Route
@FrameTitle("Dashboard")
public class DashboardView extends Composite<Div> {
  public DashboardView() {
     // view logic
  }
}
```

In this example:
- The `DashboardView` class is annotated with `@Route` to define the route.
- The `@FrameTitle("Dashboard")` annotation sets the frame title to "Dashboard".
- When the user navigates to `/dashboard`, the title of the frame will automatically update to the specified value.

This method is useful for routes that have a static title and don't require frequent updates based on the route’s context.

:::tip `@AppTitle` and `@FrameTitle`  
If the app title is set, the frame title will incorporate it. For example, if the app defines the title as `@AppTitle("webforJ")` and the frame title is set as `@FrameTitle("Dashboard")`, the final page title will be `Dashboard - webforJ`. You can customize the format of the final title in the `@AppLayout` annotation by using the `format` attribute if needed.  
:::

## Dynamic frame titles

In cases where the frame title needs to change dynamically based on the state of the app or route parameters, webforJ provides an interface called `HasFrameTitle`. This interface allows components to provide a frame title based on the current navigation context and route parameters.

### Implementing the `HasFrameTitle` Interface

The `HasFrameTitle` interface contains a single method `getFrameTitle()`, which is invoked before the frame's title is updated. This method provides the flexibility to generate a title dynamically based on the navigation context or other dynamic factors.

```java
@Route("profile/:id")
public class ProfileView extends Composite<Div> implements HasFrameTitle {

  public ProfileView() {
    getBoundComponent().add(new H1("Profile Page"));
  }
  
  @Override
  public String getFrameTitle(NavigationContext context, ParametersBag parameters) {
    // Dynamically set the frame title using route parameters
    String userId = parameters.get("id").orElse("Unknown");
    return "Profile - User " + userId;
  }
}
```

In this example:
- The `ProfileView` component implements the `HasFrameTitle` interface.
- The `getFrameTitle()` method dynamically generates a title using the `id` parameter from the URL.
- If the route is `/profile/123`, the title will be updated to "Profile - User 123".

:::tip Combining annotations and dynamic titles
You can combine both static and dynamic methods to achieve more complex behaviors. If a route component has both a `@FrameTitle` annotation and implements the `HasFrameTitle` interface, the dynamically provided title from `getFrameTitle()` will take precedence over the static value from the annotation.
:::