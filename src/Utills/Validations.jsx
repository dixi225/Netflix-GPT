export const checkValidData=(Email,password)=>{
        const isEmailValid=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Email)
        const isPasswordValid=/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/.test(password)
        if(!isEmailValid) return "Email id is not valid"
        if(!isPasswordValid) return "Password is not valid"

        // console.log('is Password valid '+isPasswordValid);

}