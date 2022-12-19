import { useSelector } from "react-redux";

export const UserProfile = () => {
  const user = useSelector((state: any) => state);
  console.log(user);
  return (
    <>
      <h1>{user?.user?.email}</h1>
    </>
  );
};
