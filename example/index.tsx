import 'react-app-polyfill/ie11';
import  { useState } from 'react';
import ReactDOM from 'react-dom';
import {
  ChakraProvider,
  ColorModeScript,
  Text,
} from '@chakra-ui/react';
import { SingleDatepicker } from '../src';


const App = () => {

  // const mainDate = new Date(2020, 10, 31);
  const mainDate = null;
  const initDate = null;
  // const initDate = new Date(1999, 4, 1);
  const [date, setDate] = useState<Date | null>(mainDate);
  const [isSingleChecked, setSingleCheck] = useState(true);

  return (
    <>
      <Text>SingleDatepicker</Text>

      <SingleDatepicker
        name="date-input"
        date={date}
        initDate={initDate}
        onDateChange={setDate}
        closeOnSelect={isSingleChecked}
      />


      {/* <SingleDatepicker
        name="date-input"
        date={date}
        initDate={initDate}
        minDate={subDays(date || initDate, 8)}
        maxDate={addDays(date || initDate, 8)}
        onDateChange={setDate}
        closeOnSelect={isSingleChecked}
      /> */}

      {/* original */}
      {/* <SingleDatepicker
        name="date-input"
        date={date}
        disabledDates={
          new Set([
            startOfDay(subDays(mainDate, 6)).getTime(),
            startOfDay(subDays(mainDate, 4)).getTime(),
            startOfDay(subDays(mainDate, 2)).getTime(),
          ])
        }
        minDate={subDays(mainDate, 8)}
        maxDate={addDays(mainDate, 8)}
        onDateChange={setDate}
        closeOnSelect={isSingleChecked}
      /> */}
    </>
  );
};

ReactDOM.render(
  <>
    <ColorModeScript />
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </>,
  document.getElementById('root')
);
