
// Import the necessary modules from the Firebase Admin SDK
import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';


// var serviceAccount = require("path/to/serviceAccountKey.json");

// Parse the service account key JSON from the environment variable FIREBASE_SERVICE_ACCOUNT_KEY
const serviceAccount = JSON.parse(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
)

// Check if any Firebase apps have been initialized yet
if (!getApps().length) {
    // If not, initialize the SDK with the service account key
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
}

// Create an instance of the Firestore database
const adminDb = admin.firestore()

// Export the Firestore database instance
export { adminDb }
