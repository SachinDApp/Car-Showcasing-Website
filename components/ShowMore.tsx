'use client';
import { updateSearchParams } from '@/utils';
import CustomButton from './CustomButton';
import { useRouter } from 'next/navigation';
interface prop {
  pageNumber: number;
  isNext: boolean;
}

const ShowMore = ({ pageNumber, isNext }: prop) => {
  const router = useRouter();
  const handleNavigation = () => {
    const pageLimit = (pageNumber + 1) * 10;
    const newpath = updateSearchParams('limit', pageLimit.toString());
    router.push(newpath);
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {isNext && (
        <CustomButton
          btnType="button"
          title="Show More"
          containerStyle="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
