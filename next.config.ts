// const securityHeaders = [
//   {
//     key: 'Content-Security-Policy',
//     value: `default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; frame-ancestors 'none'; base-uri 'self';`
//   },
//   {
//     key: 'X-Frame-Options',
//     value: 'DENY' 
//   },
//   {
//     key: 'X-Content-Type-Options',
//     value: 'nosniff'
//   },
//   {
//     key: 'Referrer-Policy',
//     value: 'strict-origin-when-cross-origin'
//   },
//   {
//     key: 'Permissions-Policy',
//     value: 'camera=(), microphone=(), geolocation=()' 
//   }
// ]

// module.exports = {
//   async headers() {
//     return [
//       {
//         source: '/(.*)',
//         headers: securityHeaders,
//       },
//     ]
//   },
// }
