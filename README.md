# Map web component using Micro Front end

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## This project will create an angular web component for Map tiles.
# To use this Angular web component,
Run `ng run bundle`. This will generate a file named 'micro-fe.js' under the dist folder. 

# To use the bundle in react application,
1. Copy the js file from Angular and paste it under PUBLIC directory.
2. In index.js, add that js file path in the script tag.
3. In your component, add the map tag. 
4. Run the application.

## Eg React Code,

```javascript
import "./styles.css";

export const MapMainPage = () => {
    return (
        <div style={{marginTop: "20px"}}>
            <app-micro-fe mapinput={JSON.stringify({
                center: [13.070731751290195, 80.21947766527167],
                zoom: 13,
                minZoom: 0,
                maxZoom: 15
                })}
                pointDetails={JSON.stringify([
                    {
                      point: [13.053864, 80.170521],
                      title: "Job Survey 1",
                      description: "A general description 1"
                    },
                    {
                      point: [13.057762, 80.218938],
                      title: "Job Survey 2",
                      description: "A general description 2"
                    },
                    {
                      point: [13.081928, 80.205066],
                      title: "Job Survey 3",
                      description: "A general description 3"
                    },
                    {
                      point: [13.059841, 80.231342],
                      title: "Job Survey 4",
                      description: "A general description 4"
                    },
                    {
                      point: [13.082838, 80.139977],
                      title: "Job Survey 5",
                      description: "A general description 5"
                    }
                  ])
                }
            ></app-micro-fe>
            <hr />
        </div>
    )
}
```
You can see that attribute values are converted to string as Html attributes supports only string type.
