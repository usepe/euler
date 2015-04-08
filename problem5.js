(function () {
    var from,
        to,
        number,
        done = false,
        index = 1;

    while (!done) {
        index++;
        for (from = 1, to = 20; from <= to; from++) {
            if (index % from !== 0) {
                break;
            }
        }
        if (from === to + 1) {
            done = true;
        }
    }

    console.log(index);
}());
