package com.ordem.database.lexer;

import com.ordem.database.exception.LexerException;

public class Lexer {
    private String input;
    private int position;

    public Lexer(String input) {
        this.input = input;
        this.position = 0;
    }

    public Token nextToken() throws LexerException {
        // Lexical analysis logic
        // Örneğin, boşlukları geç ve bir sonraki token'ı oluştur
        while (position < input.length() && Character.isWhitespace(input.charAt(position))) {
            position++;
        }
        if (position >= input.length()) {
            return new Token(TokenType.EOF, "");
        }

        char currentChar = input.charAt(position);
        // Basit bir örnek: anahtar kelimeler ve semboller
        if (Character.isLetter(currentChar)) {
            StringBuilder sb = new StringBuilder();
            while (position < input.length() && Character.isLetter(input.charAt(position))) {
                sb.append(input.charAt(position));
                position++;
            }
            String word = sb.toString();
            if (word.equalsIgnoreCase("SELECT")) {
                return new Token(TokenType.KEYWORD, word);
            } else {
                return new Token(TokenType.IDENTIFIER, word);
            }
        } else if (currentChar == '*') {
            position++;
            return new Token(TokenType.SYMBOL, "*");
        }

        throw new LexerException("Geçersiz karakter: " + currentChar);
    }
}
