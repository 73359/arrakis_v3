import http from './axios-common'

export const getAllBonds = (userid) =>{
    return http.get('/bonds/active')
}
export const getBondTrades = (userid, id) => {
    return http.get(`/bonds/${id}/trades/for/${userid}`)
}
export const getBondsDueToMature = () => {
    return http.get('/bonds/duetomature')
}

export const getBondHolder = (trade_id) => {
    return http.get(`/bondholder/${trade_id}`)
}

export const getBondsFromResponsibleBooks = (userid) => {
    return http.get(`/bonds/from/responsible/books/${userid}`)
}

export const getAllBondholder = () => {
    return http.get('/allbondholder')
}