import React from 'react'

const nodemailer = require('nodemailer')
const xoauth2 = require('xoauth2')

let transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  port: 25,
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
      user: 'rroyson2@gmail.com',
      clientId: '26302297957-q14gmvlkg3lp5fo0io2e6lunp4mn4i22.apps.googleusercontent.com',
      clientSecret: 'WQ9Rzw6JtWIL13oKJWW-wH3Z',
      refreshToken: '1/uYZEzekzgIloCspF2dMsS0u1G0BOBY-uCujNoy6IAYM'
    })
  }
})

const mailOptions = {
  from: 'Rob <rroyson2@gmail.com>',
  to: 'rroyson2@gmail.com',
  subject: 'nodemailer test',
  text: 'Hello Mail'
}

transporter.sendMail(mailOptions, function (err, res){
  if(err) {
    return console.log('Error', err)
  } else {
    console.log('Success')
    console.log(res)
  }
})


