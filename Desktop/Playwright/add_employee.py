from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless = False)
    page = browser.new_page()
    page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    username = page.locator('input[name="username"]')
    username.type('Admin')
    password = page.locator('input[type="password"]')
    password.type('admin123')
    button = page.locator('button[type="submit"]')
    button.click()
    page.wait_for_timeout(10000)
    # browser.close()