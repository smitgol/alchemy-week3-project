import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import { settings } from '../settings';
import TransactionBlock from "../Components/TransactionBlock";

const alchemy = new Alchemy(settings);

const CurrentBlock = () => {
    const [CurrentBlockInfo, setCurrentBlockInfo] = useState('');

    useEffect(() => {
        async function getBlockInfo() {
            setCurrentBlockInfo(await alchemy.core.getBlockWithTransactions());
            console.log(CurrentBlockInfo)

        }
        getBlockInfo();
    }, []);
    return (
        <div style={{ marginTop: '15px'}}>
           <h2 style={{ textAlign: 'center'}}>
            <b>
                <u>
                    Current Block information
                </u>
            </b>
            </h2>
            <div style={{ display: 'flex',flexDirection:'column', gap: '16px', justifyContent:'center', alignItems:'left'}}>
             <div style={{ marginTop: '4px', display: 'flex',flexDirection:'row'}}><p>Block Number :-</p> <p>{CurrentBlockInfo.number}</p></div>
             <div style={{ display: 'flex',flexDirection:'row'}}><p>Hash :- </p><p>{CurrentBlockInfo.hash}</p></div>
             <div style={{ display: 'flex',flexDirection:'row'}}><p>Miner :- </p><p>{CurrentBlockInfo.miner}</p></div>
             <div style={{ display: 'flex',flexDirection:'row'}}><p>Nonce :- </p><p>{CurrentBlockInfo.nonce}</p></div>
             <div style={{ display: 'flex',flexDirection:'row'}}><p>Parent Hash :- </p><p>{CurrentBlockInfo.parentHash}</p></div>
             <p>Transactions:-</p>
             <div className='transactionList'>
                {CurrentBlockInfo.transactions != null ? CurrentBlockInfo.transactions.map((currentTransaction) => {
                    return <TransactionBlock transactionInfo={currentTransaction} />
                }) : ""} 
            </div>
            </div>
        </div>
    )
}

export default CurrentBlock;