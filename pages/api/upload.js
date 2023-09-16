// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJkNDQ4ZTBiYS1kY2FkLTQ1Y2YtYTI0MS1lZmJhMzkzZmVjZGEiLCJlbWFpbCI6IndheWFuc2FkMjAwNEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYTFhYmE4NmEyYzM0YjA1MzNmNTIiLCJzY29wZWRLZXlTZWNyZXQiOiI0NjI3ZTkzZTQ4NmFjMDQ2M2ZjM2YyMjI5OWFlZjM5MGQyYjI1YWVhMzljNGY2NTcxZjQ5ZTkyMjA5ZDc1ZDdmIiwiaWF0IjoxNjk0ODg3ODU3fQ.PwdGTNmNu9CN-HHoY0wTZNjdY2gB06alxXzf0ZTTs00'


export default function handler(req, res) {

  const pinFileToIPFS = async () => {
      const formData = new FormData();
      const src = process.cwd() +"/public/img/user_follow.png";
      
      const file = fs.createReadStream(src)
      formData.append('file', file)
      
      const pinataMetadata = JSON.stringify({
        name: 'user_follow.png',
      });
      formData.append('pinataMetadata', pinataMetadata);
      
      const pinataOptions = JSON.stringify({
        cidVersion: 0,
      })
      formData.append('pinataOptions', pinataOptions);

      try{
        const ress = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
          maxBodyLength: "Infinity",
          headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            'Authorization': `Bearer ${JWT}`
          }
        });
        res.status(200).json(ress.data)
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
  }

  //pinFileToIPFS()
  //res.status(200).json({ name: 'John Doe' })
}
