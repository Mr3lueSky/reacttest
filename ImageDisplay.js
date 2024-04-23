import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'; // Import Firebase Storage

// (Optional) Replace with your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8_ga2RZk3iyHqd8Ji68VHRdCC_DpGxhc",
    authDomain: "esp32demo-83882.firebaseapp.com",
    projectId: "esp32demo-83882",
    storageBucket: "esp32demo-83882.appspot.com",
    messagingSenderId: "312809863553",
    appId: "1:312809863553:web:dfcb3eabe26ea7175f1080"
};

// Initialize Firebase app only once (outside the component)
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service
const storage = firebase.storage();

function ImageDisplay({ imagePath }) { // Receive image path as a prop
    const [imageUrl, setImageUrl] = useState(null);
    const [error, setError] = useState(null); // Track potential errors

    useEffect(() => {
        const getImage = async () => {
            try {
                const imageRef = storage.ref(imagePath); // Create reference based on path
                const url = await imageRef.getDownloadURL();
                setImageUrl(url);
            } catch (err) {
                setError(err); // Store error for handling
                console.error('Error fetching image:', err);
            }
        };

        getImage();
    }, [imagePath]); // Dependency on imagePath

    return (
        <div>
            {error ? (
                <p>Error: {error.message}</p>
            ) : imageUrl ? (
                <img src={imageUrl} alt="Image from Firebase Storage" />
            ) : (
                <p>Loading image...</p>
            )}
        </div>
    );
}

export default ImageDisplay;
