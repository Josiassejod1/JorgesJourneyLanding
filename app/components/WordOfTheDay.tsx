'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volume2, BookOpen, Calendar } from 'lucide-react';
import { getWordOfTheDay, HaitianWord } from '@/lib/wordOfTheDay';

export function WordOfTheDay() {
  const [word, setWord] = useState<HaitianWord | null>(null);
  const [loading, setLoading] = useState(true);
  const [showEnglish, setShowEnglish] = useState(false);

  const fetchWord = async () => {
    setLoading(true);
    try {
      const dailyWord = await getWordOfTheDay();
      setWord(dailyWord);
    } catch (error) {
      console.error('Error fetching word:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWord();
  }, []);

  const handlePlayAudio = () => {
    if (word?.pronunciation) {
      const utterance = new SpeechSynthesisUtterance(word.creole);
      utterance.lang = 'ht-HT'; // Haitian Creole language code
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const getTodayFormatted = () => {
    const today = new Date();
    return today.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  if (loading) {
    return (
      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-purple-500 to-pink-500 text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Word of the Day</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto"></div>
          <p className="mt-4">Loading today's word...</p>
        </CardContent>
      </Card>
    );
  }

  if (!word) {
    return (
      <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-red-500 to-pink-500 text-white">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Word of the Day</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p>No words available</p>
          <p className="text-sm mt-2">Check back tomorrow for a new word!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-xl flex items-center justify-center">
          <BookOpen className="mr-2 h-5 w-5" />
          Word of the Day
        </CardTitle>
        <div className="flex items-center justify-center text-sm text-purple-200">
          <Calendar className="mr-1 h-4 w-4" />
          {getTodayFormatted()}
        </div>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <div className="space-y-2">
          <h3 className="text-3xl font-bold">{word.creole}</h3>
          {word.pronunciation && (
            <p className="text-lg text-purple-200 italic">[{word.pronunciation}]</p>
          )}
          {word.category && (
            <span className="inline-block bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
              {word.category}
            </span>
          )}
        </div>

        <div className="space-y-3">
          <Button
            onClick={() => setShowEnglish(!showEnglish)}
            className="bg-white text-purple-600 hover:bg-gray-100 w-full"
          >
            {showEnglish ? 'Hide' : 'Show'} English Translation
          </Button>

          {showEnglish && (
            <div className="bg-white bg-opacity-20 rounded-lg p-4">
              <p className="text-lg font-semibold">{word.english}</p>
            </div>
          )}

          {word.pronunciation && (
            <Button
              onClick={handlePlayAudio}
              variant="outline"
              className="border-white text-purple-600 hover:bg-white w-full"
            >
              <Volume2 className="mr-2 h-4 w-4" />
              Listen
            </Button>
          )}
        </div>

        <div className="text-xs text-purple-200">
          <p>Come back tomorrow for a new word!</p>
        </div>
      </CardContent>
    </Card>
  );
} 