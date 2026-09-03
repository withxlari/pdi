import { createFileRoute } from "@tanstack/react-router";
import { Metas } from "@/components/metas";

export const Route = createFileRoute("/metas")({
  component: Metas,
});