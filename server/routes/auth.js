const express = require('express')
// const { authorizeBearerToken } = require('../middlewares/jsonwebtoken')
// const register = require('../controllers/auth/register')
// const login = require('../controllers/auth/login')
// const loginWithToken = require('../controllers/auth/login-with-token')

const { regis , login, posts} = require('../controllers')

// initialize router
const router = express.Router()



// // POST at route: http://localhost:8080/api/posts
// router.get('/posts', posts)


// // POST at path: http://localhost:8080/auth/login
router.post('/regis', regis)
router.get('/login', login)

// // GET at path: http://localhost:8080/auth/account
// router.get('/login', [authorizeBearerToken], loginWithToken)

module.exports = router