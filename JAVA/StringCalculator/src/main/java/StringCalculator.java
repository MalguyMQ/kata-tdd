import java.util.function.BinaryOperator;
import java.util.function.Function;

import static java.util.Arrays.stream;

class StringCalculator {

    private static final int INITIAL_SUM = 0;
    private static final char NEWLINE_CHAR = '\n';
    private static final char DELIMITER = ',';
    private static final int EMPTY_STRING_VALUE = 0;
    private static final String DELIMITER_MARK = "//";

    int add(String stringToSum) {
        if(hasACustomDelimiter(stringToSum)) {
            char customDelimiter = getDelimiterIn(stringToSum);
            return processAndSumString(removeDelimiterMarker(stringToSum), customDelimiter);
        } else {
           return processAndSumString(stringToSum, DELIMITER);
        }
    }

    private Integer processAndSumString(String stringToSum, char delimiter) {
        return stream(stringToSum
                .replace(NEWLINE_CHAR, delimiter)
                .split(String.valueOf(delimiter)))
                .map(toInteger())
                .reduce(INITIAL_SUM, sumValues());
    }

    private boolean hasACustomDelimiter(String stringToSum) {
        return stringToSum.length() > 2 && stringToSum.substring(0, 2).equals(DELIMITER_MARK);
    }

    private Function<String, Integer> toInteger() {
        return value -> value.length() > 0 ? Integer.valueOf(value) : EMPTY_STRING_VALUE;
    }

    private char getDelimiterIn(String stringToSum) {
        return stringToSum.charAt(2);
    }

    private String removeDelimiterMarker(String stringToSum) {
        return stringToSum.substring(2);
    }

    private BinaryOperator<Integer> sumValues() {
        return (previousSum, valueToAdd) -> previousSum + valueToAdd;
    }
}
