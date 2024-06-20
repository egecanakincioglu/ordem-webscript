package com.ordem.database.util;

public class StringUtils {
    public static boolean isNumeric(String str) {
        if (str == null) {
            return false;
        }
        try {
            Double.parseDouble(str);
        } catch (NumberFormatException e) {
            return false;
        }
        return true;
    }
    // Diğer metin işleme metotları
}
