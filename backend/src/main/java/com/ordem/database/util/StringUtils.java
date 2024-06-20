package com.ordem.database.util;

public class StringUtils {
    public static boolean isNumeric(String str) {
        try {
            if (str == null) {
                return false;
            }

            Double.parseDouble(str);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }
    // Diğer metin işleme metotları
}
