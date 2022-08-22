import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://connections-api.herokuapp.com';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    // console.log(token);
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   // console.log(authSlice);
//   let result = await baseQuery(args, api, extraOptions);

//   if (result.error && result.error.status === 401) {
//     const refreshResult = await baseQuery('auth/refresh', api, extraOptions);
//     // console.log(refreshResult.data);
//     if (refreshResult.data) {
//       // api.dispatch(getUser({ token: refreshResult.data }));

//       // retry the initial query
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       // api.dispatch(logOutUser());
//     }
//   }
//   return result;
// };
// baseQueryWithReauth();

export const userApi = createApi({
  reducerPath: 'userApi',
  // baseQuery: fetchBaseQuery({
  //   baseUrl: BASE_URL,
  //   prepareHeaders: (headers, { getState }) => {
  //     const token = getState(state => state).auth.token;

  //     // If we have a token set in state, let's assume that we should be passing it.
  //     if (token) {
  //       headers.set('authorization', `Bearer ${token}`);
  //     }
  //     return headers;
  //   },
  // }),
  baseQuery,

  endpoints: builder => ({
    getUser: builder.query({
      query: () => ({ url: `/users/current`, method: 'GET' }),
      providesTags: ['Users'],
    }),

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

      // async onQueryStarted(
      //   arg,

      //   { dispatch, getState, queryFulfilled },
      //   extraOptions
      // ) {
      //   try {
      //     // const data = await queryFulfilled;
      //     // const token = data.meta.request.headers;
      //     console.log('args:', arg);
      //     // console.log('extraOptions:', extraOptions);
      //     // console.log('api:', api);
      //     // if (token) {
      //     //   // getState().dispatch(setCredentials(data.user));
      //     // }
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
    // fetchCurrentUser: builder.query({
    //   query: () => `/users/current`,
    //   providesTags: ['Users'],
    // }),
  }),
});

export const {
  useGetUserQuery,
  useSignUpUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
} = userApi;
