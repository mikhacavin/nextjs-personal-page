import connectMongodb from "@/utlis/connectMongo";
import simpleModel from "@/models/simpleModel";

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
 export default async function addTest(req, res) {
    try {
      console.log('CONNECTING TO MONGO');
      await connectMongodb();
      console.log('CONNECTED TO MONGO');
  
      console.log('CREATING DOCUMENT');
      const test = await simpleModel.create(req.body);
      console.log('CREATED DOCUMENT');
  
      res.json({ test });
    } catch (error) {
      console.log(error);
      res.json({ error });
    }
  }