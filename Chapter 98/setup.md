## how to setup the tailwind using Tailwind CLI

step 1: 

```
copy this command into terminal: 

npm install tailwindcss @tailwindcss/cli
```

step 2: 

```
make a input.css file inside src folder and import this in that css:

 @import "tailwindcss";
```


step 3: 

```
copy this command in terminal: 

npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

step 4:

```
link the output.css file that genrate after the third command to .html file like this:

 <link href="./src/output.css" rel="stylesheet">
```

and thats it :)
