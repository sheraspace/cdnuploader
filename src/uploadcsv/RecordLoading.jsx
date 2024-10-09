
import React, { useEffect, useState } from 'react';
import style from '../styleBs/container.module.css';

const RecordLoading = ({ isloading, loadingtype, loadingtext, uploadedBytes, totalBytes }) => {
    const [dataloadingtext, setdataloadingtext] = useState('loading....');
    const [processingtext, setprocessingtext] = useState('Processing');
    const [datasavingtext, setdatasavingtext] = useState('Saving....');
    const [customtext, setdcustomtext] = useState('');

    useEffect(() => {
        if (loadingtype === 'save') {
            setdcustomtext(datasavingtext);
        } else if (loadingtype === 'loading') {
            setdcustomtext(dataloadingtext);
        }
    }, [isloading, loadingtype, loadingtext]);

  

    // Calculate the percentage
    const percentage = totalBytes > 0 ? Math.round((uploadedBytes / totalBytes) * 100) : 0;

    return (
        <div className={isloading ? style['recordloadingboxON'] : style['recordloadingboxOFF']}>
            <div className={style.recordloadingCustomBox}>
                <div className={style.cusboxseconddiv} style={{ flex: '100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' ,width:'100%'}}>
                    <div style={{ display: 'flex', width: '100%', height: "100%", justifyContent: 'flex-start', alignItems: 'flex-start', textAlign: "center", }}>
                        <div style={{ flex: '10%', width: '100%', height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <div className={style.load_wrapp}>
                                <div className={style.load_4}>
                                    <div className={style.ring_1} style={{ color: '#f22e2e' }}></div>
                                </div>
                            </div>
                        </div>

                        <div style={{ flex: '90%', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', textAlign: 'start', fontSize: '2rem' }}>
                            <div className={style.customloadingsecond}>
                                {loadingtext && <span style={{ fontSize: '1.2rem', color: '#f45d5a', width: "100%", paddingRight: '18px', paddingLeft: '12px' }}>{loadingtext}</span>}
                                <span style={{ fontSize: '1.1rem', color: 'red', textShadow: '1px -1px 5px black', width: "100%" }}></span>
                            </div>


                           
                        </div>




                        
                    </div>

                    <div style={{ width: '85%',height:'100%',display:"flex",justifyContent:'center',alignItems:'center',flexDirection:'column'}}>

                    <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',width:'100%'}}>
                       <div className="progress-container" >
                        <div className="progress-bar" style={{ width: `${percentage}%` }}></div>
                        </div>

                        <div className="progress-label" style={{color:'black'}}>{percentage}%</div>
                      </div>
                      <div style={{width:"100%",display:'flex',justifyContent:"flex-start",alignItems:'flex-start' }}>

                          <div style={{ marginTop: '5px', fontSize: '1rem',textAlign:'left' }}>
                                {uploadedBytes} bytes / {totalBytes} bytes
                            </div>
                       </div>

                    </div>


                </div>
            </div>

            <style jsx>
        {`
        
       

        .progress-container {
            display: flex;
            align-items: center;
            width: 100% ;
            border-radius: 8px;
            padding: 1px; 
            background-color: #DAD5D5; 

            
          }
          
          .progress-bar {

            height: 8px; 
            background-color: #ef5350; 
            border-radius: 8px; 
            transition: width 0.5s ease-in-out; 
          
          }
          
          .progress-label {
            font-size:15px;
            margin-left: 8px; /* Spacing between progress bar and label */
            color: white; /* Text color */
          }
          
        
        `}
      </style>
        </div>
    )
}

export default RecordLoading;
