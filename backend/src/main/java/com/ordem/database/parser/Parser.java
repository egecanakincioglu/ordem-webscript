package com.ordem.database.parser;

import com.ordem.database.ast.*;
import com.ordem.database.exception.LexerException;
import com.ordem.database.lexer.*;
import com.ordem.database.exception.ParseException;

public class Parser {
    private Lexer lexer;
    private Token currentToken;

    public Parser(Lexer lexer) {
        this.lexer = lexer;
        try {
            this.currentToken = lexer.nextToken();
        } catch (LexerException e) {
            System.out.println(e);
        }
    }

    private void consume(TokenType type) throws ParseException {
        try {
            if (currentToken.getType() == type) {
                currentToken = lexer.nextToken();
            } else {
                throw new ParseException("Beklenen token: " + type + ", fakat bulundu: " + currentToken.getType());
            }
        } catch (LexerException e) {
            throw new ParseException("Lexer hatası: " + e.getMessage());
        }
    }

    public ASTNode parse() throws ParseException {
        if (currentToken.getType() == TokenType.KEYWORD && currentToken.getValue().equalsIgnoreCase("SELECT")) {
            return parseSelectStatement();
        }
        // Diğer SQL deyimleri için parse metotları
        throw new ParseException("Geçersiz SQL deyimi: " + currentToken.getValue());
    }

    private SelectStatement parseSelectStatement() throws ParseException {
        consume(TokenType.KEYWORD); // SELECT
        // SELECT parçalama mantığı
        // Örneğin, FROM ifadesini bekleme ve işleme
        consume(TokenType.KEYWORD); // FROM
        // Daha fazla işleme yapabilirsiniz, örneğin SELECT sütunları veya WHERE koşulları
        return new SelectStatement();
    }
}
