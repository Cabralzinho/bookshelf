import { Input } from "@/components/Input";
import { StringUtils } from "@/utils/components/StringUtils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { auth } from "@/firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type FormProps = z.infer<typeof schema>;

const schema = z
  .object({
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
    confirmPassword: z.string(),
  })
  .refine((value) => value.password === value.confirmPassword, {
    path: ["confirmPassword"],
    message: "As senhas precisam ser iguais",
  });

export const CredentialRegisterForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onSubmitRegister = handleSubmit(async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);

      navigate("/register/information");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form
      className="flex flex-col gap-3 w-full h-full max-w-[18rem]"
      onSubmit={onSubmitRegister}
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
        label="Password"
        placeholder="Password"
        helperText={errors.password?.message}
        {...register("password")}
      />
      <Input
        error={!!errors.confirmPassword}
        type="password"
        label="Confirm Password"
        placeholder="Confirm Password"
        helperText={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />
      <button
        disabled={
          !!errors.email || !!errors.password || !!errors.confirmPassword
        }
        className="rounded-lg w-full px-4 py-2 bg-blue-500/80 hover:bg-blue-500 transition-all disabled:bg-slate-400 text-white"
      >
        Register
      </button>
    </form>
  );
};
