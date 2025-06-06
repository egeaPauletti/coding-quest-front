import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Api from "../../../api/api";
import { RegisterUserSchema, RegisterUserSchemaInput } from "../../../schemas/User";
import Button from "../Button";
import { setClientAuthCookie } from "../utils/clientCookie";

export default function RegisForm() {
  const { register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUserSchemaInput>({
    resolver: zodResolver(RegisterUserSchema)
  })

  const handleRegisterSubmit = async (data: RegisterUserSchemaInput) => {
    try {
      const response = await fetch(Api("user/register"), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      const actualToken = result.data?.access_token

      if (actualToken && typeof actualToken === 'string') {
        setClientAuthCookie(actualToken);

        window.location.href = '/';

      } else {
        throw new Error('Token not received or invalid format');
      }

    } catch (error) {
      console.log(error);

    }
  }



  return <div className="flex-col">
    <div>
      <h1 className="gradientText text-4xl font-bold pb-2">Registre sua conta</h1>
      <h2 className="text-[#989898]">registre-se via</h2>
    </div>

    <div className="flex flex-row justify-center items-center p-4 gap-4">
      <a href=""><img src="../../../../public/icons/googleIcon.png" className="w-auto" /></a>
      <a href=""><img src="../../../../public/icons/githubIcon.png" className="w-auto" /></a>
    </div>

    <form
      onSubmit={handleSubmit(handleRegisterSubmit)}
      noValidate
      className="pt-4 flex flex-col justify-center items-center font-bold">

      <input
        type="text"
        className="w-[80%] h-14 px-6 py-2 bg-[#D9D9D9] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#7703FF] mb-6 placeholder-[#989898]"
        placeholder="Usuário"
        required
        {...register('name')}
      />

      <span className="text-red-500 text-sm mb-4 self-start ml-[10%]">{errors?.name?.message}</span>

      <input
        type="password"
        className="w-[80%] h-14 px-6 py-2 bg-[#D9D9D9] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#7703FF] placeholder-[#989898]"
        placeholder="Senha"
        required
        {...register('password')}
      />

      <span className="text-red-500 text-sm mb-4 self-start ml-[10%]">{errors?.password?.message}</span>

      <div className="pt-5">
        <Button type="submit" text="Registrar" width={150} height={45} />
      </div>

    </form>

  </div>
}