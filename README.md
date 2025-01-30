1) Create new project folder and rename as you like, for example react-app

2) Check your node version (node -v) and update if necessary to the latest version

3) Open terminal or command prompt, go to your react app folder, and run this
   command:

    npm init -y

    - this will create the project package.json, that will contain all the 
    dependencies when we run npm install later

    - type: code . to open the project folder in VSCode, you can check out the 
    package.json file

4) In VSCode, create .gitignore file to ignore node_modules when commiting to github.
   Open .gitignore file and add the following line then save:
   
   node_modules/

   Commit your .gitignore file to your repository:

   git add .gitignore && git commit -m "Add .gitignore with node_modules"

   or you the git utilities in VSCode to commit
