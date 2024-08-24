import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import '../Pages/Homepage.css'; 
import axios from 'axios';

const TestAPI = () => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://xzljk6vns9.execute-api.ap-southeast-2.amazonaws.com/default/test-method')
            .then(response => {
                const parsedData = JSON.parse(response.data.body);
                setData(parsedData);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="min-h-screen flex flex-col bg-gray-800 text-white">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 mt-16">
                <section className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">TestAPI</h1>
                    <div className="flex flex-col md:flex-row items-center">
                        <p className="md:w-2/3 mb-4 md:mb-0 md:mr-4">
                            {data}
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default TestAPI;
