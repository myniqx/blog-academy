import CarouselWithProgress from "@/components/Carussel";
import { Comments } from "@/components/Comments";
import { ContactUs } from "@/components/ContactUs";
import { WhatWeDo } from "@/components/WhatWeDo";
import { Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack gap={0} spacing={0} overflowX={"hidden"}>
      <CarouselWithProgress />
      <WhatWeDo />
      <ContactUs />
      <Comments />
    </Stack>
  );
}
