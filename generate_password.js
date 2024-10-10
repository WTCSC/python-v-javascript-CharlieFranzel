function generatePassword(length = 12) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_'; // A list of possible characters
    let counter = 0 
    let password = []
    while (counter < length){  // Keeps generating random characters until the desired password length is reached
        let x = Math.floor((Math.random() * characters.length));  //  Generates a new random number between 0 and the number of characters in the "characters" list
        counter++;  // Increases the counter
        password.push(characters[x])  // Adds a random character to the list
    }
    let final = password.join('') // Joins it together
    return(final);
}

module.exports = generatePassword;