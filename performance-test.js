// Creator: k6 Browser Recorder 0.6.2

import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = { vus: 5, duration: '1m' }

export default function main() {
  let response

  group('page_1 - https://letcode.in/', function () {
    response = http.get('https://letcode.in/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
  })

  // Automatically added sleep
  sleep(1)
}
