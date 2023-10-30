import Watch from "./Watch";

interface Props {
  params: {
    moviesid: string;
  };
}

const page = async ({ params }: Props) => {
  const { moviesid } = params;

  return (
    <div>
      <Watch moviesid={moviesid} />
    </div>
  );
};

export default page;
