import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                '.MuiSlider-track': {
                    backgroundColor: '#00CC22',
                    border: '1px solid #00CC22',
                },
                '.MuiSlider-thumb': {
                    backgroundColor: 'white',
                    height: 18,
                    width: 18,
                    border: '1px solid #00CC22',
                },
                '.MuiSlider-thumb::after': {
                    content: '""',
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#00CC22',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                },
                '.MuiSlider-rail': {backgroundColor: '#8B8B8B'},
                width: 147,
                height: 4,
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
