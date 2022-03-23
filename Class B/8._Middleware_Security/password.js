//we should use routers instead of just files, but we are practising.


import bcrypt from 'bcrypt'

const saltRounds = 12;
const plaintextPassword = "hunter12" //dont do this IRL... 
const hashedPassword = "$2b$12$aEvukQRWH2eZ4xpf0Wf8/emvTjy0t5.kXbSYTycL3o/5XCauXrfNy" //example, dont do this

//async because the compare function takes time   
async function loginRouter() {
    const isSame = await bcrypt.compare(plaintextPassword,hashedPassword)
    console.log(isSame) //^This function is case-sensitive btw.
}

async function signupRouter() {
    const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
    console.log(hashedPassword);
}

signupRouter();
loginRouter();