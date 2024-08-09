"use client";
import { socialItems, SocialLabels } from "@/constants/socials";
import { gtagReportConversion } from "@/utils/report";
import { HStack, IconButton, ResponsiveValue, Stack } from "@chakra-ui/react";

type SocialButtonsProps = {
  size?: ResponsiveValue<"sm" | "md" | "lg">;
  gap?: number;
  filter?: SocialLabels[];
  horizontal?: boolean;
};

export const SocialButtons: React.FC<SocialButtonsProps> = ({
  size = "sm",
  gap = 2,
  filter = ["WhatsApp", "X", "Instagram", "Youtube"],
  horizontal = true,
}) => {
  const items = filter
    ? socialItems.filter((item) => filter.includes(item.label))
    : socialItems;

  return (
    <Stack direction={horizontal ? "row" : "column"} align="start" gap={gap}>
      {items?.map((item, i) => {
        return (
          <IconButton
            key={i}
            aria-label={item.label}
            as="a"
            size={size}
            target="_blank"
            icon={<item.icon />}
            href={item.link}
            onClick={() => gtagReportConversion()}
            variant="outline"
            borderColor="primary.700"
            color="primary.700"
            _hover={{
              borderColor: "black",
              color: "black",
              borderWidth: 2,
            }}
          />
        );
      })}
    </Stack>
  );
};
