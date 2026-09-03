import { createFileRoute } from "@tanstack/react-router";
import { Contribuicoes } from "@/components/contribuicoes";

export const Route = createFileRoute("/contribuicoes")({
  component: Contribuicoes,
});