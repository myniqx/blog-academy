import {
  Button,
  Card,
  Image,
  CardBody,
  Text,
  CardFooter,
  Heading,
  Link,
  Stack,
} from "@chakra-ui/react";
import NextLink from "next/link";

type BlogPreviewProps = {
  title: string;
  description: string;
  slug: string;
  simple?: boolean;
};
export const BlogPreview: React.FC<BlogPreviewProps> = ({
  title,
  description,
  slug,
  simple = false,
}) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      shadow={"lg"}
    >
      {!simple && (
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          src={`/images/blog/${slug}.jpg`}
          alt={title}
        />
      )}

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>

          <Text py="4">{description}</Text>
        </CardBody>

        <CardFooter>
          <Link as={NextLink} href={`/blogs/${slug}`}>
            <Button variant="solid" colorScheme="primary">
              Oku
            </Button>
          </Link>
        </CardFooter>
      </Stack>
    </Card>
  );
};
