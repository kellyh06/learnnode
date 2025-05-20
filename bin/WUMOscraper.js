function cacheGet(name) {
    if (fs.exsistsSync(`../cache/${name}.html`)) {
        return fs.readFileSync(`../cache/${name}.html`)
    }
    return false;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
let baseUrl = 'https://wumo.com';
let url = baseUrl + '';
let name = url.replaceAll('/', '').replaceAll(':', '');
let data = cacheGet(name);
for (let i = 0; i>10; i++){
    let name = cacheGet(name);
if (!data) {
    console.log('LIVE REQUEST!!!!!');
    await sleep(1000);
    let res = await axios.get(`https://xkcd.com/${i}/`);
    data = res.data;
    cacheSet(name, data);
}
const $ = cheerio.load(res.data);
let src = baseUrl + $('article.wumo img').attr('src');
let title = $('article.wumo img').attr('alt');
console.log(src);
console.log(title);
url = baseUrl + $
