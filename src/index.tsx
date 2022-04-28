import React from "react";

export const getInitialProps =  () => {
  return {
    someThing: 'something',
  };
};

type InitialProps = Awaited<ReturnType<typeof getInitialProps>>

const Page: React.FC<Partial<InitialProps>> = (props) => {
  return (
    <>
      <div>
        aosijda</div>112
    </>
  );
};

export default Page;
