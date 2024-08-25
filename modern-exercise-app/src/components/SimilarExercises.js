import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader'
import HorizontalScrollbar from './HorizontalScrollBar'

function SimilarExercises({ equipmentMuscleExercises, targetMuscleExercises }) {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>

        {targetMuscleExercises.length !== 0 ?
          <HorizontalScrollbar data={targetMuscleExercises} />
          : <Loader />
        }

      </Stack>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>equipment</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative' }}>

        {equipmentMuscleExercises.length !== 0 ?
          <HorizontalScrollbar data={equipmentMuscleExercises} />
          : <Loader />
        }

      </Stack>
    </Box>

  )
}

export default SimilarExercises
