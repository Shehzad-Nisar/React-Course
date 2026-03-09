# Password Generator React App

## Overview

This is a simple **Password Generator** built with **React**. The application allows users to generate random passwords with customizable options such as length, inclusion of numbers, and special characters. Users can also **copy the generated password** to the clipboard with a single click.

## Features

- Generate a random password with adjustable length (6–50 characters).  
- Optionally include **numbers** and **special characters**.  
- Copy the generated password to the clipboard with a button click.  
- Real-time updates whenever password settings change.

## React Concepts Used

1. **useState** – Manages state for password, length, numbers, and special character options.  
2. **useEffect** – Runs side effects to regenerate the password when settings change.  
3. **useCallback** – Memoizes the password generation function to avoid unnecessary re-creation.  
4. **Event Handling** – Handles input changes, checkbox toggles, slider adjustments, and copy button clicks.  
5. **Clipboard API** – Uses `navigator.clipboard.writeText()` to copy passwords.  
6. **Conditional Logic** – Dynamically includes numbers and special characters in the password based on user selection.

## Usage

1. Clone the repository:  

   ```bash
   git clone <https://github.com/Shehzad-Nisar/React-Course/tree/main/06PasswordGenerator>

