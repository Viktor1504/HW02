import React from 'react'
import s from './Message.module.css'
import {MessageType} from '../HW1';

export type MessagePropsType = {
    message: MessageType
}

export const Message = ({message}: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + message.id} className={s.message}>
            <img
                id={'hw1-avatar-' + message.id}
                src={message.user.avatar}
                className={s.avatar}
            />
            <div className={s.angle}/>

            <div className={s.content}>
                <div id={'hw1-name-' + message.id} className={s.name}>
                    {message.user.name}
                </div>
                <pre id={'hw1-text-' + message.id} className={s.text}>
                        {message.message.text}
                    </pre>

                <div id={'hw1-time-' + message.id} className={s.time}>
                    {message.message.time}
                </div>
            </div>
        </div>
    )
}
