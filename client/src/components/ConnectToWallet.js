
const ConnectToWallet = ({ setAccount, account, toggleConnecting, isConnected }) => {

    const connectWallet = async () => {
        if(isConnected===false){
            toggleConnecting();
        }
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        setAccount(accounts[0]);
    }

    return (
        <div>
            <button className="metaConnect" onClick={() => { connectWallet() }}>connect to MetaMask</button>
            <div className="userInfo">주소: {account}</div>
        </div>
    );
};

export default ConnectToWallet;