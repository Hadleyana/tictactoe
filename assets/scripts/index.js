'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// const clickables = require('./assets/scripts/clickHandler.js')
const gameEvents = require('../scripts/auth/events.js')

$(() => {
  $('#sign-up').on('submit', gameEvents.onSignUp)
  $('#sign-in').on('submit', gameEvents.onSignIn)
  $('#change-password').on('submit', gameEvents.onChangePassword)
  $('#signOut').on('submit', gameEvents.onSignOut)
})
