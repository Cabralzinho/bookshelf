import { Input } from "@/components/Input";
import { auth } from "@/firebase/firebase";
import { StringUtils } from "@/utils/components/StringUtils";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ActionCodeURL,
  confirmPasswordReset,
  verifyPasswordResetCode,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

type FormProps = z.infer<typeof schema>;

const schema = z
  .object({
    password: z
      .string()
      .min(6)
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

export const CredentialNewPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmitNewPassword = handleSubmit(async (data) => {
    try {
      const actionCode = ActionCodeURL.parseLink(window.location.href)?.code;

      await verifyPasswordResetCode(auth, actionCode as string);

      await confirmPasswordReset(auth, actionCode as string, data.password);

      alert("Senha redefinida com sucesso");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmitNewPassword}>
      <Input
        type="password"
        label="Senha"
        placeholder="Senha"
        helperText={errors.password?.message}
        error={!!errors.password}
        {...register("password")}
      />
      <Input
        type="password"
        label="Confirme sua senha"
        placeholder="Confirme sua senha"
        helperText={errors.confirmPassword?.message}
        error={!!errors.confirmPassword}
        {...register("confirmPassword")}
      />
      <button
        disabled={!!errors.password}
        className="bg-blue-500/90 hover:bg-blue-500 text-white py-2 px-4 rounded-lg"
      >
        Redefinir senha
      </button>
    </form>
  );
};
