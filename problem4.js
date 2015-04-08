(function () {
    var a,
        b,
        until = 1000,
        number,
        maxNumber = 0;

    function isPalindrome (num) {
        var strNum = String(num),
            bottom = 0,
            top = strNum.length - 1;

        while (strNum.charAt(bottom) === strNum.charAt(top) && bottom < top) {
            bottom++;
            top--;
        }

        return bottom === (strNum.length / 2);
    }

    for (a = 0; a < until; a++) {
        for (b = 0; b < until; b++) {
            number = a * b;
            if (isPalindrome(number) && maxNumber < number) {
                maxNumber = number;
            }
        }
    }

    console.log(maxNumber);
}());
