# from cProfile import label
# from pydoc import pager, browse
#
# from playwright.sync_api import sync_playwright
# from select import select
#
# with sync_playwright() as p:
#     browser = p.chromium.launch(headless=False)
#     page = browser.new_page()
#     page.goto("https://demo.automationtesting.in/Alerts.html")
#
#     page.wait_for_selector('//a[@href = "#CancelTab"]').click()
#     page.wait_for_timeout(2000)
#
#     page.on("dialog" , lambda dialog : print(dialog.massage))
#     page.wait_for_selector('//div[@id= "CancelTab"]/button').click()
#     page.wait_for_timeout(2000)
from playwright.sync_api import sync_playwright
with sync_playwright() as p:
            browser = p.chromium.launch(headless=False)
            page = browser.new_page()
            page.goto('https://staging.new.expensify.com/r/3398830635513555')

            # Inject JavaScript to observe automatic node deletions
            page.evaluate("""
                () => {
                    // Specify the node to observe, or use `document.body` for the entire page
                    const targetNode = document.body;

                    // MutationObserver configuration for child node changes
                    const observerConfig = {
                        childList: true,  // Detect added or removed children
                        subtree: true     // Observe all descendants of the target node
                    };

                    // Callback to execute when mutations are detected
                    const callback = (mutationsList) => {
                        for (const mutation of mutationsList) {
                            if (mutation.type === 'childList') {
                                // Log each removed node
                                mutation.removedNodes.forEach(node => {
                                    console.log('Node automatically removed:', node);
                                });
                            }
                        }
                    };

                    // Create an observer instance and start observing
                    const observer = new MutationObserver(callback);
                    observer.observe(targetNode, observerConfig);

                    console.log('MutationObserver is now monitoring for auto-removed nodes...');
                }
            """)

            print("Node removal observation script injected. Watch the console for any node removals.")

            # Keep the browser session open to observe the automatic node removal in real-time
            input("Press Enter to close the browser...")








