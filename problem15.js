(function () {
    var n = 20,
        paths;

    function factorial (n) {
        if ( n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }

    paths = factorial(2 * n) / Math.pow(factorial(n), 2);

    console.log(paths);
}());
