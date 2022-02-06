import React, { Component } from 'react';
import Page from './Page';

export class DynamicTable extends Component {
  render() {
    var table2="";
    var count = 1;
    var count2 =1;
    
    for(var k=0;k<12;k++){
        var temp = parseInt(count2);
        temp="row"+temp;
        table2+=" <tr className='rows' id='"+temp+"' >";
        for(var l=0;l<7;l++){
            var temp2 = parseInt(count);
            temp2="seat"+temp2;
            table2+=" <td className='seats' id='"+temp2+"' >";
            table2+="</td>";
            count++;
        }
        table2+="</tr>";
        count2++;
    }
    return (
        <div>
            {table2}
        </div>
    );
  }
}

export default DynamicTable;

