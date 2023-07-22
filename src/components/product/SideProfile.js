import { Avatar } from '@mui/material';
import HomeIcon from '../utils/icons/HomeIcon';
import MembersIcon from '../utils/icons/MembersIcon';
import OrganizationsIcon from '../utils/icons/OrganizationsIcon';

const SideProfile = ({ product }) => {
  return (
    <div className="hidden md:flex flex-col w-60">
      <div className="flex items-center gap-3 mb-5 mt-5">
        <Avatar
          src={`${product?.user?.profilePicture}` || ''}
          alt=""
          sx={{ width: 50, height: 50 }}
        />
        <div>
          <p className="xl:text-lg text-[#6B7280] font-semibold xl:-mb-1">{`${product?.user?.firstName} ${product?.user?.lastName}`}</p>
          <p className="text-[#6B7280] xl:text-lg">{product?.company?.name}</p>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-3 mb-5">
          <HomeIcon />
          <p className="xl:text-lg text-[#374151]">Home</p>
        </div>
        <div className="flex items-center gap-3 mb-5">
          <MembersIcon />
          <p className="xl:text-lg text-[#374151]">Members</p>
        </div>
        <div className="flex items-center gap-3 mb-5">
          <OrganizationsIcon />
          <p className="xl:text-lg text-[#374151]">Organizations</p>
        </div>
      </div>
    </div>
  );
};

export default SideProfile;
