import { Input } from "@/components/Input";
import { StringUtils } from "@/utils/components/StringUtils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getAuth, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {
  getDownloadURL,
  ref,
  getStorage,
  uploadBytesResumable,
} from "firebase/storage";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

type FormProps = z.infer<typeof schema>;

const schema = z.object({
  nameUser: z
    .string()
    .min(3, "O nome precisa ter pelo menos 3 caracteres")
    .max(12, "O nome pode ter no máximo 12 caracteres")
    .transform((value) => StringUtils.capitalize(value)),
}) as any;

export const InformationRegisterForm = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [img, setImg] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (img) {
      storageUpload();
    }
  }, [img]);

  const storageUpload = () => {
    const storage = getStorage();

    const profileRef = ref(storage, `profile/${v4()}`);

    const uploadTask = uploadBytesResumable(profileRef, img as any);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          setImgUrl(downloadURL);
          try {
            const user = auth.currentUser;

            await updateProfile(user as any, {
              photoURL: downloadURL,
            });
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
  };

 

  const onSubmitRegisterInformation = handleSubmit(async (data) => {
    const user = auth.currentUser;

    try {
      await updateProfile(user as any, {
        displayName: data.nameUser,
      });

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form
      className="flex flex-col gap-3 mobile:gap-5 w-full items-center"
      onSubmit={onSubmitRegisterInformation}
    >
      <Input
        error={!!errors.nameUser}
        label="Your name"
        placeholder="Your name"
        helperText={errors.nameUser?.message as string}
        {...register("nameUser")}
      />
      <Input
        error={!!errors.photoUrl}
        type="file"
        label="Your photo"
        className="file:bg-blue-500/80 file:hover:bg-blue-500 file:rounded-lg file:border-none file:text-base text-black text-xs w-full"
        onChange={(e: any) => {
          setImg(e.target.files[0]);
        }}
      />
      <div className="w-full h-full max-w-[8rem] max-h-[8rem] mobile:h-[6rem] mobile:w-[6rem] rounded-full overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imgUrl || "../images/user.jpg"}
          alt=""
        />
      </div>
      <button
        disabled={!!errors.nameUser || !!errors.photoUrl}
        type="submit"
        className="rounded-lg w-full text-white px-4 py-2 bg-blue-500/80 hover:bg-blue-500 transition-all disabled:bg-slate-400"
      >
        Register Informations
      </button>
      {imgUrl && <p className="text-white">Image loaded</p>}
    </form>
  );
};
