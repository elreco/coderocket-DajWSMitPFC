import { Link } from 'react-router-dom';

interface PackageCardProps {
  name: string;
  description: string;
  version: string;
  publishedBy: string;
  publishDate: string;
}

const PackageCard = ({ 
  name, 
  description, 
  version, 
  publishedBy, 
  publishDate 
}: PackageCardProps) => {
  return (
    <div className="border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <Link to={`/package/${name}`} className="text-red-600 font-bold hover:underline">
          {name}
        </Link>
        <span className="text-sm text-gray-500">{version}</span>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex justify-between text-xs text-gray-500">
        <span>Published by {publishedBy}</span>
        <span>{publishDate}</span>
      </div>
    </div>
  );
};

export default PackageCard;