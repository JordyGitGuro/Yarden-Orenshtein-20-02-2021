Test Cases:
1. Enter legitimate details on the bottom page "contact me" section, expecting "Request submmited message".
2. Enter legitimate details on the footer (the bar which exists anywehre in the page except for bottom page) "contact me" section, expecting "Request submmited" message.
3. Testing the arrow functionallity - goes all the way to the top, then disappears
4. Negative Testing - validating the site rejects invalid data - for ex. submitting contact without the company name, or phone number with 2 digits code area and another 8 digits instead of 7.

Things I wanted to check but didn't have time:
1. Left/Right arrow for project inspecting and see how the "slick-active" changes proprtly.
2. Handle the site popup propertly (had hard time trying to do it with cypress, like this guy right here: 
https://stackoverflow.com/questions/53845493/cypress-uncaught-assertion-error-despite-cy-onuncaughtexception). 
3. Testing that https://herolo.co.il/ opened proprtly wehn clicking the button on the thank you page (cannot be done propertly with cypress).

Key notes:
1. The tests are in POM-based design pattern.
2. All test data stored in fixture json file.
3. Disabled scrollBehavior for bottom fields/button because the page structure is ruined otherwise in this spesific site.