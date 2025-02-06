import { useEffect } from "react";
import { useRouter } from "next/router";

import { useToast } from "@/hooks";

const Index = () => {
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    router.push("/panel/servers");
  }, []);

  toast("To monitor your pool, click on the pool row in the table");
};

export default Index;
