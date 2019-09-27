const router = require('express').Router()
const {Pollution} = require('../db/models')
module.exports = router

router.get('/mostrecent', async (req, res, next) => {
  try {
    const recentPollution = await Pollution.findAll({
      limit: 1,
      order: [['createdAt', 'DESC']]
    })
    if (recentPollution) {
      // recent pollution is an array containing one object
      res.status(200).json(recentPollution)
    } else {
      res.status(400).send('Could not get most recent pollution.')
    }
  } catch (err) {
    next(err)
  }
})

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
