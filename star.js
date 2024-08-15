Star(9);

function Star(rows) {
    let message = '';
    for (let row = 0; row < rows; ++row){
        message += '*';
        console.log(message);
    }
}
