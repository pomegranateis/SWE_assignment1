import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function MyComponent() {
  const [showNames, setShowNames] = useState(false);
  const names = ["pom", "kanu", "pulu", "balu"];

  return (
    <div className="space-y-4">
      <Button variant="outline" onClick={() => setShowNames(!showNames)}>
        Show Names
      </Button>

      {showNames && (
        <ul className="border p-4 rounded-lg bg-gray-100">
          {names.map((name, index) => (
            <li key={index} className="text-gray-800">
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
