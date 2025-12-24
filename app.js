const asciiHeart = [
    "⣠⣤⣶⣶⣦⣄⡀  ⠀⢀⣤⣴⣶⣶⣤⣀",
    "⣼⣿⣿⣿⣿⣿⣿⣷⣤⣾⣿⣿⣿⣿⣿⣿⣧",
    "⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿",
    "⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏",
    " ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠋ ",
    "   ⠙⢿⣿⣿⣿⣿⣿⣿⣿⡿⠛⠁⠀",
    "     ⠉⢿⣿⣿⣿⠟⠋⠀",
    "⠀      ⠙⠻⠁"
]

const printByChart = (ms) => {
    let delay = 0;
    asciiHeart.forEach((line) => {
        line.split('').forEach((element, index) => {
            setTimeout(() => {
                process.stdout.write(`${element}`);
                if ((line.length)-1==index) {
                    process.stdout.write(`\n`)  
                    }
            },ms * delay++);
        })
    });
}

const printByLine = (ms) => {
    asciiHeart.forEach((element,index) => {
        setTimeout(() => {
            console.log(element);
        },ms*index);
    });
}


printByChart(100)
// printByLine(100)