#include "./include/calculator.h"
#include<stdio.h>
int main()
{
	int first_number,second_number;
	char operator;


	printf("\nEnter an operator (+, -, *,): ");
    	scanf("%c", &operator);

	printf("\nEnter The First Number");
	scanf("%d",&first_number);

	printf("\nEnter The second Number");
	scanf("%d",&second_number);

	

	switch(operator)
	{
		case '+':
			addition(first_number,second_number);
		break;

		case '-':
			substraction(first_number,second_number);
		break;

		case '*':
			multiplication(first_number,second_number);
		break;

		case '/':
			division(first_number,second_number);
		break;

		default:
			printf("\nError! operator is not correct\n");
		break;


	}

	return 0;
}
