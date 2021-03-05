export function saveToken(values){
    window.localStorage.setItem("name",values.name)
    window.localStorage.setItem("value",values.value)
}

export function getToken(token) {
    const tokenName = window.localStorage.getItem("name")
    if (tokenName===token){
        return window.localStorage.getItem("value")
    }
    return null
}

export function removeToken(token) {
    const tokenName = window.localStorage.getItem("name")
    if (tokenName===token){
        window.localStorage.removeItem("value")
        window.localStorage.removeItem("name")
        return true
    }
    return false
}

export function getHeader(tokenName){
    // const tokenValue = getToken(tokenName)
    return {headers:{
        [tokenName]: getToken(tokenName)
    }}
}