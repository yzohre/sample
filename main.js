let english = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "u", "w", "x", "y", "z",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "U", "W", "X", "Y", "Z",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "}", "{", "~", "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
]
let persian = ["ا", "ب", "پ", "ت", "ث", "ج", "چ", "ح", "خ", "د", "ذ", "ر", "ز", "ٓژ", "س", "ش", "ص", "ض", "ط", "ظ", "ع", "غ", "ف", "ق", "ک", "گ", "ل", "م", "ن", "و", "ه", "ی", "/",
    "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "}", "{", "~", "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
]


function generator(len, lang) {
    let result = '';
    for (let i = 0; i < len; i++) {
        let num = getRandome()
        result += getCharachter(num, lang)
    }


    return result
}

function getCharachter(num, lang) {
    if (lang.toLowerCase() == 'persian') {
        if (num < persian.length) {
            return persian[num]
        } else {
            num = getRandome()
            getCharachter(num)
        }
    } else
    if (lang.toLowerCase() == 'english') {
        if (num < english.length) {
            return english[num]
        } else {
            num = getRandome()
            getCharachter(num)
        }
    }
}

function getRandome() {
    return Math.floor(Math.random() * 30)
}



function check() {
    // console.log(generator(10, "english"));
}