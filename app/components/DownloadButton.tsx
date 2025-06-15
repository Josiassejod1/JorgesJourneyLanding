'use client'

import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"

export const DownloadButton = ({ url, text }: { url: string, text: string }) => {
  return (
    <Button
      size="lg"
      type="button"
      className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg"
      onClick={() => {
        window.open(url, '_blank', 'noopener,noreferrer');
      }}
    >
      <Apple className="mr-2 h-5 w-5" />
      {text}
    </Button>
  );
}; 