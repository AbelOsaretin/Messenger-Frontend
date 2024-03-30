// import { Flex, Button, Dialog, Text, TextField } from "@radix-ui/themes";
// import {
//   useWeb3ModalAccount,
//   useWeb3ModalProvider,
// } from "@web3modal/ethers/react";
// import { isSupportedChian } from "../utils";
// import { getProvider } from "../constants/providers";
// import { getProposalContract } from "../constants/contracts";
// import { useState } from "react";
// import { isAddress } from "ethers";

// const GiveWriteToVoteComponent = () => {
//   const { chainId } = useWeb3ModalAccount();
//   const { walletProvider } = useWeb3ModalProvider();
//   const [address, setAddress] = useState("");

//   const handleGiveWriteToVote = async () => {
//     if (!isSupportedChian(chainId)) return console.error("Wrong Network.");
//     if (!isAddress(address)) return console.error("Invalid Address");
//     const readWriteProvider = getProvider(walletProvider);
//     const signer = await readWriteProvider.getSigner();

//     const contract = getProposalContract(signer);

//     try {
//       const transaction = await contract.giveRightToVote(address);
//       const receipt = await transaction.wait();

//       console.log("Transaction", transaction);
//       console.log("Receipt", receipt);
//     } catch (error) {
//       console.log("Error: ", error);
//     }
//   };
//   return (
//     <Dialog.Root>
//       <Dialog.Trigger>
//         <Button className="bg-blue-600">Add Voter</Button>
//       </Dialog.Trigger>

//       <Dialog.Content style={{ maxWidth: 450 }}>
//         <Dialog.Title>Edit profile</Dialog.Title>
//         <Dialog.Description size="2" mb="4">
//           Give Right To Vote
//         </Dialog.Description>

//         <Flex direction="column" gap="3">
//           <label>
//             <Text as="div" size="2" mb="1" weight="bold">
//               Voter Address
//             </Text>
//             <TextField.Input
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               placeholder="Enter the address"
//             />
//           </label>
//         </Flex>

//         <Flex gap="3" mt="4" justify="end">
//           <Dialog.Close>
//             <Button variant="soft" color="gray">
//               Cancel
//             </Button>
//           </Dialog.Close>

//           <Button className="bg-blue-600" onClick={handleGiveWriteToVote}>
//             Add Voter
//           </Button>
//         </Flex>
//       </Dialog.Content>
//     </Dialog.Root>
//   );
// };

// export default GiveWriteToVoteComponent;
