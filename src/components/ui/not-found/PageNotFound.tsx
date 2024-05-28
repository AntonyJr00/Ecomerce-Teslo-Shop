import { titleFont } from "@config/fonts";
import Image from "next/image";
import Link from "next/link";

export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5 text-white">
        <h2 className={`${titleFont.className} text-8xl`}> 404 </h2>
        <p>Whoops!! Lo sentimos, parece que a ocurrido un error.</p>
        <p className="font-light">
          <span>Puedes regresar al</span>
          <Link className="font-semibold hover:underline px-2" href={"/"}>
            Inicio
          </Link>
        </p>
      </div>
      <div className="px-5 mx-6">
        <Image
          src={`/imgs/starman_750x750.png`}
          alt="img-notfound"
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  );
};
