import http from './axios-common'
// export const getAllTrades = () => {
//     return http.get('/bondtrades')
// }
export const getAllBonds = (userid) =>{
    console.log("getAllBonds", '/bondtrades/for/'+userid)
    return http.get('/bonds/active')
}
export const getBondTrades = (userid, id) => {
    console.log("getBondTrades",`/bonds/${id}/trades/${userid}`)
    return http.get(`/bonds/${id}/trades/for/${userid}`)
}
export const getBondsDueToMature = () => {
    console.log("getBondsDueToMature",`/bonds/duetomature`)
    return http.get('/bonds/duetomature')
}

export const getBondHolder = (trade_id) => {
    console.log('Get/bondholder')
    return http.get(`/bondholder/${trade_id}`)
}

export const getBondsFromResponsibleBooks = (userid) => {
    return http.get(`/bonds/from/responsible/books/${userid}`)
}

export const getAllBondholder = () => {
    return http.get('/allbondholder')
}