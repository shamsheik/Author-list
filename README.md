# BookApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.0.

## Development server

Run `ng serve` after installing the dependencies using `npm install` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Requirements to run the applications locally
* Angular CLI
* Node
 
## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
* I have commited dist folder in git for your reference. Have done so since, the build files are asked as part of submission.

## Reason for leveraging Angular
I felt it's completely reasonable to choose Angular for this assignment based on my comfort and familiarity with the framework. My experience with Angular will likely be an advantage in developing the web application efficiently and effectively. Since the assignment doesn't require considering factors like maintenance, usability, and library choices, focusing on what I am comfortable with can lead to a quicker and smoother development process.

When assessing a framework for real-world projects, considerations like long-term maintenance, community support, available libraries, and the specific needs of the project become crucial. However, for this particular assignment, the goal is to showcase your development skills, and Angular's familiarity will enable me to concentrate on building a solid application while leveraging your expertise to demonstrate the framework's capabilities effectively.

## Deployment 

I like to learn new things to keep myself updated in these fast paced world. I recently started exploring the strategies of deploying the applications and this assigned gave me a good chance to test my skill. 

I have used docker to build the application and since the requirement for this assignment is to run the build files on web server, I used nginx server to host the build files of the application. Feel free to take a look at my Dockerfile for more explanation. 

Later, I have used Amazon Web Services EC2 to run the docker container and you can access the live application using below URL.

Please visit http://ec2-3-139-78-7.us-east-2.compute.amazonaws.com:80 for the hosted application.