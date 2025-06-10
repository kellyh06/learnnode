import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";

const cacheDir = "./cache";
if (!fs.existsSync(cacheDir)) {
    fs.mkdirSync(cacheDir);
}

function cacheGet(name) {
    const filePath = path.join(cacheDir, `${name}.html`);
    if (fs.existsSync(filePath)) {
        return fs.readFileSync(filePath, "utf8");
    }
    return null;
}

function cacheSet(name, value) {
    const filePath = path.join(cacheDir, `${name}.html`);
    fs.writeFileSync(filePath, value, "utf8");
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let baseUrl = "https://www.toothpastefordinner.com";
let url = baseUrl + "";
for (let i = 0; i < 10; i++) {
    let name = url.replaceAll("/", " ").replaceAll(":", "");
    let data = cacheGet(name);


    if (!data) {
        console.log(`LIVE REQUEST`);
        await sleep(1000);
        try {
            const res = await axios.get(url);
            data = res.data;
            cacheSet(name, data);
        } catch (err) {
            console.error(`Failed to fetch: ${url}`, err.message);
            continue;
        }
    }

    const $ = cheerio.load(data);
    const img = $("center p img").first();  // koomiks on esimene <center><img>

    const src = img.attr("src");
    const alt = $('center h4').text();


    console.log(`Image: ${src}`);
    console.log(`Alt: ${alt}`);
    console.log("------------------------");
    url = $('center p a.btn').first().attr("href");
    console.log(url);
}
