import random

def get_computer_choice():
    """Function to get the computer's choice"""
    choices = ["rock", "paper", "scissors"]
    return random.choice(choices)

def determine_winner(user_choice, computer_choice):
    """Function to determine the winner based on the rules of the game"""
    if user_choice == computer_choice:
        return "It's a tie!"
    
    if (user_choice == "rock" and computer_choice == "scissors") or \
       (user_choice == "paper" and computer_choice == "rock") or \
       (user_choice == "scissors" and computer_choice == "paper"):
        return "You win!"
    
    return "You lose!"

def play_game():
    """Function to run the game"""
    print("Welcome to Rock, Paper, Scissors!")
    
    while True:
        # Get user's choice
        user_choice = input("Enter rock, paper, or scissors (or 'quit' to stop playing): ").lower()

        # Allow the user to quit the game
        if user_choice == 'quit':
            print("Thanks for playing! Goodbye!")
            break
        
        # Validate user input
        if user_choice not in ["rock", "paper", "scissors"]:
            print("Invalid choice. Please choose rock, paper, or scissors.")
            continue
        
        # Get the computer's choice
        computer_choice = get_computer_choice()
        print(f"Computer chose: {computer_choice}")
        
        # Determine and display the winner
        result = determine_winner(user_choice, computer_choice)
        print(result)

# Start the game
play_game()
