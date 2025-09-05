import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number,
        title: string
        image: string
        urlGithub: string
       
    }
}

const PortfolioBox = (props: PortfolioBoxProps) => {
  const { data } = props;
  const { id, title, image, urlGithub } = data;

  return (
    <div
      key={id}
      className="flex flex-col justify-between p-4 border border-teal-50 rounded-xl w-full max-w-[400px] min-h-[400px]"
    >
      {/* Título */}
      <h3 className="mb-4 text-xl text-center">{title}</h3>

      {/* Imagen */}
      <div className="flex justify-center items-center flex-1 mb-4">
        <Image
          src={image}
          alt={title}
          width={350}
          height={200}
          className="w-full h-auto rounded-2xl"
        />
      </div>

      {/* Botón */}
      <div className="flex justify-center mt-2">
        <Link
          href={urlGithub}
          target="_blank"
          className="px-4 py-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80 text-white text-sm font-medium"
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default PortfolioBox
