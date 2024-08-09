import { CalendarTheme } from "@marceloterreiro/flash-calendar";
import colors from './colors';

const linearAccent = "#585ABF";

export default darkTheme = {
    ...CalendarTheme,
    rowMonth: {
        content: {
          textAlign: "left",
          color: "rgba(255, 255, 255, 0.5)",
          fontWeight: "700",
        },
      },
      rowWeek: {
        container: {
          borderBottomWidth: 1,
          borderBottomColor: "rgba(255, 255, 255, 0.1)",
          borderStyle: "solid",
        },
      },
      itemWeekName: { content: { color: "rgba(255, 255, 255, 0.5)" } },
      itemDayContainer: {
        activeDayFiller: {
          backgroundColor: linearAccent,
        },
      },
      itemDay: {
        idle: ({ isPressed, isWeekend }) => ({
          container: {
            backgroundColor: isPressed ? linearAccent : "transparent",
            borderRadius: 4,
          },
          content: {
            color: isWeekend && !isPressed ? "rgba(255, 255, 255, 0.5)" : "#ffffff",
          },
        }),
        today: ({ isPressed }) => ({
          container: {
            borderColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: isPressed ? 4 : 30,
            backgroundColor: isPressed ? linearAccent : "transparent",
          },
          content: {
            color: isPressed ? "#ffffff" : "rgba(255, 255, 255, 0.5)",
          },
        }),
        active: ({ isEndOfRange, isStartOfRange }) => ({
          container: {
            backgroundColor: linearAccent,
            borderTopLeftRadius: isStartOfRange ? 4 : 0,
            borderBottomLeftRadius: isStartOfRange ? 4 : 0,
            borderTopRightRadius: isEndOfRange ? 4 : 0,
            borderBottomRightRadius: isEndOfRange ? 4 : 0,
          },
          content: {
            color: "#ffffff",
          },
        }),
      },
}