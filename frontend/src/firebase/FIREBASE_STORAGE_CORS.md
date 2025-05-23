# Firebase Storage CORS Configuration Guide

## Overview

Cross-Origin Resource Sharing (CORS) is a security feature implemented by browsers that restricts web applications from making requests to a domain different from the one that served the web page. When uploading files to Firebase Storage from a web application, you may encounter CORS errors if the appropriate configuration is not set.

This guide explains how to set up CORS for Firebase Storage to enable file uploads from your web application.

## Common CORS Errors

You might see errors like these in your browser console:

```
Access to XMLHttpRequest at 'https://firebasestorage.googleapis.com/v0/b/YOUR-BUCKET-NAME.appspot.com/o?name=...' 
from origin 'http://localhost:3000' has been blocked by CORS policy: 
Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
```

or

```
POST https://firebasestorage.googleapis.com/v0/b/YOUR-BUCKET-NAME.appspot.com/o?name=... net::ERR_FAILED
```

## Setting Up CORS for Firebase Storage

### Step 1: Create a Firebase Storage Bucket

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. In the left sidebar, click on "Storage" (under "Build")
4. Click "Get started" if this is your first time using Firebase Storage
5. Choose your storage location and security rules
6. Complete the setup

### Step 2: Create a CORS Configuration File

Create a file named `cors.json` in your project with the following content:

```json
[
  {
    "origin": ["http://localhost:3000", "https://your-production-domain.com"],
    "method": ["GET", "POST", "PUT", "DELETE", "HEAD"],
    "maxAgeSeconds": 3600
  }
]
```

Customize this configuration:
- Add all domains that need to access your storage bucket to the `origin` array
- Include `http://localhost:3000` for local development
- Add your production domain for production use

### Step 3: Install and Set Up Google Cloud SDK

1. Download and install the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install)
2. Open a command prompt or terminal
3. Run `gcloud init` and follow the prompts to log in and select your project

### Step 4: Apply CORS Configuration

1. Navigate to the directory containing your `cors.json` file:
   ```
   cd path/to/your/project/src/firebase
   ```

2. Run the following command to set CORS rules:
   ```
   gsutil cors set cors.json gs://YOUR-BUCKET-NAME
   ```
   
   Replace `YOUR-BUCKET-NAME` with your actual Firebase Storage bucket name (found in the Firebase Console under Storage)

3. Verify your CORS settings:
   ```
   gsutil cors get gs://YOUR-BUCKET-NAME
   ```

### Troubleshooting

#### Permission Denied Errors

If you encounter permission errors, try:

1. Run Command Prompt or Terminal as Administrator
2. Make sure you're logged in with the correct Google account:
   ```
   gcloud auth login
   ```

#### Bucket Not Found

If you get a "bucket not found" error:

1. Check the exact bucket name in Firebase Console → Storage
2. List all available buckets:
   ```
   gsutil ls
   ```

#### Using Web Shell Alternative

If you continue having issues with the Google Cloud SDK:

1. Go to [Google Cloud Shell](https://ssh.cloud.google.com/cloudshell/editor)
2. Choose your project
3. Create the `cors.json` file with the content shown above
4. Run the gsutil command to set CORS

## Updating CORS Configuration

When you add new domains (e.g., when deploying to production):

1. Update the `cors.json` file with the new domains
2. Run the gsutil command again to update the CORS configuration:
   ```
   gsutil cors set cors.json gs://YOUR-BUCKET-NAME
   ```

## References

- [Firebase Storage Documentation](https://firebase.google.com/docs/storage)
- [Google Cloud Storage CORS Configuration](https://cloud.google.com/storage/docs/configuring-cors)
- [gsutil cors command documentation](https://cloud.google.com/storage/docs/gsutil/commands/cors) 