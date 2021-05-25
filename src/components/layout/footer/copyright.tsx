import Container from '@components/ui/container';
import { siteSettings } from '@settings/site-settings';
import { translation } from '@settings/translations/en';

interface CopyrightProps {
  payment?: {
    id: string | number;
    path?: string;
    name: string;
    image: string;
    width: number;
    height: number;
  }[];
}
const year = new Date().getFullYear();
const Copyright: React.FC<CopyrightProps> = () => {
  return (
    <div className='border-t border-gray-300 pt-5 pb-16 sm:pb-20 md:pb-5 mb-2 sm:mb-0'>
      <Container className='flex flex-col-reverse md:flex-row text-center md:justify-between'>
        <p className='text-body text-xs lg:text-sm leading-6'>
          {translation.copyright} &copy; {year}&nbsp;
          <a
            className='font-semibold text-gray-700 transition-colors duration-200 ease-in-out hover:text-body'
            href={siteSettings.author.websiteUrl}
          >
            {siteSettings.author.name}
          </a>
          &nbsp;
          {translation.copyright_reserved}
        </p>
      </Container>
    </div>
  );
};

export default Copyright;
