type Props = {
  params: {
    category: string;
  };
};
const page = ({ params }: Props) => {
  // console.log(params.);

  return <div>{params.category}</div>;
};

export default page;
