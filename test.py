x = 10

for n in range(x+1):
    inside = f"X{(x-2)* " "}X"
    if n == 0 or n == x:
        print("X"*x)
    else:
        print(inside)