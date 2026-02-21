import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/login");
        }
    }, []);

    const tabs = ["Your Listed Properties", "Add Property"];
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    return (
        <div className='page'>
            <h1>Dashboard</h1>
            <div>
                <ul className='dash-tabs'>
                    {tabs.map((tab, i) => {
                        return (
                            <li 
                                key={i}
                                className={tab === selectedTab ? "active-dash-tab" : ""}
                                onClick={() => setSelectedTab(tab)}
                            >
                                <h3>{tab}</h3>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}
