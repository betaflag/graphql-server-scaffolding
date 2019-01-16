This repository contains a few examples of directory structures for using GraphQL with Apollo Server in Node.js.

### minimal

This is the shortest version with only one file to run (`src/index.js`). The file defines the GraphQL schema along with its resolvers and starts the server. This could be used for small servers (micro-services) and as the benefit of having all the code in one place.

### role-oriented

This is a classic directory structure seen in many frameworks. The files are organized by their roles (models, resolvers, type definitions). Its main benefit is to quickly get the picture of all files for specific roles.

### domain-oriented

This is also a classic but it's less common. Instead of organizing the files in roles, they are organized by business domain. For example, the business domain of _books_ contains all its data, models, resolvers and schema. The principal benefit of this structure is its modularity.

It's generally up to you to define your directory structure for your projects. Picking the right one from the start is tricky but you can always change it along the way (although that could also be tricky!). 

Feel free to open issues to discuss pros/cons to add here and to suggest other directory structures. 
Contributions are welcomed.

Twitter [@betaflag](https://twitter.com/betaflag)
Medium [@betaflag](https://medium.com/@betaflag)