"use client";

import ProjectList from "@/components/ProjectList";

export default function AllProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-light leading-tight mb-10 text-center">
          All Projects
        </h1>
        <ProjectList />
      </div>
    </main>
  );
}
