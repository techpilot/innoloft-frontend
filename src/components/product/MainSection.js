import { Avatar } from '@mui/material';
import Map from '../Map';
import MapIcon from '../utils/icons/Mapcon';

const MainSection = ({ product }) => {
  function removeUnwantedStr(str) {
    let description = str?.replace(/<[^>]*>/g, '');
    return description?.replace(/console\.log\([^)]*\);?/g, '');
  }

  return (
    <div className="flex flex-col w-full">
      <div className="bg-white flex gap-3 rounded-lg border">
        <div className="xl:max-w-[70%] xl:border-r">
          <div className="relative overflow-hidden max-h-[100%] rounded-tl-lg">
            <div className="max-h-[18rem]">
              <img
                src={product?.picture}
                alt="Innoloft"
                className="object-cover"
              />
            </div>
            <p className="text-[#374151] font-bold text-lg absolute right-0 bottom-0 bg-[#0000001a] px-2 py-1">
              {product?.type?.name}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between pt-3 px-5">
            <p className="text-lg text-[#374151] font-semibold">
              {product?.name}
            </p>
          </div>
          <p className="text-[#6b7280] py-3 px-5">
            {removeUnwantedStr(product?.description)}
          </p>
        </div>
        <div className="hidden xl:flex flex-col py-7">
          <div className="flex flex-col">
            <p className="mb-5 mt-2 text-[#374151] text-lg">Offered by</p>

            <img src={product?.company?.logo} alt="" className="w-[60%]" />

            <div className="flex items-center gap-2 mb-5 mt-5">
              <Avatar
                src={`${product?.user?.profilePicture}` || ''}
                alt=""
                sx={{ width: 60, height: 60 }}
              />
              <div>
                <p className="text-lg text-[#6B7280] font-semibold">
                  {`${product?.user?.firstName} ${product?.user?.lastName}`}
                </p>
                <p className="text-[#6B7280] text-lg">
                  {product?.company?.name}
                </p>
              </div>
            </div>
          </div>
          <div className="h-56 mt-12 mr-3">
            <div className="flex gap-2 mr-1">
              <div className="mt-2">
                <MapIcon />
              </div>
              <p className="text-lg text-[#6B7280]">
                {`${product?.company?.address?.street} ${product?.company?.address?.house}, ${product?.company?.address?.zipCode}, ${product?.company?.address?.city?.name}, ${product?.company?.address?.country?.name}`}
              </p>
            </div>
            <Map company={product?.company} />
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:hidden bg-white rounded-lg border my-3 p-3">
        <div className="flex flex-col">
          {/* <p className="mb-5 mt-2 text-[#374151] text-lg">Offered by</p> */}

          <div className="flex items-center gap-2 mb-5 mt-5">
            <Avatar
              src={`${product?.user?.profilePicture}` || ''}
              alt=""
              sx={{ width: 60, height: 60 }}
            />
            <div>
              <p className="text-lg text-[#6B7280] font-semibold">
                {`${product?.user?.firstName} ${product?.user?.lastName}`}
              </p>
              <p className="text-[#6B7280] text-lg">{product?.company?.name}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 mb-1">
          <div className="mt-2">
            <MapIcon />
          </div>
          <p className="text-lg text-[#6B7280]">
            {`${product?.company?.address?.street} ${product?.company?.address?.house}, ${product?.company?.address?.zipCode}, ${product?.company?.address?.city?.name}, ${product?.company?.address?.country?.name}`}
          </p>
        </div>
        <div className="h-60">
          <Map company={product?.company} />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
