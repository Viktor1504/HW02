import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {
        const intervalID = setInterval(() => {
            const now = new Date()
            setDate(now)
        }, 1000);

        setTimerId(+intervalID);
    }

    const stop = () => {
        clearInterval(timerId); // Остановить таймер по его идентификатору
        setTimerId(undefined); // Обнулить идентификатор таймера
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const options: {
        timeOptions: Intl.DateTimeFormatOptions
        dateOptions: Intl.DateTimeFormatOptions
        weekDayOptions: Intl.DateTimeFormatOptions
        monthOptions: Intl.DateTimeFormatOptions
    } = {
        timeOptions: {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        },
        dateOptions: {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        },
        weekDayOptions: {
            weekday: 'long'
        },
        monthOptions: {
            month: 'long'
        }
    }

    const timeFormatter = new Intl.DateTimeFormat('ru-RU', options.timeOptions);
    const dateFormatter = new Intl.DateTimeFormat('ru-RU', options.dateOptions);
    const weekDayFormatter = new Intl.DateTimeFormat('en-US', options.weekDayOptions);
    const monthFormatter = new Intl.DateTimeFormat('en-US', options.monthOptions);

    const stringTime = timeFormatter.format(date) || <br/>
    const stringDate = dateFormatter.format(date) || <br/>
    const stringDay = weekDayFormatter.format(date) || <br/>
    const stringMonth = monthFormatter.format(date) || <br/>

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId}
                    onClick={start}
                >
                    Start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={timerId === undefined}
                    onClick={stop}
                >
                    Stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
