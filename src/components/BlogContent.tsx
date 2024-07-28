import {
  Container,
  Stack,
  Box,
  Text,
  Image,
  Flex,
  Icon,
  Card,
  CardHeader,
  CardBody,
  HStack,
  Code,
  Heading,
  Link,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import { FaCalendarAlt, FaEye } from "react-icons/fa";
import { web } from "@/constants/web";

type Blog = {
  title: string;
  description: string;
  content: string;
  slug: string;
  date?: string;
  views?: number;
};

export const BlogContent = ({ blog }: { blog: Blog }) => {
  const badgeId = `${web.prefix}.${blog.slug}${
    process.env.NODE_ENV === "development" ? ".dev" : ""
  }`;

  const leftOffset = 6;

  return (
    <Card overflow={"hidden"} boxShadow={"2xl"} rounded={"3xl"}>
      <Box position="relative" width="100%" textAlign="center">
        <Image
          objectFit="cover"
          width={"100%"}
          src={`/images/blog/${blog.slug}.jpg`}
          alt={blog.title}
        />
        <Box
          position={{ base: "relative", lg: "absolute" }}
          bottom={0}
          width="100%"
          bg="rgba(0, 0, 0, 0.6)"
          color="white"
          p={4}
          textAlign="center"
          style={{ backdropFilter: "blur(10px)" }}
        >
          <Text fontSize="2xl" fontWeight="bold">
            {blog.title}
          </Text>
        </Box>
      </Box>

      <CardBody>
        <Stack spacing={4} width="100%" px={6}>
          <HStack justifyContent={`flex-end`} spacing={12} width="100%">
            {blog.date && (
              <Flex alignItems={`baseline`} gap={4}>
                <FaCalendarAlt />
                <Text>{blog.date}</Text>
              </Flex>
            )}
            <Flex alignItems={`baseline`} gap={4}>
              <Image
                src={`https://visitor-badge.laobi.icu/badge?page_id=${badgeId}&left_text=Ziyaret&left_color=%2330313a&right_color=black`}
                alt="Ziyaret sayısı"
              />
            </Flex>
          </HStack>

          <Box m={4}>
            <ReactMarkdown
              components={{
                p: ({ children, ...props }) => (
                  <Text as="p" mb={2} pl={leftOffset} {...props}>
                    {children}
                  </Text>
                ),
                a: ({ children, href, ...props }) => (
                  <Link href={href} {...props}>
                    {children}
                  </Link>
                ),
                h1: ({ children, ...props }) => (
                  <Heading as="h1" size="xl" mb={4} {...props}>
                    {children}
                  </Heading>
                ),
                h2: ({ children, ...props }) => (
                  <Heading as="h2" size="lg" mb={2} mt={12} {...props}>
                    {children}
                  </Heading>
                ),
                h3: ({ children, ...props }) => (
                  <Heading
                    as="h3"
                    size="md"
                    mb={2}
                    mt={6}
                    pl={leftOffset / 3}
                    {...props}
                  >
                    {children}
                  </Heading>
                ),
                h4: ({ children, ...props }) => (
                  <Heading
                    as="h4"
                    size="sm"
                    mb={2}
                    pl={leftOffset / 2}
                    {...props}
                  >
                    {children}
                  </Heading>
                ),
                h5: ({ children, ...props }) => (
                  <Heading as="h5" size="xs" mb={2} pl={leftOffset} {...props}>
                    {children}
                  </Heading>
                ),
                h6: ({ children, ...props }) => (
                  <Heading as="h6" size="xs" mb={2} pl={leftOffset} {...props}>
                    {children}
                  </Heading>
                ),
                code: ({ children, ...props }) => (
                  <Code {...props}>{children}</Code>
                ),
                img: ({ src, alt, ...props }) => (
                  <Image src={src} alt={alt} {...props} />
                ),
                ul: ({ children, ...props }) => (
                  <UnorderedList pl={leftOffset} {...props}>
                    {children}
                  </UnorderedList>
                ),
                ol: ({ children, ...props }) => (
                  <OrderedList pl={leftOffset} {...props}>
                    {children}
                  </OrderedList>
                ),
              }}
            >
              {blog.content}
            </ReactMarkdown>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};
