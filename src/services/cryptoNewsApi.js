import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

 //REACT_APP_RAPIDAPI_KEY =  'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85'
// REACT_APP_CRYPTO_API_URL = 'https://coinranking1.p.rapidapi.com'
// REACT_APP_NEWS_API_URL = 'https://bing-news-search1.p.rapidapi.com'
// REACT_APP_NEWS_RAPIDAPI_HOST = 'bing-news-search1.p.rapidapi.com'
//  REACT_APP_CRYPTO_RAPIDAPI_HOST ='coinranking1.p.rapidapi.com' 
const cryptoNewsHeaders=
    {
        'x-rapidapi-key': '03f41f7bc8msh3dffc7ef914c246p1b0692jsnd490784e853b',
        'x-rapidapi-host': 'news-api14.p.rapidapi.com'
      }

const baseUrl='https://news-api14.p.rapidapi.com';


const createRequest=(url) => ({url,headers:cryptoNewsHeaders})



export const cryptoNewsApi=createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder) => ({
        getCryptoNews:builder.query({
            query: ({newsCategory}) => createRequest(`/v2/search/articles?query=${newsCategory}&language=en`)
        }),
    }),
});


export const {useGetCryptoNewsQuery}=cryptoNewsApi;









// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
//     params: {
//       textFormat: 'Raw',
//       safeSearch: 'Off'
//     },
//     headers: {
//       'x-rapidapi-key': '03f41f7bc8msh3dffc7ef914c246p1b0692jsnd490784e853b',
//       'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
//       'X-BingApis-SDK': 'true'
//     }
//   };