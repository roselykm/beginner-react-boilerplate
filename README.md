1) Create new project folder and rename as you like, for example react-app

2) Check your node version (node -v) and update if necessary to the latest version

3) Open terminal or command prompt, go to your react app folder, and run this
   command:

    ```
    npm init -y
    ```

    - this will create the project package.json, that will contain all the 
    dependencies when we run npm install later

    - type: code . to open the project folder in VSCode, you can check out the 
    package.json file

4) In VSCode, create .gitignore file to ignore node_modules when commiting to github.
   Open .gitignore file and add the following line then save:
   
   node_modules/

   Commit your .gitignore file to your repository:

    ```
    git add .gitignore && git commit -m "Add .gitignore with node_modules"
    ```

   or you the git utilities in VSCode to commit

5) Make two directories named "public" and "src" inside the project directory
    - "public" folder contains all static assets like images, svgs, etc
      and an index.html file where the react will render our app

    - "src" folder contains the whole source code

6) Inside the public folder, make a file named index.html. 
   Copy the following html code into index.html

    ```
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content=
                "width=device-width, initial-scale=1.0">
            <title>Basic Boilerplate of React</title>
        </head>
        <body>

            <!-- This is the div where React 
                will render our app -->
            <div id="root"></div>
            <noscript>
                Please enable javascript to view this site.
            </noscript>
            <script src="../dist/bundle.js"></script>
        </body>
    </html>
    ```

7) Install babel to allow ES6 on older browser and to compile JSX (Javascript XML)
   into vanilla javascript

    ```
    npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
    ```

    Here:

    –save-dev means save all above installed modules in devDependencies in package.
     json file,

    @babel/core is a module that contains the main functionality of Babel,

    @babel/cli is a module that allows us to use babel from the terminal,

    @babel/preset-env is preset that handles the transformation of ES6 syntax into
    common javascript,

    @babel/preset-react is preset which deals with JSX and converts it into vanilla
    javascript.