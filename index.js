const writeCards= function (names, event) {
    let thankYouCards =[]
    for ( let i =0; i < names.length; i++){
        thankYouCards.push( `Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

const countDown = function (startingNumbers) {
    while (startingNumbers > 0) {
        console.log (startingNumbers)
        startingNumbers -= 1
    }
    console.log(startingNumbers)
}