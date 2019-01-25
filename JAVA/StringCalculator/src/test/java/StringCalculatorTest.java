import org.junit.Before;
import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class StringCalculatorTest {
    private StringCalculator stringCalculator;

    @Before
    public void setUp() {
        stringCalculator = new StringCalculator();
    }

    @Test
    public void test_add_should_return_0_for_an_empty_string() {
        // Given
        String stringToSum = "";

        // When
        Integer sum = stringCalculator.add(stringToSum);

        // Then
        assertThat(sum).isEqualTo(0);
    }

    @Test
    public void test_add_should_return_0_for_a_sum_of_empty_values() {
        // Given
        String stringToSum = ",,,,,,,,,";

        // When
        Integer sum = stringCalculator.add(stringToSum);

        // Then
        assertThat(sum).isEqualTo(0);
    }

    @Test
    public void test_add_should_return_one_if_the_string_contains_one() {
        // Given
        String stringToSum = "1";

        // When
        Integer sum = stringCalculator.add(stringToSum);

        // Then
        assertThat(sum).isEqualTo(1);
    }

    @Test
    public void test_add_should_return_two_if_the_string_contains_two() {
        // Given
        String stringToSum = "2";

        // When
        Integer sum = stringCalculator.add(stringToSum);

        // Then
        assertThat(sum).isEqualTo(2);
    }

    @Test
    public void test_add_should_return_sum_of_string_delimited_by_comma() {
        // Given
        String stringToSum = "1,2,3,4,5,6,7,8,9,10";

        // When
        Integer sum = stringCalculator.add(stringToSum);

        // Then
        assertThat(sum).isEqualTo(55);
    }

    @Test
    public void test_add_should_handle_new_lines_and_ignore_them() {
        // Given
        String stringToSum = "1\n2,3";

        // When
        Integer sum = stringCalculator.add(stringToSum);

        // Then
        assertThat(sum).isEqualTo(6);
    }

    @Test
    public void test_add_should_support_dot_comma_delimiter_when_specified() {
        // Given
        String stringToSum = "//;1;2;3";

        // When
        Integer sum = stringCalculator.add(stringToSum);

        // Then
        assertThat(sum).isEqualTo(6);
    }

}