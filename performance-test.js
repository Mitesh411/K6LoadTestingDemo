import { sleep, group } from 'k6'
import http from 'k6/http'
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";



export const options = { vus: 1, 
                        duration: '1m' ,
                         insecureSkipTLSVerify: true
                       }

export default function main() {
  let response

  group('page_1 - https://isityou.gg/', function () {
    response = http.get('https://isityou.gg/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(45.7)
  })

  group('page_2 - https://isityou.gg/game-info', function () {
    response = http.get('https://isityou.gg/game-info', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(7.7)
  })

  group('page_3 - https://isityou.gg/faq', function () {
    response = http.get('https://isityou.gg/faq', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(4.2)
  })

  group('page_4 - https://isityou.gg/contact', function () {
    response = http.get('https://isityou.gg/contact', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(0.8)

    response = http.get('https://isityou.gg/captchaApi', {
      headers: {
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(11.3)

    response = http.post(
      'https://isityou.gg/contact',
      {
        firstName: '',
        lastName: '',
        emailId: '',
        category: '',
        captcha: '',
        commentInput: '',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://isityou.gg',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(0.8)

    response = http.get('https://isityou.gg/captchaApi', {
      headers: {
        'sec-ch-ua': '".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
  })
}
export function handleSummary(data) {
  return {
    "result.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}
