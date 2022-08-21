import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://connections-api.herokuapp.com';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,

    prepareHeaders: (headers, { getState }) => {
      const token = getState(state => state).auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name: newContact.name,
          number: newContact.number,
        },
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateContact: builder.mutation({
      query: object => ({
        url: `/contacts/${object.id}`,
        method: 'PATCH',
        body: object.contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

// const baseQueryWithReauth = async (args, api, extraOptions) => {
//   let result = await baseQuery(args, api, extraOptions);
//   if (result.error && result.error.status === 401) {
//     // try to get a new token
//     const refreshResult = await baseQuery('/refreshToken', api, extraOptions);
//     if (refreshResult.data) {
//       // store the new token
//       api.dispatch(tokenReceived(refreshResult.data));
//       // retry the initial query
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       api.dispatch(loggedOut());
//     }
//   }
//   return result;
// };
export const {
  useGetContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
  useUpdateContactMutation,
} = contactsApi;
