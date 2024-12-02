import random
import string

def generate_password(length, use_uppercase, use_lowercase, use_digits, use_special_chars):
    # Define the character sets
    all_characters = ""
    
    if use_uppercase:
        all_characters += string.ascii_uppercase  # A-Z
    if use_lowercase:
        all_characters += string.ascii_lowercase  # a-z
    if use_digits:
        all_characters += string.digits  # 0-9
    if use_special_chars:
        all_characters += string.punctuation  # Special characters like !, @, #, etc.

    # Ensure there is at least one character from each selected set
    password = []
    if use_uppercase:
        password.append(random.choice(string.ascii_uppercase))
    if use_lowercase:
        password.append(random.choice(string.ascii_lowercase))
    if use_digits:
        password.append(random.choice(string.digits))
    if use_special_chars:
        password.append(random.choice(string.punctuation))

    # Fill in the remaining length with random characters from all selected sets
    if all_characters:
        password += random.choices(all_characters, k=length - len(password))

    # Shuffle the password to ensure randomness
    random.shuffle(password)
    
    return ''.join(password)

def main():
    print("Random Password Generator")
    
    # Get user input for password criteria
    while True:
        try:
            length = int(input("Enter the desired password length: "))
            if length < 6:
                print("Password length should be at least 6 characters for security reasons.")
                continue
            break
        except ValueError:
            print("Please enter a valid number for password length.")

    use_uppercase = input("Include uppercase letters? (yes/no): ").lower() == 'yes'
    use_lowercase = input("Include lowercase letters? (yes/no): ").lower() == 'yes'
    use_digits = input("Include digits? (yes/no): ").lower() == 'yes'
    use_special_chars = input("Include special characters? (yes/no): ").lower() == 'yes'

    # Ensure at least one character set is selected
    if not (use_uppercase or use_lowercase or use_digits or use_special_chars):
        print("You must select at least one character type (uppercase, lowercase, digits, or special characters).")
        return

    # Generate and display the password
    password = generate_password(length, use_uppercase, use_lowercase, use_digits, use_special_chars)
    print(f"Your generated password is: {password}")

# Run the program
main()
