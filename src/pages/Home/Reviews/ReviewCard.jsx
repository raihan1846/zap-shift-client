import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {
    console.log(review);
    
    const {userName, review:test, user_photoURL} = review;
    return (
        <div className="max-w-sm p-6 rounded-xl bg-base-100 shadow-md border border-gray-200">
      <FaQuoteLeft className="text-3xl mb-3" />

      <p className="mb-6">
        {
            test
        }
      </p>

      <div className="border-t border-dashed border-gray-300 my-4"></div>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-full">
            <img src={user_photoURL} alt="" />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{userName}</h4>
          <p className="text-sm text-gray-500">Senior Product Designer</p>
        </div>
      </div>
    </div>
    );
};

export default ReviewCard;