package com.ordem.database.visitor;

import com.ordem.database.ast.*;

public class SQLExecutionVisitor implements Visitor {
    @Override
    public void visit(SelectStatement selectStatement) {
        // SELECT ifadesini çalıştırma mantığı
    }

    @Override
    public void visit(InsertStatement insertStatement) {
        // INSERT ifadesini çalıştırma mantığı
    }

    // Diğer SQL deyimlerini çalıştırma mantığı
}
