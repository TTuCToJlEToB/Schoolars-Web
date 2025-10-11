import { httpClient } from '@/API/axios'
import { AxiosError } from 'axios'
import { useMutation, type MutationOptions } from '@tanstack/react-query'
import { type AuthForm, type AuthResponse } from '@/types/Authorization'

export default function useSignUp(options?: Omit<MutationOptions<AuthResponse, AxiosError, AuthForm>, 'mutationFn'>) {
	return useMutation({
		mutationKey: ['signUp'],
		mutationFn: (body: AuthForm) => {
			return httpClient()
				.post('auth/signup', body)
				.then((response) => response.data)
		},
		...options,
	})
}
