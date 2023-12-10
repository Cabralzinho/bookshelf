import { Input } from "@/components/Input";
import { auth } from "@/firebase/firebase";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendPasswordResetEmail } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

type FormProps = z.infer<typeof schema>;

const schema = z.object({
  email: z.string().email("Email inválido"),
});

export const CredentialSendRecoveryPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate()

  const onSubmitRecoveryPassword = handleSubmit(async (data) => {
    try {
      await sendPasswordResetEmail(auth, data.email);

      alert("Email enviado com sucesso");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form className="flex flex-col gap-3" onSubmit={onSubmitRecoveryPassword}>
      <Input
        label="Email"
        placeholder="Email"
        helperText={errors.email?.message}
        error={!!errors.email}
        {...register("email")}
      />
      <button
        disabled={!!errors.email}
        className="bg-blue-500/90 hover:bg-blue-500 text-white py-2 px-4 rounded-lg"
      >
        Enviar código
      </button>
    </form>
  );
};
