# User Information Management Guide

## Overview
This guide explains how to effectively use user information across different web pages and during CRUD operations in your application.

## Accessing User Information

### 1. Using the useAuth Hook
```jsx
import { useAuth } from '@/hooks/useAuth'

function YourComponent() {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>

  // Access user information
  const userId = user.uid
  const userEmail = user.email
  const displayName = user.displayName
  // ... other user properties
}
```

### 2. User Information Properties
Common user properties available:
- `uid`: Unique identifier
- `email`: User's email address
- `displayName`: User's display name
- `photoURL`: Profile picture URL
- `emailVerified`: Email verification status

## CRUD Operations with User Information

### 1. Create Operations
```jsx
// Example: Creating an NFT with user information
async function createNFT(nftData) {
  const { user } = useAuth()
  
  const nftObject = {
    ...nftData,
    creatorId: user.uid,
    creatorName: user.displayName || user.email,
    createdAt: new Date().toISOString(),
    createdBy: {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    }
  }

  // Add to database
  await addDoc(collection(db, 'nfts'), nftObject)
}
```

### 2. Read Operations
```jsx
// Example: Fetching user-specific NFTs
async function getUserNFTs() {
  const { user } = useAuth()
  
  const nftsRef = collection(db, 'nfts')
  const q = query(nftsRef, where('creatorId', '==', user.uid))
  
  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }))
}
```

### 3. Update Operations
```jsx
// Example: Updating user profile
async function updateUserProfile(profileData) {
  const { user } = useAuth()
  
  // Update Firebase Auth profile
  await updateProfile(user, {
    displayName: profileData.displayName,
    photoURL: profileData.photoURL
  })

  // Update user document in Firestore
  await updateDoc(doc(db, 'users', user.uid), {
    ...profileData,
    updatedAt: new Date().toISOString()
  })
}
```

### 4. Delete Operations
```jsx
// Example: Deleting user content
async function deleteUserContent(contentId) {
  const { user } = useAuth()
  
  // Verify ownership before deletion
  const contentRef = doc(db, 'content', contentId)
  const contentDoc = await getDoc(contentRef)
  
  if (contentDoc.data().creatorId === user.uid) {
    await deleteDoc(contentRef)
  } else {
    throw new Error('Unauthorized deletion attempt')
  }
}
```

## Best Practices

### 1. Security Rules
```javascript
// Example Firestore security rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /nfts/{nftId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth.uid == resource.data.creatorId;
    }
  }
}
```

### 2. Data Validation
```jsx
// Example: Validating user data before operations
function validateUserData(userData) {
  const errors = []
  
  if (!userData.displayName?.trim()) {
    errors.push('Display name is required')
  }
  
  if (userData.displayName?.length > 50) {
    errors.push('Display name must be less than 50 characters')
  }
  
  return errors
}
```

### 3. Error Handling
```jsx
// Example: Handling user-related errors
async function handleUserOperation(operation) {
  try {
    const { user } = useAuth()
    if (!user) throw new Error('User not authenticated')
    
    await operation()
  } catch (error) {
    if (error.code === 'permission-denied') {
      // Handle permission errors
    } else if (error.code === 'not-found') {
      // Handle not found errors
    } else {
      // Handle other errors
    }
  }
}
```

## Common Use Cases

### 1. User Profile Management
```jsx
// Example: Complete user profile management
function UserProfile() {
  const { user } = useAuth()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    if (user) {
      // Fetch user profile from Firestore
      const fetchProfile = async () => {
        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setProfile(docSnap.data())
        }
      }
      fetchProfile()
    }
  }, [user])

  // ... profile management UI
}
```

### 2. Content Ownership
```jsx
// Example: Checking content ownership
function ContentItem({ contentId }) {
  const { user } = useAuth()
  const [isOwner, setIsOwner] = useState(false)

  useEffect(() => {
    const checkOwnership = async () => {
      const docRef = doc(db, 'content', contentId)
      const docSnap = await getDoc(docRef)
      setIsOwner(docSnap.data()?.creatorId === user.uid)
    }
    checkOwnership()
  }, [contentId, user])

  return (
    <div>
      {isOwner && <OwnerControls />}
      <ContentDisplay />
    </div>
  )
}
```

## Additional Resources

1. [Firebase Authentication Documentation](https://firebase.google.com/docs/auth)
2. [Firestore Security Rules](https://firebase.google.com/docs/rules)
3. [Firebase User Management](https://firebase.google.com/docs/auth/web/manage-users)

## Implementation Notes

1. Always verify user authentication before performing operations
2. Implement proper error handling and loading states
3. Use security rules to protect user data
4. Keep user information up to date across the application
5. Implement proper data validation before any CRUD operation
