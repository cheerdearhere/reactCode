const domain = "http://localhost:3000";
const apiLinks = {
    doPostTest         : `${domain}/api/test`,
    getList            : `${domain}/api/list`,
    getDatTime         : `${domain}/api/clock`,
}
const pageLinks = {
    home            : "/",
    list            : "/list",
    cart            : "/cart",
    payment         : "/cart/payment",
}
export {
    apiLinks,
    pageLinks,
}