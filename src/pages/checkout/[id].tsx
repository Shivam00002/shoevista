import React from "react";
import { useRouter } from "next/router";
import { Check } from "@/components/checkout/Check";


const Checkout = () => {
  const router = useRouter();
  const { id }: any = router.query;

  return (
    <>
      <Check iTemid={id} />
    </>
  );
};

export default Checkout;
