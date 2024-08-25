import React from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import { useEffect } from 'react'
import HorizontalScrollbar from './HorizontalScrollBar'
function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
    const [search, setsearch] = useState('')
    const [bodyParts, setbodyParts] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
            console.log(bodyPartsData);
            setbodyParts(bodyPartsData);
        };

        fetchExercisesData();
    }, []);
       
    const handleClick = async () => {
        if (search) {
            const excerciseData = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises'
                , exerciseOptions)

            const searchExercises = excerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    || exercise.target.toLowerCase().includes(search)
                    || exercise.equipment.toLowerCase().includes(search)
                    || exercise.bodyPart.toLowerCase().includes(search)
            )
            setsearch('');
            setExercises(searchExercises)
        }
    }
    return (
        <Stack alignItems="center" p="20px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
                Awesome Exercises You <br />
                Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
                        width: { lg: '800px', xs: '350px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                         
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) => setsearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button className='search-btn'
                    sx={{
                        bgcolor: '#FF2625',
                        color: '#fff',
                        textTransform: 'none',
                        width: { lg: '175px', xs: '80px' },
                        fontSize: { lg: '20px', xs: '14px' },
                        height: '56px',
                        position: 'absolute',
                        right: '0'

                    }}
                    onClick={handleClick}
                >
                    search
                </Button>
            </Box>
            <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyparts/>
            </Box>

        </Stack >
    )
}

export default SearchExercises
