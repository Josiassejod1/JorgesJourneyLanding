'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Volume2, BookOpen, Calendar } from 'lucide-react';
import { getWordOfTheDay, HaitianWord } from '@/lib/wordOfTheDay';
// import { speakHaitianCreole, testVoiceQuality } from '@/lib/pronunciation';

export function WordOfTheDay() {
  const [word, setWord] = useState<HaitianWord | null>(null);
  const [loading, setLoading] = useState(true);
  const [showEnglish, setShowEnglish] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [currentVoice, setCurrentVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);

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

  // Load voices when component mounts
//   useEffect(() => {
//     const loadVoices = () => {
//       const availableVoices = speechSynthesis.getVoices();
//       setVoices(availableVoices);
      
//       // Test voice quality and log results
//       if (availableVoices.length > 0) {
//         testVoiceQuality(availableVoices);
//       }
      
//       // If voices aren't loaded yet, wait and try again
//       if (availableVoices.length === 0) {
//         setTimeout(loadVoices, 100);
//       }
//     };

//     loadVoices();
//   }, []);

//   const handlePlayAudio = () => {
//     if (word?.creole && voices.length > 0) {
//       setIsSpeaking(true);
//       // Use enhanced speech synthesis
//       speakHaitianCreole(word.creole, voices);
      
//       // Update current voice for display
//       const bestVoice = voices.find(v => v.lang.startsWith('fr')) || voices[0];
//       setCurrentVoice(bestVoice);
      
//       // Reset speaking state after a delay
//       setTimeout(() => setIsSpeaking(false), 3000);
//     } else if (word?.creole) {
//       // Fallback if voices aren't loaded yet
//       console.log('Voices not loaded yet, trying again...');
//       setTimeout(() => {
//         const availableVoices = speechSynthesis.getVoices();
//         if (availableVoices.length > 0) {
//           setIsSpeaking(true);
//           speakHaitianCreole(word.creole, availableVoices);
//           const bestVoice = availableVoices.find(v => v.lang.startsWith('fr')) || availableVoices[0];
//           setCurrentVoice(bestVoice);
//           setTimeout(() => setIsSpeaking(false), 3000);
//         }
//       }, 200);
//     }
//   };

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
      <Card className="w-full max-w-md mx-auto bg-red-600 text-white">
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
      <Card className="w-full max-w-md mx-auto bg-red-600 text-white">
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
    <Card className="w-full max-w-2xl mx-auto bg-red-600 text-white shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-xl flex items-center justify-center">
          <BookOpen className="mr-2 h-5 w-5" />
          Word of the Day
        </CardTitle>
        <div className="flex items-center justify-center text-sm text-red-100">
          <Calendar className="mr-1 h-4 w-4" />
          {getTodayFormatted()}
        </div>
      </CardHeader>
      <CardContent className="text-center space-y-6 p-8">
        <div className="space-y-3">
          <h3 className="text-5xl md:text-6xl font-bold">{word.creole}</h3>
          {word.pronunciation && (
            <p className="text-2xl md:text-3xl text-red-100 italic">[{word.pronunciation}]</p>
          )}
          {word.category && (
            <span className="inline-block bg-white bg-opacity-20 px-4 py-2 rounded-full text-base md:text-lg">
              {word.category}
            </span>
          )}
        </div>

        <div className="space-y-4">
          <Button
            onClick={() => setShowEnglish(!showEnglish)}
            className="bg-white text-red-600 hover:bg-gray-100 w-full text-lg py-6"
          >
            {showEnglish ? 'Hide' : 'Show'} English Translation
          </Button>

          {showEnglish && (
            <div className="bg-white bg-opacity-20 rounded-lg p-6">
              <p className="text-2xl md:text-3xl font-semibold">{word.english}</p>
            </div>
          )}

          {/* {word.pronunciation && (
            <Button
              onClick={handlePlayAudio}
              variant="outline"
              className="border-white text-purple-600 hover:bg-white w-full"
              disabled={isSpeaking}
            >
              <Volume2 className="mr-2 h-4 w-4" />
              {isSpeaking ? 'Speaking...' : 'Listen'}
              {currentVoice && (
                <span className="text-xs ml-2">
                  ({currentVoice.lang.startsWith('fr') ? 'French' : 'English'} voice)
                </span>
              )}
            </Button>
          )} */}
        </div>

        <div className="text-xs text-red-100">
          <p>Come back tomorrow for a new word!</p>
          {voices.length > 0 && !voices.find(v => v.lang.startsWith('fr')) && (
            <p className="mt-2 text-yellow-200">
              💡 Tip: Install French language pack for better pronunciation
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
} 