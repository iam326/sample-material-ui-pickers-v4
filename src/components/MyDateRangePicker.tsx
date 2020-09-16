import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
  DateRangePicker,
  DateRange,
  DateRangeDelimiter,
} from '@material-ui/pickers';
import { LocalizationProvider } from '@material-ui/pickers';
import DateFnsUtils from '@material-ui/pickers/adapter/date-fns';

const MyDateRangePicker: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<
    DateRange<Date | null>
  >([null, null]);
  return (
    <LocalizationProvider dateAdapter={DateFnsUtils}>
      <DateRangePicker
        startText="開始日"
        endText="終了日"
        value={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField {...startProps} helperText={null} />
            <DateRangeDelimiter> ~ </DateRangeDelimiter>
            <TextField {...endProps} helperText={null} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
};

export default MyDateRangePicker;
