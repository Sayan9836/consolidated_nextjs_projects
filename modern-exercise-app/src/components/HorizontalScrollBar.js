import React from 'react'
import { Box } from '@mui/material'
import BodyPart from './BodyPart'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import ExerciseCard from './ExerciseCard'

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyparts }) => {
    return (
        <ScrollMenu>
            {
                data.map((item) => {
                    return <Box
                        key={item.id || item}
                        itemId={item.id || item}
                        title={item.id || item}
                        m="0 40px"
                    >
                        {isBodyparts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> :
                            <ExerciseCard exercise={item} />}

                    </Box>
                })
            }
        </ScrollMenu>
    );
}

export default HorizontalScrollbar;
