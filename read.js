
var AWS = require('aws-sdk');

exports.handler = async function(event, context) {
  console.log("ENVIRONMENT VARIABLES\n" + JSON.stringify(process.env, null, 2))
  console.info("EVENT\n" + JSON.stringify(event, null, 2))
  console.warn("Event not processed.")
  const transactionToUpload=event.Records["OldImage"];
  const bucket='awsbucketdisha';
  const fileName='demo.json';
  putObjectToS3(bucket,fileName,transactionToUpload);
}

function putObjectToS3(bucket, key, data){
    var s3 = new AWS.S3();
        var params = {
            Bucket : bucket,
            Key : key,
            Body : data
        }
        s3.putObject(params, function(err, data) {
          if (err) console.log(err, err.stack); // an error occurred
          else     console.log(data);           // successful response
        });
}
