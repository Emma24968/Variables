
showPrimes(20);

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) {
         
        let prime = true;
        for (let odd = 2; odd < number; odd++) {
            if (number % odd === 0) {
                prime = false
            }
        }

        if (prime) console.log(number);

    }
}