type Props = {
  extra?: string;
  title: string;
  children?: React.ReactNode;
};

const PostJobSection = (props: Props) => {
  const buttonStyles = "p-1 font-bold";
  const paragraphStyles = "font-bold text-xl border-b-2 border-accent";
  return (
    <div className="w-full flex flex-col gap-3 pb-4">
      <p className="font-bold text-xl border-b-2 border-accent text-center">{props.title}</p>
      {props?.children}
    </div>
  );
};

export default PostJobSection;
