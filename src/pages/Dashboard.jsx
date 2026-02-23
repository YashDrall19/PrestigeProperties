import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { db, storage } from '../../firebase';
import { addDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

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

            <div>
                {selectedTab === tabs[0] && <Listed />}
                {selectedTab === tabs[1] && <AddProperty />}
            </div>
        </div>
    )
}

function Listed() {
    const [properties, setProperties] = useState([]);
    console.log(properties)
    useEffect(() => {
        const fetchProps = async() => {
            try {
                const res = await getDocs(collection(db, "properties"));
                const p = res?.docs?.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProperties(p);
            } catch (error) {
                alert("Error fetching properties!");
                console.log("Error fetching properties", error);
            }
        };
        fetchProps();
    }, []);
    return (
        <div>
            <h1>Listed Property</h1>
            <div style={{display: "flex", flexDirection: "column", gap: "20px", cursor: "pointer"}}>
                {properties?.map((prop) => {
                    return (
                        <div className="feature-item" key={prop.id}>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}





function AddProperty() {
    const [fields, setFields] = useState({
        property_name: "",
        type: "Residential",
        location: ""
    });
    const [image, setImage] = useState(null);
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFields(prev => ({...prev, [name]: value}));
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!image) {
            alert("Please select an image!");
            return;
        }
        console.log({...fields, created_at: new Date()})
        try {
            // Create form data to send image to backend
            const formData = new FormData();
            formData.append('file', image);
            formData.append('property_name', fields?.property_name);
            
            // Upload image to assets folder via backend
            const response = await fetch('http://localhost:3001/api/upload', {
                method: 'POST',
                body: formData
            });
            
            if (!response.ok) {
                throw new Error('Failed to upload image');
            }
            
            const { imageURL } = await response.json();
            
            // Save property details to Firebase with assets URL
            await addDoc(collection(db, "properties"), {
                ...fields,
                imageURL,
                created_at: serverTimestamp()
            });
            alert("Data saved successfully!");
            setFields({
                property_name: "",
                type: "Residential",
                location: ""
            });
            setImage(null);
            
        } catch (error) {
            alert("Error adding property!");
            console.log("Error adding property", error);
        }
    };
    return (
        <div className='login'>
            <div className="login-form-card">
                <h2>Add Property Details</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Property Name <span className="required-text">*</span></label>
                        <input 
                            type="text" 
                            className='form-input' 
                            onChange={handleChange}
                            name='property_name'
                            value={fields?.property_name}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Type <span className="required-text">*</span></label>
                        <select
                            className='form-select'
                            onChange={handleChange}
                            name='type'
                            value={fields?.type}
                            required
                        >
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Location <span className="required-text">*</span></label>
                        <input 
                            type="text" 
                            className='form-input' 
                            onChange={handleChange}
                            name='location'
                            value={fields?.location}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <label>Image <span className="required-text">*</span></label>
                        <input 
                            type="file"
                            accept='image/*' 
                            className='form-input' 
                            onChange={(e) => setImage(e.target.files[0])}
                            name='image'
                            required
                        />
                    </div>
                    <div>
                        <button className='btn primary form-submit'>Add Property</button>
                    </div>
                </form>
            </div>
        </div>
    )
}