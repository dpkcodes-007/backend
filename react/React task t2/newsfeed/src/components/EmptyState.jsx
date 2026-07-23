// file: src/components/EmptyState.jsx
import React from 'react';
import { FaInbox } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EmptyState = ({ message, actionText, actionLink }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <FaInbox className="text-6xl text-gray-300 dark:text-gray-600 mb-4" />
      <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Nothing to see here
      </h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        {message || 'No items available at the moment.'}
      </p>
      {actionText && actionLink && (
        <Link to={actionLink} className="btn-primary">
          {actionText}
        </Link>
      )}
    </div>
  );
};

export default EmptyState;