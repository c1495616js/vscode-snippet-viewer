import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

import { Category } from '@framework/types';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const snippetPath = path.resolve('public', 'api');
  const snippetsData = fs.readdirSync(snippetPath); // [xxx.json, yyy.json]
  const snippets: Category[] = snippetsData.map((sp) => {
    return {
      name: sp.split('.json')[0],
      path: sp,
    };
  });
  return res.status(200).json({ data: snippets });
};
