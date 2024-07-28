import { socialItems } from "@/constants/socials";
import { HStack, IconButton, ResponsiveValue } from "@chakra-ui/react";

type SocialButtonsProps = {
  size?: ResponsiveValue<"sm" | "md" | "lg">;
  gap?: number;
};

export const SocialButtons: React.FC<SocialButtonsProps> = ({
  size = "sm",
  gap = 2,
}) => {
  const items = socialItems;

  return (
    <HStack align="start" gap={gap}>
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
            variant="outline"
            colorScheme="primary"
            borderColor="primary.300"
            color="primary.300"
            _hover={{
              bg: "whiteAlpha.100",
              borderColor: "primary.900",
              color: "primary.900",
            }}
          />
        );
      })}
    </HStack>
  );
};
