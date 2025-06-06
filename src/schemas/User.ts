import { z } from "zod";

export const RegisterUserSchema = z.object({
    name: z
    .string({ required_error: 'nome obrigatório' })
    .min(3, { message: 'Nome deve conter pelo menos 3 letras' }),
  password: z
    .string({
      required_error: 'Senha obrigatória',
    })
    .min(6, { message: 'Mínimo de 8 caracteres' })
    .regex(/[A-Z]/, { message: 'Pelo menos uma letra maiúscula' })
    .regex(/[0-9]/, { message: 'Pelo menos um número' })
})
export const LoginUserSchema = z.object({
    name: z
    .string({ required_error: 'Nome obrigatório' }),
  password: z
    .string({
      required_error: 'Senha obrigatória',
    })
})

export type RegisterUserSchemaInput = z.infer<typeof RegisterUserSchema>
export type LoginUserSchemaInput = z.infer<typeof LoginUserSchema>