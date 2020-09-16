function add(n1, n2, cb) {
    cb(n1 + n2);
}
add(1, 2, function (result) { return console.log(result); });
