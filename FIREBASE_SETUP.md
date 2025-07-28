# Firebase Setup for Word of the Day Feature

## 1. Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable Firestore Database in your project

## 2. Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

To get these values:
1. Go to your Firebase project settings
2. Scroll down to "Your apps" section
3. Click on the web app (or create one if you don't have one)
4. Copy the config values

## 3. Firestore Database Structure

Create a collection called `haitian-words` in your Firestore database with documents containing:

```json
{
  "creole": "Bonjou",
  "english": "Hello",
  "pronunciation": "bon-zhoo",
  "category": "Greetings",
  "difficulty": "beginner"
}
```

## 4. Sample Words to Add

Here are some sample Haitian Creole words you can add to your database:

```json
{
  "creole": "Bonjou",
  "english": "Hello",
  "pronunciation": "bon-zhoo",
  "category": "Greetings",
  "difficulty": "beginner"
}
```

```json
{
  "creole": "Mèsi",
  "english": "Thank you",
  "pronunciation": "meh-see",
  "category": "Greetings",
  "difficulty": "beginner"
}
```

```json
{
  "creole": "Kijan ou ye?",
  "english": "How are you?",
  "pronunciation": "kee-zhan oo yeh",
  "category": "Questions",
  "difficulty": "beginner"
}
```

```json
{
  "creole": "Mwen byen",
  "english": "I am fine",
  "pronunciation": "mwen bee-en",
  "category": "Responses",
  "difficulty": "beginner"
}
```

```json
{
  "creole": "Wi",
  "english": "Yes",
  "pronunciation": "wee",
  "category": "Basic Words",
  "difficulty": "beginner"
}
```

## 5. Features

The Word of the Day component includes:

- **Random word selection** from your Firebase database
- **Beautiful UI** with gradient design matching your app theme
- **Audio pronunciation** using browser's speech synthesis
- **Show/hide English translation**
- **Refresh button** to get a new random word
- **Loading states** and error handling
- **Category tags** and difficulty levels

## 6. Testing

1. Add the environment variables to your `.env.local` file
2. Add some sample words to your Firestore database
3. Run `npm run dev` to test the feature
4. The Word of the Day component will appear in the hero section of your landing page

## 7. Customization

You can customize the component by:
- Modifying the styling in `app/components/WordOfTheDay.tsx`
- Adding more fields to the word documents (e.g., example sentences, audio URLs)
- Implementing a daily rotation system instead of random selection
- Adding more interactive features like pronunciation practice 