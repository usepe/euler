(function () {
    var last = 1,
        actual = 1,
        sum = 0,
        aux;

    while (actual < 4000000) {
        if (actual % 2 === 0) {
            sum += actual;
        }
        aux = actual;
        actual = actual + last;
        last = aux;
    }

    console.log(sum);
}());
