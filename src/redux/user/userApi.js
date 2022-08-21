import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials } from './authSlice';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState(state => state).auth.token;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: builder => ({
    // getUser: builder.query({
    //   query: () => `/users/current`,
    //   providesTags: ['Users'],
    // }),

    signUpUser: builder.mutation({
      query: newUser => ({
        url: '/users/signup',
        method: 'POST',
        body: {
          name: newUser.name,
          email: newUser.email,
          password: newUser.password,
        },
      }),
      invalidatesTags: ['Users'],
    }),
    logInUser: builder.mutation({
      query: user => ({
        url: '/users/login',
        method: 'POST',
        body: {
          email: user.email,
          password: user.password,
        },
      }),
      invalidatesTags: ['Users'],

      // async onQueryStarted(arg, { dispatch, getState, queryFulfilled }) {
      //   try {
      //     const data = await queryFulfilled;
      //     const token = data.meta.request.headers;

      //     if (token) {
      //       getState().dispatch(setCredentials(data.user));
      //     }
      //   } catch (error) {}
      // },
    }),

    logOutUser: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useSignUpUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
} = userApi;
