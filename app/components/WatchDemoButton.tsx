'use client'

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export const WatchDemoButton = () => {
  return (
    <Button
      size="lg"
      variant="outline"
      className="border-white text-black hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
      onClick={() => {
        window.open('https://youtube.com/shorts/mgoNTfCCwJ4?feature=share', '_blank', 'noopener,noreferrer');
      }}
    >
      <Play className="mr-2 h-5 w-5" />
      Watch Demo
    </Button>
  );
}; 