import { Input } from "@/components/Input";
import { StringUtils } from "@/utils/components/StringUtils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { auth } from "@/firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type FormProps = z.infer<typeof schema>;

const schema = z.object({
  email: z.string().email("Email inválido"),
  password: z
    .string()
    .min(
      6,
      "A senha precisa ter pelo menos 6 caracteres com uma letra maiúscula, um caractere especial e um número"
    )
    .refine((value) => StringUtils.hasNumber(value), {
      message: "A senha precisa ter pelo menos um número",
    })
    .refine((value) => StringUtils.hasSymbol(value), {
      message: "A senha precisa ter pelo menos um caractere especial",
    })
    .refine((value) => StringUtils.hasUppercase(value), {
      message: "A senha precisa ter pelo menos uma letra maiúscula",
    }),
});

export const CredentialLoginForm = () => {
  const navigate = useNavigate();
  const [msgError, setMsgError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onSubmitLogIn = handleSubmit(async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      setMsgError("");

      navigate("/");
    } catch (error: any) {
      setMsgError("Email ou senha inválido");
      console.log(error);
    }
  });

  return (
    <form
      className="flex flex-col gap-3 w-full max-w-[18rem]"
      onSubmit={onSubmitLogIn}
    >
      <Input
        error={!!errors.email}
        label="Email"
        placeholder="Email"
        helperText={errors.email?.message}
        {...register("email")}
      />
      <Input
        error={!!errors.password}
        type="password"
        label="Senha"
        placeholder="Senha"
        helperText={errors.password?.message}
        {...register("password")}
      />
      {msgError && <p className="text-red-500">{msgError}</p>}
      <button
        disabled={!!errors.email || !!errors.password}
        className="rounded-lg w-full px-4 py-2 bg-blue-500/80 hover:bg-blue-500 transition-all disabled:bg-slate-400 text-white"
      >
        Entrar
      </button>
    </form>
  );
};
