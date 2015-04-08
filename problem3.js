(function () {
    var input = 600851475143,
        primeFactors = [],
        index,
        len;

    function isPrime (num) {
        var divisors = 2,
            index = 2;

        while (index < Math.sqrt(num)) {
            if (num % index === 0) {
                divisors++;
            }
            index++;
        }

        return divisors === 2;
    }

    for (index = 2, len = Math.sqrt(input); index < len; index++) {
        if (input % index === 0 && isPrime(index)) {
            primeFactors.push(index);
        }
    }

    console.log(primeFactors.pop());
}());
