# Create API with Node and Express


## Make your working directory

Open a terminal to create the working directory, in this case the name is basic-ms-test-01, but you can use your own name.

```bash
mkdir basic-ms-test-01
```

Move into the directory
```bash
cd basic-ms-test-01
```

## Start Node project

Create a node project
```bash
npm init -y
```

This action create a file named package.json, with the description of our project

## Add project dependencies

For this example we add the following project dependencies

- cors : For comunication between servers
- dotenv : For reading environment variables
- express: The node js framework.


```
npm i express dotenv cors
```

## Add development dependencies

Some dependencies helpus in development, but they must be excluded from the final product.

- nodemon : 

The development dependencies must include -D flag at the end.

```
npm i nodemon -D
```

