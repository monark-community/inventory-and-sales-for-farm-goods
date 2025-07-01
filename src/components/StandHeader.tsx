
import React from 'react';

interface StandHeaderProps {
  name: string;
  description: string;
  backgroundImage: string;
  welcomeMessage?: string;
}

const StandHeader = ({ name, description, backgroundImage, welcomeMessage }: StandHeaderProps) => {
  return (
    <div 
      className="h-64 bg-cover bg-center relative rounded-lg overflow-hidden mb-6"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h1 className="text-4xl font-bold mb-2">{name}</h1>
        <p className="text-xl opacity-90 mb-2">{description}</p>
        {welcomeMessage && (
          <p className="text-lg opacity-80">{welcomeMessage}</p>
        )}
      </div>
    </div>
  );
};

export default StandHeader;
