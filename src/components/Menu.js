import React from 'react';
import styles from './Menu.module.css'

function Menu(props) {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.horizontal}>
                <button className={styles.button}>Share</button>
                <button className={styles.button}>Download PNG</button>
            </div>
            <div className={styles.sectionParent}>
                <div className={styles.section}>
                    <h2>Chart Settings</h2>
                    <h4>Population number</h4>
                    <div className={styles.numberField}>
                        <button className={styles.numberFieldButton}>-</button>
                        <input min={1} max={10000} type="number" className={styles.numberFieldInput} />
                        <button className={styles.numberFieldButton}>+</button>
                    </div>
                    <h4>Values Type</h4>
                    <div className={`${styles.horizontal} ${styles.spaceAround}`}>
                        <div className={`${styles.checkBox} ${styles.checked}`}>
                            <div className={styles.radio}></div>
                            <p>Quantity</p>
                        </div>
                        <div className={`${styles.checkBox}`}>
                            <div className={styles.radio}></div>
                            <p>Percentage</p>
                        </div>
                    </div>
                    <h4>Data Fields</h4>
                    {[0,0,0,0,0,0].map(()=> {
                        return (
                            <div className={styles.dataFieldList}>
                        <div className={styles.dataField}>
                            <div className={styles.icon}>
                                <img src="https://www.pngkey.com/png/full/199-1999886_how-to-set-use-woman-icon-clipart.png" alt="" />
                            </div>
                            <input type="text" placeholder='Label'/>
                            <div className={styles.dataNumberInput}>
                                <input type="number" placeholder="" min="0"/>
                                <div className={styles.dataNumberButtons}>
                                    <button>+</button>
                                    <button>-</button>
                                </div>
                            </div>
                            <button>🗙</button>
                        </div>
                    </div>
                        )
                    })}
                    <button className={styles.dataFieldAddButton}>＋ Add Field</button>
                </div>
                <div className={styles.section}>
                    <h2>Chart Customization</h2>
                    <h4>Background Color</h4>
                    <h4>Row Count</h4>
                    <h4>Column Count</h4>
                </div>
            </div>
        </div>
    );
}

export default Menu;