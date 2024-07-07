import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const baseApi = createApi({
    reducerPath: "api",
    baseQuery:fetchBaseQuery({
        // baseUrl: "http://103.145.138.77:3000/api/v1",
        // baseUrl: "http://134.209.26.75:3000/api/v1",
        baseUrl: "https://api.mindgaze.org/api/v1",
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem("token");
            console.log("token----=-=-=-==-=-=",token);
            if (token) {
              headers.set("Authorization", `Bearer ${token}`);
            }
            headers.set("X-Custom-Header", "foobar");
            return headers;
          },
    }),
    tagTypes:["Subscriptions"],
    endpoints:()=>({
        // getUser:builder.query({
        //     query:()=>'/users'
        // })
    })
})
