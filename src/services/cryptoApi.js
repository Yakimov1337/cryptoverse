import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'e70a920ce9msh998a5fabf7f1588p18384fjsnb3ba3ba04241'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com/exchanges'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCrypts: builder.query({
            query: () => createRequest('/exchanges')
        })
    })
})
// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/exchanges',
//     params: {
//         referenceCurrencyUuid: 'yhjMzLPhuIDl',
//         limit: '50',
//         offset: '0',
//         orderBy: '24hVolume',
//         orderDirection: 'desc'
//     },
//     headers: {
//         'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//         'X-RapidAPI-Key': 'e70a920ce9msh998a5fabf7f1588p18384fjsnb3ba3ba04241'
//     }
// };