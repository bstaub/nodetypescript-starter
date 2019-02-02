### Nodejs with TS and Visual Studio Code



#### 1) Initialize Git / NPM / TypeScript and Configure Visual Studio Code Taskrunner

mkdir <projectDir>
cdprojektDir
code .
git init
git add .

npm init -y
npm i express
npm i @types/express
npm i @types/node

tsc —init
CMD+SHIFT+P  —> configure Task
CMD+SHIFT+B  —> execute Task

Task: are stored in .vscode

Run:

Terminal1 run:
nodemon dist/index.js

Terminal2 run:
Taskrunner from Visual Studio Code (TS -> js)



