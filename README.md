# Getting started

- yarn install
- npm run dev

# Using the API from GraphiQL

## Mutations

### Add User

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

### Update User

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

### Remove User

mutation{
    removeUser(id: "5929b0e36840b54c56c73db2") {
      _id
    	email
      name
    }
  }

### Add Post

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

## Queries

Play adding and removing fields!

### Show User

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

### Show Users

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
