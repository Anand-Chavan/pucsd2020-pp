all :simple static dynamic

simple:
	gcc main.c ./src/addition.c ./src/substraction.c ./src/multiplication.c ./src/division.c  -o calculator

static:
	gcc -c main.c && gcc -o calculator  main.o  libbasic.a

run :
	./calculator

clean :
	rm calculator
