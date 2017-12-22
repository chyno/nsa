
## Installation
```
1. Clone the repo
    git clone https://??
2. Change directory
    cd noswival/noswivalapp
3. dotnet restore
4. Install global dependencies
    npm install protractor rimraf http-server @angular/cli -g
5. npm install
6. Two ways to run the app (Development mode):
    i) First: (F5 from VScode or Visual studio IDE):
        F5 (This will automatically launch browser)
    ii) Second: (from command line)
        Dev mode:
        npm run dev:watch
        Browse using http://localhost:5000 or https://localhost:5001 
        Prod mode:
        npm run prod:watch

```
## Docker
Create a new Docker Image
    docker build -t mytestimage .
Run the image
    ports - [host] [containre]
    docker run --rm -it -p 5000:80 mytestimage
	
## Other commands

### Scaffold Angular components using Angular CLI

Scaffold  | Usage
---       | ---
Component | `ng g component my-new-component`
Directive | `ng g directive my-new-directive`
Pipe      | `ng g pipe my-new-pipe`
Service   | `ng g service my-new-service`
Class     | `ng g class my-new-class`
Guard     | `ng g guard my-new-guard`
Interface | `ng g interface my-new-interface`
Enum      | `ng g enum my-new-enum`
Module    | `ng g module my-module`

### run Angular tests
```bash
npm test
```

```
### run end-to-end tests
```bash
# make sure you have your server running in another terminal (i.e run "dotnet run" command)
npm run e2e
```
### run Protractor's elementExplorer (for end-to-end)
```bash
npm run webdriver:start
# in another terminal
npm run e2e:live
```
