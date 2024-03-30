import { Flex } from "@radix-ui/themes";
// import GiveWriteToVoteComponent from "./GiveWriteToVoteComponent";
// import useIsChairPerson from "../hooks/useIsChairPerson";

export default function Header() {
  // const isChairPerson = useIsChairPerson();
  return (
    <div className="flex justify-between item-center">
      <div>Chat App</div>
      <Flex gap={"4"} align={"center"}>
        {/* {isChairPerson && <GiveWriteToVoteComponent />} */}
        <w3m-button />
      </Flex>
    </div>
  );
}
