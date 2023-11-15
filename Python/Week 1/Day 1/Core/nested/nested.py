x = [[5, 2, 3], [10, 8, 9]]
students = [
    {'first_name': 'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'}
]
sports_directory = {
    'basketball': ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer': ['Messi', 'Ronaldo', 'Rooney']
}
z = [{'x': 10, 'y': 20}]


x[1][0] = 15


students[0]['last_name'] = 'Bryant'


sports_directory['soccer'][0] = 'Andres'


z[0]['y'] = 30


print( x)
print( students)
print( sports_directory)
print( z)

def iterateDictionary(some_list):
    for student in some_list:
        output_str = ""
        for key, value in student.items():
            output_str += f"{key} - {value}, "
        print(output_str)  


students = [
    {'first_name': 'Michael', 'last_name': 'Jordan'},
    {'first_name': 'John', 'last_name': 'Rosales'},
    {'first_name': 'Mark', 'last_name': 'Guillen'},
    {'first_name': 'KB', 'last_name': 'Tonel'}
]

iterateDictionary(students)

def iterateDictionary2(key_name, some_list):
    for item in some_list:
        print(item[key_name])
    iterateDictionary2()

def printInfo(some_dict):
    for key, values in some_dict.items():
        print(f"{key} - {len(values)}")
        for value in values:
            print(value)
dojo = {
'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
printInfo(dojo)