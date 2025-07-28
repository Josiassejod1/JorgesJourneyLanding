import { collection, getDocs, query, limit, orderBy } from 'firebase/firestore';
import { db } from './firebase';

export interface HaitianWord {
  id: string;
  creole: string;
  english: string;
  pronunciation?: string;
  category?: string;
  difficulty?: 'beginner' | 'intermediate' | 'advanced';
}

export async function getRandomWord(): Promise<HaitianWord | null> {
  try {
    const wordsRef = collection(db, 'vocabulary');
    const q = query(wordsRef, orderBy('__name__'), limit(1000)); // Get all words
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log('No words found in database');
      return null;
    }

    const words: HaitianWord[] = [];
    querySnapshot.forEach((doc) => {
      words.push({
        id: doc.id,
        ...doc.data()
      } as HaitianWord);
    });

    // Select a random word
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  } catch (error) {
    console.error('Error fetching random word:', error);
    return null;
  }
}

export async function getWordOfTheDay(): Promise<HaitianWord | null> {
  try {
    const wordsRef = collection(db, 'vocabulary');
    const q = query(wordsRef, orderBy('__name__'), limit(1000));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      console.log('No words found in database');
      return null;
    }

    const words: HaitianWord[] = [];
    querySnapshot.forEach((doc) => {
      words.push({
        id: doc.id,
        ...doc.data()
      } as HaitianWord);
    });

    // Calculate day of year (1-366)
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((today.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24));
    
    // Use day of year to select consistent word for the day
    const wordIndex = dayOfYear % words.length;
    return words[wordIndex];
  } catch (error) {
    console.error('Error fetching word of the day:', error);
    return null;
  }
} 