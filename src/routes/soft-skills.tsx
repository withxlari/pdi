import { createFileRoute } from "@tanstack/react-router";
import { SoftSkills } from "@/components/soft-skills";

export const Route = createFileRoute("/soft-skills")({
  component: SoftSkills,
});