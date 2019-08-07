// we need this config because you can't just put vulnerable keys out for heroku

if(process.env.NODE_ENV === 'production'){
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}