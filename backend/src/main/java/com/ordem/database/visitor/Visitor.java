package com.ordem.database.visitor;

import com.ordem.database.ast.*;

public interface Visitor {
    void visit(SelectStatement selectStatement);
    void visit(InsertStatement insertStatement);
    // Diğer SQL deyimleri için metotlar
}
