import Image from "next/image";
import BackgroundImage from "../../../public/login_background.jpg";
import Logo from "../../../public/netflix_logo.svg";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        alt="background image"
        src={BackgroundImage}
        fill
        priority
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
      />

      <Image
        src={Logo}
        alt="logo"
        width={120}
        height={120}
        className="absolute left-4 top-4 object-contain md:left-10 md:top-5"
        priority
      />
      {children}
    </div>
  );
}
