// import { useEffect, useState } from "react";
// import { getProposalContract } from "../constants/contracts";
// import { readOnlyProvider } from "../constants/providers";
// import { decodeBytes32String } from "ethers";

// const useProposals = () => {
//   const [proposals, setProposal] = useState({
//     loading: true,
//     data: [],
//   });

//   useEffect(() => {
//     const contract = getProposalContract(readOnlyProvider);
//     contract
//       .getAllProposals()
//       .then((res) => {
//         const converted = res.map((item) => ({
//           name: decodeBytes32String(item.name),
//           voteCount: item.voteCount,
//         }));
//         //console.log("x", converted);
//         setProposal({
//           loading: false,
//           data: converted,
//         });
//       })
//       .catch((err) => {
//         console.error("Error Fetching Proposals", err);
//         setProposal((prev) => ({ ...prev, loading: false }));
//       });
//   }, []);

//   return proposals;
// };

// export default useProposals;
