'use client'

import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"

export const DownloadButton = () => {
  return (
    <Button
      size="lg"
      type="button"
      className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg"
      onClick={() => {
        window.open('https://apps.apple.com/us/app/learn-creole-with-jorge/id6745862015', '_blank', 'noopener,noreferrer');
      }}
    >
      <Apple className="mr-2 h-5 w-5" />
      Download for iOS
    </Button>
  );
}; 