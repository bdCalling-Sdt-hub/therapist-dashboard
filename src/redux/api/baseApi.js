import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseApi = createApi({
    reducerPath: "api",
    baseQuery:fetchBaseQuery({
        // baseUrl: "http://103.145.138.77:3000/api/v1",
        baseUrl: "http://134.209.26.75:3000/api/v1",
        headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("token")}`,
        }
    }),
    tagTypes:[],
    endpoints:()=>({
        // getUser:builder.query({
        //     query:()=>'/users'
        // })
    })
})
