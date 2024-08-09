import React, {useState, memo, useMemo} from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { toDateId, useCalendar, Calendar } from "@marceloterreiro/flash-calendar";
import darkTheme from '../config/CalendarTheme';
import AppText from './AppText';
import Icon from './Calendar/Icon';
import colors from '../config/colors';
import DropDown from './DropDown';

const today = toDateId(new Date());

export const CustomCalendar = memo((props) => {
    const { calendarRowMonth, weekDaysList, weeksList } = useCalendar(props);
    const today = useMemo(() => {
        return weeksList.flatMap((week) => week).find((day) => day.isToday);
      }, [weeksList]);

    return (
        <View style={styles.container}>
            <Calendar.VStack>
                <Calendar.HStack style={styles.monthRow}>
                    <Icon name="chevron-left" backgroundColor={colors.dark0} iconColor={colors.white} size={40} onPress={props.onPreviousMonthPress} />
                    <AppText>
                        {calendarRowMonth}
                    </AppText>
                    <Icon name="chevron-right" backgroundColor={colors.dark0} iconColor={colors.white} size={40} onPress={props.onNextMonthPress} />
                </Calendar.HStack>
                <Calendar.Row.Week spacing={4}>
                    {weekDaysList.map((day, i) => (
                        <Calendar.Item.WeekName
                        key={i}
                        >
                            <AppText>{day}</AppText>
                        </Calendar.Item.WeekName>
                    ))}
                    <View style={styles.weekDivider}/>
                </Calendar.Row.Week>

                {props.open && weeksList.map((week, i) => (
                <Calendar.Row.Week key={i}>
                    {week.map((day) => (
                    <Calendar.Item.Day.Container
                        dayHeight={40}
                        daySpacing={4}
                        isStartOfWeek={day.isStartOfWeek}
                        key={day.id}
                    >
                        <Calendar.Item.Day
                        height={40}
                        metadata={day}
                        onPress={props.onCalendarDayPress}
                        theme={darkTheme.itemDay}
                        >
                        {day.displayLabel}
                        </Calendar.Item.Day>
                    </Calendar.Item.Day.Container>
                    ))}
                </Calendar.Row.Week>
                ))}

                {!props.open && (
                    <Calendar.Row.Week key={props.selectedWeek-1}>
                    {weeksList[props.selectedWeek-1].map((day) => (
                    <Calendar.Item.Day.Container
                        dayHeight={40}
                        daySpacing={4}
                        isStartOfWeek={day.isStartOfWeek}
                        key={day.id}
                    >
                        <Calendar.Item.Day
                        height={40}
                        metadata={day}
                        onPress={props.onCalendarDayPress}
                        theme={darkTheme.itemDay}
                        >
                        {day.displayLabel}
                        </Calendar.Item.Day>
                    </Calendar.Item.Day.Container>
                    ))}
                </Calendar.Row.Week>
                )}
            {props.open && <View style={styles.weekDivider}/>}
            </Calendar.VStack>
            <DropDown onPress={() => props.setOpen(!props.open)} displayList={props.open} size={30}/>
        </View>
    )
})


const styles = StyleSheet.create({
  container: {
    },
    monthRow: {
        // alignItems: 'center',
        justifyContent: 'center',
    },
    weekDays: {
        content: {
            color: colors.white,
        }
    },
    weekDivider: {
        height: 1,
        width: '100%',
        backgroundColor: colors.dark3,
        position: "absolute",
        left: 8,
        right: 8,
        bottom: 0,
    }
});