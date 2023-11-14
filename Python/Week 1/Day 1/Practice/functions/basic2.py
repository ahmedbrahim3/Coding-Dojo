def Countdown(num):
    numbers=[]
    for x in range(num,-1,-1):
        numbers.append(x)
    print(numbers)
Countdown(5)

def print_and_return(list):
    print(list[0])
    return list[1] 

result = print_and_return([1, 2])
print( result)

def first_plus_length(input_list):
     return input_list[0] + len(input_list)
result = first_plus_length([1, 2, 3, 4, 5])
print(result)


def values_greater_than_second(input_list):
    second_value = input_list[1]
    new_list = []
    for value in input_list[2:]:
        if value > second_value:
            new_list.append(value)
    return new_list
print(values_greater_than_second([1,2,3,4,5]))

