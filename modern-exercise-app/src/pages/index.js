import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import { useState } from 'react'
import SearchExercises from '@/components/SearchExercises'
import { Box } from '@mui/material'
import Navbar from '@/components/Navbar'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [bodyPart, setBodyPart] = useState('All')
  const [exercises, setExercises] = useState([]);

  return (
    <>
    <Navbar/>
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
    </>
  )
}
