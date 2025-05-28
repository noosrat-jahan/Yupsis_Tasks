// Problem 1: Mojo and Mutki Exchange Calculation

function TotalConsumedMojos(initial_mojos){
    let mutki = initial_mojos
    let extra_mojos = 0 // extra mojos after consuming initial mojos

    while(mutki >=3){
        let new_mojo_taken_by_mutki =  Math.floor(mutki / 3) // mojo got by exchanging mutki
        mutki = mutki - (new_mojo_taken_by_mutki  * 3) + new_mojo_taken_by_mutki // updated mutki after exchanging 
        extra_mojos = extra_mojos + new_mojo_taken_by_mutki 
    }

    let consumed_mojos =  initial_mojos + extra_mojos
    return consumed_mojos
}
console.log("Total Mojo Consumed: ", TotalConsumedMojos(15)) // result = 14