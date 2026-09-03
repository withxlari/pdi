import { createFileRoute } from "@tanstack/react-router";
import { Objetivo } from "@/components/objetivo";

export const Route = createFileRoute("/objetivo")({
  component: Objetivo,
});