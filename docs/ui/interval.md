---
sidebar_position: 15
title: Interval
---
import ComponentDemo from '@site/src/components/DocsTools/ComponentDemo';
import JavadocLink from '@site/src/components/DocsTools/JavadocLink';
import DocChip from '@site/src/components/DocsTools/DocChip';

<!-- The Interval page is not intended to stay in "ui". It was placed here temporarily until we decided on a better location. -->

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
A typical use for the `Interval` class is to have a set of images in roation as the end-user is browsing.

<!-- <ComponentDemo
path='https://demo.webforj.com/webapp/controlsamples?class=demos.IntervalDemos.IntervalImageUsage' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/IntervalDemos/IntervalImageUsage.java'
height='200px'
/> -->

Another use for the `Interval` class is displaying a [`Dialog`](../components/dialog) component if there hasn't been any interaction on a form within a given time.

<!-- <ComponentDemo
path='https://demo.webforj.com/webapp/controlsamples?class=demos.IntervalDemos.IntervalInactive' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/IntervalDemos/IntervalInactive.java'
height='200px'
/> -->

## Constructor
<JavadocLink type="foundation" location="com/webforj/Interval" code='true' suffix='#<init>(float,com.webforj.dispatcher.EventListener)'>Interval(float delay, EventListener\<Interval.ElapsedEvent\> listener)</JavadocLink>: Creates an `Interval` that triggers the given [event](../ui/events) with the specified delay.

:::tip
The delay can be fractional seconds to millisecond in resolution, but a very small timeout value causes a flood of events faster than the program can respond to them.
:::

## Starting, Stopping, and Restarting
An Interval won't start on its own, it only starts with the <code>start()</code> method. To stop or restart an Interval, use the <code>stop()</code> and <code>restart()</code> methods respectively.

<!-- <ComponentDemo
path='https://demo.webforj.com/webapp/controlsamples?class=demos.IntervalDemos.IntervalStartStopRestartDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/IntervalDemos/IntervalStartStopRestartDemo.java'
height='100px'
/> -->

## Changing the Delay
To change the delay of the Interval, use the <code>setDelay(float delay)</code> method. The new delay takes effect once the Interval has stopped or restarted.

<!-- <ComponentDemo
path='https://demo.webforj.com/webapp/controlsamples?class=demos.IntervalDemos.IntervalChangeDelayDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/IntervalDemos/IntervalChangeDelayDemo.java'
height='200px'
/> -->

## Adding Listeners
Add other listeners to the Interval using the <code>addElapsedListener(EventListener\<Interval.ElapsedEvent\> listener)</code> method.
Listeners are automically added to the Interval, so if an Interval has already started, the added listener fires its event on the next triggered delay.

<!-- <ComponentDemo
path='https://demo.webforj.com/webapp/controlsamples?class=demos.IntervalDemos.IntervalDemo' 
javaE='https://raw.githubusercontent.com/webforj/ControlSamples/main/src/main/java/demos/IntervalDemos/IntervalDemo.java'
height='100px'
/> -->