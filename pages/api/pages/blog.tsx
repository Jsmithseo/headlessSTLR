
import { NextApiRequest, NextApiResponse } from 'next';
import { getPageByUri } from '../../../lib/api';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const pageData = await getPageByUri('/');
    res.status(200).json(pageData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
