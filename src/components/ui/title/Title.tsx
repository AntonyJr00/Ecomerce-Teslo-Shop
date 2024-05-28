import { titleFont } from "@config/fonts";

interface Props {
  title: string;
  subTitle?: string;
  classNames?: string;
}

export const Title = ({ title, classNames, subTitle }: Props) => {
  return (
    <div className={`mt-3 ${classNames} text-white`}>
      <h1
        className={`${titleFont.className} antialiased text-3xl font-semibold my-10`}
      >
        {title}
      </h1>

      {subTitle && (
        <h3 className="text-xl mb-5 first-letter:uppercase">{subTitle}</h3>
      )}
    </div>
  );
};
