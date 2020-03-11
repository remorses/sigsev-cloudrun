console.log('start')
import express from 'express'
console.log('imported express')
import admin from 'firebase-admin'
admin
console.log('imported firebase-admin')
import firebase from 'firebase'
firebase
// XXX SIGSEV HERE
console.log('imported firebase')


const app = express()

// throw Error('errore')

app.get('/', (r, s) => {
    s.send('ciao')
})

app.listen(process.env.PORT, () => console.log('listening'))
