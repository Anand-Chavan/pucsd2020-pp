#include <stdio.h>

#include <assert.h>
#include <zdb.h>

int main(void)
{
    URL_T url= URL_new("mysql://newuser:Sur78anand#@localhost:3306/anand");
    assert(url);
    ConnectionPool_T pool = ConnectionPool_new(url);
    ConnectionPool_start(pool);
    Connection_T con = ConnectionPool_getConnection(pool);
  
        Connection_execute(con, "create table students(name varchar(255))");
        PreparedStatement_T p = Connection_prepareStatement(con, "insert into students values (?)");

        PreparedStatement_setString(p, 1, "Anand");
        PreparedStatement_execute(p);
	
	PreparedStatement_setString(p, 1, "Deva");
        PreparedStatement_execute(p);


        ResultSet_T r = Connection_executeQuery(con, "select name from students");
        while (ResultSet_next(r))
            printf("%s\n", ResultSet_getString(r, 1));
        Connection_execute(con, "drop table students;");

    ConnectionPool_free(&pool);
    URL_free(&url);
    return 0;
}
