import { useNavigate } from 'react-router-dom';
import InnoloftIcon from './utils/icons/InnoloftIcon';
import MessageIcon from './utils/icons/MessageIcon';
import NotificationIcon from './utils/icons/NotificationIcon';
import SearchIcon from './utils/icons/SearchIcon';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center bg-[#272e71] py-5 px-3 lg:px-[3rem] xl:px-[8rem]">
      <div onClick={() => navigate('/')} className="cursor-pointer">
        <InnoloftIcon />
      </div>
      <div className="hidden md:flex items-center justify-between bg-white rounded-md w-[24rem] lg:w-[36rem] p-2">
        <input
          placeholder="Enter interests, keyword, company name, etc."
          className="flex-1 outline-none border-none bg-inherit mr-2"
        />
        <SearchIcon />
      </div>

      <div className="flex items-center gap-2">
        <p
          onClick={() => navigate('/product')}
          className={
            window.location?.pathname === '/product'
              ? 'cursor-pointer text-lg font-semibold text-[#e4b302]'
              : 'cursor-pointer text-lg font-semibold text-white'
          }
        >
          Product
        </p>

        <p
          onClick={() => navigate('/product/edit')}
          className={
            window.location?.pathname === '/product/edit'
              ? 'cursor-pointer text-lg font-semibold text-[#e4b302]'
              : 'cursor-pointer text-lg font-semibold text-white'
          }
        >
          Edit Product
        </p>
      </div>
      <div className="flex items-center gap-3">
        <MessageIcon />
        <NotificationIcon />
      </div>
    </div>
  );
};

export default Header;
