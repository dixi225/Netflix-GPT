export const checkValidData=(Email,password)=>{
        const isEmailValid=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(Email)
        const isPasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password)
        if(!isEmailValid) return "Email id is not valid"
        if(!isPasswordValid) return "Password is not valid"
        return null
        // console.log('is Password valid '+isPasswordValid);

}