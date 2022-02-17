let dictionary = {
    1 : {
        '0' : 'zero',
        '1' : 'one',
        '2' : 'two',
        '3' : 'three',
        '4' : 'four',
        '5' : 'five',
        '6' : 'six',
        '7' : 'seven',
        '8' : 'eight',
        '9' : 'nine',
    },
    2 : {
        '10' : 'ten',
        '11' : 'eleven',
        '12' : 'twelve',
        '13' : 'thirteen',
        '14' : 'fourteen',
        '15' : 'fifteen',
        '16' : 'sixteen',
        '17' : 'seventeen',
        '18' : 'eighteen',
        '19' : 'nineteen',
    },
    3 : {
        '2' : 'twenty',
        '3' : 'thirty',
        '4' : 'forty',
        '5' : 'fifty',
        '6' : 'sixty',
        '7' : 'seventy',
        '8' : 'eighty',
        '9' : 'ninety',
    },
}

module.exports = function toReadable (number) {
    let readableNumber = '';
    let stringNumber = number.toString();
    
    switch(true)
    {
        case stringNumber.length === 1:
            readableNumber += dictionary[1][stringNumber];
            break;
        
        case stringNumber.length === 2 && stringNumber[0] === '1':
            readableNumber += dictionary[2][stringNumber];
            break;

        case stringNumber.length === 2 && stringNumber[0] != '1':
            readableNumber += dictionary[3][stringNumber[0]];
            if (stringNumber[1] != '0') readableNumber += " " + dictionary[1][stringNumber[1]];
            break;

        case stringNumber.length === 3:
            readableNumber += dictionary[1][stringNumber[0]] + " hundred"
            if (stringNumber[1] != '0' && stringNumber[1] === '1') readableNumber += " " + dictionary[2][stringNumber.slice(1)];
            else if (stringNumber[1] != '0' && stringNumber[1] != '1') readableNumber += " " + dictionary[3][stringNumber[1]];
            if (stringNumber[2] != '0' && stringNumber[1] != '1') readableNumber += " " + dictionary[1][stringNumber[2]];
            break;

        default:
            break;
    }

    return readableNumber;
}
