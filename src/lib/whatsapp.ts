import { siteConfig } from "@/lib/constants";

// TODO: confirm WhatsApp Business number with client
const WHATSAPP_NUMBER = siteConfig.whatsappNumber.replace(/\D/g, "");

export function getWhatsAppLink(service?: string, customMessage?: string) {
  const genericMessage =
    "Hi Adobzone, I'd like to know more about your branding & printing services.";

  const finalMessage = customMessage ||
    (service
      ? `Hi Adobzone, I'm interested in ${service}. Could you share pricing and details?`
      : genericMessage);

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(finalMessage)}`;
}
