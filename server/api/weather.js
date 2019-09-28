const router = require('express').Router()
const {Weather} = require('../db/models')
module.exports = router

router.get('/mostrecent', async (req, res, next) => {
  try {
    const recentWeather = await Weather.findAll({
      limit: 1,
      order: [['createdAt', 'DESC']]
    })
    if (recentWeather) {
      // recent weather is an array containing one object
      res.status(200).json(recentWeather)
    } else {
      res.status(400).send('Could not get most recent weather.')
    }
  } catch (err) {
    next(err)
  }
})

// router.post('/', async (req, res, next) => {
//   try {
//     console.log('REQ.BODY: ', req.body)
//     const weatherEntry = await Weather.create({
//       timestamp: req.body.ts,
//       temperature: req.body.tp,
//       pressure: req.body.pr,
//       humidity: req.body.hu,
//       windSpeed: req.body.ws,
//       windDirection: req.body.wd,
//       icon: req.body.ic
//     })
//     if (weatherEntry) {
//       res.status(200).send()
//     } else {
//       res.status(400).send()
//     }
//   } catch (err) {
//     next(err)
//   }
// })
