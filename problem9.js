(function () {
    var found = 1000, n, m, a, b, c, actual = 0;

    n = 2;
    while (actual < found) {
        m = 1;
        while (m < n) {
            a = Math.pow(n, 2) - Math.pow(m, 2);
            b = 2 * n * m;
            c = Math.pow(n, 2) + Math.pow(m, 2);
            if (a + b + c === found) {
                actual = a * b * c;
            }
            m++;
        }
        n++;
    }

    console.log(actual);
}());
