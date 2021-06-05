const { DownloaderHelper } = require('node-downloader-helper');
const fse = require('fs-extra')
const puppeteer = require('puppeteer');
const imgFolder = `${__dirname}/images`;

(async () => {
    const browser = await puppeteer.launch({ "headless": true, args: ['--start-maximized'] });
    const page = await browser.newPage();
    const types = ['a', 'photo', 'vector', 'illustration'];
    // Parameters initialization
    const numPages = 3;
    const imageType = types[3];
    const search = encodeURI("Send file");
    let url, imgs, dl;

    await page.setViewport({width: 1920, height: 1080});

    // Clear files folder
    fse.emptyDir(imgFolder, err => {
        if (err) return console.error(err)
        console.log('Files folder cleared!')
    });

    for (let index = 0; index < numPages; index++) {
        url = "https://www.shutterstock.com/search?searchterm=" + search + "&sort=popular&image_type=" + imageType + "&search_source=base_landing_page&language=en&page=" + index;

        await page.goto(url);

        imgs = await page.$$eval('img.z_h_9d80b.z_h_2f2f0', imgs => imgs.map(img => img.getAttribute('src')));

        for (let index = 0; index < imgs.length; index++) {
            dl = new DownloaderHelper(imgs[index], imgFolder, {
                override: true
            });
            dl.start();
        }
        console.log("Scraped page" + index);
    }

    await browser.close();
})();