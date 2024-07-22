import Image from "next/image";
import styles from "./page.module.css";
import { Center } from "@chakra-ui/react";
import CarouselWithProgress from "@/components/Carussel";

export default function Home() {
  return (
    <CarouselWithProgress />
  );
}
