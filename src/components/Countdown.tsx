import { useContext } from 'react'
import styles from '../styles/components/Countdown.module.css'

import { FiX } from 'react-icons/fi'
import{ AiFillCheckCircle } from 'react-icons/ai'
import { BsPlayFill } from 'react-icons/bs'
import { CountdownContext } from '../contexts/CountdownContext'

export function Countdown() {

    const {
        minutes, 
        seconds, 
        hasFinished, 
        isActive, 
        startCountdown, 
        resetCountdown 
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondsLeft, secondsRight] = String(seconds).padStart(2, '0').split('')

    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button
                    disabled  
                    className={`${styles.startCountdownButton} ${styles.iconStyle}`}
                >
                    Ciclo encerrado <AiFillCheckCircle color='#4cd62b' size={22} />
            </button>
            ) : (
                <>
                    { isActive ? (
                        <button 
                            type="button" 
                            className={`${styles.startCountdownButton} ${styles.countdownButtonActive} ${styles.iconStyle}`}
                            onClick={resetCountdown}
                        >
                            Abandonar ciclo <FiX color='#666' size={22} />
                        </button> 
                    ) : (
                        <button 
                            type="button" 
                            className={`${styles.startCountdownButton} ${styles.iconStyle}`}
                            onClick={startCountdown}
                        >
                                Iniciar um ciclo <BsPlayFill size={22} color='#fff' />
                        </button>
                    ) }
                </>
            )}
        </div>
    )
}