# Web scraper

Web scraper is a Node.js library for download pictures from different sites.

## Installation

Clone and install dependencies

```bash
git clone https://github.com/rubinchyk/web-scraper.git
npm install 
(*yarn)
```

## Usage

Curently supporting automatic downloading from Shutterstock.
Need to update configuration parameters: 

```javascript
// Number of pages for web scraping images
 const numPages = 3;
 // Type of images which will be searched in site 0 - all, 1 - photos, 2 - vector, 3 - illustrations
const imageType = types[3];
// Search query
const search = encodeURI("Contacts");
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)