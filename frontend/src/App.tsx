import {useEffect, useState} from "react";

interface ApiResponse {
    status: string;
    data: string;
}

function App() {
    const [message, setMessage] = useState<string>("Loading...");

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const response = await fetch(
                    "http://localhost:9005/pagevise/get-status"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch status");
                }

                const res: ApiResponse = await response.json();
                setMessage(res.data);
            } catch (error) {
                console.error(error);
                setMessage("Backend is not available");
            }
        };

        fetchStatus();
    }, []);

    return (
        <main>
            <h1>PageVise</h1>
            <p>{message}</p>
        </main>
    );
}

export default App;