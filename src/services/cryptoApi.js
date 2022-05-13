import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'e70a920ce9msh998a5fabf7f1588p18384fjsnb3ba3ba04241'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query:(coinId) => createRequest(`/coins/${coinId}`)
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi;

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