import { Box, Container, Flex, Text } from "@radix-ui/themes";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import Header from "./component/Header";
import ChatBox from "./component/Message";
// import Proposal from "./component/Proposal";
// import DelegateVote from "./component/DelegateVote";
// import useProposals from "./hooks/useProposals";
// import { useState } from "react";

configureWeb3Modal();

function App() {
  // const { loading, data: proposals } = useProposals();
  // console.log("inside app.jsx", proposals);
  return (
    <Container>
      <Header />
      <ChatBox />
      {/* <main className="mt-6">
        <Box mb={"6"}>
          <DelegateVote />
        </Box>
        <Flex wrap={"wrap"} gap={"6"}>
          {loading ? (
            <Text>Loading...</Text>
          ) : proposals.length !== 0 ? (
            proposals.map((item, index) => (
              <Proposal
                key={index}
                name={item.name}
                //handleVote={handleVote}
                id={index}
                voteCount={Number(item.voteCount)}
              />
            ))
          ) : (
            <Text>Could not get proposals!!</Text>
          )}
        </Flex>
      </main> */}
    </Container>
  );
}

export default App;
