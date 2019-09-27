const router = require('express').Router()
const {Pollution} = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
  try {
    const pollutionEntry = await Pollution.create({
      timestamp: req.body.ts,
      aqi: req.body.aqius,
      mainPollutant: req.body.mainus
    })
    if (pollutionEntry) {
      res.status(200).send()
    } else {
      res.status(400).send()
    }
  } catch (err) {
    next(err)
  }
})
