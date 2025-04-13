
import React from 'react';

const BenefitBadge: React.FC<{ icon: string; text: string }> = ({ icon, text }) => {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 bg-gray-100 mr-2 rounded-md flex items-center justify-center">
        {icon}
      </div>
      <p className="text-xs font-bold text-dark">{text}</p>
    </div>
  );
};

const BenefitBadges: React.FC = () => {
  return (
    <div className="w-full px-4 flex justify-between my-4">
      <BenefitBadge icon="🚚" text="Free Shipping from US" />
      <BenefitBadge icon="✅" text="30-Day-Guarantee" />
    </div>
  );
};

export default BenefitBadges;
