//. app.js
var sgMail = require( '@sendgrid/mail' );

var API_KEY = 'API_KEY' in process.env ? process.env.API_KEY : '';
if( API_KEY ){
  sgMail.setApiKey( API_KEY );

  var msg = {
    to: 'receiver@test.net',
    from: 'System Admin<sender@test.com>',  //. ここは SendGrid アカウントのメールアドレス
    'reply-to': 'resply@test.me',
    subject: 'テストメール',
    text: 'ハロー'
  };

  sgMail.send( msg ).then( function( res ){
    console.log( res );
  }).catch( function( e ){
    console.log( e );
  });
}else{
  console.log( 'Usage: $ API_KEY=XXXXXX node app' );
}
