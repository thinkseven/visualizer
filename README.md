# Setup instruction of new component
- create new component inside "../visualizer/src/components"
    - if you do not want to check-in, create inside "ignore" folder
- for browser development
    - import new component in App.js. search the comment "IMPORT NEW COMPONENT HERE"
- once the component development completed
    - create new entry in webpack.config.js
# Add below code snippet to postman
```javascript
const template = `
<div id="root"></div>
<script src="file:///.../visualizer/build/visualizer.js">
</script>
`;

pm.visualizer.set(template, pm.response.json());
```
# changes in postman
Replace below code between lines 542787 and 542802
file /Applications/Postman.app/Contents/Resources/app/js/vendor-shared.js
```javascript
const data = `
    <!doctype html>
    <html lang="en">
    <head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <!-- <meta http-equiv="Content-Security-Policy" content="${CSP}"> -->
        <!--
        <style type="text/css">
            ${results.styles || E}
        </style>
        -->
    </head>
    <body>
        ${resource || E}
    </body>
    </html>
`;
```