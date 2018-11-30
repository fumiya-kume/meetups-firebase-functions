const firebaseAdmin = require('firebase-admin')

module.exports = async function (context, req) {
    const serviceAccount = require("../sercret/service_account.json")
    try{
        firebaseAdmin.initializeApp({
            credential: firebaseAdmin.credential.cert(serviceAccount),
            databaseURL: "https://meetups-kuxu.firebaseio.com"
        })
    }catch(e){

    }

    const topicName = "all"
    const notificationTitle = req.query.title ? req.query.title : "テストタイトル"
    const notificationBody = req.query.body ? req.query.body : "テストメッセージ"
    const message = {
        notification: {
            title: notificationTitle,
            body: notificationBody
        },
        topic: topicName
    }

    await firebaseAdmin.messaging().send(message)
        .then((response) => {
            context.res = {
                body: response
            }
        })
        .catch((error) => {
            context.res = {
                body: error
            }
        })
};