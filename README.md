# Getting started

- yarn install
- yarn dev

# Ready for build and serve?

- yarn install
- yarn build
- yarn serve

# Using GraphQL

`One endpoint to rule them all`

The idea beahind GraphQL is to resume all posible model handling behind a unique endpoint, and a specialized query language.
The application server only expose:

http://localhost:5000/graphql

# Using GraphiQL Interface

With a little configuration already implemented on this seed:

```javascript
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))
```

The server expose a GraphQL Queery WebClient useful for query testing and of couse practice and having for having some fun...

# Querying

## Mutations

### Add User
```javascript
mutation{
    addUser(
      data: {
      email: "franco@protonmail.com",
      name: "Franco Rabaglia"
    }) {
      _id
    	email
      name
    }
  }
```
### Update User
```javascript
mutation{
    updateUser(
      id: "5929b0e36840b54c56c73db2",
      data: {
      email: "franko@genosha.uy",
      name: "Franko Rabaglio"
    }) {
      _id
    	email
      name
    }
  }
```
### Remove User
```javascript
mutation{
    removeUser(id: "5929b0e36840b54c56c73db2") {
      _id
    	email
      name
    }
  }
```
### Add Post
```javascript
mutation{
  addPost(data: {
    uid:"5929b50c03f15b4d0129767a",
    title: "GraphQL title",
    body: "GraphQL body"
  }) {
    _id
    uid
    title
    body
  }
}
```
## Queries

Play adding and removing fields!

### Show User
```javascript
query{
  User(id:"5929b50c03f15b4d0129767a") {
    _id
    email
    name
    posts {
      _id
      uid
      title
      body
    }
  }
}
```
### Show Users
```javascript
query{
  Users {
    _id
    email
    name
    posts {
      _id
      uid
      title
      body
    }
  }
}
```
