import { getNetworks } from "@/api/networks";
import { Slug } from "@/types/types";
import { TbCopy, TbExternalLink } from "react-icons/tb";

export const convertAddressToShortString = (address: string) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

export const convertBytesToShortString = (address: string) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

export const Address = (props: { address: string; chainId: number }) => {
  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  };

  const explorerLink =
    getNetworks()[props.chainId].explorer + "/address/" + props.address;

  return (
    <div className="flex items-center">
      <div className="ml-3 text-sm font-medium text-gray-900 font-mono">
        {convertAddressToShortString(props.address)}
      </div>
      <div
        onClick={() => copyAddress(props.address)}
        className="flex-shrink-0 h-5 w-5 mt-1.5 ml-1 cursor-pointer"
      >
        <TbCopy />
      </div>
      <div>
        <a
          // className="tooltip"
          // data-tip="view on explorer"
          target="_blank"
          href={explorerLink}
        >
          <TbExternalLink />
        </a>
      </div>
    </div>
  );
};

export const AddressFull = (props: { address: string; chainId: number }) => {
  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address);
  };

  const explorerLink =
    getNetworks()[props.chainId].explorer + "/address/" + props.address;

  return (
    <div className="flex items-center">
      <div className="ml-3 text-sm font-medium text-gray-900 font-mono">
        {props.address}
      </div>
      <div
        onClick={() => copyAddress(props.address)}
        className="flex-shrink-0 h-5 w-5 mt-1.5 ml-1 cursor-pointer"
      >
        <TbCopy />
      </div>
      <div>
        <a
          // className="tooltip"
          // data-tip="view on explorer"
          target="_blank"
          href={explorerLink}
        >
          <TbExternalLink />
        </a>
      </div>
    </div>
  );
};

export const AddressResponsive = (props: {
  address: string;
  chainId: number;
}) => {
  return (
    <div>
      <div className="hidden sm:block md:hidden"> {/* Show on sm screens, hide on md screens */}
        <Address address={props.address} chainId={props.chainId} />
      </div>
      <div className="sm:hidden md:block"> {/* Show on md screens, hide on sm screens */}
        <AddressFull address={props.address} chainId={props.chainId} />
      </div>
    </div>
  );
};
