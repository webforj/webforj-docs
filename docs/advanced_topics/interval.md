---
sidebar_position: 45
title: Interval
---
import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';
import DocChip from '@site/src/components/DocsTools/DocChip';

<JavadocLink type="foundation" location="com/webforj/Interval" top='true'/>

## Overview
The `Interval` class represents a timer that triggers an [event](../ui/events) with a fixed time delay between each triggering.

The `Interval` class provides a straightforward way to trigger events after a specified delay. It's possible to start, stop, and restart an `Interval` as needed. Additionally, Intervals can support multiple listeners for the elapsed event.
Optimized for the webforJ framework, it offers better performance compared to the standard Java timer or the Swing timer.

<!-- An Interval demo is currently in the 'interval' branch of the webforj-docs-samples, filed under src/main/java/demos/IntervalDemos/IntervalDemo.java    -->

<!-- <ComponentDemo
path='https://demo.webforj.com/webapp/controlsamples?class=demos.IntervalDemos.IntervalDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/IntervalDemos/IntervalDemo.java'
height='200px'
/> -->

## Usages
The `Interval` class triggers event(s) at a fixed time delay. Leveraging Intervals creatively, you can enhance user interaction and engagement on your website while keeping the experience dynamic and interesting.:

1. **Image Carousel**: Have a set of images in automatic rotation while the end-user is browsing.

2. **Check for Inactivity**: Display a [`Dialog`](../components/dialog) component if there hasn't been any interaction on a form within a given time.

3. **Featured Content**: Rotate through featured articles, products, or promotions on your homepage on each Interval. This keeps the content dynamic and engaging.

4. **Background**: Have a visually appealing app that has a changing background.

5. **Live Data**: Refresh data on your app, such as stock prices, news feeds, or weather updates, on each Interval to keep the data current.

6. **Interacitve Tutorials**: Create step-by-step tutorials where each step or instruction appears at a timed interval, guiding users through a process or feature of your website.


## Constructor
<JavadocLink type="foundation" location="com/webforj/Interval" code='true' suffix='#<init>(float,com.webforj.dispatcher.EventListener)'>Interval(float delay, EventListener\<Interval.ElapsedEvent\> listener)</JavadocLink>: Creates an `Interval` that triggers the given [event](../ui/events) with the specified delay as a float value.

:::tip
The delay can be fractional seconds to millisecond in resolution, but a very small timeout value causes a flood of events faster than the program can respond to them.
:::

## Starting, Stopping, and Restarting
An Interval won't start on its own, so use the `start()` method. To stop an Interval, use the `stop()` method. An Interval can restart with the `restart()` method, even when the Interval isn't running.

Below is a snippet from the demo at the top of the page using the `start()`, `stop()`, and `restart()` methods.

```java
// Start Stop and Restart Methods
  startInterval.addClickListener(e -> {
    // ...
    interval.start();
  });

  stopInterval.addClickListener(e -> {
    // ...
    interval.stop();
  });

  restartInterval.addClickListener(e -> {
    // ...
    interval.restart();
  });
```

## Changing the Delay
To change the delay of the Interval, use the `setDelay(float delay)` method. The new float value takes effect once the Interval has stopped or restarted. Here's how it was set up for the demo at the top of the page:

```java
//Changing the Delay
  restartInterval.addClickListener(e -> {
    //... Grab 'pickedSpeed', the number from the NumberField as float value
    interval.setDelay(pickedSpeed);
    interval.restart();
  });
```

## Adding Listeners
Add other listeners to the Interval using the `addElapsedListener(EventListener\<Interval.ElapsedEvent\> listener)` method.
Listeners are automically added to the Interval, so if an Interval has already started, the added listener fires its event on the next triggered delay.

```java
// Adding Listeners
  float dealy = 2f;

  EventListener<Interval.ElapsedEvent> firstListener = (e -> {
    // Executable code
    });

  Interval interval = new Interval(delay, firstListener);

  EventListener<Interval.ElapsedEvent> secondListener = (e -> {
    // Executable code
    });

  interval.addElapsedListener(secondListener);
```