import CarouselWithProgress from "@/components/Carussel";
import { ContactUs } from "@/components/ContactUs";
import { EthicalCommitment } from "@/components/EthicalCommitment";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack gap={0} spacing={0} overflowX={"hidden"}>
      <CarouselWithProgress />
      <WhatWeDo />
      <ContactUs />
      <EthicalCommitment />
    </Stack>
  );
}
