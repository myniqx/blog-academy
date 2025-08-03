"use client";
import blogs from "@/constants/blogs/blogs.json";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Input,
  Select,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import slugify from "slugify";

const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false },
);

type Blog = {
  title: string;
  description: string;
  content: string;
  slug: string;
  date?: string;
  views?: number;
  updatedAt?: string;
};

const BlogEdit = () => {
  const router = useRouter();
  const toast = useToast();
  const [currentBlog, setCurrentBlog] = useState<Blog>({
    title: "",
    description: "",
    content: "",
    slug: "",
    date: new Date().toISOString(),
  });

  const [isNew, setIsNew] = useState(true);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const cancelRef = React.useRef(null);

  const sortedBlogs = ([...blogs] as Blog[]).sort(
    (a, b) =>
      new Date(b.date || "").getTime() - new Date(a.date || "").getTime(),
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setUnsavedChanges(true);
    if (name === "title") {
      setCurrentBlog((prev) => ({
        ...prev,
        [name]: value,
        slug: slugify(value, { lower: true, remove: /[*+~.()'"!:@]/g }),
      }));
    } else {
      setCurrentBlog((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = async () => {
    const updatedBlogs = isNew
      ? [...blogs, { ...currentBlog, updatedAt: new Date().toISOString() }]
      : blogs.map((blog) =>
          blog.slug === currentBlog.slug
            ? { ...currentBlog, updatedAt: new Date().toISOString() }
            : blog,
        );

    try {
      const response = await fetch("/api/saveBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBlogs),
      });

      if (response.ok) {
        toast({
          title: "Blog kaydedildi",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setUnsavedChanges(false);
      } else {
        toast({
          title: "Kaydetme başarısız",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Kaydetme hatası",
        description: (error as Error).message ?? "Bilinmeyen hata!",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleBlogSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (unsavedChanges) {
      setIsAlertOpen(true);
      return;
    }

    const selectedSlug = e.target.value;
    const selectedBlog = blogs.find((blog) => blog.slug === selectedSlug);
    if (selectedBlog) {
      setCurrentBlog(selectedBlog);
      setIsNew(false);
      setUnsavedChanges(false);
    }
  };

  const handleNewBlog = () => {
    if (unsavedChanges) {
      setIsAlertOpen(true);
    } else {
      setCurrentBlog({
        title: "",
        description: "",
        content: "",
        slug: "",
        date: new Date().toISOString(),
      });
      setIsNew(true);
      setUnsavedChanges(false);
    }
  };

  const handleAlertClose = (confirm: boolean) => {
    setIsAlertOpen(false);
    if (confirm) {
      handleSave();
    }
  };

  return (
    <Stack spacing={6} p={4} bg={"white"} padding={2} borderRadius={"lg"} m={4}>
      <h1>{isNew ? "Yeni Blog Ekle" : "Blog Düzenle"}</h1>

      <Box display="flex" justifyContent="space-between" mb={4}>
        {/* Blog Seçimi için Dropdown */}
        <Select placeholder="Blog Seçin" onChange={handleBlogSelect}>
          {sortedBlogs.map((blog) => (
            <option key={blog.slug} value={blog.slug}>
              {blog.title} - {new Date(blog.date || "").toLocaleDateString()}
            </option>
          ))}
        </Select>

        <Button colorScheme="blue" onClick={handleNewBlog}>
          Yeni Blog
        </Button>
      </Box>

      <Input
        type="text"
        name="title"
        value={currentBlog.title}
        onChange={handleInputChange}
        placeholder="Başlık"
        mb={4}
      />
      <Textarea
        name="description"
        value={currentBlog.description}
        onChange={handleInputChange}
        placeholder="Açıklama"
        mb={4}
      />
      <MarkdownEditor
        content={currentBlog.content}
        value={currentBlog.content}
        height="80vh"
        enablePreview={true}
        onChange={(content) => {
          setCurrentBlog((prev) => ({ ...prev, content }));
          setUnsavedChanges(true);
        }}
      />
      <Input
        type="text"
        name="slug"
        value={currentBlog.slug}
        readOnly
        placeholder="Slug otomatik oluşturuldu"
        mb={4}
      />
      <Button colorScheme="blue" onClick={handleSave}>
        Kaydet
      </Button>

      {/* Kaydedilmemiş değişiklikler için AlertDialog */}
      <AlertDialog
        isOpen={isAlertOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => handleAlertClose(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Kaydedilmemiş Değişiklikler
            </AlertDialogHeader>

            <AlertDialogBody>
              Kaydedilmemiş değişiklikler var. Şimdi kaydetmek istiyor musunuz?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => handleAlertClose(false)}>
                Hayır
              </Button>
              <Button
                colorScheme="blue"
                onClick={() => handleAlertClose(true)}
                ml={3}
              >
                Evet
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Stack>
  );
};

export default BlogEdit;
