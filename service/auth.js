const sessionIdToUserMap = new Map();

function SetUser(id,user){
    sessionIdToUserMap.set(id,user);
}
function getUser(id){
   return sessionIdToUserMap.get(id);
}

module.exports = {
    SetUser,getUser
}