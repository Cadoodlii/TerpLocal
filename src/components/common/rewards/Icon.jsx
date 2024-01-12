import { IconContext } from "react-icons";

export default function ConfigIcon({ children }) {
  return (
    <>
      <IconContext.Provider value={{ size: "1.5em" }}>
        {children}
      </IconContext.Provider>
    </>
  );
}
