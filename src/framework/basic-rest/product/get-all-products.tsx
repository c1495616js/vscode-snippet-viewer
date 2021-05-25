import { QueryOptionsType, Product } from '@framework/types';
import { API_ENDPOINTS } from '@framework/utils/api-endpoints';
import http from '@framework/utils/http';
import { snippetMapping } from '@utils/snippetMapping';
import { useInfiniteQuery } from 'react-query';
type PaginatedProduct = {
  data: Product[];
  paginatorInfo: any;
};

const fetchProducts = async ({ queryKey }: any) => {
  const [_key, _params] = queryKey;
  const category = _params?.category;

  let categoryArr: any[] = [];
  if (category) {
    const cs = category.split(',');
    console.log('cs::', cs);
    categoryArr = await Promise.all(
      cs.map(async (c: string) => {
        let { data } = await http.get(`/${c}.json`);
        return snippetMapping(data);
      })
    );
    categoryArr = [].concat.apply([], categoryArr);
  }

  return {
    data: categoryArr,
    paginatorInfo: {
      nextPageUrl: '',
    },
  };
};

const useProductsQuery = (options: QueryOptionsType) => {
  return useInfiniteQuery<PaginatedProduct, Error>(
    [API_ENDPOINTS.PRODUCTS, options],
    fetchProducts,
    {
      getNextPageParam: ({ paginatorInfo }) => paginatorInfo.nextPageUrl,
    }
  );
};

export { useProductsQuery, fetchProducts };
