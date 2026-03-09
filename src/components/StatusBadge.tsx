import { motion } from "framer-motion";

const StatusBadge = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.5, duration: 0.5 }}
    className="inline-flex items-center gap-2 px-3 py-1.5 border border-neon-green/30 rounded-full font-mono text-xs text-neon-green"
  >
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-green" />
    </span>
    Available for work
  </motion.div>
);

export default StatusBadge;
