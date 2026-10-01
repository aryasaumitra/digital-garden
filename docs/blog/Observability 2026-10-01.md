---
title: "What is Observability ?"
date: "2026-10-01"
author: "Arya Saumitra"
status: "Complete"
tags: ["IT Operations","Reliability"]
---

# What is Observability ?


::: tip By definition of control theory, its the ability to understand a system's internal state by looking at its external outputs and the data it produces. 
:::

Any software solution is not just judged by the business outcome it achieves over a significant period but also around its availability, reliability, consistency. We measure that in various metrics like uptime, latency, Service Level Agreements, error rate and many more. But this is Monitoring not true Observability

Monitoring is good for the questions you know and want the answer in terms of measurement to answer those but Observability is the ability to answer question you don't even know. 

Everything might seems normal on a metric, an error rate of 0.3% jumping to 0.5% would not raise any alerts or incidents, CPU, memory and storage utlization all would look normal but an user faced something unexpected and raised an incident and some engineer in 2AM in the night is going over tons of Logs and grep commands given by an LLM to close the incident in the required SLA to avoid any escalations. 

To answer those unknowns around an we need to answer 
1. What went wrong ? - Spike in User Checkout time
2. Where did it go wrong ? - User waiting 10-15 mins due a slowness in Checkout Service
3. Why ? - The 3rd Party Payment API was down

Every interaction with the System is an event and when things go wrong our first question is "What changed in the system behaviour".

Lets go over the 3 Pillars of Observability and what kind of answers it provides

## Metrics: "What" of the system

Metric is a number which we can aggregate over time and keep track of like you car speedometer it tells you current speed and average speed of the drive. They are lightweight easy to collect and store in a timeseries database and give you clean overview of the system wide trends

The popular short list called the Golden Signals are
1. Latency - How long requests take
2. Traffic - How many requests are incoming
3. Errors - How many are failing
4. Saturation - How full things are running

Metrics are good at telling you something went wrong and useless at telling you where or why.

So we move on to the next pillar.

## Traces: "Where" of the system

A Trace follows a request end to end. Like a parcel tracked from a warehouse to an end user with a single tracking number. Every scanner in the way updates the same tracking number so that once you pull up a journey history you can track the full picture.

Each scan along the way is called a Span. A span is a unit of work, a database query, a call to an external api, another service in the system. Each span has a start time and an end time. All spans for a single request share the same trace ID. The Trace ID helps stitch the entire story

Example an ecommerece application where a metric says the user faced slowness in checkout time, only a trace could tell that 92% of the time was spent querying the inventory database and all other services ran under 10ms

Traces depend on every service being tracked by instrumentation if one services is skipped the entire traces is useless. 
We need the last pillar which would answer the fix

## Logs: "Why" of the system

A log is written entry for one specific thing that happened in a moment with a timestamp and extra context the engineer decided to add. When something breaks at a specific moment the log is where the why is hidden. 

Modern applications generates tons of logs and storing them is full on challenge for enterprise data teams. Fintech applications are so integrated with so many 3rd Party API that they generate GBs and TBs of log file in a single day.

Parsing of all the log files becomes a pain if you have not enriched it with a trace ID from the traces. An engineer would be running grep and on million of log files and praying for the right ones. 

A trace ID stamped onto every log line emitted during that request. So in a single click we can pull up a slow span with the exact log to explain what went sideways


## How the three work together

Metrics raises a flag, The trace narrows it down to a service and the log finishes the story. Put these three together and you can rebuild the system behaviour. Pull any one of the three signal and the chain stops working. Without the metric the alert never fires, without the traces the team is finding a needle in haystack of logs. Logs in itself is useless without the 2.

Nobody sets up all on the same day. The realistic order is Metrics, Logs and Traces. Traces generate a lot of data so storing and setting up retention times is critical. Traces earn there value when a single request crosses multiple service boundaries not in monolitihic applications





