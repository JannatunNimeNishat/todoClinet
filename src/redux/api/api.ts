import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { url } from "inspector";

/**
 * fetchBaseQuery redux er builtin method. amra caile axios use korte pari
 * redux e normal data get kora ke query r put,patch,delete ke mutation bole
 * endpoints er builder object er modde amra query r mutation peya jai.
 */

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({  // normal data get so  builder.query
      query: () => ({  // data fetch hok r mutation hok query takbe ak level vitore
        url: "tasks",
        method: "GET", // method er nam always boro hater hobe
        // body:'' //-> body te kisu pathasci na so body deyar dorkar nai
      }),
    }),
  }),
});

export const {useGetTodosQuery} = baseApi;
