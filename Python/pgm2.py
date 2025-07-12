CGPA=[9,7,6,5,10,3,9,6,6,4]
'''count=0
i=0
for i in range(len(CGPA)):
    if CGPA[i]==6:
        count+=1
print("the number of 6 in CGPa is: ",count)

CGPA.append(3)
print("the updated CGPA list is: ",CGPA)

max_cgpa = max(CGPA)
print("The maximum CGPA is: ", max_cgpa)

sorted_cgpa = sorted(CGPA)
print("The sorted CGPA list is: ", sorted_cgpa)

avg_cgpa = sum(CGPA) / len(CGPA)
print("The average CGPA is: ", avg_cgpa)'''
if sum(CGPA) % 3 == 0:
    print("The sum of the CGPA list is divisible by 3.")
else:
    print("The sum of the CGPA list is NOT divisible by 3.")

squared_even = [x**2 for x in CGPA if x % 2 == 0]
print("The squares of even numbers in the list are:", squared_even)

'''sum of digits of all the even no. in a list'''
