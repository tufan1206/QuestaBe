const express = require('express');
const router = express.Router();
const {
  register,
  login,
createQuiz,
getQuizByLink,
verifyToken } = require('../controllers/useController');


router.post('/register', register);
router.post('/login', login);


router.post('/createQuiz', verifyToken, createQuiz);
router.get('/public/:link', getQuizByLink);

module.exports = router;
