---
title: "What is Observability ?"
date: "2026-08-15"
author: "Arya Saumitra"
tags: ["IT Operations","Reliability"]
---

# What is Observability ?


By definition of control theory, its the ability to understand a system's internal state by looking at its external outputs and the data it produces.
Any software solution is not just judged by the business outcome it achieves over a significant period but also around its availability, reliability, consistency. We measure that in various metrics like uptime, latency, Service Level Agreements, error rate and many more. But this is Monitoring not true Observability

Monitoring is good for the questions you know and want the answer in terms of measurement to answer those but Observability is the ability to answer question you don't even know. 

Everything might seems normal on a metric, an error rate of 0.3% jumping to 0.5% would not raise any alerts or incidents, CPU, memory and storage utlization all would look normal but an user faced something unexpected and raised an incident and some engineer in 2AM in the night is going over tons of Logs and grep commands given by an LLM to close the incident in the required SLA to avoid any escalations. 

TO answer those unknowns around an we need to answer 
1. what went wrong ? - Monitored
2. where did it go wrong ? - Narrowing the scope
3. Why ? - The most important
