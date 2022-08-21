//  Components
import Landing from "./Landing.js";
import Loading from "./components/Loading.js";

import { useEffect, useState } from "react";
export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [loading]);

  if (loading) {
    return <Loading />;
  } else {
    return <Landing />;
  }
}
