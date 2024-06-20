package com.ordem.database.util;

public class SQLUtils {
    public static boolean isKeyword(String str) {
        // SQL anahtar kelimelerini kontrol etme mantığı
        return str.equalsIgnoreCase("SELECT") || str.equalsIgnoreCase("INSERT");
    }
    // Diğer SQL ile ilgili yardımcı metotlar
}
