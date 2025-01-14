from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page= browser.new_page()
    page.goto("https://demo.automationtesting.in/Register.html")

    first = page.locator('input[placeholder="First Name"]')
    first.type('Hemesh')
    last = page.locator('input[placeholder="Last Name"]')
    last.type('Agrawal')
    address = page.locator('textarea[ng-model="Adress"]')
    address.type('dibai')
    email_address = page.locator('input[ng-model="EmailAdress"]')
    email_address.type('kushelhemesh7737@gmail.com')
    number = page.locator('input[ng-model="Phone"]')
    number.type('9758234039')
    gender = page.locator('input[name="radiooptions"][value="Male"]')
    gender.click()
    hobbies = page.locator('#checkbox2' )
    hobbies.click()
    # language = page.locator('#msdd' '//li [text() = "English"]' ).click()
    skills = page.locator('#Skills')
    skills.click()
    skills = page.locator('option[value="APIs"]')
    skills.click()

    page.wait_for_timeout(7000)