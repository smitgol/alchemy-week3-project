import { useEffect, useState } from 'react';


const TransactionBlock = ({transactionInfo}) => {

    return (<div className="transcationBlock" key={transactionInfo.blockHash}>
        <div className='transcationElement'>
           <div className='transcationEleInfo'>
                <p>Hash </p>:- <p>{transactionInfo.blockHash.slice(0, 100)}</p>
            </div> 
            <div className='transcationEleInfo'>
                <p>from </p>:- <p>{transactionInfo.from.slice(0, 100)}</p>
            </div>
            <div className='transcationEleInfo'>
                <p>to</p> :- <p>{transactionInfo.to}</p>
            </div>
            <div className='transcationEleInfo'>
                <p>data </p>:- <p>{transactionInfo.data.slice(0, 50)}</p>
            </div>
            <div className='transcationEleInfo'>
                <p>nonce </p>:- <p>{transactionInfo.nonce}</p>
            </div>
        </div>
    </div>)
}
export default TransactionBlock;