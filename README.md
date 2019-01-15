# Society-Inventory-System

A Simple Inv System built using Java's Javalin https://javalin.io/ and React

To get it working/Build The enviroment you need:
1) install nodejs and npm
2) in root dir, run "npm run-script build"
2.5) if that doesn't work, just run install.sh (or just copy the commands in it and run them), then repeat 2)
3) run "npm start" so it will auto transpile and bundle the REACT code whenever you save
4) Compile main.java and everything in it's CLASSPATH
5) run the compiled exucutable.

After first install, to get the eviroment working again, just run "npm start" and the usual java compile stuff

All REACT code should be placed in \wwwroot\inventory\src with a correct folder structure when ading new files

ALL CSS should be in \wwwroot\inventory\CSS (But this might change)

ALL Java CLasses are in \src\main\java\web, with the webserver handler in main.java


For the DOCO on how to use Javalin, can be found here https://javalin.io/tutorials/ and here https://javalin.io/documentation
