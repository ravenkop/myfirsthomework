import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10)

  },
  {
    name: 'Adam Smith',
    email: 'adam@example.com',
    password: bcrypt.hashSync('123456', 10)

  },
]

export default users