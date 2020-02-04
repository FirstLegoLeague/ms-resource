/* eslint import/no-dynamic-require: 0 */

const { Model } = require('./lib/resources/model')
const { ConfigurableModel } = require('./lib/resources/configurable_model')
const { InvalidEntry } = require('./lib/resources/errors/invalid_entry')

const { MongoCollectionServer } = require('./lib/server/mongo/collection_server')
const { MongoEntityServer } = require('./lib/server/mongo/entity_server')

const { allowModelConfiguration } = require('./lib/server/configurable_model_server')

exports.Model = Model
exports.InvalidEntry = InvalidEntry

Object.assign(exports, { Model, ConfigurableModel, InvalidEntry, MongoCollectionServer, MongoEntityServer, allowModelConfiguration })
