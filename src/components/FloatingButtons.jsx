import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const FloatingButtons = () => {
  const whatsappNumber = "917305954417"; // Country code + number
  const phoneNumber = "+917305954417";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi,%20I'm%20interested%20in%20appliance%20repair%20services.`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <div className="floating-container">
      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn-whatsapp"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.2 }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
      >
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="currentColor"
          style={{ display: 'block', color: '#ffffff' }}
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.053 5.348 5.397.007 11.979 0c3.19.001 6.188 1.242 8.444 3.498 2.256 2.256 3.493 5.253 3.492 8.442-.003 6.634-5.347 11.97-11.93 11.97-2.006-.001-3.98-.507-5.73-1.472L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45 5.234 0 9.5-4.249 9.503-9.483.001-2.533-.98-4.914-2.761-6.697-1.78-1.783-4.157-2.765-6.687-2.766-5.236 0-9.503 4.25-9.506 9.484-.001 1.747.457 3.454 1.332 4.968l-.99 3.613 3.734-.979zm11.167-5.682c-.3-.15-1.774-.875-2.046-.975-.272-.1-.47-.15-.668.15-.198.3-.765.975-.938 1.175-.173.2-.347.225-.648.075-.3-.15-1.266-.466-2.41-1.487-.89-.794-1.49-1.776-1.664-2.076-.173-.3-.018-.462.13-.61.135-.133.3-.349.45-.523.15-.174.2-.3.3-.5.1-.2.05-.375-.025-.524-.075-.15-.668-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.075-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.774-.724 2.022-1.424.247-.699.247-1.299.173-1.424-.073-.124-.272-.199-.57-.349z" />
        </svg>
        <span>Chat on WhatsApp</span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href={callUrl}
        className="floating-btn floating-btn-call"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.3 }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
      >
        <Phone size={18} style={{ color: '#ffffff' }} />
        <span>Call Support</span>
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
