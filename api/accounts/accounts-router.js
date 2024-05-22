const router = require('express').Router()
const Accounts = require('./accounts-model')
const md = require('./accounts-middleware')

router.get('/', (req, res, next) => {
  Accounts.getAll()
    .then(accounts => {
      res.json(accounts)
    })
    .then(err => {
      next(err)
    })
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
