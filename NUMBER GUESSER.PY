import random

def number_guessing_game():
    # Generate a random number between 1 and 10,000
    number_to_guess = random.randint(1, 10000)
    
    print("Welcome to the Number Guessing Game!")
    print("I have selected a number between 1 and 10,000. Try to guess it!")

    attempts = 0
    while True:
        # Ask the user for a guess
        try:
            user_guess = int(input("Enter your guess: "))
        except ValueError:
            print("Please enter a valid number.")
            continue

        attempts += 1
        
        # Check if the guess is correct, too high, or too low
        if user_guess < number_to_guess:
            print("Too low! Try again.")
        elif user_guess > number_to_guess:
            print("Too high! Try again.")
        else:
            print(f"Congratulations! You've guessed the number {number_to_guess} in {attempts} attempts.")
            break

# Start the game
number_guessing_game()
