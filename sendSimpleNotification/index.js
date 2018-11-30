module.exports = async function (context, req) {
    context.res = {
        body: "Hello Functions"
    }
    context.done();
};