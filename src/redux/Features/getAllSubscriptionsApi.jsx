import { baseApi } from "../api/baseApi";


const getAllSubscriptionsApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllSubscriptions:builder.query({
            query:()=>`/subscription/get-plan`,
        })
    })
})

export const {useGetAllSubscriptionsQuery} = getAllSubscriptionsApi;