import React, { useEffect } from 'react';
import { Check, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DownloadConfirmation: React.FC = () => {
  const navigate = useNavigate();

  const handleRetry = () => {
    window.location.href = '/download-confirmation';
  };

  useEffect(() => {
    // Trigger download automatically when component mounts
    window.location.href = 'apks/ShieldSister.apk';
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Download Started!</h1>
        <p className="text-gray-600 mb-8">
          Your download should begin automatically. If it doesn't start, please click the button below.
        </p>
        
        <div className="space-y-4">
          <button
            onClick={handleRetry}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Again
          </button>
          
          <button
            onClick={() => navigate('/')}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadConfirmation;