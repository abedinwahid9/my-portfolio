// components/meta/DynamicMetadata.ts
import { Metadata } from "next";

interface DynamicMetadataProps {
  page: string;
}

export function DynamicMetadata({ page }: DynamicMetadataProps): Metadata {
  return {
    title: `${page} | Abedin Wahid`,
    description: `Welcome to my portfolio website. Front-end Developer | MERN Stack | Programming Enthusiast.`,
  };
}
