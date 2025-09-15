import DivisionCard from '../DivisionCard';
import { GraduationCap } from "lucide-react";
import educationImage from "@assets/generated_images/Education_technology_classroom_scene_88f85537.png";

export default function DivisionCardExample() {
  const mockFeatures = [
    "Gymnastic equipment for physical education",
    "Multimedia Language lab solutions",  
    "Specialized smart science laboratories",
    "Engineering and medical equipment",
    "Marine and aviation simulators",
    "Complete range of physical testing equipment"
  ];

  return (
    <div className="max-w-md">
      <DivisionCard
        title="Education Technology"
        subtitle="Fostering quality education by engaging innovative learning environment"
        description="We provide quality products and services that support K-12 to universities, research institutes and training facilities with the best possible tools and resources."
        features={mockFeatures}
        image={educationImage}
        href="/education"
        icon={<GraduationCap className="h-6 w-6 text-primary" />}
      />
    </div>
  );
}