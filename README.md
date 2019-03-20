# webvieweventtest README

Debug this project and open the debug console in the extension host.

run "Open One" from the command pallette. You should see "one received state change. visible:  true"

run "Open Two" from the command pallette. You'll now see "two received state change. visible:  true" **but nothing about one losing visibility**

now, focus webview one by clicking on it's tab. You'll now see "two received state change. visible:  false" **but nothing about one gaining visibility**

finally, focus webview two again by clicking on it's tab and you'll see what we've expected all along:

"one received state change. visible:  false"

"two received state change. visible:  true"