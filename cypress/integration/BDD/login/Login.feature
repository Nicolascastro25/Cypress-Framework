Feature: Login Page

  Scenario: Successful login with a valid user and valid password
    Given The user is on the login page
    When The user enters "<email>" in the username field
    And The user enters "<password>" in the password field
    And The user clicks on 'Sign In'
    Then The user should be redirected to the dashboard page
    Examples:
      | email               | password       |
      | user2@alternova.com | user@password2 |

  Scenario: Access denied with a valid user and invalid password
    Given The user is on the login page
    When The user enters "<email>" in the username field
    And The user enters "<password>" in the password field
    And The user clicks on 'Sign In'
    Then An error message should appear indicating that the password is incorrect
    Examples:
      | email              | password       |
      | user@alternova.com | wrongpassword |    

  Scenario: Access denied with a valid user but no password entered
    Given The user is on the login page
    When The user enters "<email>" in the username field
    # And The user leaves the password field empty
    Then The 'Sign In' button should be disabled 
    Examples:
      | email              | 
      | user@alternova.com | 
      
  Scenario: Access denied with a invalid user and valid password
    Given The user is on the login page
    When The user enters "<email>" in the username field
    And The user enters "<password>" in the password field
    And The user clicks on 'Sign In'
    Then An error message should appear indicating that the user does not exist
    Examples:
      | email                 | password       |
      | invalid@alternova.com | user@password1 |  

  Scenario: Successful login with Google authentication
    Given The user is on the login page
    When The user clicks on 'Sign In with Google'
    Then The user should be redirected to the dashboard page
