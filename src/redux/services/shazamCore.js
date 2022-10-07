import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

    export const shazamCoreApi = createApi({
       reducerPatch: 'shazamCoreApi', 
       baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'dc92e089cbmsh14da0e18c0e3fe6p10fbb1jsn769a924b16f1');

            return headers;
          },
       }),
       endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world' }),
       }),
    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;