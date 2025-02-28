import { PropsWithChildren } from 'react';

const MaxWidth: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      {children}
    </div>
  );
};

export default MaxWidth;
