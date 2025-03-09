# Angular MFE application using latest Native federation

Purpose of this project is to demonstrate how to share common component and communication model between multiple MFE app.
This template can further be enhanced as per the project to make it entrerprise grade application.

Ideally, common components will go under lib as pure components, and services can be used to exhange data among MFE wheather passing initial state from Ngrx or launch it default value.

## mfe-remote

Angular remote application that runs on port 4201, check respective folder for further build commans

## mfe-host

Angular host or shell application that runs on port 4200, accessing remote app. Check respective folder for further build commans
