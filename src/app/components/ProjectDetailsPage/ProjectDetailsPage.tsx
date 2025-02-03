"use client";
import { useParams } from "next/navigation";

const ProjectDetailsPage = () => {
  const { id } = useParams();

  return <div>ProjectDetailsPage {id}</div>;
};

export default ProjectDetailsPage;
