import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/data/site-config";

/** Renders only when a verified WhatsApp number is configured in site-config.ts. */
export function WhatsAppCTA({
  message = "Hello NUMRA, I would like to ask about your services.",
  label = "Message on WhatsApp",
  variant = "secondary",
}: {
  message?: string;
  label?: string;
  variant?: "secondary" | "outlineLight";
}) {
  const href = whatsappLink(message);
  if (!href) return null;
  return (
    <Button href={href} external variant={variant}>
      <MessageCircle size={16} aria-hidden /> {label}
    </Button>
  );
}
