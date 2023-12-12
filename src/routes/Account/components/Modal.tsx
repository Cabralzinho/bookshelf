import { Icons } from "@/components/Icons";
import { Input } from "@/components/Input";
import { auth } from "@/firebase/firebase";
import { AuthProvider } from "@/providers/AuthProvider";
import { Box, Modal } from "@mui/material";
import { updateProfile } from "firebase/auth";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useEffect, useState } from "react";
import { v4 } from "uuid";

export const ModalImg = () => {
  const { authUser } = AuthProvider();
  const [img, setImg] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [openModal, setOpenModal] = useState(false);

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

  const handleOpenModal = () => {
    setOpenModal(true);
    setImgUrl(authUser?.photoURL || "../images/user.jpg");
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setImgUrl("");
  };

  return (
    <div>
      <span
        onClick={handleOpenModal}
        className="text-sky-700 hover:text-sky-400 cursor-pointer transition-all"
      >
        Mudar sua foto de perfil
      </span>
      <Modal open={openModal} className="flex justify-center items-center">
        <Box className="dark:bg-stone-500 bg-stone-400 rounded-lg p-4 w-full max-w-[24rem] flex flex-col items-center gap-4">
          <div className="flex justify-end w-full">
            <Icons.Close
              onClick={handleCloseModal}
              className="cursor-pointer"
            />
          </div>
          <div className="w-[12rem] h-[12rem] mobile:w-[11rem] mobile:h-[11rem]">
            <img
              className="w-full h-full rounded-full object-cover"
              src={imgUrl || "../images/user.jpg"}
              alt=""
            />
          </div>
          <Input
            className="text-black w-full file:cursor-pointer file:rounded-xl file:border-none file:p-2 file:bg-slate-400/90 file:hover:bg-slate-400 "
            type="file"
            accept="image/*"
            label="Escolha uma nova imagem"
            placeholder="Escolha uma nova imagem"
            onChange={(e: any) => setImg(e.target.files[0])}
            error={false}
          />
        </Box>
      </Modal>
    </div>
  );
};
