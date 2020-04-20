const typeDefinitions = `



type Author {

  id: Int
  name: String
  last_name: String
  email: String
  dni: String
  telefono: String
  email_verified_at: String
  password: String
  active: String
  tipo_usuario: String
  id_admin: String
  remeber_token: String
  email_verified_at: String

}

type Tipo_usuarios {

  id: Int
  tipo_usuarios: String 

}

type Unidades{
  
  id: Int
  nombre: String
  direccion: String
  telefono: String
  id_admin: Int
  active: Boolean
}


type Query {

  user(email: String!): User
  users(tipo_usuario: String!): [User]
}



type Mutation {

  updateUserActive(email: String!, active: Boolean!): User

/* createAuthor(firstName: String, lastName: String, posts:[postInput]): Author

updateAuthor(authorId: Int, firstName: String, lastName: String, posts:[postInput]): String */

}


schema {
  query: Query
  mutation:Mutation
}
`;

export default [typeDefinitions];