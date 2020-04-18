import { useState } from "react";
import Cookies from "js-cookie";
export default () => {
  const [theme, setTheme] = useState(Cookies.get("theme") || "dark");
  return [theme, setTheme];
};
