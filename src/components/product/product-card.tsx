import cn from 'classnames';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import type { FC } from 'react';
import { useUI } from '@contexts/ui.context';
import { Product } from '@framework/types';

interface ProductProps {
  product: Product;
  className?: string;
  contactClassName?: string;
  imageContentClassName?: string;
  variant?: 'grid' | 'gridSlim' | 'list' | 'listSmall';
  imgWidth?: number | string;
  imgHeight?: number | string;
  imgLoading?: 'eager' | 'lazy';
}

const ProductCard: FC<ProductProps> = ({
  product,
  className = '',
  contactClassName = '',
  imageContentClassName = '',
  variant = 'list',
  // imgWidth = 340,
  // imgHeight = 440,
  // imgLoading,
}) => {
  const { openModal, setModalView, setModalData } = useUI();
  // const placeholderImage = `/assets/placeholder/products/product-${variant}.svg`;

  function handlePopupView() {
    setModalData({ data: product });
    setModalView('PRODUCT_VIEW');
    return openModal();
  }
  return (
    <div
      className={cn(
        'group box-border overflow-hidden flex rounded-md cursor-pointer',
        {
          'pr-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product':
            variant === 'grid',
          'pr-0 md:pb-1 flex-col items-start bg-white': variant === 'gridSlim',
          'items-center bg-transparent border border-gray-100 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:shadow-listProduct':
            variant === 'listSmall',
          'flex-row items-center transition-transform ease-linear bg-gray-200 pr-2 lg:pr-3 2xl:pr-4':
            variant === 'list',
        },
        className
      )}
      onClick={handlePopupView}
      role='button'
      title={product?.key}
    >
      <div
        className={cn(
          'flex',
          {
            'mb-3 md:mb-3.5': variant === 'grid',
            'mb-3 md:mb-3.5 pb-0': variant === 'gridSlim',
            'flex-shrink-0 w-32 sm:w-44 md:w-36 lg:w-44':
              variant === 'listSmall',
          },
          imageContentClassName
        )}
      >
        <SyntaxHighlighter language='typescript' style={docco}>
          {Array.isArray(product?.body)
            ? product?.body.join('\n')
            : product?.body}
        </SyntaxHighlighter>
      </div>
      <div
        className={cn(
          'w-full overflow-hidden',
          {
            'pl-0 lg:pl-2.5 xl:pl-4 pr-2.5 xl:pr-4': variant === 'grid',
            'pl-0': variant === 'gridSlim',
            'px-4 lg:px-5 2xl:px-4': variant === 'listSmall',
          },
          contactClassName
        )}
      >
        <h2
          className={cn('text-heading font-semibold truncate mb-1', {
            'text-sm md:text-base': variant === 'grid',
            'md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg':
              variant === 'gridSlim',
            'text-sm sm:text-base md:mb-1.5 pb-0': variant === 'listSmall',
            'text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5':
              variant === 'list',
          })}
        >
          {product?.key}
        </h2>
        {product?.prefix && (
          <p className='text-body text-xs lg:text-sm leading-normal xl:leading-relaxed max-w-[250px] truncate'>
            {product?.prefix}
          </p>
        )}
        <div
          className={`text-heading font-semibold text-sm sm:text-base mt-1.5 ${
            variant === 'grid'
              ? 'lg:text-lg lg:mt-2.5'
              : 'sm:text-xl md:text-base lg:text-xl md:mt-2.5 2xl:mt-3'
          }`}
        >
          {/* {price}
					{discount && (
						<del className="pl-2 sm:text-base font-normal text-gray-800">
							{basePrice}
						</del>
					)} */}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
