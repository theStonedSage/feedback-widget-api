import admin from 'firebase-admin';
// var serviceAccount = require("../feedback-widget-ed1c0-firebase-adminsdk-fbsvc-a5dca2f73b.json");

import fs from 'fs';

// Load Firebase service account credentials
const serviceAccount = JSON.parse(
  fs.readFileSync('feedback-widget-ed1c0-firebase-adminsdk-fbsvc-a5dca2f73b.json', 'utf-8')
);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;