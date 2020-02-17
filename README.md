<h1>Introduction</h1>
This repo is about UI test automation in React Native using Appium.  
<br/><br/>
Refer below article for complete guidance, <br/>  
https://medium.com/@shamique/test-automation-in-react-native-ac9ac2330ab9

<h1>How to run React Native Project ? </h1>
<ul>
  <li>Run <code>npm install</code></li>
  <li>Generate Android and iOS project - <code>react-native eject</code></li>
  <li>Start the project - <code>react-native start</code></li>
  <li>Run the project - <code>react-native run-android</code></li>
</ul>

<br/>

<p><b>Note:</b> If you get an error like 'error Invalid regular expression:', apply this fix: https://stackoverflow.com/questions/58120990/how-to-resolve-the-error-on-react-native-start and re-run the above steps</p>

<h1>How to run the test automation project ?</h1>
<ul>
  <li><code>cd test_project</code></li>
  <li>Run <code>npm install</code></li>
  <li>Setup the WebdriverIO config file</li>
  <li>Run <code>npx wdio ./wdio.conf.js</code></li>
</ul>
