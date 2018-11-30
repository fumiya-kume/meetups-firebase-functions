const firebaseAdmin = require('firebase-admin')

module.exports = async function (context, req) {
    const serviceAccount = require("../sercret/service_account.json")
    firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(serviceAccount),
        databaseURL: "https://meetups-kuxu.firebaseio.com"
    })

    const topicName = "all"
    const message = {
        notification: {
            title: "サーバーから通知送れるか試してみる",
            body: "できたら表示されてる！"
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