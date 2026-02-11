
import http from 'http';
import { Buffer } from 'buffer';

const boundary = '--------------------------326071852086968770732434';
const postDataHead = `--${boundary}\r\nContent-Disposition: form-data; name="image"; filename="test.txt"\r\nContent-Type: text/plain\r\n\r\n`;
const fileContent = 'test data';
const postDataTail = `\r\n--${boundary}--\r\n`;

const req = http.request({
    hostname: 'localhost',
    port: 5000,
    path: '/api/upload',
    method: 'POST',
    headers: {
        'Content-Type': 'multipart/form-data; boundary=' + boundary,
        'Content-Length': Buffer.byteLength(postDataHead) + Buffer.byteLength(fileContent) + Buffer.byteLength(postDataTail),
    }
}, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

req.write(postDataHead);
req.write(fileContent);
req.write(postDataTail);
req.end();
