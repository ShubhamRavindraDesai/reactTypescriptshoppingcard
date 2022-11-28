import { Typography } from "@mui/material";
import { useSelector } from "react-redux";


const User = () => {
  const token = useSelector((state: GlobalState) => state?.user.userData.token);
console.log(token)
  return (
    <>
      {token && <Typography>
        {`${token}`}
      </Typography>}
    </>
  );
};

export default User;
