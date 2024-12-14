import { Card } from "@/components/ui/card";
import { ClipboardCheck, Target, TrendingUp } from "lucide-react";

export default function ProjectManagementPage() {
  return (
    <main className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Project Management</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Comprehensive project oversight from planning to completion. Our experienced project
          managers ensure efficient execution and timely delivery of your projects.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-6">
              <div className="flex gap-4">
                <div className="mt-1">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}

const features = [
  {
    title: "Planning & Strategy",
    description: "Detailed project planning and strategic resource allocation.",
    icon: <Target className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Progress Tracking",
    description: "Real-time monitoring and reporting of project milestones.",
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control throughout project execution.",
    icon: <ClipboardCheck className="w-6 h-6 text-blue-500" />,
  },
];