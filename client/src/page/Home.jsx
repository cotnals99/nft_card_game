import React, { useState } from 'react';

import { CustomInput, PageHOC, CustomButton } from '../components';
import { useGlobalContext } from '../context';

const Home = () => {
  // const {demo} = useGlobalContext()

  const { contract, walletAddress } = useGlobalContext()
  const [playerName, setPlayerName] = useState('')

  return (
    <div className='flex flex-col'>
      <CustomInput
        label='name'
        placeholder="Enter your player name"
        value={playerName}
        handleValueChange={setPlayerName}
      />
      <CustomButton
        title="Register"
        handleClick={() => { }}
        restStyles='mt-6'
      />
    </div>
  )
};


//Higher Order Component
export default PageHOC(
  Home,
  <>Welcome to Avax Gods <br /> a Web3 NFT Card Game</>,
  <>Connect your wallet to start playing <br /> the ultimate Web3 Battle Card Game</>
);