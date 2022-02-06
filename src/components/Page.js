import React, {useEffect, useState } from 'react';
import DynamicTable from './DynamicTable';
import Function from './Function';
import '../components/static/style/ass.css';

export default function Page() {
    const [count, setCount] = useState(0);

    const reset = ()=>{
        setCount(0)
        let element = document.getElementsByClassName('seats');
        for (var i = 0; i < element.length; i++) {
            if(i!=77 && i!=78 && i!=82 && i!=83){
                element[i].style.backgroundColor = 'blue';
            }
            
          }
    }

    const book = ()=>{
        var currentValue = document.getElementsByClassName('count')[0].value;
        currentValue = parseInt(currentValue);
        if (isNaN(currentValue)){
            alert("Enter the number only");
        }
        else if (currentValue>7){
            alert('You can book only 7 seats max at the time')
        }
        else{
            var latest = count+currentValue;
            if(latest>80){
                if(80-count > 0){
                    var remaining =80-count;
                    if(remaining>1){
                     alert("Only "+remaining+" seats are remaining");
                    }else{
                     alert("Only "+remaining+" seat is remaining");
                    }
                }
                else{
                    alert('Seats are full')
                }
            }
            else{
                setCount(count+currentValue);
            }
        } 
    }


    const key = 'count';

    useEffect(() => {
      const retreiveStorage = JSON.parse(localStorage.getItem(key));
      if(retreiveStorage)setCount(retreiveStorage);
    }, []);
    
  
    useEffect(() => {
      localStorage.setItem(key,JSON.stringify(count));

        //Update the color
        
        var spl = 79;
        if(count>77){
            for(var i=1;i<=77;i++){
                var str = "seat"+i;
                document.getElementById(str).style.backgroundColor='green';
            }
            var spl2 = count-77;
            spl+=spl2;
            for(var j=80;j<=spl;j++){
                var str = "seat"+j;
                document.getElementById(str).style.backgroundColor='green';
            }
    
        }else{
            for(var k=1;k<=count;k++){
                var str = "seat"+k;
                document.getElementById(str).style.backgroundColor='green';
            }
        }
            //End of update color

    }, [count]);
    
  return (
  
  <div>
      <label>Enter the number of seats</label>
        <input type="text" className="count"></input>
        <button type="button" onClick={book}>Ok</button>
        <div>
            <h3>Seats booked <span className="seats-booked">{count}</span></h3>
        </div>
        <div>
            <button onClick={reset}>Reset</button>
        </div>
        <div className="table-container">
            
            <table id="table">
               {/* Dyanamic Table */}
               <tbody>
               <tr className='rows' id='row1' > <td className='seats' id='seat1' ></td> <td className='seats' id='seat2' ></td> <td className='seats' id='seat3' ></td> <td className='seats' id='seat4' ></td> <td className='seats' id='seat5' ></td> <td className='seats' id='seat6' ></td> <td className='seats' id='seat7' ></td></tr> <tr className='rows' id='row2' > <td className='seats' id='seat8' ></td> <td className='seats' id='seat9' ></td> <td className='seats' id='seat10' ></td> <td className='seats' id='seat11' ></td> <td className='seats' id='seat12' ></td> <td className='seats' id='seat13' ></td> <td className='seats' id='seat14' ></td></tr> <tr className='rows' id='row3' > <td className='seats' id='seat15' ></td> <td className='seats' id='seat16' ></td> <td className='seats' id='seat17' ></td> <td className='seats' id='seat18' ></td> <td className='seats' id='seat19' ></td> <td className='seats' id='seat20' ></td> <td className='seats' id='seat21' ></td></tr> <tr className='rows' id='row4' > <td className='seats' id='seat22' ></td> <td className='seats' id='seat23' ></td> <td className='seats' id='seat24' ></td> <td className='seats' id='seat25' ></td> <td className='seats' id='seat26' ></td> <td className='seats' id='seat27' ></td> <td className='seats' id='seat28' ></td></tr> <tr className='rows' id='row5' > <td className='seats' id='seat29' ></td> <td className='seats' id='seat30' ></td> <td className='seats' id='seat31' ></td> <td className='seats' id='seat32' ></td> <td className='seats' id='seat33' ></td> <td className='seats' id='seat34' ></td> <td className='seats' id='seat35' ></td></tr> <tr className='rows' id='row6' > <td className='seats' id='seat36' ></td> <td className='seats' id='seat37' ></td> <td className='seats' id='seat38' ></td> <td className='seats' id='seat39' ></td> <td className='seats' id='seat40' ></td> <td className='seats' id='seat41' ></td> <td className='seats' id='seat42' ></td></tr> <tr className='rows' id='row7' > <td className='seats' id='seat43' ></td> <td className='seats' id='seat44' ></td> <td className='seats' id='seat45' ></td> <td className='seats' id='seat46' ></td> <td className='seats' id='seat47' ></td> <td className='seats' id='seat48' ></td> <td className='seats' id='seat49' ></td></tr> <tr className='rows' id='row8' > <td className='seats' id='seat50' ></td> <td className='seats' id='seat51' ></td> <td className='seats' id='seat52' ></td> <td className='seats' id='seat53' ></td> <td className='seats' id='seat54' ></td> <td className='seats' id='seat55' ></td> <td className='seats' id='seat56' ></td></tr> <tr className='rows' id='row9' > <td className='seats' id='seat57' ></td> <td className='seats' id='seat58' ></td> <td className='seats' id='seat59' ></td> <td className='seats' id='seat60' ></td> <td className='seats' id='seat61' ></td> <td className='seats' id='seat62' ></td> <td className='seats' id='seat63' ></td></tr> <tr className='rows' id='row10' > <td className='seats' id='seat64' ></td> <td className='seats' id='seat65' ></td> <td className='seats' id='seat66' ></td> <td className='seats' id='seat67' ></td> <td className='seats' id='seat68' ></td> <td className='seats' id='seat69' ></td> <td className='seats' id='seat70' ></td></tr> <tr className='rows' id='row11' > <td className='seats' id='seat71' ></td> <td className='seats' id='seat72' ></td> <td className='seats' id='seat73' ></td> <td className='seats' id='seat74' ></td> <td className='seats' id='seat75' ></td> <td className='seats' id='seat76' ></td> <td className='seats' id='seat77' ></td></tr> <tr className='rows' id='row12' > <td className='seats' id='seat78' ></td> <td className='seats' id='seat79' ></td> <td className='seats' id='seat80' ></td> <td className='seats' id='seat81' ></td> <td className='seats' id='seat82' ></td> <td className='seats' id='seat83' ></td> <td className='seats' id='seat84' ></td></tr>
               </tbody>
            </table>
            {/* <div>
            <table id="table2">
            <DynamicTable createTable={tablecreation}/>
            </table>
            </div> */}
        </div>
  </div>
  
  );
}
