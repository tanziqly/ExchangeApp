import { useState, useEffect } from "react";
import axios from "axios";

const useExchangeRate = (inputValue1, inputValue2, clickButton) => {
  const [course, setCourse] = useState(null);
  const [fromValuteDetails, setFromValuteDetails] = useState(null);

  useEffect(() => {
    const apiUrl = `https://www.cbr-xml-daily.ru/daily_json.js`;

    const fetchData = async () => {
      try {
        const res = await axios.get(apiUrl);
        const fromValute = res.data.Valute[inputValue1];
        const toValute = res.data.Valute[inputValue2];

        if (fromValute && toValute) {
          let calculatedCourse = toValute.Value / fromValute.Value;
          calculatedCourse = Math.trunc(calculatedCourse * 100) / 100;
          setCourse(calculatedCourse);
          setFromValuteDetails(fromValute);
        } else {
          setCourse(null);
          setFromValuteDetails(null);
        }
      } catch (err) {
        console.log(err);
      }
    };

    if (clickButton) {
      fetchData();
    }
  }, [clickButton, inputValue1, inputValue2]);

  return { course, fromValuteDetails };
};

export default useExchangeRate;
