/* eslint-disable @typescript-eslint/no-explicit-any */

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import '../../styles/main.css'
import { DateRangePicker } from 'react-date-range';
import { FC, useEffect, useState } from 'react';


type Props = {
	startDate: Date;
	endDate: Date;
	handler: (startDate: Date, endDate: Date) => void;
}

const DateRangePickerCalendar: FC<Props> = ({startDate, endDate, handler}) => {

	const [selectionRange, setSelectionRange] = useState({
		startDate: startDate,
		endDate: endDate,
		key: 'selection',
	  });

	const handleSelect = (ranges:any) => {
		setSelectionRange(ranges.selection);
		handler(ranges.selection.startDate, ranges.selection.endDate);
	}

	useEffect(() => {
		setSelectionRange({
			startDate: startDate,
			endDate: endDate,
			key: 'selection',
		});
	}, [startDate, endDate])

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