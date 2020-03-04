package io.exercism;

import java.time.DayOfWeek;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

class Meetup {

    private int month;
    private int year;

    public Meetup(int month, int year) {
        this.month = month;
        this.year = year;
    }

    public LocalDate day(DayOfWeek dayOfWeek, MeetupSchedule meetupSchedule) {
        LocalDate currentDate = LocalDate.of(year, month, 1);
        List<LocalDate> meetupDates = new ArrayList<>();
        while (currentDate.getMonthValue() == month) {
            if (currentDate.getDayOfWeek().equals(dayOfWeek)) {
                meetupDates.add(currentDate);
            }
            currentDate = currentDate.plusDays(1);
        }
        switch (meetupSchedule) {
            case FIRST:
                return meetupDates.get(0);
            case FOURTH:
                return meetupDates.get(3);
            case LAST:
                return meetupDates.get(meetupDates.size() - 1);
            case SECOND:
                return meetupDates.get(1);
            case TEENTH:
                for (LocalDate meetupDate : meetupDates) {
                    if (meetupDate.getDayOfMonth() >= 13 && meetupDate.getDayOfMonth() <= 19) {
                        return meetupDate;
                    }
                }
            case THIRD:
                return meetupDates.get(2);
            default:
                break;

        }
        return currentDate;
    }

    enum MeetupSchedule {
        FIRST, SECOND, THIRD, FOURTH, LAST, TEENTH
    }

}
