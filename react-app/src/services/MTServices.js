import http from './axios-common'
export const getAllTrades = () => {
    return http.get('/bondtrades')
}
export const getAllBonds = (userid) =>{
    console.log("getAllBonds", '/bondtrades/for/'+userid)
    return http.get('/bonds/active')
}
export const getBondTrades = (userid, id) => {
    console.log("getBondTrades",`/bonds/${id}/trades/${userid}`)
    return http.get(`/bonds/${id}/trades/for/${userid}`)
}