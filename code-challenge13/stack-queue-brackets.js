

let validateBrackets = (string => {

    let arr = [];

    for (let i = 0; i < string.length; i++) {
        let x = string[i];

        if (x == '(' || x == '[' || x == '{') {

            arr.push(x);
            continue;
        }

     

        if (arr.length == 0)
            return false;

        let check;
        switch (x) {
            case ')':
                check = arr.pop();
                if (check == '{' || check == '[')
                    return false;
                break;

            case '}':
                check = arr.pop();
                if (check == '(' || check == '[')
                    return false;
                break;

            case ']':
                check = arr.pop();
                if (check == '(' || check == '{')
                    return false;
                break;
        }
    }

    return (arr.length == 0);



})




    module.exports = validateBrackets;