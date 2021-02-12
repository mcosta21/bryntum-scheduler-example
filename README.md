# BryntumSchedulerExample

This project is a example to use trial version of [Bryntum Scheduler](https://www.bryntum.com/products/scheduler/) using Angular v2.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Starting from zero

After access the website and request the free trial download. You'll get a zip file called `bryntum-scheduler-trial`. Just unzip and see more on `scheduler-x.x.x-trial` folder. 

Following the [API documentation](https://www.bryntum.com/docs/scheduler/) and some steps of [Angular Integration](https://www.bryntum.com/docs/scheduler/#guides/integration/angular.md) topic, create a simple project running commands below, or use a already existing.

     ng new bryntum-scheduler-example
     npm install

After that, access `bryntum-scheduler-trial` \ `scheduler-4.0.8-trial` \ `examples` \ `angular` \ `_shared` and install the dependencies and build the project. For doing the build, you'll need install `ng-packagr` like development dependency.

    // Install dependencies
    npm install
    npm install -D ng-packagr
    
    // Build project
    npm run build

As a result, the `bryntum-angular-shared` projet will be created inside `dist` folder. Then, in your own project, create a `_shared` folder on root, and copy entire `dist`.

After copy, add path properties below inside `tsconfig.json` and install the `brymtum-angular-shared` that we just copied.

    ...
    "paths": {
        "bryntum-angular-shared":[
          "../_shared/dist/bryntum-angular-shared"
        ],
        "@angular/*": [
          "node_modules/@angular/*"
        ]
    }

    npm install --save ../_shared/dist/bryntum-angular-shared

Lastly, access again `bryntum-scheduler-trial` \ `scheduler-4.0.8-trial` and copy the `build` folder. And paste inside your project on `_shared` / `dist` / `scheduler-4.0.8-trial`. Now, install the dependency.

´´´

    npm install --save ../_shared/dist/scheduler-4.0.8-trial\build\
    
´´´

