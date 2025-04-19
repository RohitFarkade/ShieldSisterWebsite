
import React, { useEffect, useState } from 'react';
import { Check, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const DownloadConfirmation: React.FC = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const downloadUrl = 'apks/ShieldSister.apk';

  const handleRetry = () => {
    window.location.href = downloadUrl;
  };

  useEffect(() => {
    // Start download
    window.location.href = downloadUrl;

    // Countdown timer for retry visibility
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          aria-label="Download started icon"
        >
          <Check className="w-10 h-10 text-green-600" />
        </motion.div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">Download Started!</h1>
        <p className="text-gray-600 mb-6">
          Your download of <strong>Shield Sister APK</strong> has started automatically.
        </p>

        <p className="text-sm text-gray-500 mb-4">
          If it doesn't start in {countdown} second{countdown !== 1 && 's'}, use the button below.
        </p>

        <div className="space-y-4">
          <button
            onClick={handleRetry}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
            aria-label="Download again"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Again
          </button>

          <a
            href={downloadUrl}
            className="block text-sm text-purple-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here if the download still doesn’t work
          </a>

          <button
            onClick={() => navigate('/')}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
            aria-label="Return to home"
          >
            Return to Home
          </button>
        </div>

        <div className="mt-6 text-xs text-gray-400">
          <p>Version 1.2.3 • Released: April 2025</p>
          <p className="mt-1">Includes bug fixes and performance improvements.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default DownloadConfirmation;
