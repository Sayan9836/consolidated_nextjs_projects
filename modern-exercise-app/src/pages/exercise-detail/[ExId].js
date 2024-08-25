import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import Detail from '../../components/Detail'
import ExerciseVideos from '../../components/ExerciseVideos'
import SimilarExercises from '../../components/SimilarExercises'
import { useState } from 'react'
import { exerciseOptions, fetchData, youtubeOptions } from '../../utils/fetchData'
import Footer from '../../components/Footer'
import { useRouter } from 'next/router'


// export const getStaticPaths=async()=>{
//   const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
//   // console.log(exercisesData);

//   const paths= exercisesData?.slice(0,20)?.map((exercise)=>({
//     params:{
//       ExId:exercise.id.toString()
//     }
//   }))

//   return {
//     paths,
//     fallback:true
//   }
// }
// export const getStaticProps=async({params})=>{

//   const id=params.ExId;

//   const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
//   const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

//   const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);

//   const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
//   console.log(exerciseVideosData);
//   // setExerciseVideos(exerciseVideosData.contents);

//   const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
//   // setTargetMuscleExercises(targetMuscleExerciseData);

//   const equipmentMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
//   // setEquipmentMuscleExercises(equipmentMuscleExerciseData);
       
//   const data={exerciseDetailData,exerciseVideosData,targetMuscleExerciseData,equipmentMuscleExerciseData}
//   return {
//     props:{
//       data
//     }
//   }
// }

export async function getServerSideProps(context){

   const {ExId}=context.query;
   const id=ExId;

   const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
   const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
 
   const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
 
   const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
   console.log(exerciseVideosData);
   // setExerciseVideos(exerciseVideosData.contents);
 
   const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
   // setTargetMuscleExercises(targetMuscleExerciseData);
 
   const equipmentMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
   // setEquipmentMuscleExercises(equipmentMuscleExerciseData);
        
   const data={exerciseDetailData,exerciseVideosData,targetMuscleExerciseData,equipmentMuscleExerciseData}

   return {
    props:{
      data
    }
  }
}

function ExerciseDetail({data}) {
  const {exerciseDetailData,exerciseVideosData,targetMuscleExerciseData,equipmentMuscleExerciseData}=data
  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetailData} />
      {/* <ExerciseVideos exerciseVideos={exerciseVideosData} name={exerciseVideosData.name} /> */}
      <SimilarExercises targetMuscleExercises={targetMuscleExerciseData} equipmentMuscleExercises={equipmentMuscleExerciseData} />
      <Footer />
    </Box>
  )
}

export default ExerciseDetail
