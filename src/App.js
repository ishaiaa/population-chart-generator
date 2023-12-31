import React from 'react';
import styles from './App.module.css'

import Menu from './components/Menu';

function App(props) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.navBar}>
                t
            </div>
            <div className={styles.content}>
                <div className={styles.window}>
                    <div className={styles.imageFrame}>

                    </div>
                    
                    <div className={styles.controls}>
                        <Menu />
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                Created by: Nathalea
            </div>
        </div>
    );
}

export default App;