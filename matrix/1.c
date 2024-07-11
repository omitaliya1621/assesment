#include<stdio.h>
void main()
{
	int a[2][2],b[2][2],mul[100][100],i,j,k;
	printf("----------------MATRIX:1-------------------");
	for(i=0; i<2; i++)
	{
		for(j=0; j<2; j++)
		{
			printf("\nEnter the element:");
			scanf("%d",&a[i][j]);
		}
	}
	printf("----------------MATRIX:2-------------------");
	for(i=0; i<2; i++)
	{
		for(j=0; j<2; j++)
		{
			printf("\nEnter the element:");
			scanf("%d",&b[i][j]);
		}
	}
	for(i=0; i<2; i++)
	{
		mul[i][j]=0;
		for(j=0; j<2; j++)
		{
			for(k=0; k<2; k++)
			{
				mul[i][j]+=a[i][k]*b[k][j];
			}
			printf("%d ",mul[i][j]);
		}
		printf("\n");
	}
	
}
