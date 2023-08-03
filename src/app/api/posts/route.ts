import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '@/lib/mongodb';

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    try {
        const client = await clientPromise;
        const db = client.db('sample_mflix');

        const movies = await db
            .collection('movies')
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();

        res.json(movies);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export default handler;
