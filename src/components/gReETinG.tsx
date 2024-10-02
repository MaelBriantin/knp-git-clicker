type gReETinGProps = {
  name: string;
  children?: React.ReactNode;
};

export const gReETinG: React.FC<gReETinGProps> = ({ name, children = null }) => {
  return (
    <>
      <h1>
        Hello, {name}!
      </h1>
      <h2>Good to see you!</h2>
      {children &&
        <div>{children}</div>
      }
    </>
  )
};
