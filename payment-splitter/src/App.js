import { useState, useEffect } from "react";
import { HashConnect } from "hashconnect";

function App() {
    const [hashconnect, setHashconnect] = useState(null);
    const [accountId, setAccountId] = useState("");

    useEffect(() => {
        const initHashconnect = async () => {
            try {
                const hashconnectInstance = new HashConnect(true); // Enable debug logs

                // Metadata for the app
                const appMetadata = {
                    name: "Payment Splitter App",
                    description: "A Hedera-based payment splitter",
                    icon: "https://example.com/icon.png",
                };

                // Initialize HashConnect (No 'url' in response anymore)
                await hashconnectInstance.init(appMetadata);
                console.log("✅ HashConnect Initialized");

                // Set up event listener for wallet pairing
                hashconnectInstance.pairingEvent.once((pairingData) => {
                    console.log("🔗 Pairing Data:", pairingData);
                    if (pairingData.accountIds.length > 0) {
                        setAccountId(pairingData.accountIds[0]); // Set the first paired account
                    }
                });

                // Store HashConnect instance
                setHashconnect(hashconnectInstance);
            } catch (error) {
                console.error("❌ Error initializing HashConnect:", error);
            }
        };

        initHashconnect();
    }, []);

    // Function to connect the wallet
    const connectWallet = async () => {
        if (!hashconnect) {
            console.error("⚠️ HashConnect is not initialized yet.");
            return;
        }

        try {
            await hashconnect.connectToLocalWallet();
            console.log("✅ Wallet Connection Requested");
        } catch (error) {
            console.error("❌ Wallet Connection Failed:", error);
        }
    };

    return (
        <div>
            <h1>Hedera Payment Splitter</h1>
            <p>Connected Account: {accountId || "Not Connected"}</p>
            <button onClick={connectWallet} disabled={!hashconnect}>
                Connect Wallet
            </button>
        </div>
    );
}

export default App;
