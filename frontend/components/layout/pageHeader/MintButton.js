import config from "@/lib/config";
import { setLoading } from "@/redux/slice/modalSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { useAccount } from "wagmi";

export default function MintButton() {
  const dispatch = useDispatch();
  const { address, chainId } = useAccount();
  const mintTokens = async () => {
    try {
      const currentChain = config.chains.find(
        (chain) => chain.chainId === chainId
      );

      if (!currentChain) {
        toast.error("Invalid chainId");
        return;
      }

      dispatch(setLoading(true));

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dao/mint`,
        {
          chainId: chainId,
          address: address,
        }
      );

      if (response.data.success) {
        toast.success("10 DAO tokens minted successfully");
      } else {
        toast.error("Error minting DAO tokens");
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <button
      style={{}}
      onClick={() => {
        mintTokens();
      }}
      className="border border-gray-700 rounded-full font-medium px-4 py-2"
    >
      Mint 10 DAO
    </button>
  );
}
