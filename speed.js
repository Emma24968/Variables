const limit = checkSpeed(80);
console.log(limit);

function checkSpeed(speed) {

    const km = 5;
    const max = 70;


    if (speed < max + km)
          return 'ok';
    else{
        const points = Math.floor(speed - max ) / km;
        if (points >= 12)
            console.log('License Suspended')
        else
        console.log('points:', points)
    }





    // return "try again passed your limit"

    
}
