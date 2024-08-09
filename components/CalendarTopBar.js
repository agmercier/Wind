import React, {useState, useEffect} from 'react';
import { View, StyleSheet} from 'react-native';
import {toDateId, fromDateId} from "@marceloterreiro/flash-calendar";
import {CustomCalendar} from './CustomCalendar';
import { addMonths, subMonths, startOfMonth, getWeekOfMonth, getDate, subWeeks, addWeeks,getDaysInMonth } from "date-fns";

export default function CalendarTopBar({selectedDate, setSelectedDate}) {
  
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(selectedDate));
  const [selectedWeek, setSelectedWeek] = useState(selectedDate);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setSelectedWeek(selectedDate);
    setCurrentMonth(startOfMonth(selectedDate));
  }, [selectedDate]);

  handleLeftPress = () => {
    if (open) {
      setCurrentMonth(subMonths(currentMonth, 1)) ;
    }
    else {
      setSelectedWeek(subWeeks(selectedWeek,1)); 
      setCurrentMonth(startOfMonth(subWeeks(selectedWeek,1)));
    }
  }

  handleRightPress = () => {
    if (open) {
      setCurrentMonth(addMonths(currentMonth, 1));
    }
    else {
      setSelectedWeek(addWeeks(selectedWeek,1)); 
      setCurrentMonth(startOfMonth(addWeeks(selectedWeek,1)));
    }
  }

  return (
    <View style={[styles.container]}>
      <CustomCalendar
      calendarActiveDateRanges={[
        {
          startId: toDateId(selectedDate),
          endId: toDateId(selectedDate),
        },
      ]}
      calendarMonthId={toDateId(currentMonth)}
      onCalendarDayPress={(dateID) => setSelectedDate(fromDateId(dateID))}
      calendarFirstDayOfWeek={'monday'}
      onPreviousMonthPress={handleLeftPress}
      onNextMonthPress={handleRightPress}
      selectedWeek={getWeekOfMonth(selectedWeek, options={weekStartsOn: 1})}
      open={open}
      setOpen={setOpen}
      />
    </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    }
});  