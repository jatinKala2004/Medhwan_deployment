import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={index < rating ? 'text-amber-400' : 'text-gray-300'}
        />
      ))}
    </div>
  );
};

export default StarRating; 