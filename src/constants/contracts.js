import { ethers } from "ethers";
import chatABI from "./Abi/chatABI.json";
import nameServiceABI from "./Abi/nameServiceABI.json";

export const getChatContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_ballot_contract_address,
    chatABI,
    providerOrSigner
  );

export const getNameServiceContract = (providerOrSigner) =>
  new ethers.Contract(
    import.meta.env.VITE_ballot_contract_address,
    nameServiceABI,
    providerOrSigner
  );
