
export const PublicLayout = ({children}: {children: JSX.Element}) => {

  return (
    <div className="flex w-full justify-center overflow-hidden">
      <div className="flex flex-col gap-8 w-full max-w-[24rem] h-screen">
        {children}
      </div>
    </div>
  );
}