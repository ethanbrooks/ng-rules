sudo docker run -it --init -p 4200:4200 -p 3000:3000 --expose 9229 -p 9229:9229 -v "$(pwd):/home/project:cached" theiaide/theia:next --inspect=0.0.0.0:9229

Have a loog and see what has changed: https://angular.io/guide/universal Have look at https://www.npmjs.com/package/lerna for issues like this# ng-rules
