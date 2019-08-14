## Note
Please download the file to read due to the wrong format in web browser

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Used following packages

npm install react-responsive --save
        determine the screen type( desktop, medium, mobile or small )
npm install react-bootstrap bootstrap
        setup the layout for mobile or desktop(desktop: one row two pictures; mobile: one row one picture)
npm install --save react-redux
npm install --save redux-thunk
        use for redux and thunk
npm install --save react-router
npm install --save react-router-dom
        use for router
npm install -g tslint typescript
        use for lint
npm install --save-dev jest
        use for test
    
## Components

Recipe component
        display the image (basing on browser resolution and screen 1x/2x/3x) and the title
RecipesContainer
        display all the Recipe components, the data is fetched in 'componentDidMount'
Redux folder
        contain the actions and reducers
Test folder
        test files are created under this folder.

## Run steps

clone code and run the following commands
npm i
npm start
npm test

## what has been done

Setup a mockup api
Styled the component
For different screen 1x/2x/3x and brower resolution, used different pictures. eg, for 1x screen, big resolution, will use desktop1x picture, for 2x screen, mobile resolution, will use mobile2x picture(When adjust the browser size, the layout will be changed according to the width and the used pictures will also be changed to use the correct one, like changing between desktop, mobile, medium and small)
Used a router
Used redux and thunk for mapping the data and process the data

## what can be improved

Adjust css style to do more accurately design
Add more precise mockup data or use graphql
Add support for processing /recipe/1 for details of each recipe
Add smooth image loading(https://arunmichaeldsouza.com/blog/loading-images-gracefully-with-react-image-appear) (or stream loading)
Add more testing code for components and redux parts

## lint
tslint -c tslint.json 'src/**/*.ts'

## Web site
http://andyzheng.s3-website-ap-southeast-2.amazonaws.com/
 
 
