import http from './axios-common'
export const getAllTrades = () => {
    return http.get('/bondtrades')
}
export const getUserTrades = (userid) =>{
    console.log("Hello", '/bondtrades/for/'+userid)
    return http.get('/bondtrades/for/'+userid)
}