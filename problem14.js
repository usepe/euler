(function () {
    var maxChain = 0, number = 0, idx, aux;

    function collatz (n) {
        var chain = [n];

        while (n !== 1) {
            n = n % 2 === 0 ? n / 2 : 3 * n + 1;
            chain.push(n);
        }

        return chain.length;
    }

    for (idx = 1; idx < 1000000; idx++) {
        aux = collatz(idx);
        if (maxChain < aux) {
            maxChain = aux;
            number = idx;
        }
    }

    console.log({ max: maxChain, number: number });
}());
