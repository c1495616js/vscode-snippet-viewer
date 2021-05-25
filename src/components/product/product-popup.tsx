import React from 'react';
import { useRouter } from 'next/router';

import { ROUTES } from '@utils/routes';
import { useUI } from '@contexts/ui.context';
import Button from '@components/ui/button';

// import { getVariations } from '@framework/utils/get-variations';
import { translation } from '@settings/translations/en';

export default function ProductPopup() {
  const {
    modalData: { data },
    closeModal,
  } = useUI();
  const router = useRouter();

  //   const variations = getVariations(data.variations);
  const { slug, image, name, description } = data;

  // const isSelected = !isEmpty(variations)
  // 	? !isEmpty(attributes) &&
  // 	  Object.keys(variations).every((variation) =>
  // 			attributes.hasOwnProperty(variation)
  // 	  )
  // 	: true;

  function navigateToProductPage() {
    closeModal();
    router.push(`${ROUTES.PRODUCT}/${slug}`);
  }

  return (
    <div className='rounded-lg bg-white'>
      <div className='flex flex-col lg:flex-row w-full md:w-[650px] lg:w-[960px] mx-auto overflow-hidden'>
        <div className='flex-shrink-0 flex items-center justify-center w-full lg:w-430px max-h-430px lg:max-h-full overflow-hidden bg-gray-300'>
          <img
            src={
              image?.original ??
              '/assets/placeholder/products/product-thumbnail.svg'
            }
            alt={name}
            className='lg:object-cover lg:w-full lg:h-full'
          />
        </div>

        <div className='flex flex-col p-5 md:p-8 w-full'>
          <div className='pb-5'>
            <div
              className='mb-2 md:mb-2.5 block -mt-1.5'
              onClick={navigateToProductPage}
              role='button'
            >
              <h2 className='text-heading text-lg md:text-xl lg:text-2xl font-semibold hover:text-black'>
                {name}
              </h2>
            </div>
            <p className='text-sm leading-6 md:text-body md:leading-7'>
              {description}
            </p>
          </div>

          <div className='pt-2 md:pt-4'>
            <div className='flex items-center justify-between mb-4 space-x-3 sm:space-x-4'>
              {/* <Button
								onClick={addToCart}
								variant="flat"
								className={`w-full h-11 md:h-12 px-1.5 ${
									!isSelected && "bg-gray-400 hover:bg-gray-400"
								}`}
								disabled={!isSelected}
								loading={addToCartLoader}
							>
								{translation.add_to_cart_btn_text}
							</Button> */}
            </div>

            <Button
              onClick={navigateToProductPage}
              variant='flat'
              className='w-full h-11 md:h-12'
            >
              {translation.view_details_btn_text}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
