const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

// postgres://localhost:5432/${databaseName}`
const db = new Sequelize(
  process.env.DATABASE_URL ||
    `postgres://fzytzblnzzojfn:f5f395aa0947bb5a9e414192643e9b5f1509918c8ad0854522466e52fc003214@ec2-174-129-18-42.compute-1.amazonaws.com:5432/d7vl95mdtmlpil`,
  {
    logging: false
  }
)
module.exports = db

// This is a global Mocha hook used for resource cleanup.
// Otherwise, Mocha v4+ does not exit after tests.
if (process.env.NODE_ENV === 'test') {
  after('close database connection', () => db.close())
}
