/* eslint-disable @typescript-eslint/no-explicit-any */

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import '../../styles/main.css'
import { DateRangePicker } from 'react-date-range';
import { useState } from 'react';



const DateRangePickerCalendar = () => {

	const [selectionRange, setSelectionRange] = useState({
		startDate: new Date(),
		endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
		key: 'selection',
	  });

	const handleSelect = (ranges:any) => {
		console.log(ranges);
		setSelectionRange(ranges.selection);
	  }

  return (
	<DateRangePicker
		ranges={[selectionRange]}
		onChange={handleSelect}
		months={2}
		direction='horizontal'
		minDate={new Date()}
		showDateDisplay={true}
		dragSelectionEnabled={true}
		
  	/>
  );
}

export default DateRangePickerCalendar;