
import Head from 'next/head';

import { ChallengeBox } from '../components/ChallengeBox';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { CountdownProvider } from '../contexts/CountdownContext';

import { ExperienceBar } from '../components/ExperinceBar';
import { Profile } from '../components/Profile';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
    return (
        
        <div className={styles.container}>

            <Head>
                <title>Início | MoveIt</title>
            </Head>

            <ExperienceBar />


            <CountdownProvider>

                <section>

                    <div>
                        
                        <Profile />

                        <CompletedChallenges />

                        <Countdown />

                    </div>
                    
                    <div>

                        <ChallengeBox />

                    </div>

                </section>

            </CountdownProvider>

        </div>
    )
}
