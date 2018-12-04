const fetch = require('node-fetch')

module.exports = async function (context, myTimer) {

    const title = "新しいイベントが公開されてるかも！！"
    const message = "ぜひ見てください！"
    const requestUrl = `${process.env.FIREBASE_ALL_NOTIFY_URL}?title=${title}&message=${message}`

    fetch(requestUrl)
        .then(res => res.text())
        .then(response => {
            context.done(response);
        })
};