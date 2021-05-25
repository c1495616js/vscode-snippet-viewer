import ProductCard from '@components/product/product-card';
import Button from '@components/ui/button';
import { useProductsQuery } from '@framework/product/get-all-products';
import { useRouter } from 'next/router';
import ProductFeedLoader from '@components/ui/loaders/product-feed-loader';

export const ProductGrid = () => {
  const { query } = useRouter();
  const {
    isFetching: isLoading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    data,
    error,
  } = useProductsQuery({ limit: 10, ...query });

  if (error) return <p>{error.message}</p>;
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-x-3 lg:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8'>
        {isLoading && !data?.pages?.length ? (
          <ProductFeedLoader limit={20} uniqueKey='search-product' />
        ) : (
          data?.pages?.map((page) => {
            return page?.data?.map((product) => (
              <ProductCard
                key={product.key}
                product={product}
                imgWidth={336}
                imgHeight={436}
                variant='grid'
              />
            ));
          })
        )}
      </div>
      <div className='text-center pt-8 xl:pt-14'>
        {hasNextPage && (
          <Button
            loading={loadingMore}
            disabled={loadingMore}
            onClick={() => fetchNextPage()}
            variant='slim'
          >
            Load More
          </Button>
        )}
      </div>
    </>
  );
};
