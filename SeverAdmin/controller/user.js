const UserService = require('../service/user')

exports.login = async function login(username,password)
{
    const user = await UserService.login(username)
    if(!user)
    {
        return null;
    }
    if(user.password != password)
    {
        return null;
    }
    return {id: user._id,username: user.username};
}