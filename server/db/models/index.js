const User = require('./user')
const City = require('./City')
const Pollution = require('./Pollution')
const Weather = require('./Weather')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
Pollution.belongsTo(City)
City.hasMany(Pollution)

Weather.belongsTo(City)
City.hasMany(Weather)
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  City,
  Pollution,
  Weather
}
