import { Card } from "@/components/ui/card";
import { Code, Puzzle, Zap, Settings } from "lucide-react";

export default function CustomDevelopmentPage() {
  return (
    <main className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Custom Development</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
          Tailored web solutions built with modern technologies. We create custom websites
          and applications that perfectly match your business needs and goals.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
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
    title: "Modern Technologies",
    description: "Built with the latest frameworks and tools for optimal performance.",
    icon: <Code className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Scalable Solutions",
    description: "Architectures designed to grow with your business needs.",
    icon: <Zap className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Custom Integration",
    description: "Seamless integration with your existing systems and workflows.",
    icon: <Puzzle className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Maintenance & Support",
    description: "Ongoing technical support and regular updates to ensure optimal performance.",
    icon: <Settings className="w-6 h-6 text-purple-500" />,
  },
];