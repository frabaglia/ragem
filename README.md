# Getting started

- yarn install
- yarn dev

# Ready for build and serve?

- yarn install
- yarn build
- yarn serve

# Using the API from GraphiQL

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
