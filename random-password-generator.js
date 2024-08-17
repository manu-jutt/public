function generatepassword(length, includelowercase, includeuppercase, includenumbers, includesymbols){

    const lowercasechars = "abcdefghijklmnopqrstuvwxyz";
    const uppercasechars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numchars = "0123456789";
    const symbolchars = "?@$#!%&^~*()_-+";

    let allowedchars = "";
    let password = "";

    allowedchars += includelowercase ? lowercasechars : "";
    allowedchars += includeuppercase ? uppercasechars : "";
    allowedchars += includenumbers ? numchars : "";
    allowedchars += includesymbols ? symbolchars : "";

    if(length <= 0){
        return `(password length must be atleast 1)`;
    }
    if(allowedchars.length === 0){
        return `(atleast 1 set of characters to be selected)`
    }
    for(let i = 0; i < length; i++){
        const randomindex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomindex];
    }

    return password;    
}

const passwordlength = 12;
const includelowercase = true;
const includeuppercase = true;
const includenumbers = true;
const includesymbols = true;

const password = generatepassword(passwordlength, includelowercase, includeuppercase, includenumbers, includesymbols);

console.log(`generatedpassword: ${password}`);