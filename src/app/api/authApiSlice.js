import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        login: builder.mutation({
            query: credentials => ({
                url: '/signin',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        getUsers: builder.query({
            query: allusers => ({
                url: '/users',
                method: 'GET',
                // keepUnusedDataFor: 5,
            })
        }),
        updateUserId: builder.mutation({
            query: ({ id, userid }) => ({
                url: `/user/${id}`,
                method: 'PUT',
                body: { ...userid }
            })
        }),
        deleteUserId: builder.mutation({
            query: (id) => ({
                url: `/user/${id}`,
                method: 'DELETE',
            })
        }),
    })
})

export const {
    useLoginMutation,
    useGetUsersQuery,
    useUpdateUserIdMutation,
    useDeleteUserIdMutation,
} = authApiSlice