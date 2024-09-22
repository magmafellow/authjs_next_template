import { z } from 'zod'

export const SignupSchema = z.object({
  email: z.string().min(1, 'email required').email('the field is email one'),
  password: z
    .string()
    .min(4, 'password is at least 4 symbols')
    .max(32, 'password is max of 32 symbols'),
  username: z
    .string()
    .min(6, 'username is min of 6 syms')
    .max(32, 'username is max of 32 syms'),
})
