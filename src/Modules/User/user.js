
export const userInfo = {
    username :'',


}

export default {
    signUp :  userRegister,
    singIn : userLogin,
    resetPassword:resetPassword,
    changePassword:changePassword
}

async function userLogin ({username,password}) 
{
    userInfo.username = "username"

    return userInfo ;
}
async function userRegister ({username,password}) 
{

}
async function resetPassword ({username,password}) 
{

}
async function changePassword ({username,password}) 
{

}


